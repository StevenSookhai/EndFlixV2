from app.models import db, Profile
from sqlalchemy.sql import text


def seed_profiles():
    demo = Profile(
        user_id=1,
        name='Demo'
    )
    Steven = Profile(
        user_id=2,
        name="Steven"
    )
    Alex = Profile(
        user_id=3,
        name="Alex"
    )
    Mark = Profile(
        user_id=1,
        name="Mark"
    )

    db.session.add(demo)
    db.session.add(Steven)
    db.session.add(Alex)
    db.session.add(Mark)
    db.session.commit()

def undo_profiles():
    db.session.execute(text('TRUNCATE profiles RESTART IDENTITY CASCADE;'))
    db.session.commit()