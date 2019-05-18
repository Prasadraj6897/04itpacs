import os

class BaseConfig:
	"""Base configuration"""
	TESTING = False
	SQLALCHEMY_TRACK_MODIFICATIONS = False
	BCRYPT_LOG_ROUNDS = 4
	SECRET_KEY = os.environ.get('SECRET_KEY')
	TOKEN_EXPIRATION_DAYS = 30
	TOKEN_EXPIRATION_SECONDS = 0
	REDIS_URL = 'redis://redis:6379/0'
	QUEUES = ['default']
	CELERY_RESULT_BACKEND=os.environ.get('CELERY_BACKEND')
	CELERY_BROKER_URL=os.environ.get('CELERY_BROKER')
	CELERY_IMPORTS = ('tasks')
	UPLOAD_FOLDER = '/tmp/'
	S3_BUCKET = os.environ.get("S3_BUCKET")
	S3_COURSE_UPLOAD_DIRECTORY = os.environ.get("S3_COURSE_UPLOAD_DIRECTORY")
	S3_COURSE_FILE_UPLOAD_DIRECTORY = os.environ.get("S3_COURSE_FILE_UPLOAD_DIRECTORY")
	S3_KEY = os.environ.get("S3_KEY")
	S3_SECRET = os.environ.get("S3_SECRET")
	S3_LOCATION = 'ap-southeast-1'
	MONGODB_HOST = os.environ.get('DB_MONGO_URL')



class DevelopmentConfig(BaseConfig):
	"""Development configuration"""
	SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
	MONGO_URI = os.environ.get('DB_MONGO_URL')
	MONGOALCHEMY_DATABASE = os.environ.get('DB_MONGO_URL')
	MONGODB_HOST = os.environ.get('DB_MONGO_URL')


class TestingConfig(BaseConfig):
	"""Testing configuration"""
	TESTING = True
	SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_TEST_URL')
	MONGO_URI = os.environ.get('DB_MONGO_URL')
	MONGOALCHEMY_DATABASE = os.environ.get('DB_MONGO_URL')
	MONGODB_HOST = os.environ.get('DB_MONGO_URL')



class ProductionConfig(BaseConfig):
	"""Production configuration"""
	SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
	MONGO_URI = os.environ.get('DB_MONGO_URL')
	MONGOALCHEMY_DATABASE = os.environ.get('DB_MONGO_URL')
	MONGODB_HOST = os.environ.get('DB_MONGO_URL')