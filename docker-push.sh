#!/bin/sh


if [ -z "$TRAVIS_PULL_REQUEST" ] || [ "$TRAVIS_PULL_REQUEST" == "false" ]
	then

	if [[ "$TRAVIS_BRANCH" == "staging" ]]; then
		export DOCKER_ENV=stage
		export REACT_APP_USERS_SERVICE_URL="http://itpacs-stage-alb-1979562201.ap-southeast-1.elb.amazonaws.com"
	elif	[[ "$TRAVIS_BRANCH" == "production" ]]; then
		export DOCKER_ENV=prod

	fi

	if [ "$TRAVIS_BRANCH" == "staging" ] || \
		[ "$TRAVIS_BRANCH" == "production" ]
	then

		curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
		unzip awscli-bundle.zip
		./awscli-bundle/install -b ~/bin/aws
		export PATH=~/bin:$PATH
		eval $(aws ecr get-login --region ap-southeast-1 --no-include-email)
		export TAG=$TRAVIS_BRANCH
		export REPO=$AWS_ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com
	fi 

	if [ "$TRAVIS_BRANCH" == "staging" ] || \
		[ "$TRAVIS_BRANCH" == "production" ]
	then

		# users
		docker build $USERS_REPO -t $USERS:$COMMIT -f Dockerfile-$DOCKER_ENV
		docker tag $USERS:$COMMIT $REPO/$USERS:$TAG
		docker push $REPO/$USERS:$TAG
		echo "Hello"
		echo $USERS:$COMMIT
		# users db
		docker build $USERS_DB_REPO -t $USERS_DB:$COMMIT -f Dockerfile
		docker tag $USERS_DB:$COMMIT $REPO/$USERS_DB:$TAG
		docker push $REPO/$USERS_DB:$TAG

		# client
		docker build $CLIENT_REPO -t $CLIENT:$COMMIT -f Dockerfile-$DOCKER_ENV --build-arg REACT_APP_USERS_SERVICE_URL=$REACT_APP_USERS_SERVICE_URL
		docker tag $CLIENT:$COMMIT $REPO/$CLIENT:$TAG
		docker push $REPO/$CLIENT:$TAG

		# swagger
		docker build $SWAGGER_REPO -t $SWAGGER:$COMMIT -f Dockerfile-$DOCKER_ENV
		docker tag $SWAGGER:$COMMIT $REPO/$SWAGGER:$TAG
		docker push $REPO/$SWAGGER:$TAG

		#create and push mongo repo from github to ECR
		docker build $MONGO_REPO -t $MONGO:$COMMIT -f Dockerfile-prod
		docker tag $MONGO:$COMMIT $REPO/$MONGO:$TAG
		docker push $REPO/$MONGO:$TAG

		#Celery
		docker build $CELERY_REPO -t $CELERY:$COMMIT -f Dockerfile-$DOCKER_ENV
		docker tag $CELERY:$COMMIT $REPO/$CELERY:$TAG
		docker push $REPO/$CELERY:$TAG
	fi
fi

