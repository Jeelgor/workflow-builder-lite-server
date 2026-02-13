const mongoose = require("mongoose");

const stepSchema = new mongoose.Schema({
  type: { type: String, required: true },
  order: { type: Number, required: true },
});

const workflowSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    steps: [stepSchema],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Workflow", workflowSchema);
