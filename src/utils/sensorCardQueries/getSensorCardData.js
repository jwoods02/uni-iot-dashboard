import firebase from "firebase";

export default function getSensorCardData() {
  let sensorNames = [];
  let sensorTypes = [];
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });

  return new Promise(function(resolve, reject) {
    db.collection("sensor")
      .get()
      .then(sensors => {
        sensors.docs.forEach(doc => {
          sensorNames.push(doc.data().name);
          sensorTypes.push(doc.data().type);
        });
        resolve([sensorNames, sensorTypes]);
      })
      .catch(error => {
        reject(error);
      });
  });
}
