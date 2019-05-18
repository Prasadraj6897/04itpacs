from flask_sqlalchemy import SQLAlchemy
from flask_mongoalchemy import MongoAlchemy
from flask_mongoengine import MongoEngine
from .config import BaseConfig
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt


db = SQLAlchemy()
mongoEngine = MongoEngine()
migrate = Migrate()
bcrypt = Bcrypt()

