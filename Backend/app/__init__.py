from flask import Flask
from app.config import Config
from .api.auth_routes import auth_routes
from .models import db
from flask_migrate import Migrate
from .seeds import seed_commands
# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate

app = Flask(__name__)
app.cli.add_command(seed_commands)
app.config.from_object(Config)
app.register_blueprint(auth_routes, url_prefix='/api/auth')
db.init_app(app)
Migrate(app, db)






