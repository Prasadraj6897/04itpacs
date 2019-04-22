from flask import Blueprint, jsonify, request, render_template


courses_blueprint = Blueprint('courses', __name__, template_folder='./templates')


@courses_blueprint.route('/courses/ping', methods=['GET'])
def ping_pong():
	return jsonify({
		'status': 'success',
		'message': 'pong return!'
	})