import { useState } from 'react';
import './MeetTheTeam.css';

const HS = '?auto=format&fit=crop&crop=faces&w=800&h=1000&q=80';
const HSL = '?auto=format&fit=crop&crop=faces&w=700&h=700&q=80';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'Africa', label: 'Africa' },
  { id: 'Asia', label: 'Asia' },
  { id: 'Europe', label: 'Europe' },
  { id: 'Americas', label: 'Americas' },
  { id: 'Islands', label: 'Oceans & Islands' },
] as const;

const team = [
  {
    name: 'Eleanor Whitfield',
    role: 'Head of Africa & Safari',
    region: 'Africa',
    years: 18,
    countries: 22,
    mono: 'EW',
    photo: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2${HS}`,
    nugget:
      'Ask for the eastern rooms at Singita Sabora — you wake with the herd already at the waterhole.',
  },
  {
    name: 'Marcus Fenwick',
    role: 'Southern & East Africa Specialist',
    region: 'Africa',
    years: 12,
    countries: 16,
    mono: 'MF',
    photo: `https://images.unsplash.com/photo-1560250097-0b93528c311a${HS}`,
    nugget:
      'Time the Zambezi in late September; the water drops and the tiger-fishing is unrivalled.',
  },
  {
    name: 'Priya Nair',
    role: 'Indian Subcontinent & Sri Lanka',
    region: 'Asia',
    years: 15,
    countries: 19,
    mono: 'PN',
    photo: `https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e${HS}`,
    nugget:
      'In Udaipur, take breakfast on the lake before the palace opens — the light is worth the early start.',
  },
  {
    name: 'Kenji Arai',
    role: 'Japan & North Asia Specialist',
    region: 'Asia',
    years: 11,
    countries: 14,
    mono: 'KA',
    photo: `https://images.unsplash.com/photo-1595211877493-41a4e5f236b3${HS}`,
    nugget:
      'Book a ryokan in Kanazawa over Kyoto in autumn — same craft, a fraction of the crowds.',
  },
  {
    name: 'Sofia Marchetti',
    role: 'Italy, Greece & the Med',
    region: 'Europe',
    years: 16,
    countries: 24,
    mono: 'SM',
    photo: `https://images.unsplash.com/photo-1701096374092-bb70915fdc5c${HS}`,
    nugget:
      'The Aeolian Islands out of season feel like Capri did forty years ago. Go in May.',
  },
  {
    name: 'Hugo Lindqvist',
    role: 'Alps, Nordics & Ski',
    region: 'Europe',
    years: 13,
    countries: 18,
    mono: 'HL',
    photo: `https://images.unsplash.com/photo-1500648767791-00dcc994a43e${HS}`,
    nugget:
      'Zermatt for the skiing, but stay a night in Zürich for the best meal of the trip.',
  },
  {
    name: 'Camila Reyes',
    role: 'Latin America Specialist',
    region: 'Americas',
    years: 14,
    countries: 21,
    mono: 'CR',
    photo: `https://images.unsplash.com/photo-1627161683077-e34782c24d81${HS}`,
    nugget:
      'Do the Atacama before Patagonia — the altitude prep makes the whole trip smoother.',
  },
  {
    name: 'Theodore Banks',
    role: 'USA, Canada & the Rockies',
    region: 'Americas',
    years: 10,
    countries: 12,
    mono: 'TB',
    photo: `https://images.unsplash.com/photo-1652471943570-f3590a4e52ed${HS}`,
    nugget:
      "Fly into Bozeman, not the big hubs — you're in Yellowstone country within the hour.",
  },
  {
    name: 'Isla Fontaine',
    role: 'Maldives, Seychelles & Oceans',
    region: 'Islands',
    years: 9,
    countries: 15,
    mono: 'IF',
    photo: `https://images.unsplash.com/photo-1573496358961-3c82861ab8f4${HS}`,
    nugget:
      'For a first Maldives trip, choose a one-island resort over a hopper — the disconnection is the point.',
  },
];

