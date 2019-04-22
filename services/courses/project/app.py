# services/users/project/app.py
import os
from flask import Flask, jsonify


def create_app(script_info=None):

	# instantiate the app
	app = Flask(__name__)

	app_settings = os.getenv('APP_SETTINGS') # new
	app.config.from_object(app_settings) # new

	#register blue prints
	from project.api.courses import courses_blueprint
	app.register_blueprint(courses_blueprint)

	return app