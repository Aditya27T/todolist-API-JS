require('dotenv').config();

module.exports = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    pool: {
        max: process.env.POOL_MAX,
        min: process.env.POOL_MIN,
        acquire: process.env.POOL_ACQUIRE,
        idle: process.env.POOL_IDLE
    }   
};