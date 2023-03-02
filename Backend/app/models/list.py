from flask_sqlalchemy import SQLAlchemy
import os
from .db import db,SCHEMA,environment,add_prefix_for_prod
from datetime import datetime

# from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, Float, Table

class List(db.Model):
    __tablename__ = 'lists'
    id = db.Column(db.Integer, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('profiles.id')), nullable=False, unique=True)
    videos = db.Column(db.JSON, nullable=False, default=db.JSON)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    updated_at = db.Column(db.DateTime, default=datetime.utcnow())

    # videos = db.relationship("Video")
    # profile = db.relationship("Profile", back_populates="list")

    def to_dict(self):
        return {
            "id": self.id,
            "profile_id": self.profile_id,
            "videos": self.videos,
        }
        


