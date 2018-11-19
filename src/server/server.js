let admin = require('firebase-admin');
let serviceAccount = require('../../firebase.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //the firebase db id
    databaseURL: 'https://fir-test-6e084.firebaseio.com'
});

//todo do we need this