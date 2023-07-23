const Notice = require("../models/noticeSchema");
const path = require("path");
const fileUpload = require("express-fileupload");

exports.createNotice = async (req, res) => {
	try {
		const files = req.files;
		const { title } = req.body;

		Object.keys(files).forEach(async (key) => {
			const filePath = path.join(
				__dirname,
				`../assets/notices/${files[key].name}`
			);
			files[key].mv(filePath, (err) => {
				if (err) {
					return res.status(500).json({ error: err.message });
				}
			});
			const notice = await Notice.create({
				title: title,
				doc: filePath,
			});
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.getNotice = async (req, res) => {
	try {
		const notices = await Notice.find();
		res.status(200).json(notices);
	} catch {
		res.status(500).json({ error: err.message });
	}
};
