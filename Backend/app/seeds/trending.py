from app.models import db, Trending
from sqlalchemy.sql import text


def seed_trending():
    video1 = Trending(
        video_id=1,
        impressions=1000,
    )
    video2 = Trending(
        video_id=2,
        impressions=10000,
    )
    video3 = Trending(
        video_id=3,
        impressions=10000,
    )
    video4 = Trending(
        video_id=4,
        impressions=5,
    )
    
    db.session.add(video1)
    db.session.add(video2)
    db.session.add(video3)
    db.session.add(video4)
    db.session.commit()

def undo_trending():
    db.session.execute(text('TRUNCATE trending RESTART IDENTITY CASCADE;'))
    db.session.commit()