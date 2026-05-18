import { SectionHeading } from "../SectionHeading";

const DCCNSC_STRUCTURE = `
  dccnsc.org/
  ├── database/      (Supabase PostgreSQL + RLS)
  │   └── required_tables.sql
  ├── functions/     (Cloudflare Pages Edge APIs)
  │   ├── _middleware.js  (CORS, security, context)
  │   └── api/       (blog, gallery, memberships)
  └── src/           (React 18 + Vite SPA)
      ├── components/(Navbar, Crop Dialog, UI)
      ├── lib/       (Hooks: useAuth, SEO, Preload)
      └── pages/
          └── admin/ (Secured workspace modules)
`.trim();

const FINANCE_FLOW = `
  [React 19 + Zustand UI] ──► (CSRF + HttpOnly)
        │
        ├── shared/financials.js (Parity Engine)
        ▼
  [Cloudflare Functions]  ──► RBAC / Rate Limit
        │
        ├── Transaction & Export APIs
        ▼
  [Supabase PostgreSQL]   ──► RLS Policies
        │
        ├── Signed Receipts in R2
        ▼
  [finance.dccnsc.org]    ──► State: ONLINE
  144 production releases · Serverless API
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

      <div className="card-grid card-grid--two">
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
            <span className="hl">React · TypeScript · Cloudflare Edge · Supabase PostgreSQL</span>
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
            <span className="hl">React 19 · Zustand · Cloudflare Functions · Supabase</span>
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
          <span className="deploy-stat__value">4</span>
          <span className="deploy-stat__label">core databases synced</span>
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
