# cd into the directory
# cd investment.web

# pull changes
echo "Pulling updates from github..."
sudo git pull origin staging

# install and deploy frontend
cd frontend

echo "\n\nInstalling frontend"
sudo yarn install

echo "\n\nBuilding frontend"
sudo yarn build

echo "\n\nDeploying frontend"
sudo cp build /var/www/html -r
sudo systemctl restart nginx


# install and deploy backend
cd .. && cd backend
#ls -la
echo "\n\nInstalling Backend"
pip install -r requirements.txt
#python3 main.py
echo "\n\nDeploying Backend"
whoami #pm2 stop main
sudo pm2 restart main.py --interpreter python3 #--name main
pm2 list
sudo pm2 list #sudo systemctl restart nginx
echo "\n\nDeployments done..."
