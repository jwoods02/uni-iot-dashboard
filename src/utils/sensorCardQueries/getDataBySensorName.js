import firebase from "firebase";

export default function getDataBySensorName(sensorName) {
    const db = firebase.firestore();
    let result = [];
    return new Promise(function(resolve, reject,e) {
    var sensorRef = db.collection('sensor');
    var query = sensorRef.where('name', '==', sensorName).get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents or Empty.');
        return;
      }
      snapshot.forEach(doc => {
        // result.push(doc);
        // console.log(doc.id, '=>', doc.data());
        resolve({
          ...doc.data(),
          id: doc.id
        }
          
          )
      }); 
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  });
} 