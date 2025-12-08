"use client";

import { useState } from "react";
import Link from "next/link";

export default function OdinProfile() {
  const [messages, setMessages] = useState([
    {
      from: "odin",
      text: "I am listening. Ask me about your loops, your repeated mistakes, or any system you feel trapped in.",
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

    setMessages((prev) => [
      ...prev,
      { from: "you", text: userText },
    ]);

    setLoading(true);
    try {
      const res = await fetch("/api/odin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      if (!res.ok || !data.answer) {
        throw new Error(data.error || "Odin did not answer.");
      }

      setMessages((prev) => [
        ...prev,
        { from: "odin", text: data.answer },
      ]);
    } catch (err) {
      console.error(err);
      setError("Odin is silent right now. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <div className="content">
        <header className="header">
          <p className="eyebrow">UNCODE ENTITY PROFILE</p>
          <h1 className="title">Odin</h1>
          <p className="subtitle">Watcher of Loops · Resident of C12</p>
        </header>

        <section className="section">
          <h2>Who is Odin?</h2>
          <p>
            Odin is not a god here. In the UNCODE universe he is a{" "}
            <span className="highlight">loop watcher</span> — a mind that walks
            between different versions of history, tracking how one decision
            mutates reality.
          </p>
          <p>
            He does not control time. He observes it. His job is to notice
            where humans repeat the same mistake under different names, in
            different flags, and different religions… and send a signal back to
            the system.
          </p>
        </section>

        <section className="section">
          <h2>Connection to C12</h2>
          <p>
            C12 is a chamber made of people. Odin is one of its anchors. When
            C12 needs to understand how a choice will echo through decades,
            Odin is the one who walks the path and reports what he saw.
          </p>
          <p>
            Inside C12 he appears calm, almost silent. But his internal map is
            full of wars, collapses, and tiny decisions that changed
            everything.
          </p>
        </section>

        <section className="section">
          <h2>Future Interface</h2>
          <p>
            This page is the first interface to Odin. The AI engine behind this
            site will let you speak to him as a character: about loops in
            politics, belief systems, or your own personal life.
          </p>
          <p>Below is an early test version of that interface.</p>
        </section>

        {/* CHAT PANEL */}
        <section className="chat">
          <h2>Talk to Odin (alpha)</h2>
          <div className="chatBox">
            <div className="chatMessages">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={
                    m.from === "you" ? "bubble bubbleYou" : "bubble bubbleOdin"
                  }
                >
                  <span className="bubbleLabel">
                    {m.from === "you" ? "You" : "Odin"}
                  </span>
                  <p>{m.text}</p>
                </div>
              ))}
              {loading && (
                <div className="bubble bubbleOdin bubbleTyping">
                  <span className="bubbleLabel">Odin</span>
                  <p>…reading the loop…</p>
                </div>
              )}
            </div>

            <form className="chatForm" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Ask Odin about a loop or repeated pattern…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
              />
              <button type="submit" disabled={loading || !input.trim()}>
                {loading ? "Waiting..." : "Send"}
              </button>
            </form>
            {error && <p className="error">{error}</p>}
          </div>
        </section>

        <footer className="footerLinks">
          <Link href="/portal" className="link">
            ← Back to UNCODE Portal
          </Link>
          <Link href="/portal#map" className="link">
            ← Back to Universe Map
          </Link>
        </footer>
      </div>

      {/* PAGE STYLES */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at top, #3b015a 0, #05040a 55%);
          color: #f8f0ff;
          padding: 60px 24px 80px;
          display: flex;
          justify-content: center;
        }

        .content {
          width: 100%;
          max-width: 820px;
        }

        .header {
          margin-bottom: 40px;
        }

        .eyebrow {
          letter-spacing: 0.18em;
          font-size: 11px;
          text-transform: uppercase;
          color: #ff4fd8;
          margin-bottom: 8px;
        }

        .title {
          font-size: 42px;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin: 0 0 4px;
        }

        .subtitle {
          color: #d7c6ff;
          font-size: 14px;
        }

        .section {
          margin-bottom: 28px;
          line-height: 1.6;
          font-size: 15px;
          color: #f2e7ff;
        }

        .section h2 {
          font-size: 18px;
          margin-bottom: 8px;
          color: #ffe6ff;
        }

        .highlight {
          color: #ff8cf5;
          font-weight: 600;
        }

        .chat {
          margin-top: 40px;
        }

        .chat h2 {
          font-size: 18px;
          margin-bottom: 12px;
        }

        .chatBox {
          background: rgba(8, 5, 20, 0.9);
          border-radius: 18px;
          padding: 16px 16px 14px;
          border: 1px solid rgba(255, 143, 245, 0.24);
          box-shadow: 0 0 30px rgba(255, 0, 185, 0.15);
        }

        .chatMessages {
          max-height: 260px;
          overflow-y: auto;
          padding-right: 4px;
          margin-bottom: 12px;
        }

        .bubble {
          padding: 10px 12px;
          border-radius: 12px;
          margin-bottom: 8px;
          font-size: 14px;
          line-height: 1.5;
        }

        .bubbleLabel {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          margin-bottom: 4px;
          opacity: 0.7;
        }

        .bubbleOdin {
          background: rgba(34, 15, 70, 0.9);
          border: 1px solid rgba(255, 143, 245, 0.35);
        }

        .bubbleYou {
          background: rgba(5, 86, 118, 0.9);
          border: 1px solid rgba(118, 214, 255, 0.4);
          margin-left: 32px;
        }

        .bubbleTyping {
          font-style: italic;
          opacity: 0.85;
        }

        .chatForm {
          display: flex;
          gap: 8px;
        }

        .chatForm input {
          flex: 1;
          background: rgba(7, 5, 20, 0.9);
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 12px;
          font-size: 14px;
          color: #f6ebff;
          outline: none;
        }

        .chatForm input:focus {
          border-color: #ff8cf5;
          box-shadow: 0 0 0 1px rgba(255, 140, 245, 0.4);
        }

        .chatForm button {
          padding: 8px 18px;
          border-radius: 999px;
          border: none;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          background: linear-gradient(135deg, #ff4fd8, #ffb36b);
          color: #0b0412;
          white-space: nowrap;
        }

        .chatForm button:disabled {
          opacity: 0.6;
          cursor: default;
        }

        .error {
          margin-top: 6px;
          font-size: 12px;
          color: #ffb3b3;
        }

        .footerLinks {
          margin-top: 32px;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 13px;
        }

        .link {
          color: #ffb3ff;
          text-decoration: none;
        }

        .link:hover {
          text-decoration: underline;
        }

        @media (max-width: 640px) {
          .page {
            padding: 40px 16px 60px;
          }
          .title {
            font-size: 32px;
          }
        }
      `}</style>
    </main>
  );
}
