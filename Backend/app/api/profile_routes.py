from flask import Blueprint, jsonify, session, request
from app.models import db, Profile
from flask_login import login_required

profile_routes = Blueprint('profiles', __name__)

@profile_routes.route('/', methods=['POST'])
# @login_required
def create_profile():
    try:
        if request.method == 'POST':
            profile = Profile(
                name=request.json['name'],
                user_id=request.json['user_id'])
            db.session.add(profile)
            db.session.commit()
            return {'profile': profile.to_dict()}, 201
    except Exception as error:
        return {'error': f'Profile not created ${error}'}, 400

@profile_routes.route('/<int:id>', methods=['PATCH', 'GET'])
@login_required
def update_profile(id):
    try:
        if request.method == 'GET':
            profile = Profile.query.get(id)
            return {'profile': profile.to_dict()}, 201
        else:
            profile = Profile.query.get(id)
            profile.name = request.json['name']
            db.session.commit()
            return {'profile': profile.to_dict()}, 201
    except Exception as error:
        if request.method == 'GET':
            return {'error': 'Profile not found'}, 400
        else:
            return {'error': 'Profile not updated'}, 400

@profile_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_profile(id):
    try:
        profile = Profile.query.get(id)
        db.session.delete(profile)
        db.session.commit()
        return {'message': 'Profile deleted'}, 201
    except Exception as error:
        return {'error': 'Profile not deleted'}, 400