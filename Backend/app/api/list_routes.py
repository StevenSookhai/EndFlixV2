from flask import Blueprint, jsonify, session, request
from app.models import db, List, Profile, Video

list_routes = Blueprint('lists', __name__)


@list_routes.route('/', methods=['POST', 'GET'])
def create_list():
    try:
        if request.method == 'GET':
            list_item = List.query.filter(
                List.profile_id == request.json['profile_id']).first()
            return list_item.to_dict(), 201
        else:
            if List.query.filter(List.profile_id == request.json['profile_id']).first():
                list_item = List.query.filter(
                    List.profile_id == request.json['profile_id']).first()
                return list_item.to_dict(), 201
            else:
                list_item = List(
                    profile_id=request.json['profile_id'],
                    videos={}
                )
                db.session.add(list_item)
                db.session.commit()
                return list_item.to_dict(), 201
    except Exception as error:
        return {'error': f'List not created {error}'}, 400


@list_routes.route('/<int:id>', methods=['PATCH', 'DELETE'])
def update_list(id):
    try:
        if request.method == 'DELETE':
            list = List.query.filter(List.profile_id == id).first()
            video_id = str(request.json['video_id'])
            if video_id in list.videos.keys():
                new_object = {}
                for key, value in list.videos.items():
                    if key != video_id:
                        new_object[key] = value
                list.videos = new_object
                db.session.commit()
                return list.to_dict(), 201
            else:
                return {'error': 'Video not found'}, 400
        else:
            li = List.query.filter(List.profile_id == id).first()
            # print(list(li.videos.keys()))
            if request.json['video_id'] not in li.videos.keys():
                new_object = {}
                new_object[request.json['video_id']] = request.json['tag']
                for key, value in li.videos.items():
                    new_object[key] = value
                li.videos = new_object
                db.session.commit()
                return li.to_dict(), 201

    except Exception as error:
        return {'error': f'List not updated ${error}'}, 400

# http://localhost:5000/api/lists/
# https://localhost:5000/api/lists/
