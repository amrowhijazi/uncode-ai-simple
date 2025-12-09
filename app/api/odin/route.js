// app/api/odin/route.js

export const dynamic = "force-dynamic";

import { processWithOdin } from "../../engine/odin";

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

    const { answer, analysis } = await processWithOdin(userMessage);

    return new Response(
      JSON.stringify({
        answer,
        meta: analysis,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Odin API error:", err);
    return new Response(
      JSON.stringify({
        error: "Something went wrong talking to Odin.",
      }),
      { status: 500 }
    );
  }
}
