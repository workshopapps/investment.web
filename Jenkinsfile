pipeline {

	agent any
	stages {
		
		stage("Pull changes"){

			steps {
				sh "sudo git config --global --add safe.directory /home/aybims/investment.web"
				sh "sudo bash /home/aybims/investment.web/gitpull.sh"
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
