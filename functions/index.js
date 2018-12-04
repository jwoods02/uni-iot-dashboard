const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
//  console.log(response);
// });

const nodemailer = require('nodemailer');
// const admin = require('firebase-admin');
// admin.initializeApp();

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "kabira.suleman@gmail.com",
        pass: "Ilove2live",
    },
});

// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendNotification = functions.auth.user().onCreate((user) => {


    const mailOptions = {
        from: '"Spammy Corp." <noreply@firebase.com>',
        to:"guy.rawsthorn@btopenworld.com",
        text: "TEST"
    };

    return mailTransport.sendMail(mailOptions)
        .then(() => console.log("It worked"))
        .catch((error) => console.error('There was an error while sending the email:', error));
});