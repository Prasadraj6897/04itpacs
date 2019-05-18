from flask import Blueprint, jsonify, redirect, url_for, request, render_template, current_app, flash

from . models import COURSE
from project.app import db, bcrypt
import json
from sqlalchemy import exc, or_
from . utils import authenticate, encode_token, decode_token

cauth_blueprint = Blueprint('cauth', __name__)

@cauth_blueprint.route('/cauth/ping', methods=['GET'])
def ping_pong():
	
	return jsonify({
		'status': 'Hi Prasad.This is cauth file',
		'message': 'pong!'
	})

@cauth_blueprint.route('/cauth/register', methods=['POST']) 
def register_user():

	post_data = request.get_json()	
	response_object = {
					'status': 'fail',
					'message': 'Invalid Payload'
					}
	firstname = post_data.get('firstname')
	lastname = post_data.get('lastname')
	email = post_data.get('email')
	password = post_data.get('password')


	

	try:
		user = COURSE.query.filter_by(email=email).first()
		if not user:
			new_user = COURSE(
							firstname=firstname,
							lastname=lastname,
							email=email,
							password=password,
				

							)
			new_user.admin = True
			new_user.email_sent = True
			new_user.confirmed = True

			db.session.add(new_user)
			db.session.commit()



			
			#Generate Auth Token			
			auth_token = new_user.encode_auth_token(new_user.id)

			response_object['status'] = 'success'
			response_object['message'] = 'Successfully registered.'			
			response_object['auth_token'] = auth_token.decode()
			return jsonify(response_object), 201
		else:
			response_object['message'] = 'Sorry. That user already exists'
			
			return jsonify(response_object), 400
	except (exc.IntegrityError, ValueError) as e:
		db.session.rollback()
		
		return jsonify(response_object), 400

@cauth_blueprint.route('/cauth/login', methods=['POST'])
def login_user():

	post_data = request.get_json()
	response_object = {
						'status':'fail',
						'message': 'Invalid Details'
					}
	if not post_data:
		return jsonify(response_object), 400

	email = post_data.get('email')
	password = post_data.get('password')
	
	user = COURSE.query.filter_by(email=email).first()		

	try:
		user = COURSE.query.filter_by(email=email).first()			
		
		
		if user and bcrypt.check_password_hash(user.password, password):
			auth_token = user.encode_auth_token(user.id)		
			if auth_token:
				response_object['status'] = 'success'
				response_object['message'] = 'Successfully logged in'
				response_object['auth_token'] = auth_token.decode()
				return jsonify(response_object), 200
		else:
			response_object['message'] = 'Invalid Details. Please try again'
			return jsonify(response_object), 404
	except Exception as e:
		response_object['message'] = 'Invalid details. Try again'
		return jsonify(response_object), 500





# @cauth_blueprint.route('/cauth/updatepassword', methods=['POST'])
# def updatepassword():
# 	post_data = request.get_json()
# 	response_object = {
# 						'status': 'fail',
# 						'message': 'Invalid Information'
# 						}
# 	if not post_data:
# 		return jsonify(response_object), 400
# 	token = post_data.get('token')
# 	email = decode_token(token, 'password-reset-salt')
# 	new_password = post_data.get('password')

# 	try:
# 		user = COURSE.query.filter_by(email=email).first()
# 		#Mongo
# 		user_m = User_M.objects(__raw__={'email': email}).first()
# 		if not user or not user_m:
# 			response_object['status'] = 'Fail'
# 			response_object['message'] = 'User not found'
# 			return jsonify(response_object), 400
# 		else:
# 			hashed_password = bcrypt.generate_password_hash(new_password, current_app.config.get('BCRYPT_LOG_ROUNDS')).decode()
# 			user.password = hashed_password
# 			user_m.password = hashed_password
# 			db.session.commit()
# 			user_m.save()

# 			response_object['status'] = 'Success'
# 			response_object['message'] = 'Updated password. Login using your new password'
# 			return jsonify(response_object), 201
# 	except (exc.IntegrityError, ValueError) as e:		
# 		return jsonify(response_object), 400








