import apikey from "../firebase";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


const config = {
    apiKey: apikey,
    authDomain: "dww-iot.firebaseapp.com",
    databaseURL: "https://dww-iot.firebaseio.com",
    projectId: "dww-iot",
    storageBucket: "dww-iot.appspot.com",
    messagingSenderId: "81575321427"
};
firebase.initializeApp(config);

const testDB = firebase.firestore();
testDB.settings({ timestampsInSnapshots: true });

testDB.collection("testData").get().then((snapshot) => {
    console.log(snapshot.docs)
});

