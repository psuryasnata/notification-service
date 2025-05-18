const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");
const { sendEmailNotification } = require("../utils/mailService");
const { sendSms } = require("../utils/smsService");

router.post("/notifications", async (req, res) => {
  const { userId, type, title, message, phoneNumber } = req.body;

  try {
    if (!["email", "sms", "in-app"].includes(type)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid notification type" });
    }

    if (type === "sms" && !phoneNumber) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Missing phoneNumber for SMS notification",
        });
    }

    const notification = new Notification({
      userId,
      type,
      title,
      message,
    });

    await notification.save();
    console.log("✅ Notification saved to DB");

    if (type === "email") {
      await sendEmailNotification(userId, title, message);
      console.log("✅ Email sent");
    } else if (type === "sms") {
      await sendSms(phoneNumber, message);
      console.log("✅ SMS sent");
    } else if (type === "in-app") {
      console.log("✅ In-app notification saved");
    }

    res.status(200).json({ success: true, message: "Notification sent" });
  } catch (err) {
    console.error("❌ Error:", err);
    res
      .status(500)
      .json({ success: false, message: "Failed to send notification" });
  }
});

router.get("/users/:id/notifications", async (req, res) => {
  try {
    const notifications = await Notification.find({
      userId: req.params.id,
    }).sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching notifications" });
  }
});

module.exports = router;
