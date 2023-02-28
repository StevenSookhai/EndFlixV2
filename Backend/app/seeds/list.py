from app.models import db, List
from sqlalchemy.sql import text
from datetime import datetime

def seed_list():
    list1 = List(
         profile_id=1,
         videos = {
            1: 'video_id',
            2: 'video_id',
            3: 'video_id',
         }
    )
    list2 = List(
         profile_id=2,
         videos = {
            1: 'video_id',
            2: 'video_id',
         }
    )
    list3 = List(
         profile_id=3,
         videos = {
            1: 'video_id',
            2: 'video_id',
            3: 'video_id',
            4: 'video_id',
         }
    )

    db.session.add(list1)
    db.session.add(list2)
    db.session.add(list3)
    db.session.commit()

def undo_list():
    db.session.execute(text('TRUNCATE lists RESTART IDENTITY CASCADE;'))
    db.session.commit()


