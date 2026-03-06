const { pool } = require('../config/db');

const saveLivabilityData = async (data) => {
    const {
        real_estate_id,
        date_time,
        aq_pm_10,
        aq_pm_2_5,
        aq_so,
        aq_no,
        noise,
        lvb_temp,
        lvb_humidity,
        latitude,
        longitude
    } = data;

    const query = `CALL sp_saveLivabilityData(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        real_estate_id,
        date_time,
        aq_pm_10,
        aq_pm_2_5,
        aq_so,
        aq_no,
        noise,
        lvb_temp,
        lvb_humidity,
        latitude,
        longitude
    ];

    const [rows] = await pool.execute(query, values);
    return rows;
};

const getLivabilityData = async (realEstateId) => {
    const query = `CALL sp_getLivabilityData(?)`;
    const [rows] = await pool.execute(query, [realEstateId]);
    return rows[0]; // SP returns an array of results, we want the first result set
};

module.exports = {
    saveLivabilityData,
    getLivabilityData
};
