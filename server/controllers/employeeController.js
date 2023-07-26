const Employee = require("../models/employeeSchema");
const path = require("path");
exports.getEmployeesByDepartment = async (req, res) => {
	try {
		const { department } = req.body;
		const employees = await Employee.find({ department: department });
		res.status(200).json(employees);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
exports.createFaculty = async (req, res) => {
	try {
		const files = req.files;
		const { name, department, designation } = req.body;

		Object.keys(files).forEach(async (key) => {
			const filePath = path.join(
				__dirname,
				`../assets/employees/${files[key].name}`
			);
			files[key].mv(filePath, (err) => {
				if (err) {
					return res.status(500).json({ error: err.message });
				}
			});
			const employee = await Employee.create({
				name: name,
				department: department,
				designation: designation,
				img: filePath,
			});
			res.status(200).json({ message: "success" });
		});
	} catch {
		res.status(500).json({ error: err.message });
	}
};
