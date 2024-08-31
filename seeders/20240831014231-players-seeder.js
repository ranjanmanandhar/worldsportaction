"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const players = [
      {
        name: "John Doe",
        team_id: 1,
        started_matches: 5,
        total_matches: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Smith",
        team_id: 2,
        started_matches: 8,
        total_matches: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mike Johnson",
        team_id: 3,
        started_matches: 7,
        total_matches: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Emily Davis",
        team_id: 4,
        started_matches: 10,
        total_matches: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chris Brown",
        team_id: 1,
        started_matches: 6,
        total_matches: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Anna Wilson",
        team_id: 2,
        started_matches: 9,
        total_matches: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "David Taylor",
        team_id: 3,
        started_matches: 11,
        total_matches: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Olivia Martinez",
        team_id: 4,
        started_matches: 12,
        total_matches: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "James Anderson",
        team_id: 1,
        started_matches: 14,
        total_matches: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sophia Thomas",
        team_id: 2,
        started_matches: 13,
        total_matches: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("players", players);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("players", null, {});
  },
};
