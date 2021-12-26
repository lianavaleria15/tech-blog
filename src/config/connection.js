const Sequelize = require("sequelize");
require("dotenv").config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const dbOptions = {
  host: dbHost,
  dialect: "mysql",
  port: 3306,
};

const sequelize = new Sequelize(dbName, dbUser, dbPassword, dbOptions);

module.exports(sequelize);
