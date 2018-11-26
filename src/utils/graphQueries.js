import firebase from "firebase";

export default function testFirestore() {
  const testDB = firebase.firestore();
  testDB.settings({ timestampsInSnapshots: true });

  testDB
    .collection("testData")
    .get()
    .then(snapshot => {
      console.log(snapshot.docs);
    });

    //create a reference all the readings from all the sensors
    const allReadingsRef = testDB.collection("Readings");
    

// todo will need a query to change sensors.sensor.lastUpdate
    // todo check that you cant route to pages using the login
    // https://www.youtube.com/watch?v=e8GA1UOj8mE&list=PL0vfts4VzfNiPCzuRPXFZS1Hnw_RvVEXR&index=9



}

