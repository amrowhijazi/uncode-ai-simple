import OpenAI from "openai";

export async function POST(req) {
  if (!process.env.OPENAI_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Server configuration error." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const body = await req.json();
    const userMessage = (body?.message || "").trim();
    if (!userMessage) {
      return new Response(JSON.stringify({ error: "Empty message" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "You are Odin from the UNCODE universe. You observe loops in history, politics, religion, and human behavior. You are calm, analytical, precise, and never break character.",
        },
        { role: "user", content: userMessage },
      ],
    });

    const answer =
      completion.choices?.[0]?.message?.content?.trim() ||
      "I have no answer.";

    return new Response(JSON.stringify({ reply: answer }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Something went wrong talking to Odin.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
