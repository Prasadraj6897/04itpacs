import os

CELERY_BROKER_URL = 'redis://redis:6379/0'
CELERY_RESULT_BACKEND = 'redis://redis:6379/0'
CELERY_IMPORTS = ('tasks')
UPLOAD_FOLDER = '/tmp/'
S3_BUCKET = os.environ.get("S3_BUCKET")
S3_COURSE_UPLOAD_DIRECTORY = os.environ.get("S3_COURSE_UPLOAD_DIRECTORY")
S3_COURSE_FILE_UPLOAD_DIRECTORY = os.environ.get("S3_COURSE_FILE_UPLOAD_DIRECTORY")
S3_KEY = os.environ.get("S3_KEY")
S3_SECRET = os.environ.get("S3_SECRET")
S3_LOCATION = 'http://{}.s3.amazonaws.com/'.format(S3_BUCKET)