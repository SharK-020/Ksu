const mongoose = require('mongoose')
const Schema = mongoose.Schema

const feesSchema = new Schema({
  Course: { type: String, required: true },
  Hostel: { type: String, required: true },
  Fees: { type: String, required: true }
})


const fees = mongoose.model('Fees', feesSchema);

module.exports = fees;