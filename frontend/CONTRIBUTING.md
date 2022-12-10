# Contributing to My Stock Plug Web App

## IMPORTANT!!! : OPEN YOUR PULL REQUESTS ON `dev` BRANCH, NOT `main`

-   #### Commiting your changes

    Now, you can start making changes that relates to your issues and then commiting them. To do this, follow these instructions:

    -   First, create a branch with the feat prefixing the name of the feature you are to implement.
    -   For example, do this by running `git checkout -b feat/FE-1-company-profile`
    -   Make your changes.
    -   add the changes using `git add .` or any one that serves your needs.
    -   add concise commit messages, referencing your issue number with a close action.
        > e.g `git commit -m "feat(FE-1): added the company profile page"`
        >
        > What this mean is that, when the PR leads merge your pull request (More on that below). Issue #21 is automatically closed.
    -   run `git push origin [name of the repo you created]`
        > For the example above, you run
        >
        > `git push origin feat/signup`
        >
        > Which pushes your changes to your online copy, after which you then open a pull request.
    -   Here is a [Video](https://youtu.be/VY4-yw7dbY8) showing how to perform that.

-   #### Opening Pull requests

    Now that you have updated your online copy. You will need a way to inform the PR Leads handling the original repository that your contribution is ready. To do that, you open a Pull request, which simply means that you want them to combine(merge) your changes with that of the original repository. Because, what is the essence of making changes without the changes being merged right?

    To open a pull request, immediately after the last step (commiting your changes with push):

    -   Head over to your github account. And click on your own copy of the zc_main repository.
    -   You will see the option to open a pull request.
    -   Create your pull request with the title `feat(FE-1): My PR adds a feature`
    -   Explain what your changes does, adding images and proof (test) if needed.
    -   Click the open pull request button and wait.
    -   Add comments where neccesary and wait for the PR Leads to check.
        Here is a [Video](https://youtu.be/3_LgvC0-Om4) showing how to go about it.

-   #### Constantly update from upstream

    Now that you have your issues, you have forked the repository, you have cloned the repository and also set the upstream. To stay up to date and avoid conflicts. Before you edit anything, you need to update your local copy. Therefore, whenever you want to make any change, first run an update command like so:

    -   In the directory of the project on your local machine
    -   Open the terminal.
    -   Run `git pull upstream main`
        > This will check for any changes that have been made to the original repository, it will then bring those changes to your local machine and merge (merge) the changes.

### Commit Messages

Commit messages should include concise messages about what was done and what has changed. Failure to follow this would result in the pull request being rejected.

## Other Information

-   Check if there are any linting errors by running `yarn format` before commiting your code.
-   Please make sure your commit messages and pr titles give enough info about the changes you've made.

-   ### Pull Requests

    -   Take note of all instructions above
    -   The main branch for development would be the **DEV** branch
    -   Do not make a pull request with changes to the main branch
    -   Whatever task it is that you do must be responsive on all screens
    -   Add a live link to your Pull Request
    -   Make sure your commit messages and PR title are precise and meaningful, no..."it is now working" or "finally" commit messages, else your PR may not be merged
    -   Add a screenshot of what it is that you've worked on for all screens...mobile, tab, desktop screens
    -   Make sure your branch is up to date with the main branch and without conflicts before making your pull request, if not your PR may not be merged
    -   Push your code as soon as you can [ASAP]
    -   Link whatever issue it is that you worked on to your pull request
    -   Add all other neccessary links you may have to your pull request including the link to the design
    -   In the comment section of the pull request, document your work thoroughly(a helpful description)
    -   In a situation where you work on functional parts add a show `what it does` video if you can
    -   Do `git fetch` at least twice a day to be up to date with the repo
    -   Always do a git fetch or pull of the main branch before you write code and before making your pull request
    -   Your pull request must not change the work of others
    -   Your work should be pixel perfect

#### Here's a video on on React unit testing for writing your tests

[React Unit Testing Video](https://www.youtube.com/watch?v=3e1GHCA3GP0)
