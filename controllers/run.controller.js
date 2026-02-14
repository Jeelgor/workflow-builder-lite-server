const Run = require("../models/run.model");

async function getRecentRuns(req, res) {
  try {
    const runs = await Run.find().sort({ createdAt: -1 }).limit(5);

    res.json(runs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getRecentRuns };
