const livabilityModel = require('../models/livability.model');

const saveLivabilityData = async (data) => {
    return await livabilityModel.saveLivabilityData(data);
};

module.exports = {
    saveLivabilityData
};
