from flask import Blueprint, jsonify, session, request
from app.models import db, Trending, Video

trending_routes = Blueprint('trending', __name__)

@trending_routes.route('/<int:id>', methods=['PATCH'])
def update_trending(id):
    try:
        video = Trending.query.filter(Trending.video_id == id).first()
        if video:
            video.impressions = video.impressions + 1
            print(video.impressions)
            db.session.commit()
            return {'video': video.to_dict()}, 201
        else:
            video = Video.query.get(id)
            if video:
                trending_video = Trending(
                    impressions=1,
                    video_id=video.id,
                    )
                db.session.add(trending_video)
                db.session.commit()
                return {'video': trending_video.to_dict()}, 201
            else:
                return {'error': 'Video not found'}, 400
    except Exception as error:
        return {'error': f'Could not add impression to video ${error}'}, 400
