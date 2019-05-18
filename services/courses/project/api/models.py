
from flask import current_app
import sys
import datetime
import jwt
from project.app import db, mongoEngine, bcrypt


class COURSE(db.Model):
	__tablename__ = "course_users"
	id = db.Column(db.Integer, primary_key=True, autoincrement=True)
	firstname = db.Column(db.String(128), nullable=True)
	lastname = db.Column(db.String(128), nullable=False)
	email = db.Column(db.String(128), unique=True, nullable=False)
	password = db.Column(db.String, nullable=False)
	admin = db.Column(db.Boolean, default=False, nullable=False)
	email_sent = db.Column(db.Boolean, default=False, nullable=False)
	confirmed = db.Column(db.Boolean, default=False, nullable=False)

	def __init__(self, firstname, lastname, email, password):
		self.firstname = firstname
		self.lastname = lastname
		self.email = email	
		self.password = bcrypt.generate_password_hash(password, current_app.config.get('BCRYPT_LOG_ROUNDS')).decode()

	def to_json(self):
		return {
			'id': self.id,
			'firstname': self.firstname,
			'lastname': self.lastname,
			'email': self.email,
			'admin': self.admin,
			'email_sent': self.email_sent,
			'confirmed': self.confirmed
			
		}

	def encode_auth_token(self, user_id):
		try:
			payload = {
					'exp': datetime.datetime.utcnow() + datetime.timedelta(
																days=current_app.config.get('TOKEN_EXPIRATION_DAYS'),
																seconds=current_app.config.get('TOKEN_EXPIRATION_SECONDS')
																),
					'iat': datetime.datetime.utcnow(),
					'sub': user_id
						}
			return jwt.encode(
							payload,
							current_app.config.get('SECRET_KEY'),
							algorithm='HS256'
							)
		except Exception as e:
			return e


	@staticmethod
	def decode_auth_token(auth_token):
		
		try:
			payload = jwt.decode(auth_token, current_app.config.get('SECRET_KEY'))
			return payload['sub']
		except jwt.ExpiredSignatureError:
			return 'Signature expired. Please log in again'
		except jwt.InvalidTokenError:
			return 'Invalid Token. Please log in again'

			

class NewCourse(db.Model):
	__tablename__ = "newcourse"
	id = db.Column(db.Integer, primary_key=True, autoincrement=True)
	coursetitle = db.Column(db.String(128), nullable=False)
	coursedetails = db.Column(db.String(300), nullable=False)

	def __init__(self, **kwargs):
		super(NewCourse, self).__init__(**kwargs)

	def to_json(self):
		
		return {
			'id': self.id,
			'coursetitle': self.coursetitle,
			'coursedetails': self.coursedetails,
			
		}

	


class NewCourse_M(mongoEngine.Document):
	user_id = mongoEngine.IntField(required=True)
	coursetitle = mongoEngine.StringField(max_length=200, required=False)
	coursedetails = mongoEngine.StringField(max_length=200, required=False)
	courselevel = mongoEngine.StringField(max_length=200, required=False)
	coursetype = mongoEngine.StringField(max_length=200, required=False)
	startdate = mongoEngine.StringField(max_length=200, required=False)
	enddate = mongoEngine.StringField(max_length=200, required=False)
	courseimage_location = mongoEngine.StringField(max_length=200, required=False)
	border_radius = mongoEngine.StringField(max_length=200, required=False)
	prevImageName = mongoEngine.StringField(max_length=200, required=False)


	# def encode_auth_token(self, user_id):
	# 	try:
	# 		payload = {
	# 				'exp': datetime.datetime.utcnow() + datetime.timedelta(
	# 															days=current_app.config.get('TOKEN_EXPIRATION_DAYS'),
	# 															seconds=current_app.config.get('TOKEN_EXPIRATION_SECONDS')
	# 															),
	# 				'iat': datetime.datetime.utcnow(),
	# 				'sub': user_id
	# 					}
	# 		return jwt.encode(
	# 						payload,
	# 						current_app.config.get('SECRET_KEY'),
	# 						algorithm='HS256'
	# 						)
	# 	except Exception as e:
	# 		return e


	# @staticmethod
	# def decode_auth_token(auth_token):
		
	# 	try:
	# 		payload = jwt.decode(auth_token, current_app.config.get('SECRET_KEY'))
	# 		return payload['sub']
	# 	except jwt.ExpiredSignatureError:
	# 		return 'Signature expired. Please log in again'
	# 	except jwt.InvalidTokenError:
	# 		return 'Invalid Token. Please log in again'
