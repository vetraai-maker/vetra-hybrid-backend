import { parseFileText } from "../utils/fileParser.js";
import { runLLM } from "../services/llmService.js";

export async function processFile(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const text = await parseFileText(req.file.path);

    // Choose default provider as OpenAI (you can change later)
    const response = await runLLM("openai", text);

    res.json({
      success: true,
      extractedText: text,
      aiResponse: response,
    });
  } catch (error) {
    console.error("File processing error:", error);
    res.status(500).json({ error: "File processing failed" });
  }
}
