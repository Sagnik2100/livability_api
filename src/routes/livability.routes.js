const { Router } = require('express');
const livabilityController = require('../controllers/livability.controller');

const router = Router();

// GET request to save data as explicitly requested
router.get('/save', livabilityController.saveLivabilityData);

// GET request to fetch livability data
router.get('/', livabilityController.getLivabilityData);

module.exports = router;
