# Notification Service

A microservice to send notifications via Email, SMS, and In-App channels.

---

## Features

- Email notifications using SendGrid  
- SMS notifications using Twilio  
- In-app notifications stored in MongoDB  
- Support for queue-based processing (optional)  
- Retry logic for failed notifications  

---

## Assumptions

- You have accounts and API keys for SendGrid and Twilio.  
- MongoDB database is available (local or cloud).  
- You have Node.js and npm installed.  
- Environment variables will be used to store sensitive info.  
- RabbitMQ or Kafka queue integration is optional and not included by default.  

---

## Setup Instructions

1. Clone the repository

git clone https://github.com/psuryasnata/notification-service.git
cd notification-service

2. Install dependencies
npm install

3. Create a .env file
MONGO_URI=your_mongodb_connection_string
PORT=3000

SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=your_sendgrid_verified_email

TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number

4. Run the service
npm start
