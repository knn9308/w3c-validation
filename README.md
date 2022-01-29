# Sample Cypress tests for w3c webpage
Some sample Cypress tests to test a few w3c webpages for valid and invalid links.
## Get started
__Required__: Docker installed if running tests in Docker
### Installation
run "**_npm install_**" from terminal
### Run test in Docker
1. Electron: run "**_docker run -it -v $PWD:/e2e -w /e2e cypress/included:9.3.1_**"
2. Chrome: run "**_docker run -it -v $PWD:/e2e -w /e2e cypress/included:9.3.1 --browser chrome_**"
3. Firefox: run "**_docker run -it -v $PWD:/e2e -w /e2e cypress/included:9.3.1 --browser firefox**"
### Generate Cucumber Report
run "**_npm run cypress:report_**"
### Viewing Cucumber Report
Report located at: "**_/cypress/cucumber-report/index.html_**"
### Open Cypress
run "**_npm run cypress:open_**"
