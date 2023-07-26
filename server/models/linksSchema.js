const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		link: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);

const Link = mongoose.model("Link", linkSchema);
module.exports = Link;
