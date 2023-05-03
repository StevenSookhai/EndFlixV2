from flask import Flask, render_template, request, session, redirect, url_for
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
from flask_login import LoginManager
from .models import User
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
import os


app = Flask(__name__, static_folder='Frontend/dist', static_url_path='/')

login = LoginManager(app)
login.login_view = 'auth.unauthorized'

@login.user_loader
def load_user(id):
    return User.query.get(int(id))
CORS(app, supports_credentials=True, resources={r'/*' : {'origins': ['http://localhost:5173', "https://endflixv2.onrender.com"]}})
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
# CSRFProtect(app)



@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf() )
    return response


# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def react_root(path):
    
#     return app.send_static_file('index.html')

# @app.errorhandler(404)
# def not_found(e):
#     return app.send_static_file('index.html')

