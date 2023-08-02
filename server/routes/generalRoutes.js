const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const imageController = require("../controllers/imageController");
const linkController = require("../controllers/linkController");
const noticeController = require("../controllers/noticeController");

router.get("/get/faculty", employeeController.getEmployeesByDepartment);
router.get("/get/image/", imageController.getImage);
router.get("/get/notice", noticeController.getNotice);
router.get("/get/link", linkController.getLinks);

module.exports = router;