from flask_sqlalchemy import SQLAlchemy
import os
from .db import db, SCHEMA, environment, add_prefix_for_prod
from datetime import datetime
# from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, Float, Table


class Video(db.Model):
    __tablename__ = 'videos'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    tmdb_id = db.Column(db.Integer, nullable=True)
    video_backdrop = db.Column(db.String(255), nullable=True)
    video_url = db.Column(db.String(255), nullable=True)
    tite_url = db.Column(db.String(255), nullable=True)
    tag = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    updated_at = db.Column(db.DateTime, default=datetime.utcnow())

    likes = db.relationship('VideoLikes')
    impressions = db.relationship('Trending')

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "tmdb_id": self.tmdb_id,
            "video_backdrop": self.video_backdrop,
            "video_url": self.video_url,
            "tite_url": self.tite_url,
            "tag": self.tag,
        }
