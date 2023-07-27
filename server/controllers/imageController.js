const Image = require("../models/imageSchema");
const path = require("path");
const fs = require("fs").promises;
exports.createImage = async (req, res) => {
	try {
		const images = req.files;
		const { title } = req.body;
		const image = await Image.create({ title: title });
		images.files.forEach(async (image) => {
			const filePath = path.join(
				__dirname,
				`../assets/${title}/${image.name}`
			);

			image.mv(filePath, (err) => {
				if (err) {
					return res.status(500).json({ error: err.message });
				}
			});
		});
		res.status(200).json({ message: "Image uploaded successfully" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.getImage = async (req, res) => {
	try {
		const { title } = req.body;

		const images = await Image.find({ title: title });

		if (images) {
			const imagePath = path.join(__dirname, `../assets/${title}`);

			try {
				const files = await fs.readdir(imagePath);
				res.status(200).json({ files });
			} catch (err) {
				res.status(500).json({
					error: "Error reading image directory",
				});
			}
		} else {
			res.status(404).json({
				error: "Images not found for the given title",
			});
		}
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
