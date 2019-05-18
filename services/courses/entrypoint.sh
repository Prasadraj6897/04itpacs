#!/bin/sh

echo "Waiting for postgres..."

while ! nc -z courses-db 5432; do
	sleep 0.1

done

echo "PostgreSQL started"

python manage.py run -h 0.0.0.0
python manage.py seeddb
python manage.py seedcerts
gunicorn -b 0.0.0.0:5000 --timeout 90 --access-logfile - 'project.app:create_app()'