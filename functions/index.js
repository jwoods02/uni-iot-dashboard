/* eslint-disable promise/no-nesting */
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dwwiot9@gmail.com",
    pass: "DataWorksWales9"
  }
});

// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendNotification = functions.firestore
  .document("sensor/{sensorId}")
  .onUpdate((change, context) => {
    // Call with operators[key](3, 5)
    let operators = {
      ">": function(a, b) {
        return a > b;
      },
      "<": function(a, b) {
        return a < b;
      },
      "==": function(a, b) {
        return a === b;
      }
    };

    let notifCount = 0;
    const sensorId = context.params.sensorId;
    const docRef = admin
      .firestore()
      .collection("sensor")
      .doc(sensorId);

    docRef
      .get()
      .then(doc => {
        const theDoc = doc.data();
        const notifications = theDoc.notification_conditions;
        notifications.forEach(notif => {
          notif
            .get()
            .then(docs => {
              const data = theDoc.readings.slice(-1)[0].value;
              const trigger = docs.data().trigger_condition;
              const condition = trigger.split(" ");

              console.log("The if statement", condition[0], data, condition[1]);

              console.log(operators[condition[0]](data, condition[1]));

              if (operators[condition[0]](data, condition[1])) {
                notifCount += 1;

                // SEND EMAIL HERE
                console.log("Email message:", docs.data().message);
                console.log("Email address", docs.data().contact_detail);

                const mailOptions = {
                  from: "dwwiot9@gmail.com",
                  to: docs.data().contact_detail,
                  subject: "IOT Sensor Notification",
                  text: docs.data().message
                };

                mailTransport.sendMail(mailOptions, (error, info) => {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log("Email sent: " + info.response);
                  }
                });

                return;
              } else {
                // DO NOT SEND EMAIL
                console.log("no emailll");
                return;
              }
            })
            .catch(err => {
              console.log(err);
            });
        });

        return notifCount;
      })
      .catch(err => {
        console.log(err);
      });
  });
