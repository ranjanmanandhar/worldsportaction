import { DataTypes } from "sequelize";
import Database from "../src/config/dbConfig.js";
import BorrowingRule from "./BorrowingRule.js";
import Team from "./teams.js";

const db = new Database();
const sequelize = db.getSequelize();

const Division = sequelize.define(
  "Division",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    competition_id: {
      type: DataTypes.INTEGER, // Define your rules here as JSON
    },
  },
  {
    tableName: "divisions",
    timestamps: true,
  }
);

// Assuming a Division has many BorrowingRules
// Division.hasMany(BorrowingRule, {
//   //   as: "outborrowingRules",
//   foreignKey: "division_id", // Add a foreign key in BorrowingRule that refers to Division
// });
// BorrowingRule.belongsTo(Division, {
//   foreignKey: "division_id",
// });

// Query including the associated BorrowingRules
// const divisions = await Division.findAll({
//   include: [
//     {
//       model: BorrowingRule,
//       //   as: "outborrowingRules",
//     },
//   ],
// });

export default Division;
