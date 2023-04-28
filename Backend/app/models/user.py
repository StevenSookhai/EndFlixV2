from flask_sqlalchemy import SQLAlchemy
import os
from .db import db, SCHEMA, environment, add_prefix_for_prod
from datetime import datetime
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

# from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, Float, Table


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hash_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    updated_at = db.Column(db.DateTime, default=datetime.utcnow())

    profiles = relationship("Profile", back_populates="user")

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
        }

    @property
    def password(self):
        return self.hash_password

    @password.setter
    def password(self, password):
        self.hash_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
