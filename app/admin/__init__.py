from flask import Blueprint

bp = Blueprint('admin', __name__, static_folder="../static/admin_static")

from app.admin import forms, routes