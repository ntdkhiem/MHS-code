from flask import Blueprint, send_from_directory

bp = Blueprint('content', __name__)

@bp.route('/<image_url>')
def main(image_url):
    return send_from_directory('gallery\\gallery', image_url)

@bp.route('/user/<image_url>/')
def send_image(image_url):
    return send_from_directory('gallery\\users', image_url)