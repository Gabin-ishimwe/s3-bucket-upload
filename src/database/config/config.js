const dotenv  = require('dotenv');
dotenv.config();

module.exports = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
};
  