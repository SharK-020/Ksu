const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
