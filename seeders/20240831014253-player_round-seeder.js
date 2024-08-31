"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const playerRounds = [
      {
        player_id: 1,
        round_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 1,
        round_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 2,
        round_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 2,
        round_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 3,
        round_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 3,
        round_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 4,
        round_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 4,
        round_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 5,
        round_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 5,
        round_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 6,
        round_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 6,
        round_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 7,
        round_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 7,
        round_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 8,
        round_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 8,
        round_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 9,
        round_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 9,
        round_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 10,
        round_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 10,
        round_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("player_rounds", playerRounds);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("player_rounds", null, {});
  },
};
