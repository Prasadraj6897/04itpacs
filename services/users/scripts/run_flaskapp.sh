#!/bin/sh
cd app
echo "Flask App about to start"
# su -m app -c "python app.py"
gunicorn -b 0.0.0.0:5000 manage:app