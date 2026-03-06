const livabilityModel = require('../models/livability.model');

const saveLivabilityData = async (data) => {
    return await livabilityModel.saveLivabilityData(data);
};

const getLivabilityData = async (realEstateId) => {
    return await livabilityModel.getLivabilityData(realEstateId);
};

const getRecent50LivibilityData = async (realEstateId) => {
    return await livabilityModel.getRecent50LivibilityData(realEstateId);
};

module.exports = {
    saveLivabilityData,
    getLivabilityData,
    getRecent50LivibilityData
};
