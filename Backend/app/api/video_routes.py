from flask import Blueprint, jsonify, session, request
from app.models import Video, User,List,db,Profile

video_routes = Blueprint('videos', __name__)

@video_routes.route('/')
def index():
    videos = Video.query.all()
    users = User.query.all()
    lists = List.query.all()
    profiles = Profile.query.all()
    # videos = {"videos": {video.id : video for video in videos}}
    print(videos[1].likes)
    print(videos[1].impressions)
    videos = [video.to_dict() for video in videos]
    # print(videos)
    # print(users[0].profiles)
    # print(lists[2].profile_id)
    # print(profiles[0].name)
    # for profile in users[0].profiles:
    #     print(profile.name)
    
    return {"videos": videos}
