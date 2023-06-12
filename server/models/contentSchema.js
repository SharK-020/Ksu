const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  main: { type: String, required: true },
  /* contactUs: { type: Object, required: true },
  programs: { type: Array, required: true },
  facilities: { type: Array, required: true },
  contentID: { type: String, required: true }, */
});

const Content = mongoose.model("content", contentSchema);

module.exports = Content;
