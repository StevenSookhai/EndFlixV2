from flask.cli import AppGroup
from .users import seed_users, undo_users
# from .profiles import seed_profiles, undo_profiles
from .videos import seed_videos, undo_videos
# from .lists import seed_lists, undo_lists
# from .video_likes import seed_video_likes, undo_video_likes
# from .trending import seed_trending, undo_trending

seed_commands = AppGroup('seed')
@seed_commands.command('all')
def seed():
    seed_users()
    
    seed_videos()
    

@seed_commands.command('undo')
def undo():
    undo_users()
   
    seed_videos()
    