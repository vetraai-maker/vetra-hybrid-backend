import { memoryDB } from "../db/memoryDB.js";
import { runLLM } from "../services/llmService.js";

export const chatWithMemory = async (req, res) => {
  try {
    const { user, message } = req.body;

    if (!memoryDB[user]) memoryDB[user] = [];

    memoryDB[user].push({ role: "user", message });

    const historyText = memoryDB[user]
      .map((m) => `${m.role}: ${m.message}`)
      .join("\n");

    const aiReply = await runLLM(
      `This is ongoing chat:\n${historyText}\nAI:`
    );

    memoryDB[user].push({ role: "ai", message: aiReply });

    res.json({ reply: aiReply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
