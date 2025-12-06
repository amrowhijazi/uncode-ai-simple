'use client';

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
          This portal will soon let you talk to the minds of UNCODE: C12, C15,
          the Pantheon, and more. For now, the core is warming up.
        </p>

        <div className="buttons">
          <button className="btn primary" disabled>
            Enter the Intelligence (Soon)
          </button>

          <a
            href="https://dyxale.com"
            target="_blank"
            className="btn secondary"
          >
            Visit Dyxale.com
          </a>
        </div>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          background: #000;
          color: white;
          padding: 20px;
          text-align: center;
        }

        .glow {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #ff0095, transparent 70%);
          position: absolute;
          top: 10%;
          opacity: 0.35;
          filter: blur(40px);
          z-index: 0;
        }

        .content {
          z-index: 2;
          max-width: 600px;
        }

        .title {
          font-size: 3rem;
          font-weight: bold;
        }

        .tagline {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-top: 1rem;
        }

        .accent {
          color: #ff0095;
          font-weight: bold;
        }

        .sub {
          margin-top: 1.5rem;
          font-size: 1rem;
          opacity: 0.7;
        }

        .buttons {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .btn {
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 1rem;
          cursor: pointer;
          border: 1px solid #ffffff30;
          transition: 0.3s;
        }

        .primary {
          background: #222;
          cursor: not-allowed;
          opacity: 0.5;
        }

        .secondary {
          background: transparent;
          color: #fff;
        }

        .secondary:hover {
          background: #ffffff10;
        }
      `}</style>
    </main>
  );
}
