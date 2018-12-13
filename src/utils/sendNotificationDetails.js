import firebase from "firebase";

export default function postNewNotification(
  contactDetail,
  contactType,
  title,
  message,
  triggerCheck,
  triggerValue,
  sensorID
) {
  const db = firebase.firestore();
  return new Promise(function(resolve, reject, e) {
    console.log(sensorID);
    db.collection("notification")
      .add({
        contact_detail: contactDetail,
        contact_type: contactType,
        message: message,
        name: title,
        trigger_condition:
          triggerCheck.toString() + " " + triggerValue.toString()
      })
      .then(docRef => {
        console.log("logging - " + docRef.id);
        db.collection("sensor")
          .doc(sensorID)
          .update({
            // Syntax for adding to array field retrieved from docs:
            // https://firebase.google.com/docs/firestore/manage-data/add-data#update_elements_in_an_array
            // [Accessed: 11 December 2018]
            notification_conditions: firebase.firestore.FieldValue.arrayUnion(
              db.doc("notification/" + docRef.id)
            )
          });
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
