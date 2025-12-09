export const dynamic = "force-dynamic";

import { processWithOdin } from "../../engine/odin";

export async function POST(req) {
  try {
    const body = await req.json();
    const userMessage = body?.message || "";

    if (!userMessage.trim()) {
      return new Response(
        JSON.stringify({ error: "Empty message" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { answer, analysis } = await processWithOdin(userMessage);

    return new Response(
      JSON.stringify({ answer, meta: analysis }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    // المهم السطر ده علشان نشوف الخطأ الحقيقي في لوج Vercel
    console.error(
      "Odin API error:",
      err?.response?.data || err?.message || err
    );

    return new Response(
      JSON.stringify({
        error: "Odin failed",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
