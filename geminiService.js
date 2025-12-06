import dotenv from "dotenv";
dotenv.config();

/**
 * Text generation using Gemini (mock fallback)
 */
export async function generateGemini(prompt) {
  return `Gemini response for: ${prompt}`;
}

/**
 * Image analysis using Gemini (mock fallback)
 */
export async function analyzeImageGemini(imageBuffer) {
  return `Gemini analyzed image and detected basic patterns.`;
}
