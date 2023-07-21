const jwtUtils = require("../utils/jwtUtils.js");
const User = require("../models/userSchema.js");

//not yet tested

exports.login = async (req, res) => {
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
		res.status(200).json({ token });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// exports.createUser = async () => {
// 	try {
// 		const user = await User.create({
// 			username: "admin",
// 			password: "password",
// 		});
// 		if (user) {
// 			console.log("User created successfully");
// 		}
// 	} catch (err) {
// 		console.log(err.message);
// 	}
// };
