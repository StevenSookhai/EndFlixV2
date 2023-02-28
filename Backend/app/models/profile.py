from flask_sqlalchemy import SQLAlchemy
import os
from .db import db,SCHEMA,environment,add_prefix_for_prod
from datetime import datetime
from sqlalchemy.orm import relationship

# from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, Float, Table

class Profile(db.Model):
    __tablename__ = 'profiles'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    updated_at = db.Column(db.DateTime, default=datetime.utcnow())

    user = relationship("User", back_populates="profiles")
