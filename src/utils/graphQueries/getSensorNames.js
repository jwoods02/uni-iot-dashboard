import firebase from "firebase";


export default function getSensorNames() {
    let sensorNames = [];
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

    return new Promise(function(resolve, reject,e) {
        db.collection("sensor")
            .orderBy("last_updated", "desc").limit(4)
            .get()
            .then(sensors => {
                sensors.docs.forEach(doc => {

                    sensorNames.push(doc.data().name);
                });
                resolve(sensorNames);
            })
            .catch(error => {
                reject(error);
            });
    });
}