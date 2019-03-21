#!/bin/sh
cd app  
echo "Celery about to start"
su -m app -c "celery -A tasks worker --loglevel debug" 