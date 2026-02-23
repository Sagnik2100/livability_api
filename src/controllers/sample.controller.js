const sampleService = require('../services/sample.service');

const getAllSamples = async (req, res, next) => {
    try {
        const data = await sampleService.fetchSamples();
        res.status(200).json({ success: true, data });
    } catch (error) {
        next(error);
    }
};

const getSampleById = async (req, res, next) => {
    try {
        const data = await sampleService.fetchSampleById(req.params.id);
        if (!data) {
            const error = new Error('Sample not found');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({ success: true, data });
    } catch (error) {
        next(error);
    }
};

const createSample = async (req, res, next) => {
    try {
        const newSample = await sampleService.addSample(req.body);
        res.status(201).json({ success: true, data: newSample });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllSamples,
    getSampleById,
    createSample
};
