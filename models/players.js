import { DataTypes } from "sequelize";
import Database from "../src/config/dbConfig.js";
import Team from "./teams.js";
import Division from "./divisions.js";

const db = new Database();
const sequelize = db.getSequelize();

const Player = sequelize.define(
  "Player",
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
    team_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Team,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    started_matches: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    total_matches: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "players",
    timestamps: true,
  }
);

Player.belongsTo(Team, { foreignKey: "team_id" });

export default Player;
