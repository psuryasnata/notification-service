const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function sendSms(phoneNumber, message) {
  console.log("Sending SMS to:", phoneNumber);
  console.log("Message:", message);

  try {
    console.log("SMS sent successfully");
  } catch (error) {
    console.error("Error sending SMS:", error);
    throw error; 
  }
}

module.exports = { sendSms };
