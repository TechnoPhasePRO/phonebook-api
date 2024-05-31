const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/profile', authMiddleware, userController.getUserProfile);
router.get('/search/name/:name', authMiddleware, userController.searchByName);
router.get('/search/phone/:phone', authMiddleware, userController.searchByPhone);

module.exports = router;
