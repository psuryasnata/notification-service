const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmailNotification(to, subject, text) {
  const msg = {
    to,
    from: process.env.SENDGRID_FROM_EMAIL, 
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log(`✅ Email sent to ${to}`);
  } catch (error) {
    console.error('❌ Error sending email:', error.response?.body || error.message);
  }
}

module.exports = { sendEmailNotification };
