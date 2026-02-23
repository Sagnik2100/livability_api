const sampleModel = require('../models/sample.model');

const fetchSamples = async () => {
    return await sampleModel.getAll();
};

const fetchSampleById = async (id) => {
    return await sampleModel.getById(id);
};

const addSample = async (data) => {
    return await sampleModel.create(data);
};

module.exports = {
    fetchSamples,
    fetchSampleById,
    addSample
};
