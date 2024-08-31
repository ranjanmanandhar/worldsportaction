import { DataTypes } from "sequelize";
import Database from "../src/config/dbConfig.js";
import Division from "./divisions.js";

const db = new Database();
const sequelize = db.getSequelize();

const Team = sequelize.define(
  "Team",
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
    division_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Division,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
  },
  {
    tableName: "teams",
    timestamps: true,
  }
);

Team.belongsTo(Division, { foreignKey: "division_id", as: "division" });
Division.hasMany(Team, { foreignKey: "division_id" });

export default Team;
