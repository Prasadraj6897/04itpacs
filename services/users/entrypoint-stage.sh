#!/bin/sh
echo "Waiting for postgres"

while ! nc -z users-db 5432; do
	sleep 0.1
done

echo "Postgres started"
python manage.py recreatedb
python manage.py seeddb
python manage.py seedcerts
gunicorn -b 0.0.0.0:5000 app:create_app()