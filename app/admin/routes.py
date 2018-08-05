from datetime import datetime
from flask import render_template, flash, redirect, url_for, request, g, jsonify, current_app
from flask_login import current_user, login_required, logout_user, login_user
from app import db
from app.auth.email import send_confirm_email
from app.admin.forms import LoginForm, RegisterForm
from app.models import User
from app.admin import bp
from werkzeug.urls import url_parse

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
        user.image = user.avatar(128)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash("Success, please check your email inbox for email confirmation", "alert-success")
        send_confirm_email(user)
        return redirect(url_for('admin.login'))
        # headers = {'content-type': 'application/json'}
        # user = {
        #     'first_name': form.first_name.data,
        #     'last_name': form.last_name.data,
        #     'grade': form.grade.data,
        #     'track': form.track.data,
        #     'homeroom': form.homeroom.data,
        #     'email': form.email.data,
        #     'password': form.password.data,
        #     'image': form.profile_image.data
        # }
        # res = requests.post(url_for('api.create_user', _external=True), json=user,headers=headers)
        # if res.status_code == 201:
        #     send_confirm_email(user)
        #     flash("Success, please check your email inbox for email confirmation", "alert-success")
        #     return redirect(url_for('admin.login'))
        # flash('Did not complete registration, please try again', 'alert-danger')
    return render_template('admin/register.html', form=form)

@bp.route('/dashboard')
@login_required
def dashboard():
    return "<h1>Success!!</h1>"

@bp.route('/logout')
def logout():
    if current_user.is_authenticated:
        logout_user()
        flash('Successfully log out', 'alert-success')
        return redirect(url_for('admin.login'))
    else:
        abort(404)