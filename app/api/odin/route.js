export const dynamic = "force-dynamic";

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req) {
  try {
    const { question } = await req.json();

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are Odin, the Constructive Engine of UNCODE AI." },
        { role: "user", content: question }
      ]
    });

    return new Response(
      JSON.stringify({
        answer: response.choices[0].message.content
      }),
      { status: 200 }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}
