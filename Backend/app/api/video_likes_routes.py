from flask import Blueprint, jsonify, session, request
from app.models import db, VideoLikes, Video

video_likes_routes = Blueprint('like', __name__)

@video_likes_routes.route('/<int:id>', methods=['PATCH'])
def update_video_like(id):
    try:
        video = VideoLikes.query.filter(VideoLikes.video_id == id).first()
        if video != None:
            
            video.likes = video.likes + 1
            print(video.likes)
            db.session.commit()
            return {'video': video.to_dict()}, 201
        else:
            video = Video.query.get(id)
            if video:
                video_like = VideoLikes(
                    likes=1,
                    video_id=video.id,
                    )
                db.session.add(video_like)
                db.session.commit()
                return {'video_like': video_like.to_dict()}, 201
            else:
                return {'error': 'Video not found'}, 400
    except Exception as error:
        return {'error': 'Could not add like to video'}, 400