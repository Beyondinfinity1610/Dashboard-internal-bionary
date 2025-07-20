// routes/leaderboard.js
const express = require("express");
const router = express.Router();
const { getLeaderboard } = require("../controllers/contributor.controllers");

router.get("/leaderboard", getLeaderboard);

module.exports = router;
