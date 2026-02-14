const express = require("express");
const router = express.Router();

const { getRecentRuns } = require("../controllers/run.controller");

router.get("/runs", getRecentRuns);

module.exports = router;
