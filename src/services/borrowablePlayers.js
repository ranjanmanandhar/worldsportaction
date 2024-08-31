import { Op } from "sequelize";
import Player from "../../models/players.js";
import Team from "../../models/teams.js";
import Division from "../../models/divisions.js";
import BorrowingRule from "../../models/BorrowingRule.js"; // Import BorrowingRule model

async function getBorrowablePlayers(teamId) {
  //   try {
  // return team;
  // if (!team) {
  //   throw new Error("Team not found");
  // }
  // const division = team.division;
  // const borrowingRules = division.borrowingRules; // Access borrowing rules now
  // // Assuming a single rule:
  // const rule = borrowingRules[0].maxStartedMatches; // Adjust index if multiple rules
  // const availablePlayers = await Player.findAll({
  //   where: {
  //     team_id: null,
  //     started_matches: {
  //       [Op.lt]: rule,
  //     },
  //   },
  // });
  // return availablePlayers;
  //   } catch (error) {
  //     console.error("Error fetching borrowable players:", error);
  //     throw error;
  //   }
}

export default getBorrowablePlayers;
