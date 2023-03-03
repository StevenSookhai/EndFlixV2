from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, EqualTo, Length, ValidationError
from app.models import User

def email_exists(form, field):
    print("FORM DATA: ", form.data)

    email = field.data
    print(email)
    user = User.query.filter(User.email == email).first()
    print(user)
    if user:
        raise ValidationError('Email already registered.')

class SignUpForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), Email(), email_exists])
    password = PasswordField('password', validators=[DataRequired(), Length(min=6)])
    submit = SubmitField('SignUP')

 