# Survey App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Demo
This application is deployed to [https://survey-report-app.herokuapp.com/](https://survey-report-app.herokuapp.com/) <br/>
The initial visit will be slow as it is under free tier, the application will sleep after 20 mins inactive. The cold start might take longer. <br/>
This application workflow is with github action under: [https://github.com/56tiagra/surveyreport](https://github.com/56tiagra/surveyreport)

### Prerequisites
- Node: v12.5.0
### 

### Design consideration
- This application use an node express server as a proxy to the API, this will resolve the CORS problem with front-end directly talk to the API, also if will protect the service endpoint to directly expose to the browser.
- The workflow including the Github action to build and run the test.
- Also for the deployment, this application will directly deployed as a container to Heroku container hosting.
- css is using `BEM` convention to reduce conflict.

## Installation

In the project directory, you can run:<br/>
`yarn install`

## Development

For local development, you can run:<br/>
`yarn dev`
This will start the server and the react dev server in
[localhost:3000](http://localhost:3000/)

## Test

To run the unit test, run<br/>
`yarn test`

## Production

Run `yarn build` to builds the front-end app for production to the `build` folder.
then run `yarn server` to start the server for api proxy and server the front-end.
The default port is set to `3001` if you specify the envrionment variable, the server will run on that port.<br/>
You can set the environment variable with a `.env` file like below
```
PORT=8080
```
The application will be run in
[localhost:3001](http://localhost:3001)

You can also build the docker image for this application with
`docker build --pull --rm -f "dockerfile" -t surveydashboard:latest "." <`
then run
`docker run --rm -d  -p 80:80/tcp surveydashboard:latest <`, The application will be run in
[localhost](http://localhost/)

## CI/CD
The application will use Github Action for the workflow and will run build and test the application, and will deploy to Heroku with containerized deployment.

## Future improvement
- Use `style-compoment` for the front-end css, this will make the individual component decoupled and be able to reuse with other application more easily, meanwhile, it will reduce the side effect to the global css if not naming properly.
- Can use existing `http-hook` for the api call to handle to fallback of API failure.