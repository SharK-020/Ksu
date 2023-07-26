const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
	},
	school: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

const Department = mongoose.model("Department", departmentSchema);
module.exports = Department;
