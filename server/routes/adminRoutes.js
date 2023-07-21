const express = require("express");
const router = express.Router();
const jwtUtils = require("../utils/jwtUtils");
const linkController = require("../controllers/linkController");
const departmentController = require("../controllers/departmentController");
const fileUpload = require("express-fileupload");
const employeeController = require("../controllers/employeeController");

router.post("/create/link", jwtUtils.verifyToken, linkController.createLink);
router.post(
	"/create/department",
	jwtUtils.verifyToken,
	departmentController.createDepartment
);
router.post(
	"/create/faculty",
	jwtUtils.verifyToken,
	fileUpload({ createParentPath: true }),
	employeeController.createFaculty
);
module.exports = router;
