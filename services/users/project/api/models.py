# services/users/project/api/models.py 

from flask import current_app
import jwt
import datetime 
import sys
from project.app import db, bcrypt, mongoEngine
# from sqlalchemy.orm import relationship
# from project.app import db, bcrypt, mongoEngine, pyMongo


class Certificate_M(mongoEngine.Document):
	title = mongoEngine.StringField(max_length=200, required=True)
	date_modified = mongoEngine.DateTimeField(default=datetime.datetime.utcnow)
	code = mongoEngine.IntField(required=False)
	domain = mongoEngine.StringField(max_length=200, required=False)
	framework = mongoEngine.StringField(max_length=200, required=False)
	sub_domain = mongoEngine.StringField(max_length=200, required=False)


class User_M(mongoEngine.Document):
	user_id = mongoEngine.IntField(required=True)
	firstname = mongoEngine.StringField(max_length=200, required=True)
	lastname = mongoEngine.StringField(max_length=200, required=True)
	email = mongoEngine.StringField(max_length=200, required=True)
	password = mongoEngine.StringField(max_length=200, required=True)
	email_sent = mongoEngine.BooleanField()
	confirmed  = mongoEngine.BooleanField()

class ProfileImage_M(mongoEngine.Document):
	user = mongoEngine.ReferenceField(User_M, required=False)
	user_id = mongoEngine.IntField(required=True)
	image_location = mongoEngine.StringField(max_length=200, required=False)
	border_radius = mongoEngine.IntField(required=True)
	status = mongoEngine.IntField(required=True)

class Accountdetails_M(mongoEngine.Document):
	user = mongoEngine.ReferenceField(User_M, required=False)
	user_id = mongoEngine.IntField(required=True)
	company = mongoEngine.StringField(max_length=200, required=False)
	job_title = mongoEngine.StringField(max_length=200, required=False)
	city = mongoEngine.StringField(max_length=200, required=False)
	country = mongoEngine.StringField(max_length=200, required=False)
	instituition = mongoEngine.StringField(max_length=200, required=False)
	about_me = mongoEngine.StringField(max_length=200, required=False)
	
class Application_M(mongoEngine.Document):

	user = mongoEngine.ReferenceField(User_M, required=False)
	user_id = mongoEngine.IntField(required=True)
	domain = mongoEngine.StringField(max_length=200, required=False)
	certificate = mongoEngine.StringField(max_length=200, required=False)
	contact_firstname = mongoEngine.StringField(max_length=200, required=False)
	contact_lastname = mongoEngine.StringField(max_length=200, required=False)
	contact_email = mongoEngine.StringField(max_length=200, required=False)
	contact_streetaddress = mongoEngine.StringField(max_length=200, required=False)
	contact_homecountry = mongoEngine.StringField(max_length=200, required=False)
	contact_phonenumber = mongoEngine.StringField(max_length=200, required=False)
	contact_company_name = mongoEngine.StringField(max_length=200, required=False)
	education_highest_degree = mongoEngine.StringField(max_length=200, required=False)
	education_year=mongoEngine.StringField(max_length=200, required=False)
	education_school=mongoEngine.StringField(max_length=200, required=False)
	education_city=mongoEngine.StringField(max_length=200, required=False)
	education_country=mongoEngine.StringField(max_length=200, required=False)
	general_main_language=mongoEngine.StringField(max_length=200, required=False)
	general_coding_years=mongoEngine.IntField(required=False)
	general_coding_languages=mongoEngine.StringField(max_length=200, required=False)
	general_industry=mongoEngine.StringField(max_length=200, required=False)
	requirements_project_name_1=mongoEngine.StringField(max_length=200, required=False)
	requirements_project_description_1=mongoEngine.StringField(max_length=200, required=False)
	requirements_project_start_date_1=mongoEngine.StringField(max_length=200, required=False)
	requirements_project_start_date_2=mongoEngine.StringField(max_length=200, required=False)
	requirements_responsible=mongoEngine.StringField(max_length=200, required=False)
	requirements_accountable=mongoEngine.StringField(max_length=200, required=False)
	requirements_consulted=mongoEngine.StringField(max_length=200, required=False)
	requirements_informed=mongoEngine.StringField(max_length=200, required=False)
	requirements_project_company_1=mongoEngine.StringField(max_length=200, required=False)
	requirements_project_reference_name_1=mongoEngine.StringField(max_length=200, required=False)
	requirements_project_reference_email_1=mongoEngine.StringField(max_length=200, required=False)
	requirements_project_reference_phonenumber_1=mongoEngine.StringField(max_length=200, required=False)
	terms_agree=mongoEngine.StringField(max_length=200, required=False)
	status=mongoEngine.StringField(max_length=200, required=False)



