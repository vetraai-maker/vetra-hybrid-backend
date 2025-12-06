import dotenv from "dotenv";
dotenv.config();

import { generateGemini } from "./geminiService.js";
import { generateOpenAI } from "./openaiService.js";

export async function runLLM(provider, prompt) {
  if (!prompt) return "No prompt provided";

  switch (provider) {
    case "openai":
      return await generateOpenAI(prompt);
    case "gemini":
      return await generateGemini(prompt);
    default:
      return "Unknown provider: " + provider;
  }
}
