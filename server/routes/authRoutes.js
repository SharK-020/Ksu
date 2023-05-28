const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/api/login', authController.login);
router.get('/api/logout', authMiddleware, authController.logout);

module.exports = router;