from flask import Flask
from app.config import Config
from .api.auth_routes import auth_routes
from .api.video_routes import video_routes
from .api.user_routes import user_routes
from .api.video_likes_routes import video_likes_routes
from .api.trending_routes import trending_routes
from .api.list_routes import list_routes
from .api.profile_routes import profile_routes
from .models import db
from flask_migrate import Migrate
from .seeds import seed_commands
# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate

app = Flask(__name__)
app.cli.add_command(seed_commands)
app.config.from_object(Config)
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(video_routes, url_prefix='/api/videos')
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(video_likes_routes, url_prefix='/api/like')
app.register_blueprint(trending_routes, url_prefix='/api/trending')
app.register_blueprint(list_routes, url_prefix='/api/lists')
app.register_blueprint(profile_routes, url_prefix='/api/profiles')

db.init_app(app)
Migrate(app, db)






