# Import the Flask app
from app import app

# Seed the database
flask db upgrade
flask seed all

# Start the Flask app
gunicorn app:app