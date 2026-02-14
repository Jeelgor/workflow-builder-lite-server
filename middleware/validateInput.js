function validateWorkflow(req, res, next) {
  const { name, steps } = req.body;

  if (!name || !Array.isArray(steps) || steps.length === 0) {
    return res.status(400).json({
      message: "Workflow name and steps are required",
    });
  }

  next();
}

function validateRun(req, res, next) {
  const { inputText } = req.body;

  if (!inputText || inputText.trim() === "") {
    return res.status(400).json({
      message: "Input text is required",
    });
  }

  next();
}

module.exports = {
  validateWorkflow,
  validateRun,
};