class User(db.Model):
	__tablename__ = "users"
	id = db.Column(db.Integer, primary_key=True, autoincrement=True)
	firstname = db.Column(db.String(128), nullable=True)
	lastname = db.Column(db.String(128), nullable=False)
	email = db.Column(db.String(128), unique=True, nullable=False)
	password = db.Column(db.String, nullable=False)
	admin = db.Column(db.Boolean, default=False, nullable=False)
	email_sent = db.Column(db.Boolean, default=False, nullable=False)
	confirmed = db.Column(db.Boolean, default=False, nullable=False)
	accountdetails = db.relationship('Accountdetails', lazy='dynamic', backref=db.backref('users', lazy=True))
	

	def __init__(self, firstname, lastname, email, password):
		self.firstname = firstname
		self.lastname = lastname
		self.email = email	
		self.password = bcrypt.generate_password_hash(password, current_app.config.get('BCRYPT_LOG_ROUNDS')).decode()

	def to_json(self):
		return {
			'id': self.id,
			'firstname': self.firstname,
			'lastname': self.lastname,
			'email': self.email,
			'admin': self.admin,
			'email_sent': self.email_sent,
			'confirmed': self.confirmed,
			'accountdetails': [upload.to_json() for upload in self.accountdetails]
		}

	def showCertInfo(self, app):
		return {
				'certificate':app.certificate,
				'status': app.status
				}


	def encode_auth_token(self, user_id):
		try:
			payload = {
					'exp': datetime.datetime.utcnow() + datetime.timedelta(
																days=current_app.config.get('TOKEN_EXPIRATION_DAYS'),
																seconds=current_app.config.get('TOKEN_EXPIRATION_SECONDS')
																),
					'iat': datetime.datetime.utcnow(),
					'sub': user_id
						}
			return jwt.encode(
							payload,
							current_app.config.get('SECRET_KEY'),
							algorithm='HS256'
							)
		except Exception as e:
			return e

	@staticmethod
	def decode_auth_token(auth_token):
		
		# return auth_token
		try:
			payload = jwt.decode(auth_token, current_app.config.get('SECRET_KEY'))
			return payload['sub']
		except jwt.ExpiredSignatureError:
			return 'Signature expired. Please log in again'
		except jwt.InvalidTokenError:
			return 'Invalid Token. Please log in again'


