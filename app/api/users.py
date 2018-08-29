from flask import jsonify, request, url_for
from app import db
from app.models import User
from app.api import bp
from app.api.auth import token_auth
from app.api.errors import bad_request

import gspread
from oauth2client.service_account import ServiceAccountCredentials
from datetime import datetime

@bp.route('/users/<int:id>', methods=['GET'])
@token_auth.login_required
def get_user(id):
    return jsonify(User.query.get_or_404(id).to_dict())


@bp.route('/users', methods=['GET'])
def get_users():
    page = request.args.get('page', 1, type=int)
    per_page = min(request.args.get('per_page', 3, type=int), 100)
    data = User.to_collection_dict(User.query, page, per_page, 'api.get_users')
    if request.args.get('html'):
        divs = []
        for item in data['items']:
            divs.append('''
                    <div class="col-md-3 col-sm-6 mb-md-0 mb-5 mr-5">
                        <div class="avatar mx-auto">
                            <img src="{image}" style="width:255px !important; height: 255px !important" alt="{alt}">
                        </div>
                        <h4 class="font-weight-bold dark-grey-text my-4">{name}</h4>
                        <h6 class="text-uppercase grey-text mb-3"><strong>{role}</strong></h6>
                    </div>      
            '''.format(image=url_for('content.send_image', image_url=item['_links']['image']), alt=item['first_name'], name=item['first_name'] + ' ' + item['last_name'], role=item['role']))
        payload = {
            "_links": {
                "next": data['_links']['next'],
                "prev": data['_links']['prev'],
                "self": data['_links']['self']
            },
            "_meta": {
                "page": data['_meta']['page'],
                "per_page": data['_meta']['per_page'],
                "total_items": data['_meta']['total_items'],
                "total_pages": data['_meta']['total_pages']
            },
            'divs': divs
        }
        return jsonify(payload)
    return jsonify(data)

@bp.route('/members', methods=['GET'])
def get_members():
    scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']
    creds = ServiceAccountCredentials.from_json_keyfile_name('client_secret.json', scope)
    client = gspread.authorize(creds)
    sheet = client.open("Computer Club Application (Responses)").worksheet("2019")
    records = sheet.get_all_records()
    for record in records:
        record['Time Stamp'] = datetime.strptime(record['Time Stamp'], '%m/%d/%Y %X').isoformat() + 'Z'
    return jsonify(records)


# @bp.route('/users', methods=['POST'])
# def create_user():
#     data = request.get_json() or {}
#     if 'first_name' not in data or 'last_name' not in data or 'email' not in data or 'password' not in data:
#         return bad_request('must include email, password, first_name, last_name fields')
#     if User.query.filter_by(email=data['email']).first():
#         return bad_request('please use a different email')
#     user = User()
#     user.from_dict(data, new_user=True)
#     db.session.add(user)
#     db.session.commit()
#     response = jsonify(user.to_dict())
#     response.status_code = 201
#     response.headers['Location'] = url_for('api.get_user', id=user.id)
#     return response


# @bp.route('/users/<int:id>', methods=['PUT'])
# @token_auth.login_required
# def update_user(id):
#     user = User.query.get_or_404(id)
#     data = request.get_json() or {}
#     if 'email' in data and data['email'] != user.email and \
#             User.query.filter_by(email=data['email']).first():
#         return bad_request('please use a different email address')
#     user.from_dict(data, new_user=False)
#     db.session.commit()
#     return jsonify(user.to_dict())
