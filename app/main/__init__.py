from flask import Blueprint

bp = Blueprint('main', __name__, static_folder="../static/main_static")

from app.main import routes
