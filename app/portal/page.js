'use client';

export default function Portal() {
  return (
    <main className="portal">
      <div className="glow"></div>

      <h1 className="title">ENTER THE INTELLIGENCE</h1>

      <p className="sub">
        Choose an entity from the UNCODE Universe to begin the conversation.
      </p>

      <div className="buttons">
        <a className="btn" href="/entities">
          Explore Entities
        </a>

        <a className="btn secondary" href="/">
          Back to Home
        </a>
      </div>

      <style jsx>{`
        .portal {
          min-height: 100vh;
          background: #000;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          position: relative;
        }

        .glow {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #ff0095, transparent 70%);
          opacity: 0.3;
          filter: blur(40px);
          position: absolute;
          top: 10%;
        }

        .title {
          font-size: 2.8rem;
          letter-spacing: 0.15em;
          margin-bottom: 1rem;
        }

        .sub {
          opacity: 0.8;
          max-width: 400px;
          margin-bottom: 2rem;
        }

        .buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn {
          padding: 12px 24px;
          border-radius: 8px;
          border: 1px solid #fff4;
          background: transparent;
          color: #fff;
          text-decoration: none;
          transition: 0.2s;
        }

        .btn:hover {
          background: #ffffff15;
        }

        .secondary {
          opacity: 0.7;
        }

        .secondary:hover {
          opacity: 1;
        }
      `}</style>
    </main>
  );
}
