

# from app import db, mongoEngine, pyMongo
# from pymongo import MongoClient
# # from project import db
# from api.models import User, User_M
from flask_mail import Message, Mail
# from users.project.app import create_app
from flask import current_app


import time

from . app import celery, create_app


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
