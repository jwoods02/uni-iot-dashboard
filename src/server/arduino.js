const SerialPort = require("serialport");
// Change the portNum to the appropriate port for your connection
const portNum = "";
// Set sensorRef equal to the document ID of the relevant sensor
const sensorID = "";

const admin = require("firebase-admin");
const serviceAccount = require("../firebase.json");

const Readline = SerialPort.parsers.Readline;
const port = new SerialPort(portNum);
const parser = new Readline();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //the firebase db id
  databaseURL: "https://fir-test-6e084.firebaseio.com"
});
const db = admin.firestore();
const sensorRef = db.collection("sensor").doc(sensorID);

// Atomically add
// let arrUnion = sensorRef.update({
//   readings: admin.firestore.FieldValue.arrayUnion({ date, value })
// });

port.pipe(parser);
parser.on("data", value => {
  const date = new Date();
  console.log(value);
  console.log(date);
  sensorRef.update({
    readings: admin.firestore.FieldValue.arrayUnion({ date, value })
  });
});
