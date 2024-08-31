"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const divisions = [
      {
        name: "Mens",
        competition_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mens U23",
        competition_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Womens",
        competition_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Womens U23",
        competition_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Senior Mens",
        competition_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Junior Mens",
        competition_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Senior Womens",
        competition_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Junior Womens",
        competition_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("divisions", divisions);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("divisions", null, {});
  },
};
