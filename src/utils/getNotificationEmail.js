import firebase from "firebase";

export default function notificationData() {


    let emailData = [];
    const db = firebase.firestore();
    db.settings({timestampsInSnapshots: true});

    return new Promise(function (resolve, reject) {
        db.collection("notification")
            .get()
            .then(snapshot => {
                snapshot.docs.forEach(doc => {
                    emailData.push(doc.data().contact_detail);
                    emailData.push(doc.data().sensor);
                    emailData.push(doc.data().name);
                    emailData.push(doc.data().message);
                });

                resolve(emailData);
            })
            .catch(error => {
                reject(error);
            });
    });
}
