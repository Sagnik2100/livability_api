const { Router } = require('express');
const livabilityController = require('../controllers/livability.controller');

const router = Router();

// GET request to save data as explicitly requested
router.get('/save', livabilityController.saveLivabilityData);

// GET request to fetch livability data
router.get('/', livabilityController.getLivabilityData);

// GET request to fetch recent 50 livability data
router.get('/recent50', livabilityController.getRecent50LivibilityData);

module.exports = router;
