"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const divCompBorrowingRules = [
      {
        div_id: 1,
        comp_id: 1,
        borrow_enabled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        div_id: 1,
        comp_id: 2,
        borrow_enabled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        div_id: 2,
        comp_id: 3,
        borrow_enabled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        div_id: 3,
        comp_id: 4,
        borrow_enabled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        div_id: 4,
        comp_id: 1,
        borrow_enabled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert(
      "div_comp_borrowing_rules",
      divCompBorrowingRules
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("div_comp_borrowing_rules", null, {});
  },
};
