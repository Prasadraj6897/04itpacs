# services/users/project/api/users.py 

from flask import Blueprint, jsonify, request, render_template, current_app, flash
from . models import User, ProfileImage, Application, User_M, Application_M
# from project.app import db, mongoEngine, pyMongo
from project.app import db, mongoEngine
from sqlalchemy import exc
from . utils import authenticate, is_admin, encode_token, generate_url, decode_token
import datetime 
import jwt 
import json
from bson.json_util import dumps

import sys
sys.path.append('..')

# import redis
# from rq import Queue, Connection

# from project.api.tasks import send_email
from flask_mail import Message

# from project.api.tasks import celery_app
# from project.api.tasks import send_email, add, subtract
from project.app import celery
# from app import tasks
from celery.result import AsyncResult
# import celery.states as states
from flask import url_for

from pymongo import MongoClient
import base64
import os, boto3

users_blueprint = Blueprint('users', __name__, template_folder='./templates')


# @users_blueprint.route('/', methods=['GET', 'POST'])
# def index():

# 	if request.method == 'POST':
# 		username = request.form['username']
# 		email = request.form['email']
# 		db.session.add(User(username=username, email=email))
# 		db.session.commit()

# 	users = User.query.all()
# 	return render_template('index.html', users=users)

# def send_mail(message):
# 	with current_app._get_current_object().app_context():
# 		mail.send(message)


# @celery_app.task(name='subtract')
# def subtract(x, y, user):

# 	result = x - y

# 	client = MongoClient('mongodb://mongodb:27017/itpacs01')
# 	db = client.itpacs01
# 	collection = db.testingcelery
# 	collection.insert({'result': result, 'user': user})
# 	return result

@users_blueprint.route('/users/subtract/<int:param1>/<int:param2>')
def sub(param1, param2):
	task = subtract.delay(param1, param2, 'roshan')
	# ans = task.get()

	msg = "<a href='{url}'> click to check status of {id}</a>".format(url=url_for('users.checksubtract', task_id=task.id, _external=True), id=task.id)


	return msg


@users_blueprint.route('/users/checksubtract/<string:task_id>')
def checksubtract(task_id):

	res = AsyncResult(task_id, app=celery_app).get()
	response = {
			'message': str(res),
			'status': 'done'
	}

	return jsonify(response)




@users_blueprint.route('/users/ping', methods=['GET'])
def ping_pong():

	return jsonify({
		'status': 'success',
		'message': 'pong'
		})

@users_blueprint.route('/users/add/<int:param1>/<int:param2>')
def add(param1, param2):

	# task = celery.send_task('users.add', args=[10, 20], kwargs={})
	# task = dividing(10, 5)

	task = celery.send_task('add', args=[param1, param2], kwargs={})

	# task = add.delay(queue='default', args=[param1, param2])
	# task = add.delay(param1, param2)

	return "<a href='{url}'>check status of {id} </a>".format(id=task.id, url=url_for('users.check_task', id=task.id, _external=True))

	# return jsonify({
	# 	'message': 'Celery',
	# 	'status': 'SUCCESS',		
		
	# 	})

@users_blueprint.route('/users/check_task/<string:id>')
def check_task(id):
	task = AsyncResult(id, app=celery_app)
	response ={
			'status': task.state
			 
	}
	return jsonify(response)




# @users_blueprint.route('/users', methods=['POST'])
# def add_user():
# 	post_data = request.get_json()
# 	response_object = {
# 						'status': 'fail',
# 						'message': 'Invalid details'
# 						}
# 	if not post_data:
# 		return jsonify(response_object), 400

# 	firstname = post_data.get('firstname')
# 	lastname = post_data.get('lastname')
# 	email = post_data.get('email')

# 	try:
# 		user = User.query.filter_by(email=email).first()
# 		if not user:
# 			db.session.add(User(firstname=firstname, lastname=lastname, email=email))
# 			db.session.commit()
# 			response_object['status'] = 'success'
# 			response_object['message'] = f'{email} account created'
# 			return jsonify(response_object), 201
# 		else:
# 			response_object['message'] = 'Sorry. That email already exists.'
# 			return jsonify(response_object), 400
# 	except exc.IntegrityError as e:
# 		db.session.rollback()
# 		return jsonify(response_object), 400


