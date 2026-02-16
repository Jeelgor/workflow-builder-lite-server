const mongoose = require("mongoose");
const { summarizeText } = require("./llm.service");

async function checkHealth() {
  const health = {
    backend: "ok",
    database: "ok",
    llm: "ok",
  };

  // this condition will check wether mongoDB is connected or not
  try {
    await mongoose.connection.db.admin().ping();
  } catch (error) {
    health.database = "down";
  }
  // in this condition if LLM return any error then health of LLM is update by down
  try {
    const result = await summarizeText("health check");

    if (!result || result.includes("error")) {
      health.llm = "down";
    }
  } catch (e) {
    health.llm = "down";
  }

  return health;
}

module.exports = { checkHealth };
