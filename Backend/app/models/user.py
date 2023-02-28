from flask_sqlalchemy import SQLAlchemy
import os
from .db import db,SCHEMA,environment,add_prefix_for_prod
from datetime import datetime
from sqlalchemy.orm import relationship

# from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, Float, Table

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    updated_at = db.Column(db.DateTime, default=datetime.utcnow())

    profiles = relationship("Profile", back_populates="user")

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
        }