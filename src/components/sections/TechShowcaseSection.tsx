import { SectionHeading } from "../SectionHeading";

const DCCNSC_STRUCTURE = `
  dccnsc.org/
  ├── pages/         (public-facing club portal)
  │   ├── index.php  (home — notices, YouTube embeds)
  │   ├── about.php  (executive committee)
  │   ├── events.php (calendar + gallery)
  │   └── contact.php
  ├── admin/         (operational backend)
  │   ├── dashboard  (member records)
  │   ├── treasury/  → finance.dccnsc.org
  │   └── notices/   (publish system)
  └── api/           (PHP + PLpgSQL endpoints)
`.trim();

const FINANCE_FLOW = `
  [Treasurer Terminal]
        │
        ├── Read ledger / transaction CSV
        ▼
  [Python Data Pipeline]  ──► Parse + validate
        │
        ├── Encode structured payload
        ▼
  [PLpgSQL / PostgreSQL]  ──► Query Speed: < 0.001s
        │
        ├── Sync over HTTPS / SSL
        ▼
  [finance.dccnsc.org]    ──► State: ONLINE
  144 production releases · TypeScript + Python
`.trim();

export function TechShowcaseSection() {
  return (
    <section
      className="shell section tech-showcase"
      id="tech-showcase"
      aria-label="Technical Showcase"
    >
      <SectionHeading
        eyebrow="Technical Infrastructure"
        title="Systems Architecture"
        description="Real deployment patterns, project structure, and data pipeline design from active institutional infrastructure."
      />

      <div className="tech-showcase__grid">
        {/* DCCNSC Site Architecture */}
        <div className="pipeline-terminal panel">
          <div className="pipeline-terminal__header">
            <span>📁 DCCNSC_SITE_ARCHITECTURE.txt</span>
            <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>
              dccnsc.org · 316 deploys
            </span>
          </div>
          <pre className="pipeline-terminal__diagram">{DCCNSC_STRUCTURE}</pre>
          <div className="pipeline-terminal__footer">
            <span className="hl">TypeScript · PHP · Python · PLpgSQL · CSS</span>
          </div>
        </div>

        {/* Finance System Flow */}
        <div className="pipeline-terminal panel">
          <div className="pipeline-terminal__header">
            <span>⚙️ TREASURY_PIPELINE.txt</span>
            <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>
              finance.dccnsc.org · 144 deploys
            </span>
          </div>
          <pre className="pipeline-terminal__diagram">{FINANCE_FLOW}</pre>
          <div className="pipeline-terminal__footer">
            <span className="hl">Python · PLpgSQL · TypeScript · JavaScript · Shell</span>
          </div>
        </div>
      </div>

      {/* Deployment stats bar */}
      <div className="deploy-stats panel" style={{ marginTop: "1rem" }}>
        <div className="deploy-stat">
          <span className="deploy-stat__value">316</span>
          <span className="deploy-stat__label">dccnsc.org production deploys</span>
        </div>
        <div className="deploy-stat__divider" />
        <div className="deploy-stat">
          <span className="deploy-stat__value">144</span>
          <span className="deploy-stat__label">finance.dccnsc.org releases</span>
        </div>
        <div className="deploy-stat__divider" />
        <div className="deploy-stat">
          <span className="deploy-stat__value">5</span>
          <span className="deploy-stat__label">languages in production</span>
        </div>
        <div className="deploy-stat__divider" />
        <div className="deploy-stat">
          <span className="deploy-stat__value">&lt; 1s</span>
          <span className="deploy-stat__label">treasury query latency</span>
        </div>
      </div>
    </section>
  );
}
