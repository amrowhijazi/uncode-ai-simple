export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import OpenAI from "openai";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { question } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Missing OPENAI_API_KEY" }),
        { status: 500 }
      );
    }

    // ✅ IMPORTANT: instantiate inside the handler (runtime only)
    const client = new OpenAI({ apiKey });

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "You are Odin, the Constructive Engine of UNCODE AI." },
        { role: "user", content: question }
      ],
    });

    return new Response(
      JSON.stringify({ answer: response.choices?.[0]?.message?.content ?? "" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: err?.message ?? "Unknown error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
