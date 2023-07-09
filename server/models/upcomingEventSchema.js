const mongoose = require('mongoose')
const Schema = mongoose.Schema

const upcomingEventSchema = new Schema({
  eventTitle: { type: String, required: true },
  eventID: { type: String, required: true },
  eventLink: { type: String, required: true },
});

const upcomingEvent = mongoose.model(
  "UpcomingEvent",
  upcomingEventSchema
);

module.exports = upcomingEvent;