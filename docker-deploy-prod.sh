#!/bin/sh
if [ -z "$TRAVIS_PULL_REQUEST" ] || [ "$TRAVIS_PULL_REQUEST" == "false" ]
then
	if [ "$TRAVIS_BRANCH" == "production" ]
	then
		JQ="jq --raw-output --exit-status"
		
		configure_aws_cli() {
			aws --version
			aws configure set default.region ap-southeast-1
			aws configure set default.output json
			echo "AWS Configured!"
		}

		register_definition() {
			if revision=$(aws ecs register-task-definition --cli-input-json "$task_def" |
			$JQ '.taskDefinition.taskDefinitionArn'); then
			echo "Revision: $revision"
			else
			echo "Failed to register task definition"
			return 1
			fi
		}

		update_service() {
			if [[ $(aws ecs update-service --cluster $cluster --service $service --task-definition $revision | $JQ '.service.taskDefinition') != $revision ]]; then
				echo "Error updating service."
			return 1
			fi
			}
		
		deploy_cluster() {

			cluster="itpacs-production-cluster"
		
		# users
			service="itpacs-users-prod-service"
			template="ecs_users_prod_taskdefinition.json"
			task_template=$(cat "ecs/$template")
			task_def=$(printf "$task_template" $AWS_ACCOUNT_ID $AWS_RDS_URI $DB_MONGO_URL $PRODUCTION_SECRET_KEY $MONGODB_HOST $AWS_ACCOUNT_ID $MONGO_INITDB_ROOT_USERNAME $MONGO_INITDB_ROOT_PASSWORD $MONGO_INITDB_DATABASE $AWS_ACCOUNT_ID $MAIL_PASSWORD $MAIL_USERNAME)
			echo "$task_def"
			register_definition
			update_service

		# client
			service="itpacs-client-prod-service"
			template="ecs_client_prod_taskdefinition.json"
			task_template=$(cat "ecs/$template")
			task_def=$(printf "$task_template" $AWS_ACCOUNT_ID)
			echo "$task_def"
			register_definition
			update_service

		# swagger
			service="itpacs-swagger-prod-service"
			template="ecs_swagger_prod_taskdefinition.json"
			task_template=$(cat "ecs/$template")
			task_def=$(printf "$task_template" $AWS_ACCOUNT_ID)
			echo "$task_def"
			register_definition
			update_service

		# #exercises
		# 	service="testdriven-exercises-stage-service"
		# 	template="ecs_exercises_stage_taskdefinition.json"
		# 	task_template=$(cat "ecs/$template")
		# 	task_def=$(printf "$task_template" $AWS_ACCOUNT_ID $AWS_ACCOUNT_ID)
		# 	echo "$task_def"
		# 	register_definition
		# 	# update_service

		# #scores
		# 	service="testdriven-scores-stage-service"
		# 	template="ecs_scores_stage_taskdefinition.json"
		# 	task_template=$(cat "ecs/$template")
		# 	task_def=$(printf "$task_template" $AWS_ACCOUNT_ID $AWS_ACCOUNT_ID)
		# 	echo "$task_def"
		# 	register_definition
		# 	# update_service
		}
		
		configure_aws_cli
		deploy_cluster
			fi
		fi

