import firebase from "firebase";
import apikey from "../firebase.js";

export default function setupFirebase() {
  // Initializing app
  let config = {
    apiKey: apikey,
    authDomain: "fir-test-6e084.firebaseapp.com",
    databaseURL: "https://fir-test-6e084.firebaseio.com",
    storageBucket: "fir-test-6e084.appspot.com"
  };
  firebase.initializeApp(config);
}
