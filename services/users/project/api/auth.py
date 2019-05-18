import sys
sys.path.append('..')
from flask import Blueprint, jsonify, redirect, url_for, request, render_template, current_app, flash
from sqlalchemy import exc, or_

from . models import User, Application, User_M, Application_M
from project.app import db, bcrypt, mongoEngine
# from project.app import db, bcrypt, mongoEngine, pyMongo

from bson.json_util import dumps
from mongoengine.queryset.visitor import Q
import datetime 
import json

# from project.api.tasks import celery_app
from . utils import authenticate, encode_token, generate_url, decode_token
# from project.api.tasks import send_email, send_mail
# from app import tasks
from project.app import celery
from flask_mail import Message

# import redis
# from rq import Queue, Connection

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/auth/ping', methods=['GET'])
def ping_pong():

	return jsonify({
		'status': 'success',
		'message': 'pong'
		})

@auth_blueprint.route('/auth/confirm/<token>')
def confirm_email(token):	

	email = decode_token(token, 'email-confirm-salt')
	
	if not email:
		message = 'The confirmation link is invalid or has expired.'
		return render_template('confirmed.html', message=message)
		
	user = User.query.filter_by(email=email).first()
	if user.confirmed:
		message = 'Account has been confirmed.'
		return render_template('confirmed.html', message=message)

	user.confirmed = True
	db.session.add(user)
	db.session.commit()
	message = 'You have confirmed your account. Thanks!'
	return render_template('confirmed.html', message=message)

@auth_blueprint.route('/auth/updatepassword', methods=['POST'])
def updatepassword():
	post_data = request.get_json()
	response_object = {
						'status': 'fail',
						'message': 'Invalid Information'
						}
	if not post_data:
		return jsonify(response_object), 400
	token = post_data.get('token')
	email = decode_token(token, 'password-reset-salt')
	new_password = post_data.get('password')

	try:
		user = User.query.filter_by(email=email).first()
		#Mongo
		user_m = User_M.objects(__raw__={'email': email}).first()
		if not user or not user_m:
			response_object['status'] = 'Fail'
			response_object['message'] = 'User not found'
			return jsonify(response_object), 400
		else:
			hashed_password = bcrypt.generate_password_hash(new_password, current_app.config.get('BCRYPT_LOG_ROUNDS')).decode()
			user.password = hashed_password
			user_m.password = hashed_password
			db.session.commit()
			user_m.save()

			response_object['status'] = 'Success'
			response_object['message'] = 'Updated password. Login using your new password'
			return jsonify(response_object), 201
	except (exc.IntegrityError, ValueError) as e:		
		return jsonify(response_object), 400



@auth_blueprint.route('/auth/resetpassword/<token>') 
def update_password(token):
	email = decode_token(token, 'password-reset-salt')
	if not email:
		message = 'The password reset link is invalid or has expired or email does not exist. Try again'
		return render_template('update_password.html', message=message)

	user = User.query.filter_by(email=email).first()
	message = 'Update your password'
	# return redirect(url_for('auth.updatepasswordwithdata'))
	return render_template('update_password_form.html', message=message, token=token)




@auth_blueprint.route('/auth/resetpassword', methods=['POST']) 
def reset_password():
	post_data = request.get_json()	
	response_object = {
						'status': 'fail',
						'message': 'Invalid Information'
						}
	if not post_data:
		return jsonify(response_object), 400
	email = post_data.get('email')

	try:
		user = User.query.filter_by(email=email).first()
		if not user:
			response_object['status'] = 'Fail'
			response_object['message'] = 'User not found'
			return jsonify(response_object), 400
		else:
			token = encode_token(user.email, 'password-reset-salt')
			password_reset_url = generate_url('auth.update_password', token)
			body = render_template('email_password_reset.txt', 
									password_reset_url=password_reset_url, 
									email=user.email, 
									firstname=user.firstname, 
									lastname=user.lastname)
			subject = 'ITPACS. Reset your password'
			celery.send_task('send_async_email', args=[user.email, body, subject])

			response_object['status'] = 'success'
			response_object['message'] = 'Password reset instructions sent to your email. Check your email.'			
			return jsonify(response_object), 201
	except (exc.IntegrityError, ValueError) as e:		
		return jsonify(response_object), 400

