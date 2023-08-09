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

		files.files.forEach(async (image) => {
			const filePath = path.join(
				__dirname,
				`../assets/employees/${image.name}`
			);

			image.mv(filePath, (err) => {
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

			res.status(200).json({ message: "Employee created successfully" });
		});
	} catch {
		res.status(500).json({ error: err.message });
	}
};

exports.deleteFaculty = async (req, res) => {
	try {
		const { id } = req.params;
		const employee = await Employee.findById(id);
		const filePath = employee.img;

		fs.unlink(filePath, (err) => {
			if (err) {
				return res.status(500).json({ error: err.message });
			}
		});
		await Employee.findByIdAndDelete(id);
		res.status(200).json({ message: "Employee deleted successfully" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
