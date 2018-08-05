from flask import render_template, redirect, url_for, flash, request,abort
from werkzeug.urls import url_parse
from flask_login import current_user
# from flask_babel import _
from app import db
from app.auth import bp
from app.admin.forms import ResetPasswordRequestForm, ResetPasswordForm
from app.models import User
from app.auth.email import send_password_reset_email


@bp.route('/reset', methods=['GET','POST'])
def reset():
    if current_user.is_authenticated:
        return redirect(url_for('admin.dashboard'))
    form = ResetPasswordRequestForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user:
            send_password_reset_email(user)
            flash('Check your email for the instructions to reset your password', 'alert-success')
            return redirect(url_for('admin.login'))
        else:
            flash(u'Invalid email please try again', 'alert-danger')
    return render_template('admin/auth/forgot_password.html', form=form)



@bp.route('/reset_password/<token>', methods=['GET', 'POST'])
def reset_password(token):
    if current_user.is_authenticated:
        return redirect(url_for('admin.dashboard'))
    user = User.verify_reset_password_token(token)
    if user == None:
        abort(404)
    form = ResetPasswordForm()
    if form.validate_on_submit():
        user.set_password(form.password.data)
        db.session.commit()
        flash('Your password has been reset.' 'alert-success')
        return redirect(url_for('admin.login'))
    return render_template('admin/auth/reset_password.html', form=form, token=token)

@bp.route('/confirm/<token>')
def confirm_email(token):
    if current_user.is_authenticated:
        return redirect(url_for('admin.dashboard'))
    user = User.verify_confirm_token(token)
    if not user:
        abort(404)
    user.email_confirmation = True
    db.session.commit()
    flash('Success confirmed your email', 'alert-success')
    return redirect(url_for('admin.login'))

