const { checkHealth } = require("../services/health.service");

async function getHealth(req, res) {
  try {
    const health = await checkHealth();
    res.json(health);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getHealth };
