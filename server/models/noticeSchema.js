const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noticeSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	doc: {
		type: String,
		required: true,
	},
});

const Notice = mongoose.model("Notice", noticeSchema);
module.exports = Notice;
