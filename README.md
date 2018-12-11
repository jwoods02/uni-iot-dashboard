This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

test

## Set-Up Project

### Add a firebase.js file

In src create a new firebase.js file.

This file should contain:

```JavaScript
const apiKey = <API KEY HERE>;

export default apiKey;

```

Get API key from firebase console and add it

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### `npm i`

In order to install any 3rd party project dependencies which are defined within our package.json file.
npm i from TEAMP9IOT/ dir

###  links to any third-party libraries used

React JS - https://reactjs.org/ - our front end framework , built with the 'create-react-app' command to quickly create our web app.

firebase - https://firebase.google.com/ - our 'BaaS' (backend as a service) framework we are utilising mainly for authentication and real time data flow.

firestore - https://firebase.google.com/products/firestore/ - Our NoSQL google cloud database. 

###  Discussion of the architechture.

utilising googles firebase results in a serverless application, 