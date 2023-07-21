const Department = require("../models/departmentSchema");

exports.getDepartmentsBySchool = async (req, res) => {
	try {
		const school = req.params.school;
		const departments = await Department.find({ school: school });
		res.status(200).json(departments);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
exports.createDepartment = async (req, res, next) => {
	try {
		const { name, school, description } = req.body;
		const departmentObj = await Department.create({
			name,
			school,
			description,
		});
		res.status(201).json(departmentObj);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
