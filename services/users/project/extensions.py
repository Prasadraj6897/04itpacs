from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_mongoalchemy import MongoAlchemy
from flask_mongoengine import MongoEngine
# from flask_pymongo import PyMongo
from flask_mail import Message, Mail
from .config_default import BaseConfig


#instantiate the db
db = SQLAlchemy()
migrate = Migrate()
bcrypt = Bcrypt()
mongoEngine = MongoEngine()
# pyMongo = PyMongo()
mail = Mail()
