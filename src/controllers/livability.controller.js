const livabilityService = require('../services/livability.service');

const saveLivabilityData = async (req, res, next) => {
    try {
        const {
            real_estate_id,
            date_time,
            aq_pm_10,
            aq_pm_2_5,
            aq_so,
            aq_no,
            noise,
            lvb_temp,
            lvb_humidity
        } = req.query;

        // Transform incoming data string queries properly before saving
        await livabilityService.saveLivabilityData({
            real_estate_id: parseInt(real_estate_id) || null,
            date_time: date_time ? new Date(date_time) : new Date(),
            aq_pm_10: parseFloat(aq_pm_10) || 0,
            aq_pm_2_5: parseFloat(aq_pm_2_5) || 0,
            aq_so: parseFloat(aq_so) || 0,
            aq_no: parseFloat(aq_no) || 0,
            noise: parseFloat(noise) || 0,
            lvb_temp: parseFloat(lvb_temp) || 0,
            lvb_humidity: parseFloat(lvb_humidity) || 0
        });

        res.status(200).json({ success: true, message: 'Livability data saved successfully' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    saveLivabilityData
};
