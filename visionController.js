import { analyzeImageGemini } from "../services/geminiService.js";

export const analyzeImage = async (req, res) => {
  try {
    if (!req.files || !req.files.image)
      return res.status(400).json({ error: "No image uploaded" });

    const img = req.files.image.data.toString("base64");

    const result = await analyzeImageGemini(img);

    res.json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
