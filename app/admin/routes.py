from datetime import datetime
from flask import render_template, flash, redirect, url_for, request, g, jsonify, current_app
from flask_login import current_user, login_required, logout_user, login_user
from app import db
from app.auth.email import send_confirm_email
from app.admin.forms import LoginForm, RegisterForm
from app.models import User
from app.api.users import get_users, get_members
from app.api.google_calendar import get_events
from app.api.gallery import get_gallery
from app.admin import bp
from werkzeug.urls import url_parse

import os
import json 

@bp.before_app_request
def before_request():
    if current_user.is_authenticated:
        current_user.last_seen = datetime.utcnow()
        db.session.commit()

@bp.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('admin.dashboard'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password', 'alert-danger')
            return redirect(url_for('admin.login'))
        login_user(user, remember=form.remember.data)
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('admin.dashboard') 
        return redirect(next_page)
    return render_template('admin/login.html',form=form)

@bp.route('/register', methods=['GET','POST'])
def register():
    form = RegisterForm()
    if current_user.is_authenticated:
        return redirect(url_for('admin.dashboard'))
    if form.validate_on_submit():
        user = User(first_name=form.first_name.data, last_name=form.last_name.data, grade=form.grade.data, track=form.track.data, homeroom=form.homeroom.data, email=form.email.data)
        user.set_image(form.profile_image.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash("Success, please check your email inbox for email confirmation", "alert-success")
        send_confirm_email(user)
        return redirect(url_for('admin.login'))
    return render_template('admin/register.html', form=form)

@bp.route('/dashboard')
# @login_required
def dashboard():
    officers = []
    members = []
    events = []
    ctx = current_app.test_request_context('/?per_page=999')
    ctx.push()
    officers = json.loads(get_users().data.decode('utf-8'))
    ctx.pop()
    members = json.loads(get_members().data.decode('utf-8'))
    if get_events():
        events = json.loads(get_events().data.decode('utf-8'))
    return render_template('admin/dashboard/dashboard.html', officers=officers, members=members, events=events)

@bp.route('/gallery')
def gallery():
    data = []
    if get_gallery():
        page = request.args.get('page', 1)
        ctx = current_app.test_request_context('/?page={}&per_page=16'.format(page))
        ctx.push()
        data = json.loads(get_gallery().data.decode('utf-8'))
        ctx.pop()
    return render_template('admin/dashboard/gallery.html', gallery=data)

@bp.route('/logout')
def logout():
    if current_user.is_authenticated:
        logout_user()
        flash('Successfully log out', 'alert-success')
        return redirect(url_for('admin.login'))
    else:
        abort(404)