const livabilityModel = require('../models/livability.model');

const saveLivabilityData = async (data) => {
    return await livabilityModel.saveLivabilityData(data);
};

const getLivabilityData = async (realEstateId) => {
    return await livabilityModel.getLivabilityData(realEstateId);
};

module.exports = {
    saveLivabilityData,
    getLivabilityData
};
