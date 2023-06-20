const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
require("dotenv").config();

exports.verifyToken = async (req, res, next) => {
	try {
		let token = req.headers.authorization;

		if (!token) {
			return res
				.status(401)
				.json({ error: "Access denied, token missing!" });
		}
		if (token.startsWith("Bearer ")) {
			token = token.slice(7, token.length).trimLeft;
		}

		const verified = jwt.verify(token, process.env.JWT_SECRET);

		req.user = await User.findById(verified.id);
		next();
	} catch (err) {
		return res.status(401).json({ error: err });
	}
};
