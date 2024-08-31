"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const rounds = [
      {
        name: "R1",
        description: "Round 1 of the competition.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "R2",
        description: "Round 2 of the competition.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "R3",
        description: "Round 3 of the competition.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "R4",
        description: "Round 4 of the competition.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "R5",
        description: "Round 5 of the competition.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("rounds", rounds);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rounds", null, {});
  },
};
