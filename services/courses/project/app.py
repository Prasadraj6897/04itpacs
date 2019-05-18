import os
from flask import Flask, jsonify
from .extensions import db, mongoEngine, migrate, bcrypt
from .config import BaseConfig
import sys
from . import celeryconfig
from flask_cors import CORS
from celery import Celery
celery = Celery(__name__, broker='redis://redis:6379/0', backend='redis://redis:6379/0')



def create_app(script_info=None):



	# instantiate the app
	app = Flask(__name__)
	

	app_settings = os.getenv('APP_SETTINGS') # new
	app.config.from_object(app_settings) # new

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

	#register blue prints
	from project.api.courses import courses_blueprint
	app.register_blueprint(courses_blueprint)

	from project.api.cauth import cauth_blueprint
	app.register_blueprint(cauth_blueprint)
	
	

	extensions(app)

	celery.config_from_object(celeryconfig)

	return app

def extensions(app):

	CORS(app)
	db.init_app(app)
	migrate.init_app(app, db)
	bcrypt.init_app(app)
	mongoEngine.init_app(app)
	

	return None