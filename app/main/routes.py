from datetime import datetime
from flask import render_template, redirect, url_for, request,jsonify, current_app
from flask_login import current_user, login_required
from app.api.google_calendar import get_events
import json
import requests
# from flask_babel import _, get_locale
# from guess_language import guess_language
from app import db
# from app.main.forms import EditProfileForm, PostForm, SearchForm, MessageForm
from app.models import User
# from app.translate import translate
from app.main import bp
from app.api.users import get_users
from app.api.gallery import get_gallery


@bp.context_processor
def inject_gallery():
    ctx = current_app.test_request_context('/?page=1&per_page=9')
    ctx.push()
    data = json.loads(get_gallery().data.decode('utf-8'))
    ctx.pop()
    return dict(gallery=data)

@bp.route('/', methods=['GET'])
def index():
    if get_events() != '':
        events = json.loads(get_events(html=True).data.decode('utf-8'))
    else:
        events = None
    return render_template('main/index.html', events = events)

@bp.route('/about', methods=['GET'])
def about():
    # da = get_users()
    data = json.loads(get_users().data)
    return render_template('main/about.html', data=data)

@bp.route('/gallery', methods=['GET'])
def gallery():
    data = json.loads(get_gallery().data.decode('utf-8'))
    return render_template('main/gallery.html', data=data)

@bp.route('/tracks/', defaults={'track': None} , methods=['GET'])
@bp.route('/tracks/<string:track>', methods=['GET'])
def tracks(track):
    return render_template('main/tracks.html')

@bp.route('/calendar', methods=['GET'])
def calendar():
    return render_template('main/calendar.html')
