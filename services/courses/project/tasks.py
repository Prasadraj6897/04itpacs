from flask import current_app

import os.path

from . app import celery, create_app

import sys
import boto

import base64

from . import celeryconfig


@celery.task(name='s3_upload_image')
def s3_upload_image(data):

	try :
		conn = boto.connect_s3(data['S3_KEY'], data['S3_SECRET'])
		b = conn.get_bucket(data['S3_BUCKET'], validate=False)
		sml = b.new_key("/".join([data['S3_COURSE_UPLOAD_DIRECTORY'], data['destinationFileName']]))
		sml.set_metadata('Content-Type', 'image/jpeg')
		sml.set_contents_from_string(base64.b64decode(data['Image_String']))
		sml.set_acl(data['acl'])
		object_url = "https://s3-{0}.amazonaws.com/{1}/{2}/{3}".format(data["S3_LOCATION"], data["S3_BUCKET"], data["S3_COURSE_UPLOAD_DIRECTORY"], data["destinationFileName"])

		return object_url

	except Exception as e:
		return e