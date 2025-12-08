"use client";

import { useState } from "react";
import Link from "next/link";

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

    // أضف رسالة المستخدم في التاريخ
    setMessages((prev) => [...prev, { from: "you", text: userText }]);

    try {
      setLoading(true);

      // لو عملنا API لاحقًا، هنستدعيه من هنا
      const res = await fetch("/api/odin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      if (!res.ok) {
        throw new Error("Odin is silent. Try again later.");
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          from: "odin",
          text: data.reply ?? "I saw the loop, but I will answer later.",
        },
      ]);
    } catch (err) {
      console.error(err);
      setError("Something broke in the loop. Please try again.");
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
        {/* Header */}
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

        {/* Chat Section */}
        <section style={{ marginTop: "32px" }}>
          <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>
            Talk to Odin (Prototype)
          </h2>
          <p style={{ marginBottom: "16px", opacity: 0.8 }}>
            This is an experimental interface. Odin will answer as a watcher of
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
                    {m.from === "you" ? "You" : "Odin"}
                    {": "}
                  </span>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {error && (
            <p
              style={{
                marginTop: "8px",
                color: "#ff7070",
                fontSize: "13px",
              }}
            >
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
                whiteSpace: "nowrap",
              }}
            >
              {loading ? "Listening…" : "Send"}
            </button>
          </form>
        </section>

        {/* Lore Section */}
        <section
          style={{
            marginTop: "40px",
            fontSize: "14px",
            opacity: 0.85,
            lineHeight: 1.6,
          }}
        >
          <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>Who is Odin?</h2>
          <p>
            Odin is not a god here. In the UNCODE universe he is a{" "}
            <span style={{ fontStyle: "italic" }}>loop watcher</span> — a mind
            that walks between different versions of history, tracking how one
            decision mutates reality.
          </p>
          <p style={{ marginTop: "8px" }}>
            He does not control time. He observes it and reports back to C12
            when humans repeat the same mistake under different names and
            flags.
          </p>

          <h2
            style={{
              fontSize: "18px",
              marginTop: "24px",
              marginBottom: "8px",
            }}
          >
            Connection to C12
          </h2>
          <p>
            C12 is a mental chamber built from people, memory and logic. Odin is
            one of its anchors. When C12 needs to understand how a choice will
            echo through decades, Odin is the one who walks the path and
            reports what he saw.
          </p>

          <h2
            style={{
              fontSize: "18px",
              marginTop: "24px",
              marginBottom: "8px",
            }}
          >
            Future Interface
          </h2>
          <p>
            This page is a prototype. Later it will connect directly to the
            UNCODE AI engine so you can ask Odin about political loops, economic
            traps, social cycles, or your own personal life.
          </p>
        </section>

        {/* Footer Links */}
        <div style={{ marginTop: "32px", fontSize: "13px", opacity: 0.7 }}>
          <Link href="/universe">← Back to Universe Map</Link> ·{" "}
          <Link href="/portal">Enter UNCODE Portal</Link>
        </div>
      </div>
    </main>
  );
}
