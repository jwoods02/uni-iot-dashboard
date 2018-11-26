import firebase from "firebase";


function getTimeOfReading(date) {
    doc.data().readings.
}

var names = array.filter(function(obj) {
    if ('Name' in obj) {
        return true;
    } else {
        return false;
    }
}).map(function(obj) { return obj['Name']; });

export default function xAxis() {

    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

  db
    .collection("sensor")
    .get()
    .then(snapshot => {
      console.log(snapshot.docs);
      snapshot.docs.forEach(doc => {
          console.log(doc.data().readings.forEach(getTimeOfReading))

      })
    });

    //create a reference all the readings from all the sensors

    

// todo will need a query to change sensors.sensor.lastUpdate
    // todo check that you cant route to pages using the login
    // https://www.youtube.com/watch?v=e8GA1UOj8mE&list=PL0vfts4VzfNiPCzuRPXFZS1Hnw_RvVEXR&index=9



}

