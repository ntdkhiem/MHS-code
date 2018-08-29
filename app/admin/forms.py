from flask_wtf import FlaskForm
from flask_wtf.file import FileAllowed
from wtforms import StringField, PasswordField, BooleanField, IntegerField, SelectField, FileField
from wtforms.validators import InputRequired, Email, Length, NumberRange, EqualTo, ValidationError
from app.models import User

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[InputRequired(), Email()])
    password = PasswordField('Password',validators=[InputRequired()])
    remember = BooleanField('Remember me')

class RegisterForm(FlaskForm):
    first_name = StringField('First Name', validators=[InputRequired(),Length(min=4,max=35)])
    last_name = StringField('Last Name', validators=[InputRequired(),Length(min=4,max=35)])
    grade = IntegerField('Level', validators=[ NumberRange(min=9,max=12)])
    email = StringField('Email', validators=[InputRequired(),Email()])
    password = PasswordField('Password', validators=[InputRequired(),Length(min=10,max=128), EqualTo('confirm', message="Passwords must match")])
    confirm = PasswordField('Repeat Password')
    track = SelectField('Track', choices=[('Computer Security','Computer Security'),('Hardware','Hardware'),('Graphics','Graphics'),('Algorithms','Algorithms')])
    homeroom = StringField('Homeroom', validators=[InputRequired(),Length(min=4,max=5)])
    profile_image = FileField('Profile Image')

    def validate_email(self,email):
        user = User.query.filter_by(email=email.data).first()
        if user is not None:
            raise ValidationError('Please use a different email address')

class ResetPasswordRequestForm(FlaskForm):
    email = StringField('Email', validators=[InputRequired(), Email()])

class ResetPasswordForm(FlaskForm):
    password = PasswordField('Password', validators=[InputRequired(), Length(min=10,max=128), EqualTo('confirm', message="Passwords must match")])
    confirm = PasswordField('Repeat Password')

