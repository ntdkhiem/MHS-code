from flask_wtf import FlaskForm
from wtforms import StringField 
from wtforms.validators import InputRequired, Length 
from app.models import Gallery

class EditGalleryTitle(FlaskForm):
    title = StringField('Email', validators=[InputRequired(), Length(max=255)])