const Image = require("../models/imageSchema");
const path = require("path");

exports.createImage = async (req, res) => {
	try {
		const files = req.files;
		const { title } = req.body;

		Object.keys(files).forEach(async (key) => {
			const filePath = path.join(
				__dirname,
				`../assets/${title}/${files[key].name}`
			);
			files[key].mv(filePath, (err) => {
				if (err) {
					return res.status(500).json({ error: err.message });
				}
			});

			const image = await Image.create({
				title: title,
			});
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
