"use client";
export const dynamic = "force-dynamic";
export const revalidate = false;

import OdinClient from "./OdinClient";

export default function Page() {
  return <OdinClient />;
}

import { useState } from "react";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function OdinProfile() {
  const [messages, setMessages] = useState([
    {
      from: "odin",
      text:
        "I am listening. Ask me about your loops, your repeated mistakes, or any system you feel trapped in.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSend(e) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();

    setInput("");
    setError("");
    setLoading(true);

    setMessages((prev) => [...prev, { from: "you", text: userText }]);

    try {
      const res = await fetch("/api/odin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userText }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Odin is silent. Try again later.");
      }

      setMessages((prev) => [
        ...prev,
        {
          from: "odin",
          text: data.answer || "The loop was observed, but no answer returned.",
        },
      ]);
    } catch (err) {
      console.error("Odin UI error:", err);
      setError(err.message || "Something broke in the loop. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #ff00aa 0, #050012 55%, #000 100%)",
        color: "white",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "760px", width: "100%" }}>
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          UNCODE ENTITY PROFILE
        </p>

        <h1 style={{ fontSize: "40px", marginTop: "8px" }}>Odin</h1>
        <p style={{ marginTop: "4px", opacity: 0.8 }}>
          Watcher of Loops · Resident of C12
        </p>

        <section style={{ marginTop: "32px" }}>
          <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>
            Talk to Odin (Prototype)
          </h2>
          <p style={{ marginBottom: "16px", opacity: 0.8 }}>
            This is an experimental interface. Odin responds as a watcher of
            loops, not as a god.
          </p>

          <div
            style={{
              borderRadius: "16px",
              padding: "16px",
              background: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.08)",
              maxHeight: "320px",
              overflowY: "auto",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "10px",
                  textAlign: m.from === "you" ? "right" : "left",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "999px",
                    background:
                      m.from === "you"
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(255,0,170,0.2)",
                    fontSize: "14px",
                  }}
                >
                  <span
                    style={{
                      opacity: 0.7,
                      fontSize: "11px",
                      marginRight: "6px",
                    }}
                  >
                    {m.from === "you" ? "You" : "Odin"}:
                  </span>{" "}
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {error && (
            <p style={{ marginTop: "8px", color: "#ff7070", fontSize: "13px" }}>
              {error}
            </p>
          )}

          <form
            onSubmit={handleSend}
            style={{ marginTop: "12px", display: "flex", gap: "8px" }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Odin about a loop in your life…"
              style={{
                flex: 1,
                padding: "10px 12px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(0,0,0,0.7)",
                color: "white",
                fontSize: "14px",
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                border: "none",
                fontSize: "14px",
                background: loading
                  ? "rgba(255,255,255,0.2)"
                  : "linear-gradient(90deg,#ff00aa,#ff5f6d)",
                color: "white",
                cursor: loading ? "default" : "pointer",
              }}
            >
              {loading ? "Listening…" : "Send"}
            </button>
          </form>
        </section>

        <div style={{ marginTop: "32px", fontSize: "13px", opacity: 0.7 }}>
          <Link href="/portal">Enter UNCODE Portal</Link>
        </div>
      </div>
    </main>
  );
}
