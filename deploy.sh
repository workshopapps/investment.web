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

echo "\n\nInstalling Backend"
pip install -r requirements.txt

echo "\n\nDeploying Backend"
pm2 stop main
pm2 start main.py --interpreter python3
pm2 save

echo "\n\nDeployments done..."
