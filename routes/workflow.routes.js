const express = require("express");
const router = express.Router();

const {
  createWorkflow,
  getWorkflows,
  runWorkflowController,
} = require("../controllers/workflow.controller");
const {
  validateWorkflow,
  validateRun,
} = require("../middleware/validateInput");

router.post("/workflows", validateWorkflow, createWorkflow);
router.get("/workflows", getWorkflows);
router.post("/workflows/:id/run", validateRun, runWorkflowController);

module.exports = router;
