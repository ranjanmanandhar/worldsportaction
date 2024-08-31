"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const playerRules = [
      {
        player_id: 1,
        rule_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 1,
        rule_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 2,
        rule_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 2,
        rule_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 3,
        rule_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 3,
        rule_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 4,
        rule_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 4,
        rule_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 5,
        rule_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 5,
        rule_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 6,
        rule_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 6,
        rule_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 7,
        rule_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 7,
        rule_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 8,
        rule_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 8,
        rule_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 9,
        rule_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 9,
        rule_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 10,
        rule_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 10,
        rule_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("player_rules", playerRules);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("player_rules", null, {});
  },
};
