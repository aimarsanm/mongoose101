const express = require('express');
const router = express.Router();
const taldeController = require('../controllers/taldea.controller');

router.post('/', taldeController.createTalde);
router.post('/assign', taldeController.assignIkasleToTalde);
router.get('/', taldeController.getTaldeak);

module.exports = router;
