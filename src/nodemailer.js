var nodemailer = require('nodemailer');
 
const sendmail=(reciever,otp)=>{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'harshkumartodolist1@gmail.com',
    pass: 'harshtodo88kumar@'
  }
});
 
var mailOptions= {
  from: 'harshkumartodolist1@gmail.com',
  to: reciever,
  subject: 'One time password',
  text: otp
};
 
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
module.exports = sendmail;