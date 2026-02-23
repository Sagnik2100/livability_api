const { Router } = require('express');
const sampleController = require('../controllers/sample.controller');

const router = Router();

router.get('/', sampleController.getAllSamples);
router.get('/:id', sampleController.getSampleById);
router.post('/', sampleController.createSample);

module.exports = router;
