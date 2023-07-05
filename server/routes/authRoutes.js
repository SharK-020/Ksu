const express = require("express");
const authController = require("../controllers/authController");
const jwtUtils = require("../utils/jwtUtils")
const contentController = require("../controllers/contentController")
const router = express.Router();

router.post("/login", authController.login);
router.patch("/content/:documentID", jwtUtils.verifyToken, contentController.updateContent);
router.patch("/faculty/:documentID", jwtUtils.verifyToken, contentController.updateFaculty);
router.patch("/fees/:documentID", jwtUtils.verifyToken, contentController.updateFees);
router.patch("/upcomingEvents/:documentID", jwtUtils.verifyToken, contentController.updateUpcomingEvents);
router.patch("/latestNotifications/:documentID", jwtUtils.verifyToken, contentController.updateLatestNotifications);
module.exports = router;
