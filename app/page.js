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
            rel="noopener noreferrer"
          >
            Visit Dyxale
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
          gap: 1rem;
        }

        .title {
          font-size: 3rem;
          font-weight: bold;
        }

        .tagline {
          font-size: 1.2rem;
          opacity: 0.8;
        }

        .accent {
          color: #ff0066;
          font-weight: bold;
        }

        .sub {
          max-width: 500px;
          text-align: center;
          opacity: 0.7;
        }

        .buttons {
          margin-top: 2rem;
          display: flex;
          gap: 1rem;
        }

        .btn {
          padding: 10px 20px;
          border-radius: 8px;
          text-decoration: none;
          border: 1px solid #fff3;
          color: white;
          cursor: pointer;
        }

        .primary {
          background: #444;
        }

        .secondary {
          background: transparent;
        }
      `}</style>
    </main>
  );
}
