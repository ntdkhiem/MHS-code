from flask import Blueprint

bp = Blueprint('auth', __name__, static_folder="../static/admin_static")

from app.auth import routes
