from flask import Blueprint, jsonify, session, request
from app.models import Video, User, List, db, Profile

video_routes = Blueprint('videos', __name__)


@video_routes.route('/', methods=['GET', 'POST'])
def get_videos():
    try:
        if request.method == 'POST':
            video = Video(
                title=request.json['title'],
                description=request.json['description'],
                genre=request.json['genre'],
                cast=request.json['cast'],
                director=request.json['director'],
                year=request.json['year'],
                duration=request.json['duration'],
                rating=request.json['rating'],
                image=request.json['image'],
                tags=request.json['tags']
            )
            db.session.add(video)
            db.session.commit()
            return {'video': video.to_dict()}, 201
        else:
            videos = Video.query.all()
            return {'videos': [video.to_dict() for video in videos]}
    except Exception as error:
        return {'error': f'Videos not found ${error}'}, 400


@video_routes.route('/<int:id>', methods=['GET'])
def get_video(id):
    try:
        video = Video.query.get(id)
        return {'video': video.to_dict()}
    except Exception as error:
        return {'error': 'Video not found'}, 400


@video_routes.route('/search/<string:query>', methods=['GET'])
def search_videos(query):
    try:
        videos = Video.query.filter(Video.title.ilike(f'%{query}%')).all()
        return {'videos': [video.to_dict() for video in videos]}
    except Exception as error:
        return {'error': f'Error searching videos: {error}'}, 400
