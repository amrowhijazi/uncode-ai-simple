// app/page.js

export default function Home() {
  return (
    <main className="page">
      <div className="glow"></div>

      <div className="content">
        <h1 className="title">UNCODE AI</h1>

        <p className="tagline">
          The engine of the <span className="accent">Dyxale Universe</span> is alive.
        </p>

        <p className="sub">
          Soon this portal will let you talk to the minds of UNCODE: C12, C15,
          the Pantheon, and more. For now, the core is warming up.
        </p>

        <div className="buttons">
          <button className="btn primary" disabled>
            Enter the Intelligence (Soon)
          </button>
          <a
            className="btn secondary"
            href="https://dyxale.com"
            target="_blank"
            rel="noreferrer"
          >
            About Dyxale
          </a>
        </div>

        <p className="footer">
          © {new Date().getFullYear()} Dyxale · UNCODE Universe
        </p>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          width: 100%;
          background: radial-gradient(circle at top, #3b82f6 0, #020312 45%, #000000 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 16px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(129, 140, 248, 0.35), transparent 60%);
          filter: blur(10px);
          top: -150px;
          right: -100px;
          pointer-events: none;
        }

        .content {
          position: relative;
          max-width: 720px;
          text-align: center;
          z-index: 1;
        }

        .title {
          font-size: clamp(2.8rem, 5vw, 3.6rem);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin: 0 0 18px;
        }

        .tagline {
          font-size: 1.1rem;
          margin: 0 0 16px;
          color: #e5e7eb;
        }

        .accent {
          color: #a855f7;
          font-weight: 600;
        }

        .sub {
          margin: 0 auto 32px;
          max-width: 560px;
          color: #9ca3af;
          line-height: 1.6;
          font-size: 0.98rem;
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 32px;
        }

        .btn {
          border-radius: 999px;
          padding: 10px 22px;
          font-size: 0.95rem;
          font-weight: 500;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease-out;
          text-decoration: none;
        }

        .btn.primary {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: white;
          border-color: rgba(248, 250, 252, 0.12);
          cursor: not-allowed;
          opacity: 0.85;
        }

        .btn.primary:hover {
          transform: translateY(-1px);
        }

        .btn.secondary {
          background: transparent;
          color: #e5e7eb;
          border-color: rgba(148, 163, 184, 0.7);
        }

        .btn.secondary:hover {
          background: rgba(15, 23, 42, 0.9);
          transform: translateY(-1px);
        }

        .footer {
          margin: 0;
          font-size: 0.78rem;
          color: #6b7280;
        }

        @media (max-width: 600px) {
          .page {
            padding: 32px 16px;
          }

          .title {
            letter-spacing: 0.12em;
          }

          .sub {
            font-size: 0.9rem;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}
