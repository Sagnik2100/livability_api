const mysql = require('mysql2/promise');
const env = require('./env');

const dbConfig = {
    host: env.db.host,
    user: env.db.user,
    password: env.db.password,
    port: env.db.port,
    database: env.db.name,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

// Create a connection pool to manage connections automatically
const pool = mysql.createPool(dbConfig);

const checkConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log(`Successfully connected to MySQL Database at ${env.db.host}`);
        connection.release();
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        throw error;
    }
};

module.exports = {
    pool,
    checkConnection
};
