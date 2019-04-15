

# from app import db, mongoEngine, pyMongo
# from pymongo import MongoClient
# # from project import db
# from api.models import User, User_M
from flask_mail import Message, Mail
# from users.project.app import create_app
from flask import current_app

import os.path

import time

from . app import celery, create_app

import sys
import boto

import base64

from . import celeryconfig


@celery.task(name='send_async_email')
def send_async_email(email, body, subject):

	message = Message(subject=subject,
						 recipients=[email, 'contact@itpacs.org'],
						 sender='contact@itpacs.org')
	message.body = body

	app = create_app()
	mail = Mail()
	mail.init_app(app)
	with app.app_context():
		mail.send(message)




@celery.task(name='users.fib')
def fib(n):
    time.sleep(2)  # simulate slow computation
    if n < 0:
        return []
    elif n == 0:
        return [0]
    elif n == 1:
        return [0, 1]
    else:
        results = fib(n - 1)
        results.append(results[-1] + results[-2])
        return results

@celery.task(name='add')
def add(x, y):
	time.sleep(2)

	result = x + y
	print('YY22', file=sys.stderr)
	print(result, file=sys.stderr)	
	return result
	

@celery.task(name='subtract')
def subtract(x, y, user):

	result = x - y
	client = MongoClient('mongodb://mongodb:27017/itpacs01')
	db = client.itpacs01
	collection = db.testingcelery
	collection.insert({'result': result, 'user': user})
	return result

@celery.task(name='divide')
def divide(x, y):
	time.sleep(5)
	return x/y


@celery.task(name='s3_upload_image')
def s3_upload_image(data):

	# print(type(data["imageStr"]), file=sys.stderr)
	try :
		conn = boto.connect_s3(data['S3_KEY'], data['S3_SECRET'])
		b = conn.get_bucket(data['S3_BUCKET'], validate=False)
		sml = b.new_key("/".join([data['S3_UPLOAD_DIRECTORY'], data['destinationFileName']]))
		sml.set_metadata('Content-Type', 'image/jpeg')
		sml.set_contents_from_string(base64.b64decode(data['Image_String']))
		sml.set_acl(data['acl'])
		object_url = "https://s3-{0}.amazonaws.com/{1}/{2}/{3}".format(data["S3_LOCATION"], data["S3_BUCKET"], data["S3_UPLOAD_DIRECTORY"], data["destinationFileName"])

		return object_url

	except Exception as e:
		return e


@celery.task(name='s3_delete_image')
def s3_delete_image(data):

	try:
		from boto.s3.connection import S3Connection, Bucket, Key
		conn = S3Connection(data['S3_KEY'], data['S3_SECRET'])
		b = Bucket(conn, data['S3_BUCKET'])
		k = Key(b)
		k.key = data['S3_UPLOAD_DIRECTORY']+'/'+ data['destinationFileName']
		b.delete_key(k)

	except Exception as e:
		return e