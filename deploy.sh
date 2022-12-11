# cd into the directory
# cd investment.web

# pull changes
echo "Pulling updates from github..."
sudo git pull origin staging

# install and deploy frontend
cd frontend_next

echo "\n\nInstalling frontend"
sudo yarn install

echo "\n\nBuilding frontend"
sudo yarn build

echo "\n\nDeploying frontend"
pm2 stop yieldvest
pm2 start "yarn start" --name "yieldvest"

# install and deploy backend
cd .. && cd backend

echo "\n\nInstalling Backend"
pip install -r requirements.txt

echo "\n\nDeploying Backend"
pm2 stop main
pm2 start main.py --interpreter python3

sudo systemctl restart nginx
echo "\n\nDeployments done..."
