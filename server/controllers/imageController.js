const Image = require("../models/imageSchema");
const path = require("path");
const fs = require("fs");
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

exports.getImage = async (req, res) => {
	try {
		const { title } = req.params;

		const images = await Image.find({ title: title });

		if (images) {
			const path = path.join(__dirname, `../assets/${title}`);

			const files = fs.readdir(path, (err, files) => {
				files.forEach((file) => {
					return file;
				});
			});

			res.status(200).json({ files });
		}
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
