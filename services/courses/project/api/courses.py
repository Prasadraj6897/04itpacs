from flask import Blueprint, jsonify, redirect, url_for, request, render_template, current_app, flash
from . models import NewCourse_M
from project.app import db, mongoEngine
import json
from sqlalchemy import exc
from pymongo import MongoClient
from . utils import authenticate
from mongoengine.queryset.visitor import Q
from . models import COURSE
import base64
import os
import boto
from uuid import uuid4
from project.app import celery


courses_blueprint = Blueprint('courses', __name__)

@courses_blueprint.route('/courses/ping', methods=['GET'])
def ping_pong():
	return jsonify({
		'status': 'Hi Prasad. You need to do courses',
		'message': 'pong!'
	})

# @courses_blueprint.route('/courses/addcoursedetails', methods=['POST'])
# def addcoursedetails():

# 		post_data = request.get_json()
# 		coursetitle = post_data.get('coursetitle')
# 		coursedetails = post_data.get('coursedetails')

# 		newcourse = NewCourse(
# 				coursetitle=coursetitle,
# 				coursedetails=coursedetails
# 			)
# 		db.session.add(newcourse)
# 		db.session.commit()

# 		return jsonify({
# 			'status': coursedetails,
# 			'message': 'pong!'
# 		})

# @courses_blueprint.route('/courses/getcoursedetails', methods=['GET'])
# def getcoursedetails():
	
# 	courses = db.session.query(NewCourse).all()
# 	addcourse = courses.to_json()
# 	response_object = {
# 						'data': addcourse
# 					  }
# 	return jsonify(response_object), 200
@courses_blueprint.route('/courses/addcoursedetails', methods=['POST'])
@authenticate
def addcoursedetails(resp):
		post_data = request.get_json()
		coursetitle = post_data.get('coursetitle')
		coursedetails = post_data.get('coursedetails')
		user_id = resp
		courselevel=post_data.get('courselevel')
		coursetype=post_data.get('coursetype')
		startdate=post_data.get('startdate')
		enddate=post_data.get('enddate')
		newcourseM = NewCourse_M(
				user_id=user_id,
				coursetitle=coursetitle,
				coursedetails=coursedetails,
				courselevel=courselevel,
				coursetype=coursetype,
				startdate=startdate,
				enddate=enddate
			)
		newcourseM.save()
		
		return jsonify({
			'status': courselevel,
			'message': 'pong!'
		})

@courses_blueprint.route('/courses/getcoursedetails', methods=['GET'])
@authenticate
def getcoursedetails(resp):

	# user = COURSE.query.filter_by(id=resp).first()

	courses = NewCourse_M.objects(__raw__={'user_id':int(resp)}).to_json()
	apps_dict = json.loads(courses)

	# return jsonify({
	# 		'course':courses
	# 	})
	response_object = {
						'status': 'Success',
						'message': 'Success alert',
						# 'data': user.to_json(),
						'courses': apps_dict
					}

	
	return jsonify(response_object), 200


	return collection

@courses_blueprint.route('/courses/uploadImageToS3', methods=['POST'])
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
		'S3_COURSE_UPLOAD_DIRECTORY': current_app.config['S3_COURSE_UPLOAD_DIRECTORY'],
		'UPLOAD_FOLDER': current_app.config['UPLOAD_FOLDER'],
		'Image_String': imageStr,
		"destinationFileName": destination_filename
	}


	celery.send_task('s3_upload_image', args=[data])
	object_url = "https://s3-{0}.amazonaws.com/{1}/{2}/{3}".format(data["S3_LOCATION"], data["S3_BUCKET"], data["S3_COURSE_UPLOAD_DIRECTORY"], data["destinationFileName"])

	# imgData = {
	# 	'userId': userId,
	# 	'imageUrl': object_url,
	# 	'borderRadius': imgBorder,
	# 	'prevImageName': prevImageName
	# }
	# userImageDetails(imgData) 

	# time.sleep(2)
	
	return jsonify({
		'status': 'success',
		'url': object_url
	})

# def userImageDetails(imgData):

# 	userId = imgData['userId']
# 	imgUrl = imgData['imageUrl']
# 	border_radius = imgData['borderRadius']
# 	prevImageName = imgData['prevImageName']

# 	courseimage_m = NewCourse_M.objects(__raw__={'user_id': userId}).first()

# 	# Also, Insert image data into mongo database
# 	courseimage_m.courseimage_location=courseimage_location
# 	courseimage_m.border_radius = border_radius
# 	courseimage_m.prevImageName = prevImageName

# 	courseimage_m.save()

# 	return 'Inserted'