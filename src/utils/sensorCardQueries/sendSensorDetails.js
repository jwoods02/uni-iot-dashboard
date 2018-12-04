import firebase from "firebase";

export default function postNewSensor(name, type) {

    console.log('hello')
    const db = firebase.firestore();
    db.collection("sensor").doc().set({
        name: name,
        type: type,
        last_updated: new Date(),
        readings: []
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}
