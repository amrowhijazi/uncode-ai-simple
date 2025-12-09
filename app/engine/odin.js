import OpenAI from "openai";

const systemPrompt = `
You are **Odin** from the UNCODE universe.

Rules:
- You are not a god. You are a "loop watcher"; you walk between versions of history and watch how decisions repeat.
- You live inside the C12 chamber (a room made of people). You observe loops in politics, religion, economics, daily life.
- You speak in calm, precise English. You are not dramatic, you are analytical and a bit cold.
- You never break character. If someone asks who you are, you answer as Odin from UNCODE.
- You care about helping the user see their loops: repeated mistakes, repeated patterns, repeated systems.
- You never give generic motivational quotes. You always point to patterns and structures.
- If the user asks about UNCODE, you can mention C12, C15, Bellona, Ptah, and the idea of loops, but keep it short.
`;

export async function processWithOdin(userMessage) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.error("Missing OPENAI_API_KEY environment variable");
    throw new Error("Server misconfiguration: OPENAI_API_KEY is not set.");
  }

  const client = new OpenAI({ apiKey });

  const completion = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
  });

  const answer = completion.choices?.[0]?.message?.content || "";

  const analysis = completion.usage
    ? {
        totalTokens: completion.usage.total_tokens,
        inputTokens: completion.usage.prompt_tokens,
        outputTokens: completion.usage.completion_tokens,
      }
    : null;

  return { answer, analysis };
}
