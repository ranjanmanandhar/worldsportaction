import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

class Database {
  constructor() {
    this.sequelize = undefined;

    this.MYSQL_DB = process.env.MYSQL_DB;
    this.MYSQL_HOST = process.env.MYSQL_HOST;
    this.MYSQL_PORT = parseInt(process.env.MYSQL_PORT, 10);
    this.MYSQL_USER = process.env.MYSQL_USER;
    this.MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;

    this.connectToMysql();
  }

  async connectToMysql() {
    this.sequelize = new Sequelize(
      this.MYSQL_DB,
      this.MYSQL_USER,
      this.MYSQL_PASSWORD,
      {
        host: this.MYSQL_HOST,
        port: this.MYSQL_PORT,
        dialect: "mysql",
      }
    );

    try {
      await this.sequelize.authenticate();
      console.log("Connection to MYSQL established successfully");
      await this.initialize();
    } catch (err) {
      console.error("Unable to connect to database:", err);
    }
  }

  async initialize() {
    try {
      await this.sequelize.sync();
      console.log("Database synchronized");
    } catch (error) {
      console.error("Error syncing database:", error);
    }
  }

  getSequelize() {
    return this.sequelize;
  }
}

export default Database;
