import firebase from "firebase";

export default function postNewNotification(
  device,
  deviceType,
  message,
  name,
  sensor,
  triggerCon,
  triggerRead
) {
  const db = firebase.firestore();
  return new Promise(function(resolve, reject, e) {
    db.collection("notification")
      .doc()
      .set({
        device: device,
        device_type: deviceType,
        message: message,
        name: name,
        sensor: sensor,
        trigger_condition: triggerCon,
        trigger_reading: triggerRead,
        trigger_time: new Date()
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
