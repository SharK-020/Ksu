const Link = require("../models/linksSchema.js");

exports.getLinks = async (req, res) => {
	try {
		const links = await Link.find();
		res.status(200).json(links);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
exports.createLink = async (req, res) => {
	try {
		const { title, link } = req.body;
		const linkObj = await Link.create({
			title,
			link,
		});
		res.status(201).json(linkObj);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
exports.updateLink = async (req, res, next) => {
	try {
		const { title, link } = req.body;

		if (title || link) {
			const linkObj = await Link.findByIdAndUpdate(req.params.id, {
				title,
				link,
			});
		} else {
			return res
				.status(400)
				.json({ error: "Please provide title or link" });
		}
		res.status(200).json(linkObj);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.deleteLink = async (req, res, next) => {
	try {
		const linkObj = await Link.findByIdAndDelete(req.params.id);
		res.status(200).json(linkObj);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}
