import Division from "./divisions.js";
import { DataTypes, Model } from "sequelize";
import Database from "../src/config/dbConfig.js";

const db = new Database();
const sequelize = db.getSequelize();

const BorrowingRule = sequelize.define(
  "BorrowingRule",
  {
    // Model attributes are defined here
    borrower_div_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lender_div_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // allowNull defaults to true
    },
    borrow_enabled: {
      type: DataTypes.TINYINT,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    tableName: "div_borrowing_rules",
    timestamps: true,
  }
);

export default BorrowingRule;
