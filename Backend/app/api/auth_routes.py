from flask import Blueprint, jsonify, session, request

auth_routes = Blueprint('auth', __name__)

@auth_routes.route('/')
def index():
    return '<h1>Hello World!</h1>'


# Route to test if the user is logged in

# @auth_routes.route('/')
# def authenticate():
#     if request.method == 'GET':
#         if 'user' in session:
#             return jsonify(session['user'])
#         else:
#             return jsonify({'error': 'not logged in'})

# Route to log the user in


# @auth_routes.route('/login', methods=['POST'])
# def login():
#     if request.method == 'POST':
#         session['user'] = request.json
#         return jsonify(session['user'])
        

