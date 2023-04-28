from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, EqualTo, Length, ValidationError
from app.models import User
import re


import re


def email_exists(form, field):

    email = field.data
    if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        raise ValidationError('Invalid email format.')

    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email already registered.')


class SignUpForm(FlaskForm):
    email = StringField('email', validators=[
                        DataRequired(), Email(), email_exists])
    password = PasswordField('password', validators=[
                             DataRequired(), Length(min=6)])
    submit = SubmitField('SignUP')
 