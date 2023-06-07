const Content = require("../models/contentSchema.js");
const UpcomingEvent = require("../models/upcomingEventSchema.js");
const LatestNotification = require("../models/latestNotificatonSchema.js");
const Faculty = require("../models/facultySchema.js");
const Fees = require("../models/feesSchema.js");


exports.getContents = (req, res) => {
  Content.find()
    .then((contents) => res.json({ contents }))
    .catch((err) => console.log(err));
};

exports.getUpcomingEvents = (req, res) => {
  UpcomingEvent.find()
    .then((upcomingEvents) => res.json({ upcomingEvents }))
    .catch((err) => console.log(err));
};

exports.getLatestNotifications = (req, res) => {
  LatestNotification.find()
    .then((latestNotifications) => res.json({ latestNotifications }))
    .catch((err) => console.log(err));
};

exports.getFaculty = (req, res) => {
  Faculty.find()
    .then((Faculty) => res.json({ Faculty }))
    .catch((err) => console.log(err));
};

exports.getFees = (req, res) => {
  Fees.find()
    .then((Fees) => res.json({ Fees }))
    .catch((err) => console.log(err));
};