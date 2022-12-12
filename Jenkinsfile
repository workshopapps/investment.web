pipeline {

	agent any
	stages {
		
		
					
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
