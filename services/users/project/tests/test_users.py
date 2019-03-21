# services/users/project/tests/test_users.py 

import json
import unittest

from project.tests.base import BaseTestCase
from project import db 
from project.api.models import User

def add_user(username, email):
	user = User(username=username, email=email)
	db.session.add(user)
	db.session.commit()
	return user

class TestUserService(BaseTestCase):
	"""Tests for the Users Service. """

	def test_users(self):
		response = self.client.get('/users/ping')
		data = json.loads(response.data.decode())
		self.assertEqual(response.status_code, 200)
		self.assertIn('pong', data['message'])
		self.assertIn('success', data['status'])

	def test_add_user(self):
		"""Ensure new user can be added to the database"""
		with self.client:
			response = self.client.post('/users', data=json.dumps({
				'username': 'tina',
				'email': 'tina.prislan@gmail.com'
				}), 
			content_type='application/json',
			)

			data = json.loads(response.data.decode())
			self.assertEqual(response.status_code, 201)
			self.assertIn('tina.prislan@gmail.com was added', data['message'])
			self.assertIn('success', data['status'])

	def test_add_user_invalid_json(self):
		"""Ensure error is thrown if JSON object is empty"""
		with self.client:
			response = self.client.post('/users', data=json.dumps({}), 
										content_type='application/json',)
			data = json.loads(response.data.decode())
			self.assertEqual(response.status_code, 400)
			self.assertIn('Invalid payload', data['message'])
			self.assertIn('fail', data['status'])

	def test_single_user(self):
		"""Get a Single user based on id"""
		
		user = add_user('tina', 'tina.prislan@gmail.com')

		with self.client:
			response = self.client.get(f'/users/{user.id}')
			data = json.loads(response.data.decode())
			self.assertEqual(response.status_code, 200)
			self.assertIn('tina', data['data']['username'])
			self.assertIn('tina.prislan@gmail.com', data['data']['email'])
			self.assertIn('success', data['status'])

	def test_single_user_no_id(self):
		"""When a id is not present"""
		with self.client:
			response = self.client.get('/users/9999')
			data = json.loads(response.data.decode())
			self.assertEqual(response.status_code, 404)
			self.assertIn('fail', data['status'])
			self.assertIn('User does not exist', data['data']['message'])



	def test_all_users(self):
		"""Ensure get all users method works"""
		add_user('roshan', 'roshan.prakash@ikompass.com')
		add_user('deepak', 'deepugs007@gmail.com')
		add_user('rakesh', 'rakesh@ikompass.com')
		add_user('babu', 'babu@test.com')

		with self.client:
			response = self.client.get('/users')
			data = json.loads(response.data.decode())
			self.assertEqual(response.status_code, 200)
			self.assertEqual(len(data['data']['users']), 3)
			self.assertIn('roshan', data['data']['users'][0]['username'])
			self.assertIn('deepak', data['data']['users'][1]['username'])
			self.assertIn('roshan.prakash@ikompass.com', data['data']['users'][0]['email'])
			self.assertIn('deepugs007@gmail.com', data['data']['users'][1]['email'])
			self.assertIn('success', data['status'])


	def test_main_no_user(self):
		"""Ensure the main route behaves correctly when no users in the db"""

		with self.client:
			response = self.client.get('/')
			self.assertEqual(response.status_code, 200)
			self.assertIn(b'<h1>All Users</h1>', response.data)
			self.assertIn(b'<p>No users!</p>', response.data)

	def test_main_with_users(self):
		"""Ensure the main route behaves when users are in the db"""
		add_user(username='Julien', email='billing@ikompass.com')
		add_user(username='Stephanie', email='inurtura@gmail.com')

		with self.client:
			response = self.client.get('/')
			self.assertEqual(response.status_code, 200)
			self.assertIn(b'Julien', response.data)
			self.assertIn(b'Stephanie', response.data)
			self.assertIn(b'<h1>All Users</h1>', response.data)
			self.assertNotIn(b'<p>No users!</p>', response.data)

	def test_main_add_user(self):
		"""Ensure a user can be added through a form"""
		with self.client:
			response = self.client.post('/', 
										data=dict(username='rakesh', email='rakesh@ikompass.com'),
										follow_redirects =True
										)
			self.assertEqual(response.status_code, 200)
			self.assertIn(b'<h1>All Users</h1>', response.data)
			self.assertNotIn(b'<p>No users!</p>', response.data)
			self.assertIn(b'rakesh', response.data)



if __name__=='__main__':
	unittest.main()