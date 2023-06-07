const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FeesSchema = new Schema({
  Course: { type: String, required: true },
  Hostel: { type: String, required: true },
  Fees: { type: String, required: true }
})


const Fees = mongoose.model('Fees', FeesSchema);

module.exports = Fees;