# @users_blueprint.route('/users', methods=['POST'])
# @authenticate
# def add_user(resp):
# # def add_user():
# 	post_data = request.get_json()
# 	response_object = {
# 						'status': 'failed',
# 						'message': 'Invalid details'
# 						}
	
# 	if not is_admin(resp):
# 		response_object['message'] = 'You do not have permission to do that'
# 		return jsonify(response_object), 401


# 	if not post_data:
# 		return jsonify(response_object), 400

# 	firstname = post_data.get('firstname')
# 	lastname = post_data.get('lastname')
# 	email = post_data.get('email')
# 	password = post_data.get('password')

# 	try:
# 		user = User.query.filter_by(email=email).first()
# 		if not user:
# 			db.session.add(User(firstname=firstname, lastname=lastname, email=email, password='password'))
# 			db.session.commit()
# 			response_object['status'] = 'success'
# 			response_object['message'] = f'{email} account created'
# 			return jsonify(response_object), 201
# 		else:
# 			response_object['message'] = 'Sorry. That email already exists.'
# 			return jsonify(response_object), 400
# 	except exc.IntegrityError as e:
# 		db.session.rollback()
# 		return jsonify(response_object), 400


# @users_blueprint.route('/users/<user_id>', methods=['GET'])
# def get_single_user(user_id):
	
# 	response_object = {
# 						'status': "fail",
# 						'data': {
# 								'message': "User does not exist"
# 						}
						

# 	}

# 	try:
# 		user = User.query.filter_by(id=user_id).first()
# 		if not user:
# 			return jsonify(response_object), 404
# 		else:
# 			response_object = {
# 						'status': 'success',
# 						'data': {
# 									'username': user.username,
# 									'email': user.email,
# 									'id': user.id,
# 									'active': user.active
# 									}
# 					}
# 			return jsonify(response_object), 200
# 	except ValueError:
# 		return jsonify(response_object), 404


@users_blueprint.route('/users', methods=['GET'])
@authenticate
def get_all_users(resp):
	response_object = {
						'status': 'success',
						'data': [user.to_json() for user in User.query.all()]

						}
	return jsonify(response_object), 200


@users_blueprint.route('/users/uploads', methods=['POST'])
@authenticate
def uploads(resp):

	post_data = request.get_json()
	imgUrl = post_data.get('img')
	border_radius = post_data.get('imgBorder')

	user = User.query.filter_by(id=resp).first()

	profile = ProfileImage.query.filter_by(user_id=user.id).first()

	if not profile:
		new_image = ProfileImage(
						user_id=user.id,
						image_location=imgUrl,
						border_radius=border_radius,
						status=1
					)
		db.session.add(new_image)
		db.session.commit()

		return jsonify({
			'status': 'success',
			'message': 'Inserted'
		})
	else:
		profile.image_location = imgUrl
		profile.border_radius = border_radius
		db.session.commit()

		return jsonify({
			'status': 'success',
			'message': 'Updated'
		})

	

@users_blueprint.route('/users/getprofile', methods=['GET'])
@authenticate
def getProfile(resp):

	user = User.query.filter_by(id=resp).first()
	profile = ProfileImage.query.filter_by(user_id=user.id).first()

	if not profile:
		return jsonify({
			'imgUrl': 'https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg',
			'status': 'success',
			'message': 'pong'
		})
	else:
		return jsonify({
			'status': 'success',
			'message': 'pong',
			'imgUrl': profile.image_location,
			'imgBorder': profile.border_radius
		})

@users_blueprint.route('/users/deleteprofile', methods=['GET'])
@authenticate
def deleteprofile(resp):

	user = User.query.filter_by(id=resp).first()
	profile = ProfileImage.query.filter_by(user_id=user.id).first()
	db.session.delete(profile)
	db.session.commit()

	return jsonify({
		'status': 'https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg',
		'message': 'pong'
	})

@users_blueprint.route('/users/insertaccountdetails', methods=['POST'])
@authenticate
def insertaccountdetails(resp):

	user = User.query.filter_by(id=resp).first()
	
	post_data = request.get_json()
	company = post_data.get('company')

	return jsonify({
		'status': company,
		'message': 'pong'
	})

@users_blueprint.route('/users/test', methods=['GET'])
def testusers():

	user = db.session.query(User.firstname, ProfileImage.image_location).join(ProfileImage, ProfileImage.user_id == User.id).first()
	return jsonify({
			'status': user.firstname,
			'message': 'Thank you'
		})