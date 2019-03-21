#!/bin/sh
echo "Waiting for postgres"

while ! nc -z users-db 5432; do
	sleep 0.1
done

echo "Postgres started"
# python manage.py run --host 0.0.0.0
python manage.py recreatedb
python manage.py seeddb
python manage.py seedcerts
gunicorn -b 0.0.0.0:5000 --timeout 90 --access-logfile - 'project.app:create_app()'