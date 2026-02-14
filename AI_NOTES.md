# AI_NOTES.md

## How AI was used

AI tools were used during development mainly for:

* Syntax help
* Getting a basic understanding of LLM models
* Improving some parts of the code
* Debugging a few large errors

---

## What was implemented manually

* Workflow creation logic
* Workflow execution logic
* Health check logic
* LLM integration logic (deciding where and how to call the LLM so the workflow runs step by step based on user-defined steps)

---

## LLM Provider Used

**Provider:** Groq
**Model:** llama-3.1-8b-instant (on-demand)

---

## Why this provider was chosen

Initially I tried to integrate Google Gemini, but I kept getting 404 errors like *model not found* or *not supported*.

I spent time trying to fix it, but since I could not resolve the issue in the given time, I switched to Groq.

Groq provides a free API and was quick to integrate, so it allowed me to complete the task with a working LLM pipeline.

---