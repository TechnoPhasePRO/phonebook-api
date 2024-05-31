const express = require('express');
const { markAsSpam } = require('../controllers/spamController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.post('/mark', markAsSpam);

module.exports = router;
