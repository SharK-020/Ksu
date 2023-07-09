const mongoose = require('mongoose')
const Schema = mongoose.Schema

const facultySchema = new Schema({
  Faculty_id: { type: String, required: true },
  Faculty_name: { type: String, required: true },
  Faculty_designation: { type: String, required: true },
  Faculty_dept: { type: String, required: true },
  Faculty_email: { type: String, required: true },
  Faculty_contact: { type: String, required: true }
})


const faculty = mongoose.model('Faculty', facultySchema);

module.exports = faculty;