import firebase from "firebase";

export default function notificationData() {


    let sensorNotifData = [];
    const db = firebase.firestore();
    db.settings({timestampsInSnapshots: true});

    return new Promise(function (resolve, reject) {
        db.collection("notification")
            .get()
            .then(snapshot => {
                snapshot.docs.forEach(doc => {
                    sensorNotifData.push(doc.data().name);
                    sensorNotifData.push(doc.data().sensor);
                    sensorNotifData.push(doc.data().message);
                    sensorNotifData.push(doc.data().trigger_time);
                    sensorNotifData.push(doc.data().trigger_reading);
                });

                resolve(sensorNotifData);
            })
            .catch(error => {
                reject(error);
            });
    });
}
