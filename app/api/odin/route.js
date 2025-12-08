import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();
    const userMessage = body?.message || "";

    if (!userMessage.trim()) {
      return new Response(
        JSON.stringify({ error: "Empty message" }),
        { status: 400 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: `You are **Odin** from the UNCODE universe...`,
        },
        { role: "user", content: userMessage },
      ],
    });

    const answer =
      completion.choices[0]?.message?.content || "I have no answer.";

    return new Response(JSON.stringify({ reply: answer }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Odin API error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong talking to Odin." }),
      { status: 500 }
    );
  }
}
