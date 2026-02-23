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
        lvb_humidity
    } = data;

    const query = `CALL sp_saveLivabilityData(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        real_estate_id,
        date_time,
        aq_pm_10,
        aq_pm_2_5,
        aq_so,
        aq_no,
        noise,
        lvb_temp,
        lvb_humidity
    ];

    const [rows] = await pool.execute(query, values);
    return rows;
};

module.exports = {
    saveLivabilityData
};
