const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const imageController = require("../controllers/imageController");
const linkController = require("../controllers/linkController");
const noticeController = require("../controllers/noticeController");
const deptController = require("../controllers/departmentController");

router.get("/get/faculty/:dept", employeeController.getEmployeesByDepartment);
router.get("/get/departments/:school", deptController.getDepartmentsBySchool);
router.get("/get/image/", imageController.getImage);
router.get("/get/notice", noticeController.getNotice);
router.get("/get/link", linkController.getLinks);
router.delete("/delete/link/:id", linkController.deleteLink);
router.delete("/delete/notice/:id", noticeController.deleteNotice);
router.delete("/delete/faculty/:id", employeeController.deleteFaculty);
//created post link here since the admin routes are not wokring with the token
router.post("/create/link", linkController.createLink);

module.exports = router;
