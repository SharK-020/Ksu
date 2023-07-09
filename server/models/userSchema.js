const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const userSchema = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true, select: false },
}); //hashing password
userSchema.pre("save", async function (next) {
	try {
		if (this.isModified("password")) {
			const hashedPassword = await bcrypt.hash(this.password, saltRounds);
			this.password = hashedPassword;
		}
		next();
	} catch (err) {
		next(err);
	}
});
//validating password
userSchema.methods.validatePassword = async function (password) {
	try {
		const result = bcrypt.compare(password, this.password);
		return result;
	} catch (err) {
		throw new Error(err);
	}
};

const User = mongoose.model("User", userSchema);

module.exports = User;
