const mongoose = require("mongoose");

const runSchema = new mongoose.Schema(
  {
    workflowId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workflow",
    },
    workflowName: {
      type: String,
      required: true,
    },
    inputText: String,
    stepOutputs: [
      {
        stepType: String,
        output: String,
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Run", runSchema);
