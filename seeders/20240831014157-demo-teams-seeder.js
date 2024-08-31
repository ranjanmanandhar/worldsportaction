"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const teams = [
      {
        name: "Melbourne Storm",
        division_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Penrith Panthers",
        division_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sydney Roosters",
        division_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cronulla-Sutherland Sharks",
        division_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("teams", teams);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("teams", null, {});
  },
};
