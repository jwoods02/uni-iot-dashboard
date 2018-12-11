import firebase from "firebase";

export default function UpdateData(sensorName, resolve){
    let ref = firebase.firestore().collection('sensor').where('name', '==', sensorName);
    let query = ref.onSnapshot((querySnapshot)=> {
        let snapshot = [];
        let id = "";
        querySnapshot.docChanges().forEach((change) => {
            if (change.empty) {
                console.log('No matching documents or Empty.');
                return;
              }
            snapshot.push(
                change.doc.data())
        })
        return(snapshot);
    })
}