class Application(db.Model):
	__tablename__ = "applications"
	id = db.Column(db.Integer, primary_key=True, autoincrement=True)
	user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
	domain = db.Column(db.String(128), nullable=False)
	certificate = db.Column(db.String(128), nullable=False)
	contact_firstname = db.Column(db.String(128), nullable=True)
	contact_lastname = db.Column(db.String(128), nullable=True)
	contact_email = db.Column(db.String(128), nullable=True)
	contact_streetaddress = db.Column(db.String(128), nullable=True)
	contact_homecountry = db.Column(db.String(128), nullable=True)
	contact_phonenumber = db.Column(db.String(128), nullable=True)
	contact_company_name = db.Column(db.String(128), nullable=True)
	education_highest_degree = db.Column(db.String(128), nullable=True)
	education_year=db.Column(db.String(128), nullable=True)
	education_school=db.Column(db.String(128), nullable=True)
	education_city=db.Column(db.String(128), nullable=True)
	education_country=db.Column(db.String(128), nullable=True)
	general_main_language=db.Column(db.String(128), nullable=True)
	general_coding_years=db.Column(db.Integer(), nullable=True)
	general_coding_languages=db.Column(db.String(256), nullable=True)
	general_industry=db.Column(db.String(128), nullable=True)
	requirements_project_name_1=db.Column(db.String(128), nullable=True)
	requirements_project_description_1=db.Column(db.String(512), nullable=True)
	requirements_project_start_date_1=db.Column(db.String(128), nullable=True)
	requirements_project_start_date_2=db.Column(db.String(128), nullable=True)
	requirements_responsible=db.Column(db.String(128), nullable=True)
	requirements_accountable=db.Column(db.String(128), nullable=True)
	requirements_consulted=db.Column(db.String(128), nullable=True)
	requirements_informed=db.Column(db.String(128), nullable=True)
	requirements_project_company_1=db.Column(db.String(128), nullable=True)
	requirements_project_reference_name_1=db.Column(db.String(128), nullable=True)
	requirements_project_reference_email_1=db.Column(db.String(128), nullable=True)
	requirements_project_reference_phonenumber_1=db.Column(db.String(128), nullable=True)
	terms_agree=db.Column(db.String(128), nullable=True)
	status=db.Column(db.String(128), nullable=True)

	def __init__(self, **kwargs):
		super(Application, self).__init__(**kwargs)

	def to_json(self):
		return {
			'id': self.id,
			'domain': self.domain,
			'certificate': self.certificate,
			'contact_firstname': self.contact_firstname,
			'contact_lastname': self.contact_lastname,
			'contact_email': self.contact_email,
			'contact_streetaddress': self.contact_streetaddress,
			'contact_homecountry': self.contact_homecountry,
			'contact_phonenumber': self.contact_phonenumber,
			'contact_company_name': self.contact_company_name,
			"education_highest_degree":'',
          	"education_year":self.education_year,
          	"education_school":self.education_school,
          	"education_city":self.education_city,
          	"education_country":self.education_country,
          	"general_main_language":self.general_main_language,
          	"general_coding_years":self.general_coding_years,
          	"general_coding_languages":self.general_coding_languages,
          	"general_industry":self.general_industry,          
          	"requirements_project_name_1":self.requirements_project_name_1,
          	"requirements_project_description_1":self.requirements_project_description_1,          
          	"requirements_project_start_date_1":self.requirements_project_start_date_1,
          	"requirements_project_start_date_2":self.requirements_project_start_date_2,
          	"requirements_responsible":self.requirements_responsible,
          	"requirements_accountable":self.requirements_accountable,
          	"requirements_consulted":self.requirements_consulted,
          	"requirements_informed":self.requirements_informed,
          	"requirements_project_company_1":self.requirements_project_company_1,
          	"requirements_project_reference_name_1":self.requirements_project_reference_name_1,
          	"requirements_project_reference_email_1":self.requirements_project_reference_email_1,
          	"requirements_project_reference_phonenumber_1":self.requirements_project_reference_phonenumber_1,
          	"terms_agree":self.terms_agree,
          	"status": self.status
		}

class ProfileImage(db.Model):
	__tablename__ = "profileimage"
	id = db.Column(db.Integer, primary_key=True, autoincrement=True)
	user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
	image_location = db.Column(db.String(128), nullable=False)
	border_radius = db.Column(db.String(100), nullable=False)
	status = db.Column(db.String(140), nullable=False)

	def __init__(self, **kwargs):
		super(ProfileImage, self).__init__(**kwargs)

	def to_json(self):
		return {
			'id': self.id,
			'user_id': self.user_id,
			'image_location': self.image_location,
			'border_radius': self.border_radius,
			'status': self.status,
		}

class Accountdetails(db.Model):
	__tablename__ = "accountdetails"
	id = db.Column(db.Integer, primary_key=True, autoincrement=True)
	user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
	company = db.Column(db.String(128), nullable=False)
	job_title = db.Column(db.String(100), nullable=False)
	city = db.Column(db.String(100), nullable=False)
	country = db.Column(db.String(100), nullable=False)
	instituition = db.Column(db.String(100), nullable=False)
	about_me = db.Column(db.String(140), nullable=False)

	def __init__(self, **kwargs):
		super(Accountdetails, self).__init__(**kwargs)

	def to_json(self):
		return {
			'id': self.id,
			'user_id': self.user_id,
			'company': self.company,
			'job_title': self.job_title,
			'city': self.city,
			'country': self.country,
			'instituition': self.instituition,
			'about_me': self.about_me
		}