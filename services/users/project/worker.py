import os
from . app import celery, create_app
from . import tasks


app = create_app(os.getenv('APP_SETTINGS'))
app.app_context().push()