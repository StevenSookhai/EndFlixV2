from flask_sqlalchemy import SQLAlchemy
import os
from .db import db,SCHEMA,environment,add_prefix_for_prod
from datetime import datetime
# from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, Float, Table

class Trending(db.Model):
    __tablename__ = 'trending'
    
    id = db.Column(db.Integer, primary_key=True)
    video_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('videos.id')), nullable=False)
    impressions = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    updated_at = db.Column(db.DateTime, default=datetime.utcnow())

    # def to_dict(self):
    #     return {
    #         "id": self.id,
    #         "video_id": self.video_id,
    #         "profile_id": self.profile_id,
    #         "created_at": self.created_at,
    #         "updated_at": self.updated_at,
    #     }