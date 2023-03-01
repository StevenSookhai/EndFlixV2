from flask import Blueprint, jsonify, session, request
from app.models import db, List, Profile

list_routes = Blueprint('lists', __name__)

@list_routes.route('/', methods=['POST', 'GET'])
def create_list():
    try:
        if request.method == 'GET':
            list = List.query.filter(List.profile_id == request.json['profile_id']).first()
            return {'list': list.to_dict()}, 201
        else:
            list = List(
                name=request.json['name'],
                profile_id=request.json['profile_id'])
            db.session.add(list)
            db.session.commit()
            return {'list': list.to_dict()}, 201
    except Exception as error:
        return {'error': 'List not created'}, 400
