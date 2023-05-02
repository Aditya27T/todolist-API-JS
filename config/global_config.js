require('dotenv').config();
const db = require('./db_config/config');
const jwt = require('./jwt_config/config');

module.exports = {
    port: process.env.PORT,
    db,
    jwt
};