import dotenv from "dotenv";
dotenv.config();

export async function generateOpenAI(prompt) {
  return `OpenAI response for: ${prompt}`;
}
