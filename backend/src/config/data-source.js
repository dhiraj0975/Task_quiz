require('dotenv').config();
const { DataSource } = require('typeorm');
const { Question } = require('../entities/Question');

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "mcq_db",
    synchronize: false,
    logging: false,
    entities: [Question],
    subscribers: [],
    migrations: [],
});

module.exports = { AppDataSource };
