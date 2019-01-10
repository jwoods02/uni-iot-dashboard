## Set-Up Project

### Add a firebase.js file

In src folder create a new file called firebase.js

This file should contain:

```
const apiKey = '<API KEY HERE>';

export default apiKey;

```

<API KEY HERE> - The API key is a security feature.
please replace <API KEY HERE>, with our API Key between single quotes, It will be included in the email we send you!

### Add a firebase.json file

visit this link - https://console.firebase.google.com/u/0/project/dww-iot/settings/serviceaccounts/adminsdk

Select 'generate new private key', which should download a file locally.

Move this file to this project inside the /src folder, and RENAME the file - firebase.json. <-- **IMPORTANT**


## Available Scripts

In the project directory, you can run:

### `npm i`

In order to install any 3rd party project dependencies which are defined within our package.json file.
npm i from TEAMP9IOT/ folder

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000] to view it in the browser.

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


###  links to any third-party libraries used

React JS - https://reactjs.org/ - our front end framework , built with the 'create-react-app' command to quickly create our web app.

firebase - https://firebase.google.com/ - our 'BaaS' (backend as a service) framework we are utilising mainly for authentication and real time data flow.

firestore - https://firebase.google.com/products/firestore/ - Our NoSQL google cloud database. 

Contentful - https://app.contentful.com/ - blog platform!

### Contentful config

Contentful allows you to easily create documentation pages on a web site which appear on your web app!

**** Create a contentful.js file within the src/ folder. ****

COPY AND PASTE THIS CODE INTO NEW FILE, BUT REPLACING ALL <> TAGS WITH KEYS WITHIN EMAIL!

'''
const spaceId = "<SPACE ID HERE>";
const apiKey =
"<CONTENTFUL API KEY HERE>";
 
export { spaceId, apiKey };

'''

Stages:
1.  Accept your contentful invitation sent to peter.trott@gmail.com
2.  Access our data-works-wales space.
3.  Navigate to Content.
4.  Navigate to 'Section', and select 'Arduino Set Up for Our Use Case'
5.  This page should show all documentation articles. You can add, delete, re-order your articles here.
6.  To add a new article, scroll to the bottom and select '+ Create article and link'.
8. Select 'Publish Changes to see your new docs on the web app'

###  Discussion of the architechture.

utilising googles firebase results in a serverless application, 