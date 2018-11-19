let admin = require('firebase-admin');
let serviceAccount = require('../../firebase.json');
let firebase = require('firebase');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //the firebase db id
    databaseURL: 'https://fir-test-6e084.firebaseio.com'
});

// function login(email, password) {
//
//     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//         // todo Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//     });
//
// }