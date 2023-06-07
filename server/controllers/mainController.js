const content = require('../models/contentSchema.js')
const UpcomingEvent = require("../models/upcomingEventSchema.js");
const LatestNotification = require("../models/latestNotificatonSchema.js");



exports.getContents = (req, res) => {
  content.find({})
    .then((contents) => {
      console.log(contents); // log fetched contents
      res.json({ contents });
    })
    .catch((err) => console.log(err));
};


/* module.exports = {
  getContents
} */

exports.getUpcomingEvents = (req, res) => {
  UpcomingEvent.find()
    .then((upcomingEvents) => res.json({ upcomingEvents }))
    .catch((err) => console.log(err));
};

exports.getLatestNotifications = (req, res) => {
  LatestNotification.find({})
    .then((latestNotifications) => res.json({ latestNotifications }))
    .catch((err) => console.log(err));
}; 
