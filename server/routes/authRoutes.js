const express = require("express");
const authController = require("../controllers/authController");
const jwtUtils = require("../utils/jwtUtils")

const router = express.Router();

router.post("/login", authController.login);
router.patch("/update", jwtUtils.verifyToken, authController.update);
module.exports = router;
