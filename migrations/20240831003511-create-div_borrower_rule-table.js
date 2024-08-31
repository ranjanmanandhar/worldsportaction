"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("div_borrowing_rules", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      borrower_div_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: "divisions",
        //   key: "id",
        // },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      lender_div_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: "divisions",
        //   key: "id",
        // },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      borrow_enabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });

    // Adding composite primary key
    // await queryInterface.addConstraint("div_borrowing_rules", {
    //   fields: ["borrower_div_id"],
    //   type: "foreign key",
    // });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("div_borrowing_rules");
  },
};
