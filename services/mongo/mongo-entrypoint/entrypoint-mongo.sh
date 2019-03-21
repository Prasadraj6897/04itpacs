#!/usr/bin/env bash
echo "Creating mongo users..."
mongo admin --host localhost -u itpacs -p Inurtura123 --eval "db.createUser({user: 'roshan', pwd: 'Inurtura123', roles: [{role: 'readWrite', db: 'itpacs01'}]});"
echo "Mongo users created."