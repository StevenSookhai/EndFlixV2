from flask_sqlalchemy import SQLAlchemy
import os
from .db import db,SCHEMA,environment,add_prefix_for_prod
from datetime import datetime
# from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, Float, Table

class Video(db.Model):
    __tablename__ = 'videos'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String, nullable=False)
    genre = db.Column(db.ARRAY(db.String), nullable=True)
    cast = db.Column(db.String(255), nullable=True)
    director = db.Column(db.String(255), nullable=True)
    year = db.Column(db.Integer, nullable=True)
    duration = db.Column(db.Integer, nullable=True)
    rating = db.Column(db.Integer, nullable=True)
    image = db.Column(db.String(255), nullable=True)
    tags = db.Column(db.ARRAY(db.String), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    updated_at = db.Column(db.DateTime, default=datetime.utcnow())

    likes = db.relationship('VideoLikes')
    impressions = db.relationship('Trending')

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "genre": self.genre,
            "cast": self.cast,
            "director": self.director,
            "year": self.year,
            "duration": self.duration,
            "rating": self.rating,
            "image": self.image,
            "tags": self.tags,
        }
