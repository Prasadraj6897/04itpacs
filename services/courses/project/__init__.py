# services/users/project/__init__.py
import os
from flask import Flask, jsonify

# instantiate the app
app = Flask(__name__)

app_settings = os.getenv('APP_SETTINGS') # new
app.config.from_object(app_settings) # new

@app.route('/courses/ping', methods=['GET'])
def ping_pong():
	return jsonify({
		'status': 'success',
		'message': 'pong!'
	})