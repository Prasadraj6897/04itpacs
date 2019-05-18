from functools import wraps
import sys

from . models import COURSE
from flask import request, jsonify, current_app, url_for
from itsdangerous import URLSafeTimedSerializer

 
def encode_token(email, salt):
    serializer = URLSafeTimedSerializer(current_app.config['SECRET_KEY'])
    return serializer.dumps(email, salt=salt)
    

def decode_token(token, salt, expiration=3600):
    serializer = URLSafeTimedSerializer(current_app.config['SECRET_KEY'])
    try:
        email = serializer.loads(
            token,
            salt=salt,
            max_age=expiration
        )
        return email
    except Exception as e:
        return False


def authenticate(f):
	@wraps(f)
	def decorated_function(*args, **kwargs):

		

		response_object = {
						'status': 'Failed',
						'message': 'Invalid details'
		}

		

		auth_headers = request.headers.get('Authorization')
		
		# print('dollar 5', file=sys.stderr)
		# print(auth_headers, file=sys.stderr)

		if not auth_headers:
			return jsonify(response_object), 403

		auth_token = auth_headers.split(" ")[1]
		
		resp = COURSE.decode_auth_token(auth_token)

		if isinstance(resp, str):
			response_object['message'] = resp


			return jsonify(response_object), 401

		user = COURSE.query.filter_by(id=resp).first()

		if not user:
			return jsonify(response_object), 401

		return f(resp, *args, **kwargs)

	return decorated_function


def is_admin(user_id):
	user = COURSE.query.filter_by(id=user_id).first()
	return user.admin
