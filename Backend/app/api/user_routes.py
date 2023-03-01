from flask import Blueprint, jsonify, session, request
from app.models import User, db 

user_routes = Blueprint('users', __name__)

@user_routes.route('/', methods=['POST'])
def create_user():
    try:
        user = User(
            email=request.json['email'],
            password=request.json['password'])
            
        db.session.add(user)
        db.session.commit()
        return {'user': user.to_dict()}, 201
    except Exception as error:
        return {'error': 'User not created'}, 400

@user_routes.route('/<int:id>')
def get_user(id):
    try:
        user = User.query.get(id)
        return {'user': user.to_dict()}
    except Exception as error:
        return {'error': 'User not found'}, 404

@user_routes.route('/<int:id>', methods=['DELETE'])
def delete_user(id):
    try:
        if user:
            user = User.query.get(id)
            db.session.delete(user)
            db.session.commit()
            return {'message': 'User deleted'}
    except Exception as error:
        return {'error': 'User could not be deleted'}, 404
