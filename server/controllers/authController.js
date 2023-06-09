const jwtUtils = require("../utils/jwtUtils.js");
const User = require("../models/userSchema.js");

//not yet tested

exports.login = async (req, res, next) => {
	try {
		const { username, password } = req.body;

		const user = await User.findOne({ username: username }).select(
			"+password"
		);
		if (!user) {
			return res
				.status(401)
				.json({ error: "Invalid username or password" });
		}

		const isMatch = await user.validatePassword(password);

		if (!isMatch) {
			return res
				.status(401)
				.json({ error: "Invalid username or password" });
		}

		const token = jwtUtils.createToken(user._id);
		const userObj = user.toObject();
		delete userObj.password;
		res.setHeader('Authorization', `Bearer ${token}`);
		res.status(200).json({ user: userObj, token });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
