import firebase from "firebase";


export default function postNewSensor(name, type) {
    const db = firebase.firestore();
    return new Promise(function(resolve, reject,e) {     
    db.collection("sensor").doc().set({
        name: name,
        type: type,
        last_updated: new Date(),
        readings: []
    })
    .then(function() {
        let onSuccess = true;
        console.log("Document successfully written!");
        resolve(onSuccess);
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
        reject(error);
    });
});
}