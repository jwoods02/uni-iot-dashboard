
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
admin.initializeApp();


// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "kabira.suleman@gmail.com",
        pass: "mypass",
    },
});

// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendNotification = functions.auth.user().onCreate((user) => {


    const mailOptions = {
        from: '"Spammy Corp." <noreply@firebase.com>',
        to: "decobu@daabox.com",
        text: "TEST"
    };

    return mailTransport.sendMail(mailOptions)
        .then(() => console.log("It worked"))
        .catch((error) => console.error('There was an error while sending the email:', error));
});