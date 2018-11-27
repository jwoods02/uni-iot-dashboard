import firebase from "firebase";

// todo will need a query to change sensors.sensor.lastUpdate



export default function getGraphDataBySensorName(sensorName) {
  let xAxis = [];
  let yAxis = [];
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

  return new Promise(function(resolve, reject) {
    db.collection("sensor")
      .where("name", "==", sensorName)
      .get()
      .then(sensors => {
        sensors.docs.forEach(doc => {
          doc.data().readings.forEach(reading => {
            xAxis.push(new Date(reading["date"]["seconds"] * 1000));
            yAxis.push(reading["value"]);
          });
        });
        resolve([xAxis, yAxis]);
      })
      .catch(error => {
        reject(error);
      });
  });

}




