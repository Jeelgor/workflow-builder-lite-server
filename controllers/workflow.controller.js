const Workflow = require("../models/workflow.model");
const { runWorkflow } = require("../services/workflow.service");

// Create workflow
async function createWorkflow(req, res) {
  try {
    const { name, steps } = req.body;

    if (!name || !steps || !steps.length) {
      return res.status(400).json({ message: "Name and steps required" });
    }

    const workflow = await Workflow.create({ name, steps });
    res.status(201).json(workflow);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Get all workflows
async function getWorkflows(req, res) {
  try {
    const workflows = await Workflow.find().sort({ createdAt: -1 });
    res.json(workflows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Run workflow
async function runWorkflowController(req, res) {
  try {
    const { id } = req.params;
    const { inputText } = req.body;

    if (!inputText) {
      return res.status(400).json({ message: "Input text required" });
    }

    const workflow = await Workflow.findById(id);
    if (!workflow) {
      return res.status(404).json({ message: "Workflow not found" });
    }

    const run = await runWorkflow(workflow, inputText);
    res.json(run);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  createWorkflow,
  getWorkflows,
  runWorkflowController,
};
