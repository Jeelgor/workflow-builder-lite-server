const mongoose = require("mongoose");
const { summarizeText } = require("./llm.service");

async function checkHealth() {
  const health = {
    backend: "ok",
    database: "ok",
    llm: "ok",
  };

  // this condition will check wether mongoDB is connected or not
  if (mongoose.connection.readyState !== 1) {
    health.database = "down";
  }

  // in this condition if LLM return any error then health of LLM is update by down
  try {
    await summarizeText("health check");
  } catch {
    health.llm = "down";
  }

  return health;
}

module.exports = { checkHealth };
