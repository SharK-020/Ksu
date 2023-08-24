const express = require("express");
const router = express.Router();
const jwtUtils = require("../utils/jwtUtils");
const linkController = require("../controllers/linkController");
const departmentController = require("../controllers/departmentController");
const fileUpload = require("express-fileupload");
const employeeController = require("../controllers/employeeController");
const noticeController = require("../controllers/noticeController");
const fileExtLimiter = require("../middleware/fileExtLimiter");
const imageController = require("../controllers/imageController");

router.post("/create/link", 
jwtUtils.verifyToken, 
linkController.createLink
);

router.post(
	"/create/department",
	jwtUtils.verifyToken,
	departmentController.createDepartment
);
router.post(
	"/create/faculty",
	jwtUtils.verifyToken,
	fileUpload({ createParentPath: true }),
	fileExtLimiter(["jpg", "jpeg", "png"]),
	employeeController.createFaculty
);
router.post(
	"/create/notice",
	jwtUtils.verifyToken,
	noticeController.createNotice
);

router.post(
	"/create/image",
	jwtUtils.verifyToken,
	fileUpload({ createParentPath: true }),
	imageController.createImage
);
module.exports = router;
