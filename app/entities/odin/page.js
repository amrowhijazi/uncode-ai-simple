'use client';

import Link from 'next/link';

export default function OdinProfile() {
  return (
    <main className="odin">
      <header className="hero">
        <p className="eyebrow">UNCODE ENTITY PROFILE</p>
        <h1>Odin</h1>
        <p className="subtitle">Watcher of Loops · Resident of C12</p>
      </header>

      <section className="section">
        <h2>Who is Odin?</h2>
        <p>
          Odin is not a god here. In the UNCODE universe he is a
          <span className="accent"> loop watcher</span> — a mind that walks between
          different versions of history, tracking how one decision mutates reality.
        </p>
        <p>
          He does not control time. He observes it. His job is to notice where humans
          repeat the same mistake under different names, different flags, and different
          religions… and send a signal back to the system.
        </p>
      </section>

      <section className="section">
        <h2>Connection to C12</h2>
        <p>
          C12 is a chamber made of people. Odin is one of its anchors. When C12 needs to
          understand how a choice will echo through decades, Odin is the one who walks
          the path and reports what he saw.
        </p>
        <p>
          Inside C12 he appears calm, almost silent. But his internal map is full of
          wars, collapses, and tiny decisions that changed everything.
        </p>
      </section>

      <section className="section">
        <h2>Future Interface</h2>
        <p>
          Later, this page will let you <span className="accent">talk to Odin</span>{' '}
          through an AI interface. You will be able to ask him about loops in
          politics, economics, belief systems, or your own personal life.
        </p>
        <p>
          For now, this is only a static description — the chamber is warming up.
        </p>
      </section>

      {/* Navigation */}
      <footer className="footer">
        <Link href="/entities" className="btn ghost">
          ← Back to Universe Map
        </Link>
        <Link href="/portal" className="btn">
          Enter UNCODE Portal
        </Link>
      </footer>

      <style jsx>{`
        .odin {
          min-height: 100vh;
          background: radial-gradient(circle at top, #200032, #020006 55%);
          color: #fff;
          padding: 40px 20px 80px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .hero {
          max-width: 900px;
          margin: 0 auto 30px;
          text-align: left;
        }

        .eyebrow {
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          opacity: 0.7;
          margin-bottom: 8px;
        }

        .hero h1 {
          font-size: 2.8rem;
          margin: 0 0 6px;
        }

        .subtitle {
          opacity: 0.8;
        }

        .section {
          max-width: 900px;
          margin: 28px auto;
        }

        .section h2 {
          font-size: 1.4rem;
          margin-bottom: 6px;
        }

        .section p {
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 10px;
        }

        .accent {
          color: #ff0095;
          margin-left: 4px;
        }

        .footer {
          max-width: 900px;
          margin: 40px auto 0;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          border-radius: 999px;
          padding: 8px 18px;
          border: none;
          font-size: 0.9rem;
          cursor: pointer;
          background: #ff0095;
          color: #fff;
          text-decoration: none;
        }

        .btn.ghost {
          background: transparent;
          border: 1px solid #ffffff55;
        }

        .btn:hover {
          opacity: 0.9;
        }

        @media (max-width: 640px) {
          .odin {
            padding: 24px 16px 60px;
          }
          .hero h1 {
            font-size: 2.2rem;
          }
          .footer {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
