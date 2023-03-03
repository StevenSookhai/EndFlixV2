from flask_wtf import FlaskForm 
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, EqualTo, Length, ValidationError
from app.models import Profile 


def ProfileForm(FlaskForm):
     name = StringField('name', validators=[DataRequired()])
     submit = SubmitField('Submit')
