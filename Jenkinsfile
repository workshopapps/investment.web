pipeline {

	agent any
	stages {
		
		
		
					
		stage("build frontend"){

			steps {
				sh "cd frontend_next"
				sh "cd frontend_next && yarn install && CI=false sudo yarn run build"
			} 
                } 
        	stage("build backend"){

			steps {
				sh "cd backend"
				sh "cd backend && python3 -m pip install --upgrade pip"
				sh "cd backend && pip3 install -r requirements.txt --force"
			} 
        	}
		stage("deploy") {
		
			steps {

				//sh "sudo pm2 delete main"
				//sh "sudo pm2 delete yieldvest"
				sh "sudo pm2 restart main"
				sh "cd frontend_next &&  sudo pm2 start 'yarn start' --name 'yieldvest'"
				sh "sudo pm2 save"
			}
			
		}


        }	



}
