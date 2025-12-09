// app/engine/odin.js

import OpenAI from "openai";
import { analyzeMessage } from "./bellona";
import { buildConversation } from "./ptah";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function processWithOdin(userMessage) {
  const analysis = analyzeMessage(userMessage);
  const messages = buildConversation({ message: userMessage, analysis });

  const completion = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages,
    temperature: 0.3,
  });

  const answer =
    completion.choices?.[0]?.message?.content?.trim() ||
    "I have no answer.";

  return {
    answer,
    analysis,
  };
}

