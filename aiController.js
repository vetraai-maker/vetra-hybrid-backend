import { runLLM } from "../services/llmService.js";

export const runAI = async (req, res) => {
  try {
    const { prompt } = req.body;
    const reply = await runLLM(prompt);

    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
