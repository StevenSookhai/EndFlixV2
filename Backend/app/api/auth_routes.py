from flask import Blueprint, jsonify, session, request, render_template, redirect, url_for
from app.models import User, db
from app.forms import LoginForm, SignUpForm
from flask_login import login_user, logout_user, current_user, login_required, LoginManager
 

auth_routes = Blueprint('auth', __name__)

def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@auth_routes.route('/')
def authenticate():
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': 'Unauthorized'}, 401

@auth_routes.route('/login', methods=['POST', 'GET'])
def login():
    if current_user.is_authenticated:
        return current_user.to_dict()
    form = LoginForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User.query.filter(User.email == form.data['email']).first()
        if not user:
            return {'errors': {"email: Email is invalid"}}, 401
        if not user.check_password(form.data['password']):
            return {'errors': {"password: Password is invalid"}}, 401
        login_user(user)
        return user.to_dict()
        # return redirect(url_for('auth.secrets'))
    return {'errors': validation_errors_to_error_messages(form.errors)}
    # return render_template("login.html", form=form) 


@auth_routes.route('/signup', methods=['POST' , 'GET'])
def signup():
    form = SignUpForm() 
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            email=form.data['email'],
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
        # return redirect(url_for('auth.login'))
    # return {'errors': 'Unauthorized'}, 401
    # return render_template("register.html", form=form)
    return {'errors': validation_errors_to_error_messages(form.errors)}

@auth_routes.route('/logout')
def logout():
    logout_user()
    return {'message': 'User logged out'}
 

@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
 
#Testing auth routes
# @auth_routes.route('/secrets')
# @login_required
# def secrets():
#     return render_template("secrets.html")


 