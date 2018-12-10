const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "kabira.suleman@gmail.com",
        pass: "fakepass",
    },
});

// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendNotification = functions.firestore
    .document('sensor/{sensorId}/readings')
    .onUpdate((user) =>


    const mailOptions = {
        from: '"ddw" <noreply@firebase.com>',
        to: "kabira.suleman@gmail",
        text: "Hello " + name + ", \r\m  You are receiving notification email because SENSOR_NAME is NOTIFICATION_TITLE. \r\m The notification message is as follows \r\m NOTIFICATION_MESSAGE."
    };

    return mailTransport.sendMail(mailOptions)
        .then(() => console.log("It worked"))
        .catch((error) => console.error('There was an error while sending the email:', error));
});