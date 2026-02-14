const express = require("express");
const router = express.Router();

router.use(require("./workflow.routes"));
router.use(require("./run.routes"));
router.use(require("./health.routes"));

router.get("/", (req, res) => {
  res.json({ message: "API running" });
});

module.exports = router;
