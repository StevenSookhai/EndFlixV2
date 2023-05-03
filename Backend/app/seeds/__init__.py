from flask.cli import AppGroup
from .users import seed_users, undo_users
from .profiles import seed_profiles, undo_profiles
from .videos import seed_videos, undo_videos
from .list import seed_list, undo_list
from .video_likes import seed_video_likes, undo_video_likes
from .trending import seed_trending, undo_trending
# from .models import db, User, Video, List, VideoLike, Trending 
from ..models import db


seed_commands = AppGroup('seed')


@seed_commands.command('all')
def seed():
    seed_users()
    seed_videos()
    seed_profiles()
    seed_list()
    # seed_video_likes()
    # seed_trending()


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_videos()
    undo_list()
    undo_video_likes()
    undo_trending()
    undo_profiles()

@seed_commands.command('refresh')
def reset_db():
    db.drop_all()
    db.create_all()
    print("All tables have been dropped and recreated.")
