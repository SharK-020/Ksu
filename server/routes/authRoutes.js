const express = require("express");
const authController = require("../controllers/authController");
const jwtUtils = require("../utils/jwtUtils");
const contentController = require("../controllers/contentController");
const router = express.Router();

router.post("/login", authController.login);
module.exports = router;
