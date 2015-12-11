var nodemailer = require('nodemailer');
var config = require('../../config/environment');

console.log(process.env);

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'cofauver@gmail.com',
        pass: //
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
    to: 'cofauver@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

// send mail with defined transport object
exports.send = function(req, res){
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);

    });
};