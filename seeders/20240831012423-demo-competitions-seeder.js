"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const competitions = [
      {
        name: "Summer Championship",
        start_date: new Date("2024-06-01"),
        end_date: new Date("2024-08-31"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Winter Trophy",
        start_date: new Date("2024-12-01"),
        end_date: new Date("2025-02-28"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Autumn League",
        start_date: new Date("2024-09-01"),
        end_date: new Date("2024-11-30"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Spring Cup",
        start_date: new Date("2024-03-01"),
        end_date: new Date("2024-05-31"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("competitions", competitions);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("competitions", null, {});
  },
};
