const express = require("express");
const router = express.Router();

const {
  createWorkflow,
  getWorkflows,
  runWorkflowController,
} = require("../controllers/workflow.controller");

router.post("/workflows", createWorkflow);
router.get("/workflows", getWorkflows);
router.post("/workflows/:id/run", runWorkflowController);

module.exports = router;
