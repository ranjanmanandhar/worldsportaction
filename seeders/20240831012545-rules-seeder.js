"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const rules = [
      {
        rule_type: "Age Requirement",
        description: "Players must be 18 years or older to participate.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rule_type: "Gender Requirement",
        description:
          "Participants must be male to be eligible for this competition.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rule_type: "Nationality Requirement",
        description:
          "Players must be Australian citizens or permanent residents.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rule_type: "Medical Clearance",
        description: "Players must provide a medical clearance to participate.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rule_type: "Registration Deadline",
        description: "All players must register by the specified deadline.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rule_type: "Match Attendance",
        description:
          "Players must attend a minimum number of matches to be eligible for finals.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rule_type: "Code of Conduct",
        description:
          "Players must adhere to the code of conduct as outlined by the organization.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rule_type: "Equipment",
        description:
          "Players must wear the approved equipment and uniform during matches.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rule_type: "Team Participation",
        description:
          "Players must be part of a registered team to participate in the competition.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rule_type: "Behavioral Standards",
        description:
          "Players must maintain appropriate behavior both on and off the field.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("rules", rules);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rules", null, {});
  },
};
