const Notice = require("../models/noticeSchema");
const path = require("path");
const fs = require("fs");
exports.createNotice = async (req, res) => {
	try {
		const files = req.files;
		const { title } = req.body;

		const filePath = path.join(
			__dirname,
			`../assets/notices/${files.files.name}`
		);

		files.files.forEach(async (file) => {
			const filePath = path.join(
				__dirname,
				`../assets/notices/${image.name}`
			);

			image.mv(filePath, (err) => {
				if (err) {
					return res.status(500).json({ error: err.message });
				}
			});
			const notice = await Notice.create({
				title: title,
				doc: filePath,
			});

			res.status(200).json({ message: "notice added" });
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.deleteNotice = async (req, res) => {
	try {
		const { id } = req.params;
		const notice = await Notice.findById(id);
		const filePath = notice.doc;

//		fs.unlink(filePath, (err) => {
//			if (err) {
//				return res.status(500).json({ error: err.message });
//			}
//		}); // delete file from assets folder

		await Notice.findByIdAndDelete(id);
		res.status(200).json({ message: "notice deleted successfully" });
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
