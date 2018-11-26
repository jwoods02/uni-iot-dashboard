import firebase from "firebase";

export default function graphData() {
  let xAxis = [];
  let yAxis = [];

  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });

  return new Promise(function(resolve, reject) {
    db.collection("sensor")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
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

  // todo will need a query to change sensors.sensor.lastUpdate
  // todo check that you cant route to pages using the login
  // https://www.youtube.com/watch?v=e8GA1UOj8mE&list=PL0vfts4VzfNiPCzuRPXFZS1Hnw_RvVEXR&index=9
}
