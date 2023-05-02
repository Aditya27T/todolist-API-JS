const { Sequelize } = require('sequelize');
const db = require('../../config/global_config').db;

const database = new Sequelize({
    host: db.host,
    dialect: db.dialect,
    username: db.username,
    password: db.password,
    database: db.database,
    pool: {
        max: db.pool.max,
        min: db.pool.min,
        acquire: db.pool.acquire,
        idle: db.pool.idle
    }
})

(async () => {
    try {
        await database.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }    
})();

module.exports = database;