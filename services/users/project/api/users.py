# services/users/project/api/users.py 

from flask import Blueprint, jsonify, request, render_template, current_app, flash
from . models import User, ProfileImage, Application, User_M, Application_M, ProfileImage_M, Accountdetails, Accountdetails_M
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
import os
import boto

from werkzeug.utils import secure_filename
from uuid import uuid4
import time
from sqlalchemy.orm import load_only, Load, joinedload

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


@users_blueprint.route('/users/uploadImageToS3', methods=['POST'])
@authenticate
def uploadImageToS3(resp):

	userId = resp
	post_data = request.get_json()
	imageStr = post_data.get('imageData')
	imgType = post_data.get('imageType')
	imgBorder = post_data.get('imageBorder')
	prevImage = post_data.get('previousImg')
	prevImageName = post_data.get('fileName')

	# create new file name
	destination_filename = uuid4().hex + '.' + imgType

	data = {
		'acl': 'public-read',
		'S3_LOCATION': current_app.config['S3_LOCATION'],
		"S3_BUCKET": current_app.config["S3_BUCKET"],
		'S3_KEY': current_app.config['S3_KEY'],
		'S3_SECRET': current_app.config['S3_SECRET'],
		'S3_UPLOAD_DIRECTORY': current_app.config['S3_UPLOAD_DIRECTORY'],
		'UPLOAD_FOLDER': current_app.config['UPLOAD_FOLDER'],
		'Image_String': imageStr,
		"destinationFileName": destination_filename
	}

	celery.send_task('s3_upload_image', args=[data])
	object_url = "https://s3-{0}.amazonaws.com/{1}/{2}/{3}".format(data["S3_LOCATION"], data["S3_BUCKET"], data["S3_UPLOAD_DIRECTORY"], data["destinationFileName"])

	# Insert user image details into postgres and mongo database
	imgData = {
		'userId': userId,
		'imageUrl': object_url,
		'borderRadius': imgBorder,
		'prevImageName': prevImageName
	}
	userImageDetails(imgData) 
	# End Insert user image details into postgres and mongo database

	time.sleep(2)

	return jsonify({
		'status': 'success',
		'url': object_url
	})

# Below function userImageDetails used to store user image details into postgres and mongo database
def userImageDetails(imgData):

	userId = imgData['userId']
	imgUrl = imgData['imageUrl']
	border_radius = imgData['borderRadius']
	prevImageName = imgData['prevImageName']

	user = User.query.filter_by(id=userId).first()
	profile = ProfileImage.query.filter_by(user_id=user.id).first()

	profile_m = ProfileImage_M.objects(__raw__={'user_id': userId}).first()

	if not profile or not profile_m:
		# Insert image data into postgres database
		new_image = ProfileImage(
						user_id=user.id,
						image_location=imgUrl,
						border_radius=border_radius,
						status=1
					)
		db.session.add(new_image)
		db.session.commit()

		# Also, Insert image data into mongo database
		new_imageM = ProfileImage_M(
						user_id=new_image.user_id,
						image_location=new_image.image_location,
						border_radius=new_image.border_radius,
						status=new_image.status
					)
		new_imageM.save()

		return 'Inserted'

	else:
		# Update new image into postgres database
		profile.image_location = imgUrl
		profile.border_radius = border_radius
		db.session.commit()

		# Also, Update new image into mongo database
		profile_m.image_location = imgUrl
		profile_m.border_radius = border_radius
		profile_m.save()

		# Here remove previous image from S3
		deleteProfileImageS3(prevImageName)

		return 'Updated'


# Below funtion for remove profile image from S3 while adding new profile image
def deleteProfileImageS3(prevImageName):

	destinationFileName = prevImageName
	data = {				
		"S3_BUCKET": current_app.config["S3_BUCKET"],
		'S3_KEY': current_app.config['S3_KEY'],
		'S3_SECRET': current_app.config['S3_SECRET'],
		'S3_UPLOAD_DIRECTORY': current_app.config['S3_UPLOAD_DIRECTORY'],								
		"destinationFileName": destinationFileName
	}

	celery.send_task('s3_delete_image', args=[data])


@users_blueprint.route('/users/deleteprofile', methods=['POST'])
@authenticate
def deleteprofile(resp):

	post_data = request.get_json()
	prevImageName = post_data.get('fileName')

	user = User.query.filter_by(id=resp).first()

	# Delete user profile image data in postgres database
	profile = ProfileImage.query.filter_by(user_id=user.id).first()
	db.session.delete(profile)
	db.session.commit()

	# Delete user profile image document in mongo database
	profile_m = ProfileImage_M.objects(__raw__={'user_id': user.id}).first()
	profile_m.delete()

	deleteProfileImageS3(prevImageName)

	return jsonify({
		'status': 'https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg',
		'message': 'pong'
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


@users_blueprint.route('/users/insertaccountdetails', methods=['POST'])
@authenticate
def insertaccountdetails(resp):

	user = User.query.filter_by(id=resp).first()
	
	post_data	= request.get_json()
	username	= post_data.get('username')
	firstname	= post_data.get('firstname')
	lastname	= post_data.get('lastname')
	company		= post_data.get('company')
	job			= post_data.get('job')
	city		= post_data.get('city')
	country		= post_data.get('country')
	aboutme		= post_data.get('aboutme')
	institute	= post_data.get('institute')

	account = Accountdetails.query.filter_by(user_id=user.id).first()
	account_m = Accountdetails_M.objects(__raw__={'user_id': user.id}).first()
	# Update user details in postgres database
	if user:
		# user.email=username,
		user.firstname=firstname,
		user.lastname=lastname
		db.session.commit()

	if not account or not account_m:
		# Insert account details into postgres database
		new_accountdetails = Accountdetails(
								user_id=user.id,
								company=company,
								job_title=job,
								city=city,
								country=country,
								instituition=institute,
								about_me=aboutme
							)
		db.session.add(new_accountdetails)
		db.session.commit()

		# Also, Insert user account data into mongo database
		new_accountM = Accountdetails_M(
						user_id=new_accountdetails.user_id,
						company=new_accountdetails.company,
						job_title=new_accountdetails.job_title,
						city=new_accountdetails.city,
						country=new_accountdetails.country,
						instituition=new_accountdetails.instituition,
						about_me=new_accountdetails.about_me
					)
		new_accountM.save()
	else:
		# Update account details in postgres database
		account.user_id=user.id
		account.company=company
		account.job_title=job
		account.city=city
		account.country=country
		account.instituition=institute
		account.about_me=aboutme
		db.session.commit()

		# Update account details in mongo database
		account_m.company=company
		account_m.job_title=job
		account_m.city=city
		account_m.country=country
		account_m.instituition=institute
		account_m.about_me=aboutme
		account_m.save()

	return jsonify({
		'status': company,
		'message': 'pong'
	})


@users_blueprint.route('/users/userbasicdetails', methods=['GET'])
@authenticate
def getuserbasicdetails(resp):
	
	userJoin = db.session.query(User).outerjoin(Accountdetails).filter(User.id == resp).first()
	user = userJoin.to_json()
	response_object = {
						'data': user
					  }
	return jsonify(response_object), 200

@users_blueprint.route('/users/testuserbasicdetails', methods=['GET'])
def testgetuserbasicdetails():
	
	userJoin = db.session.query(User).outerjoin(Accountdetails).filter(User.id == 4).first()
	user = userJoin.to_json()
	response_object = {
						'data': user
					  }
	return jsonify(response_object), 200