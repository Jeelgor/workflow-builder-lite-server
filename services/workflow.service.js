exports.createWorkflow = () => {};
exports.getWorkflows = () => {};
exports.getWorkflowById = () => {};
exports.runWorkflow = () => {};

async function executeWorkflow(workflow, inputText) {
  let currentText = inputText;
  const stepOutputs = [];

  for (const step of workflow.steps) {
    const result = await executeStep(step.type, currentText);

    stepOutputs.push({
      stepType: step.type,
      output: result,
    });

    currentText = result;
  }

  return stepOutputs;
}
