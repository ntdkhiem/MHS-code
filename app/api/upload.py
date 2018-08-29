from flask import request, jsonify
from werkzeug.utils import secure_filename

from app import db
from app.api import bp
from app.models import Gallery
from app import csrf

@bp.route('/upload', methods=['POST'])
@csrf.exempt
def upload():
    file = request.files.get('file')
    picture = Gallery()
    picture.set_picture(file)
    db.session.add(picture)
    db.session.commit()
    response = jsonify(picture.to_dict())
    response.status_code = 201
    return response
