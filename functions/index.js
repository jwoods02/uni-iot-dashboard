const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
admin.initializeApp();

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

        let sensorId = context.params.sensorId;
        let notificationConditions = [];
        let triggerConditions = [];
        let docRef = admin.firestore().collection("sensor").doc(sensorId);

        console.log(docRef.collection("notification_conditions").doc(trigger_condition));
        return new Promise(function(resolve, reject) {
            docRef.collection("notification_conditions")
                .get()
                .then(conditions => {
                    conditions.docs.forEach(doc => {
                            notificationConditions.push(conditions);
                    });
                    resolve(notificationConditions);
                    return new Promise(function(resolve, reject) {
                        notificationConditions.collection("trigger_condition")
                            .get()
                            .then(conditions => {
                                conditions.docs.forEach(doc => {
                                    triggerConditions.push(conditions);
                                });
                                resolve(triggerConditions);
                                return triggerConditions;
                            })
                            .catch(error => {
                                reject(error);
                            });
                    })
                })
                .catch(error => {
                    reject(error);
                });
        })
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