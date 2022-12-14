pipeline {

	agent any
	stages {
		stage('Pull changes') {
            steps {
                sh 'sudo su && cd /home/aybims/investment.web && sudo git pull origin staging'
                sh 'sudo su && cd /home/aybims/investment.web/frontend_next && sudo yarn install && sudo yarn build'
            }
        }
					
		stage("Deploy Frontend"){

			steps {
				sh "sudo systemctl restart yieldvest-frontend.service"
			} 
                } 
        	stage("Deploy backend"){

			steps {
				sh "sudo systemctl restart yieldvest-api.service"
			} 
        	}


	}

}
