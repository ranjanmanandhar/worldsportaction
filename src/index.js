import express from "express";
import Database from "./config/dbConfig.js";
import Player from "../models/players.js";
import Team from "../models/teams.js";
import getBorrowablePlayers from "./services/borrowablePlayers.js";
import BorrowingRule from "../models/BorrowingRule.js";
import { Op } from "sequelize";

const app = express();
const router = express.Router();

const db = new Database();

router.get("/", (req, res) => {
  res.send("Hello");
});

router.get("/players", async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json(players);
  } catch (err) {
    console.log("Error fetching players", err);
  }
});

router.get("/borrowable-players/:teamId", async (req, res) => {
  const { teamId } = req.params;

  try {
    const team = await Team.findByPk(teamId);
    const division = await team.getDivision();
    const divisionBorrow = await BorrowingRule.findAll({
      where: {
        borrower_div_id: division.id,
        borrow_enabled: 1,
      },
    });

    const lenderIds = divisionBorrow.map((record) => record.lender_div_id);

    const lenderTeams = await Team.findAll({
      where: {
        division_id: {
          [Op.in]: lenderIds,
        },
      },
    });

    const lenderTeamIds = lenderTeams.map((record) => record.id);

    const players = await Player.findAll({
      where: {
        team_id: {
          [Op.in]: lenderTeamIds,
        },
      },
    });
    res.json(players);
  } catch (error) {
    console.error("Error fetching borrowable players:", error);
    res.status(500).json({ error: "Failed to fetch borrowable players" });
  }
});

app.use(router);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
