const {
  summarizeText,
  extractKeyPoints,
  tagCategory,
} = require("./llm.service");

const Run = require("../models/run.model");

async function executeStep(stepType, text) {
  switch (stepType) {
    case "clean_text":
      return text.trim().replace(/\s+/g, " ");

    case "summarize":
      return await summarizeText(text);

    case "extract_key_points":
      return await extractKeyPoints(text);

    case "tag_category":
      return await tagCategory(text);

    default:
      throw new Error("Unknown step type");
  }
}

module.exports = { executeStep };

async function runWorkflow(workflow, inputText) {
  let currentText = inputText;
  const stepOutputs = [];

  const steps = Array.isArray(workflow.steps) ? workflow.steps : [];

  const sortedSteps = steps.sort((a, b) => a.order - b.order);

  for (const step of sortedSteps) {
    const result = await executeStep(step.type, currentText);

    stepOutputs.push({
      stepType: step.type,
      output: result,
    });

    currentText = result;
  }

  const run = await Run.create({
    workflowId: workflow._id,
    workflowName: workflow.name,
    inputText,
    stepOutputs,
  });

  return run;
}

module.exports = { executeStep, runWorkflow };
