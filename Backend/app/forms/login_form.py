from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, HiddenField
from wtforms.validators import DataRequired, Email, EqualTo, Length, ValidationError
from app.models import User

def user_exists(form, field):
    email = field.data
    user = User.query.filter_by(email=email).first()
    if not user:
        raise ValidationError('Email not found.')
    
def check_password(form, field):
    password = field.data
    user = User.query.filter_by(email=form.email.data).first()
    if not user:
        raise ValidationError('Please try again.')
    if not user.check_password(password):
        raise ValidationError('Password is incorrect.')

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), user_exists])
    password = PasswordField('Password', validators=[DataRequired(), check_password])
