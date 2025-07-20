// controllers/leaderboardController.js
const Contributor = require("../models/contributors.models");

const getLeaderboard = async (req, res) => {
  try {
    const { department, topic } = req.query;

    let query = {};
    if (department && department !== "All") {
      query.department = department;
    }
    if (topic && topic !== "All") {
      query.topic = topic;
    }

    const contributors = await Contributor.find(query).sort({ points: -1 });

    res.status(200).json(contributors);
  } catch (error) {
    res.status(500).json({ message: "Database fetch failed." });
  }
};

module.exports = {
  getLeaderboard,
};
