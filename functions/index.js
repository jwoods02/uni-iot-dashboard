const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "dwwiot9@gmail.com",
        pass: "DataWorksWales9",
    },
});

// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendNotification = functions.firestore
    .document('sensor/{sensorId}')
    .onUpdate((change, context) => {

        const sensorId = context.params.sensorId;



        return console.log("sensor ID: " + sensorId.getData()  )




});

//
// const mailOptions = {
//     from: '"Data Works Wales" <noreply@firebase.com>',
//     subject: '*Sensor Notification*',
//     to: 'RawsthornG@cardiff.ac.uk',
//     text: "Hello PERSON_NAME   \r\n  You are receiving notification email because SENSOR_NAME is NOTIFICATION_TITLE. \r\n The notification message is as follows \r\n NOTIIFCATION_MESSAGE."
// };
//
// return mailTransport.sendMail(mailOptions)
//     .then(() => console.log("It worked"))
//     .catch((error) => console.error('There was an error while sending the email:', error));