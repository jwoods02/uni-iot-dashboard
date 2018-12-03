var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kabira.suleman@gmail.com',
        pass: ''
    }
});

var mailOptions = {
    from: 'kabira.suleman@gmail.com',
    to: 'decobu@daabox.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});