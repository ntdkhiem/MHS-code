import base64
from datetime import datetime, timedelta
from hashlib import sha224
import os
from time import time
from flask import current_app, url_for
from flask_login import UserMixin
from flask_sqlalchemy import BaseQuery
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
from app import db, login
from itsdangerous import BadSignature, URLSafeTimedSerializer

class QueryWithSoftDelete(BaseQuery):
    def __new__(cls, *args, **kwargs):
        obj = super(QueryWithSoftDelete, cls).__new__(cls)
        with_deleted = kwargs.pop('_with_deleted', False)
        if len(args) > 0:
            super(QueryWithSoftDelete, obj).__init__(*args, **kwargs)
            return obj.filter_by(deleted=False) if not with_deleted else obj
        return obj

    def __init__(self, *args, **kwargs):
        pass

    def with_deleted(self):
        return self.__class__(db.class_mapper(self._mapper_zero().class_),
                              session=db.session(), _with_deleted=True)

    def _get(self, *args, **kwargs):
        return super(QueryWithSoftDelete, self).get(*args, **kwargs)

    def get(self, *args, **kwargs):
        obj = self.with_deleted()._get(*args, **kwargs)
        return obj if obj is None or self.with_deleted or not obj.deleted else None

class PaginatedAPIMixin(object):
    @staticmethod
    def to_collection_dict(query, page, per_page, endpoint, **kwargs):
        resources = query.paginate(page, per_page, False)
        data = {
            'items': [item.to_dict() for item in resources.items],
            '_meta': {
                'page': page,
                'per_page': per_page,
                'total_pages': resources.pages,
                'total_items': resources.total
            },
            '_links': {
                'self': url_for(endpoint, page=page, per_page=per_page,
                                **kwargs),
                'next': url_for(endpoint, page=page + 1, per_page=per_page,
                                **kwargs) if resources.has_next else None,
                'prev': url_for(endpoint, page=page - 1, per_page=per_page,
                                **kwargs) if resources.has_prev else None
            }
        }
        return data




class User(UserMixin, db.Model, PaginatedAPIMixin):
    __tablename__ = "users"
    __table_args__ = {'schema':'officers'}

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(35), index=True)
    last_name = db.Column(db.String(35), index=True)
    grade = db.Column(db.Integer, index=True)
    track = db.Column(db.String)
    homeroom = db.Column(db.String(6))
    email = db.Column(db.String(120), index=True, unique=True)
    role = db.Column(db.String(17), index=True)
    password_hash = db.Column(db.String(128))
    image = db.Column(db.String)
    email_confirmation = db.Column(db.Boolean, default=False)
    join_at = db.Column(db.DateTime, default=datetime.utcnow)
    last_seen = db.Column(db.DateTime, default=datetime.utcnow)
    token = db.Column(db.String(32), index=True, unique=True)
    token_expiration = db.Column(db.DateTime)

    def __repr__(self):
        return '<User {}>'.format(self.first_name)

    def set_image(self, image):
        img_path = os.path.join('app', 'gallery', 'users')
        if (image):
            filename = secure_filename(sha224(image.filename[:image.filename.rfind('.')].encode('utf-8')).hexdigest() + '.' + image.filename[image.filename.rfind('.')+1:])
            path = os.path.join(img_path, filename)
            image.save(path)
            self.image = filename 
        else:
            guest_img_path = os.path.join('app', 'gallery', 'users', 'guest.png')
            self.image= 'guest.png'

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


    def get_reset_password_token(self, ts):
        return ts.dumps(self.email, salt='recover-key')

    def get_confirm_token(self, ts):
        return ts.dumps(self.email, salt='confirm-key')
        

    @staticmethod
    def verify_reset_password_token(token):
        try:
            email = URLSafeTimedSerializer(current_app.config['SECRET_KEY']).loads(token, salt='recover-key', max_age=86400)
        except BadSignature:
            return None
        return User.query.filter_by(email=email).first()
    
    @staticmethod
    def verify_confirm_token(token):
        try:
            email = URLSafeTimedSerializer(current_app.config['SECRET_KEY']).loads(token, salt='confirm-key', max_age=86400)
        except BadSignature:
            return None
        return User.query.filter_by(email=email).first()


    def to_dict(self, include_email=True):
        data = {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'grade': self.grade,
            'track': self.track,
            'homeroom': self.homeroom,
            'role': self.role,
            'join_at': self.join_at,
            'last_seen': self.last_seen.isoformat() + 'Z',
            '_links': {
                'self': url_for('api.get_user', id=self.id),
                'image': self.image
            }
        }
        if include_email:
            data['email'] = self.email
        return data

    def from_dict(self, data, new_user=False):
        for field in ['first_name','last_name','grade','track','homeroom', 'email', 'password']:
            if field in data:
                setattr(self, field, data[field])
        if new_user and 'password' in data:
            self.set_password(data['password'])

    def get_token(self, expires_in=3600):
        now = datetime.utcnow()
        if self.token and self.token_expiration > now + timedelta(seconds=60):
            return self.token
        self.token = base64.b64encode(os.urandom(24)).decode('utf-8')
        self.token_expiration = now + timedelta(seconds=expires_in)
        db.session.add(self)
        return self.token

    def revoke_token(self):
        self.token_expiration = datetime.utcnow() - timedelta(seconds=1)

    @staticmethod
    def check_token(token):
        user = User.query.filter_by(token=token).first()
        if user is None or user.token_expiration < datetime.utcnow():
            return None
        return user

class Gallery(db.Model, PaginatedAPIMixin):
    __tablename__ = "Gallery"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, index=True)
    pic_url = db.Column(db.String, index=True)
    timestamp = db.Column(db.DateTime, index=True,  default=datetime.utcnow)
    deleted = db.Column(db.Boolean(), default=False)

    query_class = QueryWithSoftDelete

    def to_dict(self):
        data = {
            'id': self.id,
            'title': self.title,
            'url': self.pic_url,
            'timestamp': self.timestamp.isoformat() + 'Z',
            '_links': {
                'self': url_for('api.get_picture', id=self.id)
            }
        }
        return data

    def set_picture(self, file):
        img_path = os.path.join('app', 'gallery', 'gallery')
        if file: 
            title = sha224(file.filename[:file.filename.rfind('.')].encode('utf-8')).hexdigest()
            filename = secure_filename( title + '.' + file.filename[file.filename.rfind('.')+1:])
            path = os.path.join(img_path, filename)
            file.save(path)
            self.title = title
            self.pic_url = filename
    
    def change_title(self, new_title):
        self.title = new_title

@login.user_loader
def load_user(id):
    return User.query.get(int(id))