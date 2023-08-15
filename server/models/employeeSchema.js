const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	department: [
		{
			type: String,
			required: true,
		},
	],
	designation: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		default: "",
	},
	email: {
		type: String,
		required: true,
	}
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
