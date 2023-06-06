const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const latestNotificationSchema = new Schema({
  notificationTitle: { type: String, required: true },
  notificationLink: { type: String, required: true },
  notificationID: { type: String, required: true },
});

const latestNotification = mongoose.model(
  "LatestNotification",
  latestNotificationSchema
);

module.exports = latestNotification;
