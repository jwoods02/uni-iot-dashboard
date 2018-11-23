import apiKey from "../firebase";

import firebase from "firebase";

export default function testFirestore() {
  const testDB = firebase.firestore();
  testDB.settings({ timestampsInSnapshots: true });

  testDB
    .collection("testData")
    .get()
    .then(snapshot => {
      console.log(snapshot.docs);
    });
}
