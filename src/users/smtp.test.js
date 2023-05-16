const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'ssl0.ovh.net',
  port: 465,
  auth: {
    user: 'alt-int@studiodefacto.com',
    pass: 'Shey4Z54x-dzxH1!!',
  },
});

const mailOptions = {
  from: 'alt-int@studiodefacto.com',
  to: 'mostitom11@gmail.com',
  subject: 'Test SMTP',
  text: 'Bonjour,\n\nCeci est un test d\'envoi de mail en utilisant SMTP.\n\nCordialement,\nL\'équipe',
};
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.error(error);
  } else {
    console.log('Email envoyé: ' + info.response);
  }
});
