const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

router.get("/content", mainController.getContents);
router.get("/upcomingEvents", mainController.getUpcomingEvents);
router.get("/latestNotifications", mainController.getLatestNotifications);

module.exports = router

