from app.models import db, VideoLikes
from sqlalchemy.sql import text


def seed_video_likes():
    like1 = VideoLikes(
        video_id=1,
        likes =45,
        
    )
    like2 = VideoLikes(
        video_id=2,
        likes = 100,

    )
    like3 = VideoLikes(
        video_id=3,
        likes = 1000,
    )
    like4 = VideoLikes(
        video_id=4,
        likes = 1,
    )
    db.session.add(like1)
    db.session.add(like2)
    db.session.add(like3)
    db.session.add(like4)
    db.session.commit()

def undo_video_likes():
    db.session.execute(text('TRUNCATE video_likes RESTART IDENTITY CASCADE;'))
    db.session.commit()