@auth_blueprint.route('/auth/register', methods=['POST']) 
def register_user():

	post_data = request.get_json()	
	response_object = {
						'status': 'fail',
						'message': 'Invalid Payload'
						}
	if not post_data:
		return jsonify(response_object), 400

	firstname = post_data.get('firstname')
	lastname = post_data.get('lastname')
	email = post_data.get('email')
	password = post_data.get('password')

	try:
		user = User.query.filter_by(email=email).first()
		if not user:
			new_user = User(
							firstname=firstname,
							lastname=lastname,
							email=email,
							password=password
							)
			db.session.add(new_user)
			db.session.commit()

			#Saving user data to mongoDb
			new_userM = User_M(
							user_id=new_user.id,
							firstname=new_user.firstname,
							lastname=new_user.lastname,
							email=new_user.email,
							password=new_user.password
							)
			new_userM.save()

			#Email confirmation steps
			token = encode_token(new_user.email, 'email-confirm-salt')
			confirm_url = generate_url('auth.confirm_email', token)
			body = render_template('email.txt', 
									confirm_url=confirm_url, 
									email=new_user.email, 
									firstname=new_user.firstname, 
									lastname=new_user.lastname)
			subject = 'ITPACS. Confirm your email'
			
			
			#Using celery.....
			# send_async_email.delay(new_user.email, body, subject)
			# celery_app.send_task('send_async_email', args=[new_user.email, body, subject])

			celery.send_task('send_async_email', args=[new_user.email, body, subject])
			# send_mail(new_user.email, body, subject)
			new_user.email_sent = True
			db.session.commit()


			# redis_url = current_app.config.get('REDIS_URL')
			# with Connection(redis.from_url(redis_url)):
			# 	q = Queue()
			# 	q.enqueue(send_email, new_user.email, body, subject)

			
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

@auth_blueprint.route('/auth/login', methods=['POST'])
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
	
	user = User.query.filter_by(email=email).first()		

	try:
		user = User.query.filter_by(email=email).first()			
		
		
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



@auth_blueprint.route('/auth/logout', methods=['GET'])
@authenticate
def logout(resp):

	response_object = {
						'status': 'Success',
						'message': 'Successfully logged out'
	}

	return jsonify(response_object), 200


