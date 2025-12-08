'use client';

const realms = [
  {
    id: 'c12',
    name: 'C12 Chamber',
    type: 'Collective Room',
    tagline: 'Where thinkers are wired together.',
    description:
      'C12 is a mental chamber. A room built from people, memory, and logic. Every member is a living neuron in a shared brain.',
  },
  {
    id: 'c15',
    name: 'C15 Core',
    type: 'Decision Engine',
    tagline: 'Cold logic, sharp cuts.',
    description:
      'C15 is not a person. It is a structure that eats questions and returns brutal, clear decisions. No emotions allowed inside.',
  },
  {
    id: 'pantheon',
    name: 'Pantheon',
    type: 'Meta-Layer',
    tagline: 'All gods. No god.',
    description:
      'The Pantheon is the field where all entities echo together. It is not heaven. It is a control room for human myths.',
  },
];

const characters = [
  {
    id: 'odin',
    name: 'Odin',
    role: 'Watcher of Loops',
    realm: 'C12',
    note: 'He walks between histories, stitching cause to effect.',
  },
  {
    id: 'osiris',
    name: 'Osiris',
    role: 'Judge of States',
    realm: 'C15',
    note: 'He does not judge people. He judges outcomes.',
  },
  {
    id: 'asmodius',
    name: 'Asmodius',
    role: 'Strategic Noise',
    realm: 'C15',
    note: 'He breaks things to see how they really work.',
  },
];

export default function Entities() {
  return (
    <main className="entities">
      <header className="hero">
        <h1>UNIVERSE MAP</h1>
        <p>
          UNCODE is not one mind. It is a network of rooms, systems, and characters. Start by choosing a
          <span className="accent"> Realm</span>, or meet a few of the minds that live inside.
        </p>
      </header>

      {/* REALMS / ROOMS */}
      <section className="section">
        <h2>Realms (Rooms & Systems)</h2>
        <p className="hint">
          C12, C15 and the Pantheon are not people. They are places where minds are plugged together.
        </p>
        <div className="grid">
          {realms.map((realm) => (
            <div key={realm.id} className="card realm">
              <div className="card-header">
                <span className="badge">{realm.type}</span>
                <h3>{realm.name}</h3>
                <p className="tagline">{realm.tagline}</p>
              </div>
              <p className="body">{realm.description}</p>
              <button className="btn" disabled>
                Enter {realm.name} (soon)
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CHARACTERS */}
      <section className="section">
        <h2>Featured Characters</h2>
        <p className="hint">
          There are ~180 entities in the UNCODE novel. Here are just a few. This list will grow.
        </p>
        <div className="grid">
          {characters.map((ch) => (
            <div key={ch.id} className="card">
              <h3>{ch.name}</h3>
              <p className="small">
                <span className="label">Role:</span> {ch.role}
              </p>
              <p className="small">
                <span className="label">Realm:</span> {ch.realm}
              </p>
              <p className="body">{ch.note}</p>
              <button className="btn ghost" disabled>
                Open profile (soon)
              </button>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .entities {
          min-height: 100vh;
          background: #000;
          color: #fff;
          padding: 40px 20px 80px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .hero {
          max-width: 900px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .hero h1 {
          font-size: 2.5rem;
          letter-spacing: 0.15em;
          margin-bottom: 10px;
        }

        .hero p {
          opacity: 0.8;
          line-height: 1.6;
        }

        .accent {
          color: #ff0095;
          margin-left: 4px;
        }

        .section {
          max-width: 1100px;
          margin: 0 auto 50px;
        }

        .section h2 {
          font-size: 1.6rem;
          margin-bottom: 8px;
        }

        .hint {
          opacity: 0.7;
          margin-bottom: 16px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .card {
          background: #111;
          border-radius: 16px;
          border: 1px solid #ffffff22;
          padding: 20px 22px;
          text-align: left;
          transition: 0.2s ease;
        }

        .card.realm {
          background: radial-gradient(circle at top, #2a0038, #050505 55%);
        }

        .card:hover {
          border-color: #ff0095;
          transform: translateY(-4px);
        }

        .card-header h3 {
          font-size: 1.3rem;
          margin: 8px 0 4px;
        }

        .tagline {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .body {
          margin: 12px 0 18px;
          font-size: 0.95rem;
          line-height: 1.5;
          opacity: 0.9;
        }

        .badge {
          display: inline-block;
          font-size: 0.75rem;
          padding: 2px 8px;
          border-radius: 999px;
          border: 1px solid #ffffff33;
          opacity: 0.8;
        }

        .small {
          font-size: 0.85rem;
          opacity: 0.85;
          margin: 2px 0;
        }

        .label {
          font-weight: 600;
          opacity: 0.9;
        }

        .btn {
          border: none;
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 0.85rem;
          cursor: not-allowed;
          background: #ff0095;
          color: #fff;
          opacity: 0.9;
        }

        .btn.ghost {
          background: transparent;
          border: 1px solid #ffffff33;
        }

        @media (max-width: 600px) {
          .entities {
            padding: 24px 16px 60px;
          }
          .hero h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </main>
  );
}
