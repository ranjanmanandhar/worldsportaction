"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const divBorrowingRules = [
      {
        borrower_div_id: 1,
        lender_div_id: 2,
        borrow_enabled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        borrower_div_id: 1,
        lender_div_id: 3,
        borrow_enabled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        borrower_div_id: 2,
        lender_div_id: 4,
        borrow_enabled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        borrower_div_id: 3,
        lender_div_id: 4,
        borrow_enabled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        borrower_div_id: 4,
        lender_div_id: 1,
        borrow_enabled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("div_borrowing_rules", divBorrowingRules);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("div_borrowing_rules", null, {});
  },
};