@auth_blueprint.route('/auth/application', methods=['POST'])
@authenticate
def add_application(resp):



	post_data = request.get_json()

	response_object = {
						'status': 'Failed',
						'message': 'Unable to process application',						
	}

	if not post_data:
		return jsonify(response_object), 400


	user_id = resp
	domain = post_data.get('domain')
	certificate = post_data.get('certificate')
	contact_firstname = post_data.get('contact_firstname')
	contact_lastname = post_data.get('contact_lastname')
	contact_email = post_data.get('contact_email')
	contact_streetaddress = post_data.get('contact_streetaddress')
	contact_homecountry = post_data.get('contact_homecountry')
	contact_phonenumber = post_data.get('contact_phonenumber')
	contact_company_name = post_data.get('contact_company_name')
	education_highest_degree = post_data.get('education_highest_degree')
	education_year=post_data.get('education_year')
	education_school=post_data.get('education_school')
	education_city=post_data.get('education_city')
	education_country=post_data.get('education_country')
	general_main_language=post_data.get('general_main_language')
	general_coding_years=post_data.get('general_coding_years')
	general_coding_languages=post_data.get('general_coding_languages')
	general_industry=post_data.get('general_industry')
	requirements_project_name_1=post_data.get('requirements_project_name_1')
	requirements_project_description_1=post_data.get('requirements_project_description_1')
	requirements_project_start_date_1=post_data.get('requirements_project_start_date_1')
	requirements_project_start_date_2=post_data.get('requirements_project_start_date_2')
	requirements_responsible=post_data.get('requirements_responsible')
	requirements_accountable=post_data.get('requirements_accountable')
	requirements_consulted=post_data.get('requirements_consulted')
	requirements_informed=post_data.get('requirements_informed')
	requirements_project_company_1=post_data.get('requirements_project_company_1')
	requirements_project_reference_name_1=post_data.get('requirements_project_reference_name_1')
	requirements_project_reference_email_1=post_data.get('requirements_project_reference_email_1')
	requirements_project_reference_phonenumber_1=post_data.get('requirements_project_reference_phonenumber_1')
	terms_agree=post_data.get('terms_agree')
	status=post_data.get('status')

	
	# try:		
	application_m = Application_M.objects(__raw__={'certificate': certificate, 'user_id': int(user_id)}).first()
	if not application_m:
		new_application_m = Application_M(user_id=int(user_id),
											domain= domain,
											certificate= certificate,
											contact_firstname= contact_firstname,
											contact_lastname= contact_lastname,
											contact_email= contact_email,
											contact_streetaddress= contact_streetaddress,
											contact_homecountry= contact_homecountry,
											contact_phonenumber= contact_phonenumber,
											contact_company_name= contact_company_name,
											education_highest_degree=education_highest_degree,
											education_year=education_year,
											education_school=education_school,
											education_city=education_city,
											education_country=education_country,
											general_main_language=general_main_language,
											general_coding_years=int(general_coding_years),
											general_coding_languages=general_coding_languages,
											general_industry=general_industry,          
											requirements_project_name_1=requirements_project_name_1,
											requirements_project_description_1=requirements_project_description_1,          
											requirements_project_start_date_1=requirements_project_start_date_1,
											requirements_project_start_date_2=requirements_project_start_date_2,
											requirements_responsible=requirements_responsible,
											requirements_accountable=requirements_accountable,
											requirements_consulted=requirements_consulted,
											requirements_informed=requirements_informed,
											requirements_project_company_1=requirements_project_company_1,
											requirements_project_reference_name_1=requirements_project_reference_name_1,
											requirements_project_reference_email_1=requirements_project_reference_email_1,
											requirements_project_reference_phonenumber_1=requirements_project_reference_phonenumber_1,
											terms_agree=terms_agree,
											status=status)

		new_application_m.user = User_M.objects.get(user_id=int(user_id))			
		new_application_m.save()

			#Send email of application
			

		response_object['status'] = 'success'
		response_object['message'] = 'Successfully Added Application.'			
		response_object['data'] = json.loads(new_application_m.to_json())
		
		if new_application_m.status=='submitted':
			body = render_template('applicationemail.txt', 
								application_details=response_object['data'], 
								email=new_application_m.contact_email, 
								firstname=new_application_m.contact_firstname, 
								lastname=new_application_m.contact_lastname)
			subject = f'ITPACS. Application received - {application_m.certificate}'
			redis_url = current_app.config.get('REDIS_URL')
			email = new_application_m.contact_email
			
			
			send_mail(email, body, subject)
			# with Connection(redis.from_url(redis_url)):
			# 	q = Queue()
			# 	q.enqueue(send_email, email, body, subject)



		return jsonify(response_object), 201
	else:
		application_m.update(contact_firstname= contact_firstname)
		application_m.update(contact_lastname= contact_lastname)
		application_m.update(contact_email= contact_email)
		application_m.update(contact_streetaddress= contact_streetaddress)
		application_m.update(contact_homecountry= contact_homecountry)
		application_m.update(contact_phonenumber= contact_phonenumber)
		application_m.update(contact_company_name= contact_company_name)
		application_m.update(education_highest_degree=education_highest_degree)
		application_m.update(education_year=education_year)
		application_m.update(education_school=education_school)
		application_m.update(education_city=education_city)
		application_m.update(education_country=education_country)
		application_m.update(general_main_language=general_main_language)
		application_m.update(general_coding_years=int(general_coding_years))
		application_m.update(general_coding_languages=general_coding_languages)
		application_m.update(general_industry=general_industry)         
		application_m.update(requirements_project_name_1=requirements_project_name_1)
		application_m.update(requirements_project_description_1=requirements_project_description_1)          
		application_m.update(requirements_project_start_date_1=requirements_project_start_date_1)
		application_m.update(requirements_project_start_date_2=requirements_project_start_date_2)
		application_m.update(requirements_responsible=requirements_responsible)
		application_m.update(requirements_accountable=requirements_accountable)
		application_m.update(requirements_consulted=requirements_consulted)
		application_m.update(requirements_informed=requirements_informed)
		application_m.update(requirements_project_company_1=requirements_project_company_1)
		application_m.update(requirements_project_reference_name_1=requirements_project_reference_name_1)
		application_m.update(requirements_project_reference_email_1=requirements_project_reference_email_1)
		application_m.update(requirements_project_reference_phonenumber_1=requirements_project_reference_phonenumber_1)
		application_m.update(terms_agree=terms_agree)
		application_m.update(status=status)

		application_m.reload()

		response_object['status'] = 'success'
		response_object['message'] = 'Saved Application'
		response_object['data'] = json.loads(application_m.to_json())

		#Send email of application
		if application_m.status=='submitted':
			body = render_template('applicationemail.txt', 
								application_details=response_object['data'], 
								email=application_m.contact_email, 
								firstname=application_m.contact_firstname, 
								lastname=application_m.contact_lastname)
			subject = f'ITPACS. Application received - {application_m.certificate}'
			email = application_m.contact_email
			redis_url = current_app.config.get('REDIS_URL')
			
			# with Connection(redis.from_url(redis_url)):
			# 	q = Queue()
			# 	q.enqueue(send_email, email, body, subject)
			send_mail(email, body, subject)

		return jsonify(response_object), 201
	


@auth_blueprint.route('/auth/application', methods=['GET'])
@authenticate
def get_application_details(resp):

	certificate = request.args.get('certificate')	
	application_m = Application_M.objects(__raw__={'certificate':certificate, 'user_id': int(resp)}).first()	
	if not application_m:
		new_application_m = Application_M(certificate=certificate,
										 user_id=int(resp))
		application_m_dict = json.loads(new_application_m.to_json())
	else:
		application_m_dict = json.loads(application_m.to_json())

	response_object = {
						'status': 'Success',
						'message': 'Success',
						'data': application_m_dict
					}
	return jsonify(response_object), 200


@auth_blueprint.route('/auth/status', methods=['GET'])
@authenticate
def get_user_status(resp):

	user = User.query.filter_by(id=resp).first()

	applications = Application_M.objects(__raw__={'user_id':int(resp)}).to_json()
	apps_dict = json.loads(applications)

	response_object = {
						'status': 'Success',
						'message': 'Success alert',
						'data': user.to_json(),
						'applications': apps_dict
					}

	
	return jsonify(response_object), 200

	






