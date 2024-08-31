import { DataTypes, Model } from "sequelize";
import sequelize from "../src/config/dbConfig.js";

class BorrowingRule extends Model {}

BorrowingRule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    borrower_div_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "divisions",
        key: "id",
      },
    },
    lender_div_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxStartedMatches: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "BorrowingRule",
    tableName: "div_borrowing_rules",
    timestamps: false, // If your table does not have `createdAt` and `updatedAt` fields
  }
);

export default BorrowingRule;
