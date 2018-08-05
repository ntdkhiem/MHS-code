from itsdangerous import URLSafeTimedSerializer
from flask import render_template, current_app, url_for
from app.email import send_email

def send_password_reset_email(user):
    ts = URLSafeTimedSerializer(current_app.config['SECRET_KEY'])
    token = user.get_reset_password_token(ts)
    recover_url = url_for('auth.reset_password', token=token, _external=True)
    send_email('[MHS] Reset Your Password',
               sender=current_app.config['ADMINS'][0],
               recipients=[user.email],
               text_body=render_template('admin/email/reset_password.txt',
                                         user=user, recover=recover_url),
               html_body=render_template('admin/email/reset_password.html',
                                         user=user, recover=recover_url))

def send_confirm_email(user):
    ts = URLSafeTimedSerializer(current_app.config['SECRET_KEY'])
    token = user.get_confirm_token(ts)
    print ("token >>",token)
    confirm_url = url_for('auth.confirm_email', token=token, _external=True)
    print ("confirm url >> ",confirm_url )
    send_email('[MHS] Confirm Your Email',
                sender=current_app.config['ADMINS'][0],
                recipients=[user.email],
                text_body=render_template('admin/email/confirm_email.txt',user=user, confirm=confirm_url),
                html_body=render_template('admin/email/confirm_email.html',user=user, confirm=confirm_url))
