require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const notificationRoutes = require('./routes/notifications');

const app = express();
app.use(express.json());

app.use('/', notificationRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
  
})
.then(() => {
  console.log('MongoDB connected');

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
