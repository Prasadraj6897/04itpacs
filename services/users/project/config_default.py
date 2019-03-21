#services/users/project/config.py 

import os

class BaseConfig:
	"""Base Configuration"""
	TESTING = False
	SQLALCHEMY_TRACK_MODIFICATIONS = False
	BCRYPT_LOG_ROUNDS = 4
	SECRET_KEY = os.environ.get('SECRET_KEY')
	TOKEN_EXPIRATION_DAYS = 30
	TOKEN_EXPIRATION_SECONDS = 0
	REDIS_URL = 'redis://redis:6379/0'
	QUEUES = ['default']
	MAIL_SERVER = 'secure.emailsrvr.com'
	MAIL_PORT = 587
	MAIL_USE_SSL = False
	MAIL_USE_TLS = True
	MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
	MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
	MAIL_DEFAULT_SENDER = 'contact@itpacs.org'
	MAIL_DEBUG = True
	MAIL_SUPPRESS_SEND = False
	CELERY_RESULT_BACKEND=os.environ.get('CELERY_BACKEND')
	CELERY_BROKER_URL=os.environ.get('CELERY_BROKER')
	CELERY_IMPORTS = ('tasks')
	
	#Flask-pymongo var
	# MONGO_URI = os.environ.get('DB_MONGO_URL')
	# SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
	# MONGOALCHEMY_DATABASE = os.environ.get('DB_MONGO_URL')

	# #Flask-mongoengine variables
	# MONGODB_USERNAME=os.environ.get('MONGODB_USERNAME')
	# MONGODB_PASSWORD=os.environ.get('MONGODB_PASSWORD')
	# MONGODB_DB='itpacs01'
	MONGODB_HOST = os.environ.get('DB_MONGO_URL')
	

class DevelopmentConfig(BaseConfig):
	"""Development Configuration"""
	SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
	MONGO_URI = os.environ.get('DB_MONGO_URL')
	MONGOALCHEMY_DATABASE = os.environ.get('DB_MONGO_URL')
	MONGODB_HOST = os.environ.get('DB_MONGO_URL')


class TestingConfig(BaseConfig):
	"""Testing Configuration"""
	TESTING = True
	SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_TEST_URL')

class ProductionConfig(BaseConfig):
	"""Production Configuration"""
	SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
	MONGO_URI = os.environ.get('DB_MONGO_URL')
	MONGOALCHEMY_DATABASE = os.environ.get('DB_MONGO_URL')
	MONGODB_HOST = os.environ.get('DB_MONGO_URL')


class StagingConfig(BaseConfig):
	"""Staging Configuration"""
	SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
	MONGO_URI = os.environ.get('DB_MONGO_URL')
	MONGOALCHEMY_DATABASE = os.environ.get('DB_MONGO_URL')
	MONGODB_HOST = os.environ.get('DB_MONGO_URL')
