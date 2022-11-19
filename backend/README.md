# My Stock Plug Backend

## Processing Scripts
The processing scripts are responsible for pulling data from an external financial API and using those data to analyse and rank companies based on their metrics. The scripts are executed every hour.
The scripts are divided into three major categories:

### Date Gathering
The data gathering script is the first script that runs. Its main job is to fetch the required data that will be used for the ranking. To do this:
- It will start by fetching companies from the API. From the list of companies, only four is selected at random (this is due to the limitation of the free plan of the API). At this stage, the script creates company records for any company that is not already existing in the system.
- The next stage is to fetch all the stock prices records if each company from the API. It inserts new records and updates existing records.
- The final stage is to fetch all financial records of each company from the API. It also inserts new records and updates existing records.

### How to run
The script is configured in the `main.py` to startup automatically as soon as the application boots. To execute the script, just run 'python main.py' to startup the application.
