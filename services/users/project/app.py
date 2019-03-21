# services/users/project/__init__.py

import os
import datetime
from flask import Flask, jsonify
# from flask_sqlalchemy import SQLAlchemy
import sys
from flask_cors import CORS
# from project.extensions import db, migrate, bcrypt, mongoEngine, pyMongo, mail, celery_app
# from .extensions import db, migrate, bcrypt, mongoEngine, pyMongo, mail
from .extensions import db, migrate, bcrypt, mongoEngine, mail
from .config_default import BaseConfig

from . import celeryconfig

#create celery as a global variable. It will in configured when create app is called. 
from celery import Celery
celery = Celery(__name__, broker='redis://redis:6379/0', backend='redis://redis:6379/0')



# import tasks
# from project import tasks 

#instantiate the db
# db = SQLAlchemy()
# migrate = Migrate()
# bcrypt = Bcrypt()
# mongoEngine = MongoEngine()
# pyMongo = PyMongo()


# celery_app = Celery(__name__, broker=config.CELERY_BROKER_URL, backend=config.CELERY_RESULT_BACKEND)


# CELERY_TASK_LIST = ['tasks']



# def create_celery_app(app=None):
# 	app = app or create_app()
# 	celery = Celery(app.import_name, broker=app.config['CELERY_BROKER_URL'], include=CELERY_TASK_LIST)
# 	celery.conf.update(app.config)
# 	TaskBase = celery.Task

# 	class ContextTask(TaskBase):
# 		abstract = True
# 		def __call__(self, *args, **kwargs):
# 			with app.app_context():
# 				return TaskBase.__call__(self, *args, **kwargs)

# 	celery.Task = ContextTask
# 	return celery



def create_app(script_info=None):
	#instantiate the app
	app = Flask(__name__)

	# CORS(app)

	#set config
	app_settings = os.getenv('APP_SETTINGS')
	app.config.from_object(app_settings)


	HOST = 'mongodb'  # ex: 'oceanic.mongohq.com'
	db_settings = {
    'MONGODB_DB': 'itpacs01',
    'MONGODB_USERNAME': 'itpacs',
    'MONGODB_PASSWORD': 'Inurtura123',
    'MONGODB_PORT': 27017,
	}
	app.config = dict(list(app.config.items()) + list(db_settings.items()))
	app.config["MONGODB_HOST"] = ('mongodb://%(MONGODB_USERNAME)s:%(MONGODB_PASSWORD)s@'+
                               HOST +':%(MONGODB_PORT)s/%(MONGODB_DB)s') % db_settings

	
	# app.config["MONGODB_HOST"] = "mongodb://itpacs:Inurtura123@mongodb:27017/itpacs01"
	# db = MongoEngine(app)


# 	app.config['MONGODB_SETTINGS'] = {
#     'db': 'itpacs01',
#     'username': 'itpacs',
#     'password': 'Inurtura123',
#     "host": os.environ.get("DB_MONGO_URL")
# }

	# app.config['MONGODB_USERNAME']='itpacs'
	# app.config['MONGODB_PASSWORD']='Inurtura123'
	# app.config['MONGODB_HOST'] = os.environ.get('DB_MONGO_URL')
	# app.config['MONGO_DBNAME'] = 'itpacs01'
# 	app.config['MONGO_AUTH_SOURCE'] = 'admin'

	#set up extensions
	# db.init_app(app)
	# migrate.init_app(app, db)
	# bcrypt.init_app(app)
	# mongoEngine.init_app(app)
	# pyMongo.init_app(app)
	# mail.init_app(app)





	#register blue prints
	from project.api.users import users_blueprint
	app.register_blueprint(users_blueprint)

	from project.api.auth import auth_blueprint
	app.register_blueprint(auth_blueprint)

	extensions(app)

	# app.config['CELERY_BROKER_URL'] = 'redis://redis:6379/0'
	# app.config['CELERY_RESULT_BACKEND'] = 'redis://redis:6379/0'
	# app.config['CELERY_IMPORTS']=('tasks')

	# celery_app.config_from_object(config)
	# celery.conf.update(celeryconfig)
	

	# celery.conf.update(
	# 		broker_url='redis://redis:6379/0',
	# 		result_backend='redis://redis:6379/0',
	# 		CELERY_IMPORTS=('tasks'))

	
	# celery.config.from_pyfile('celeryconfig.py')
	
	celery.config_from_object(celeryconfig)
	# celery.conf.update(app.config)


	#shell context for flask cli
	# app.shell_context_processor({'app': app, 'db': db, 'mongoEngine': mongoEngine})

	return app

def extensions(app):

	CORS(app)
	db.init_app(app)
	migrate.init_app(app, db)
	bcrypt.init_app(app)
	mongoEngine.init_app(app)
	# pyMongo.init_app(app)
	mail.init_app(app)


	return None

# celery = create_celery_app()


