const app = require('./app');
const env = require('./config/env');
const db = require('./config/db');

const startServer = async () => {
    try {
        // First verify database connection
        await db.checkConnection();

        app.listen(env.port, () => {
            console.log(`Server is running in ${env.nodeEnv} mode on port ${env.port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
