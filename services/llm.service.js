const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

async function callLLM(prompt) {
  try {
    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("LLM error:", error.message);
    return "LLM error occurred";
  }
}

async function summarizeText(text) {
  return callLLM(`Summarize the following text:\n\n${text}`);
}

async function extractKeyPoints(text) {
  return callLLM(`Extract key points:\n\n${text}`);
}

async function tagCategory(text) {
  return callLLM(`Give a short category:\n\n${text}`);
}

module.exports = {
  summarizeText,
  extractKeyPoints,
  tagCategory,
};
