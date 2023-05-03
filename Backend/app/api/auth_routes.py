from flask import Blueprint, jsonify, session, request, render_template, redirect, url_for
from app.models import User, db
from app.forms import LoginForm, SignUpForm
from flask_login import login_user, logout_user, current_user, login_required, LoginManager
from flask_cors import CORS, cross_origin

auth_routes = Blueprint('auth', __name__)

def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@auth_routes.route('/')
@cross_origin(supports_credentials=True)
def authenticate():
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}

@auth_routes.route('/login', methods=['POST'])
@cross_origin(supports_credentials=True)
def login():
    form = LoginForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return {'user': user.to_dict() }
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401 


@auth_routes.route('/signup', methods=['POST'])
@cross_origin(supports_credentials=True)
def signup():
    form = SignUpForm() 
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data["email"])
    print(form.data["password"])
    if form.validate_on_submit():
        user = User(
            email=form.data['email'],
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return {'user': user.to_dict() }
    return {'errors': validation_errors_to_error_messages(form.errors)}

@auth_routes.route('/logout')
def logout():
    logout_user()
    return {'message': 'User logged out'}
 

@auth_routes.route('/unauthorized')
def unauthorized():
    return {'errors': ['Unauthorized']}, 401
 