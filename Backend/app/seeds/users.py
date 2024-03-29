from app.models import User
from app.models import db
from sqlalchemy.sql import text

def seed_users():
    demo = User(
        email='Demo',
        hash_password='password'
    )
    marnie = User(
        email="marnie@gmail.com",
        hash_password="password"
    )
    bobbie = User(
        email="bobbie@gmail.com",
        hash_password="password"
    )
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()

def undo_users():
    db.session.execute(text('TRUNCATE users RESTART IDENTITY CASCADE;'))
    db.session.commit()