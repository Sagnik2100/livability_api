const { Router } = require('express');
const sampleRoutes = require('./sample.routes');
const livabilityRoutes = require('./livability.routes');

const router = Router();

// API Health check
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date() });
});

// Resources
router.use('/samples', sampleRoutes);
router.use('/livability', livabilityRoutes);

module.exports = router;
