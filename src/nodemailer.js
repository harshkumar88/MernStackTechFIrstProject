var nodemailer = require('nodemailer');
 
const sendmail=(reciever,otp)=>{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mernappproject@gmail.com',
    pass: 'yseqyyouiqaxdkki'
  }
});
 
var mailOptions= {
  from: 'mernappproject@gmail.com',
  to: reciever,
  subject: 'One time password',
  text: ""+otp
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