const leaders = [
  {
    name: 'Charles Ashworth',
    role: 'Founder & Chairman',
    mono: 'PR',
    photo: `https://images.unsplash.com/photo-1629425733761-caae3b5f2e50${HSL}`,
  },
  {
    name: 'Anneke de Vries',
    role: 'Chief Executive',
    mono: 'AV',
    photo: `https://images.unsplash.com/photo-1685760259914-ee8d2c92d2e0${HSL}`,
  },
  {
    name: 'Rahul Kapoor',
    role: 'Product & Partnerships Director',
    mono: 'RK',
    photo: `https://images.unsplash.com/photo-1655249493799-9cee4fe983bb${HSL}`,
  },
  {
    name: 'Grace Okonkwo',
    role: 'Head of Guest Experience',
    mono: 'GO',
    photo: `https://images.unsplash.com/photo-1652471949169-9c587e8898cd${HSL}`,
  },
];

export default function MeetTheTeam({ onInquire }: { onInquire: () => void }) {
  const [filter, setFilter] = useState<string>('all');

  const filtered =
    filter === 'all' ? team : team.filter((t) => t.region === filter);

  return (
    <div className="meet-team">
      <section className="hero">
        <div className="hero-lines" aria-hidden="true">
          <svg
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            stroke="rgba(178,138,76,.35)"
            strokeWidth="1"
          >
            <ellipse cx="600" cy="300" rx="560" ry="560" />
            <ellipse cx="600" cy="300" rx="560" ry="300" />
            <ellipse cx="600" cy="300" rx="560" ry="150" />
            <ellipse cx="600" cy="300" rx="380" ry="560" />
            <ellipse cx="600" cy="300" rx="180" ry="560" />
            <line x1="40" y1="300" x2="1160" y2="300" />
          </svg>
        </div>
        <div className="wrap">
          <span className="label">Our People</span>
          <h1>
            Not a call centre.
            <br />A cabinet of <em>seasoned</em> explorers.
          </h1>
          <p>
            Every journey we design is drawn from ground the specialist has walked themselves —
            the hotel they've stayed in, the guide they trust by name, the table worth crossing a
            country for.
          </p>
        </div>
      </section>

      <section className="stats">
        <div className="wrap">
          <div className="stat">
            <div className="num">128</div>
            <div className="cap">
              Countries
              <br />
              collectively lived in or explored
            </div>
          </div>
          <div className="stat">
            <div className="num">340+</div>
            <div className="cap">
              Combined years
              <br />
              of specialist experience
            </div>
          </div>
          <div className="stat">
            <div className="num">4</div>
            <div className="cap">
              Global offices
              <br />
              for round-the-clock care
            </div>
          </div>
          <div className="stat">
            <div className="num">13 yrs</div>
            <div className="cap">
              Running as a
              <br />
              recognised travel house
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="wrap">
          <div className="team-head">
            <h2>Find your travel specialist</h2>
            <div className="filters" role="group" aria-label="Filter specialists by region">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid">
            {filtered.length === 0 ? (
              <p className="empty">No specialists in this region yet.</p>
            ) : (
              filtered.map((t) => (
                <article key={t.name} className="card" data-region={t.region}>
                  <div className="portrait">
                    <span className="region-tag">{t.region}</span>
                    <span className="mono" aria-hidden="true">
                      {t.mono}
                    </span>
                    <img
                      src={t.photo}
                      alt={`Portrait of ${t.name}`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h3>{t.name}</h3>
                    <div className="role">{t.role}</div>
                    <div className="meta">
                      <div>
                        <div className="k">{t.years}</div>
                        <div className="v">Years</div>
                      </div>
                      <div>
                        <div className="k">{t.countries}</div>
                        <div className="v">Countries visited</div>
                      </div>
                    </div>
                    <p className="nugget">{t.nugget}</p>
                    <a href="#" className="profile-link">
                      View profile <span className="arrow">→</span>
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="lead">
        <div className="wrap">
          <h2>The house behind the journeys</h2>
          <p className="sub">
            A senior team that has shaped luxury travel for decades — several here since the very
            beginning.
          </p>
          <div className="lead-grid">
            {leaders.map((l) => (
              <div key={l.name} className="lead-card">
                <div className="lead-portrait">
                  <span className="mono" aria-hidden="true">
                    {l.mono}
                  </span>
                  <img
                    src={l.photo}
                    alt={`Portrait of ${l.name}`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <h3>{l.name}</h3>
                <div className="role">{l.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <span className="label">Ready when you are</span>
          <h2>
            Every great journey begins with <em>a conversation.</em>
          </h2>
          <button type="button" className="btn" onClick={onInquire}>
            Speak to a specialist
          </button>
        </div>
      </section>
    </div>
  );
}
