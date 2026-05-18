import { SectionHeading } from "../SectionHeading";
import type { MetricItem } from "../../data/mockData";

export interface HighlightsSectionProps {
  readonly data: Readonly<{
    eyebrow: string;
    title: string;
    statement: string;
    philosophy: string;
    currentMission: readonly string[];
    metrics: readonly MetricItem[];
  }>;
}

export function HighlightsSection({ data }: Readonly<HighlightsSectionProps>) {
  return (
    <section className="shell section" id="operational-focus" aria-label={data.title}>
      <SectionHeading eyebrow={data.eyebrow} title={data.title} />

      <div className="highlights__grid">
        {/* Left Column: Core Positioning, Philosophy & Mission */}
        <div className="highlights__positioning">
          <div className="highlights__philosophy-card panel">
            <h4 style={{ color: "#65d9ce", marginBottom: "0.5rem", fontSize: "1.05rem" }}>
              Narrative &amp; Positioning
            </h4>
            <p style={{ fontWeight: 500, fontSize: "0.95rem", color: "#e6edf3", marginBottom: "1.25rem", lineHeight: "1.5" }}>
              {data.statement}
            </p>
            <p style={{ fontSize: "0.85rem", opacity: 0.85, lineHeight: "1.6" }}>
              {data.philosophy}
            </p>
            <div style={{ marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(230, 237, 243, 0.08)" }}>
              <h5 style={{ color: "#65d9ce", marginBottom: "0.6rem", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Civic &amp; Scientific Engagement
              </h5>
              <ul style={{ margin: 0, paddingLeft: "1.15rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                <li style={{ fontSize: "0.8rem", color: "#c9d1d9", lineHeight: "1.4" }}>Physics Olympiad National Finalist</li>
                <li style={{ fontSize: "0.8rem", color: "#c9d1d9", lineHeight: "1.4" }}>Earth Olympiad Divisional Topper (Participation ID: 16353)</li>
                <li style={{ fontSize: "0.8rem", color: "#c9d1d9", lineHeight: "1.4" }}>ECO Spark Challenge 1.0 — 1st Place Winner</li>
                <li style={{ fontSize: "0.8rem", color: "#c9d1d9", lineHeight: "1.4" }}>DCC Intra College CSE Fest IT Quiz (2nd Place)</li>
                <li style={{ fontSize: "0.8rem", color: "#c9d1d9", lineHeight: "1.4" }}>APAC Cyber Hygiene Training Graduate (SAJIDA Foundation &amp; Google.org)</li>
                <li style={{ fontSize: "0.8rem", color: "#c9d1d9", lineHeight: "1.4" }}>Web Accessibility Certified Developer (UNICEF Agora ID: wQE5kUfwA)</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "0.9rem", color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
              Current Platoon &amp; System Missions
            </h4>
            <div className="highlights__mission-list">
              {data.currentMission.map((mission) => (
                <span key={mission} className="highlights__mission-tag">
                  {mission}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Real-World Metrics */}
        <div className="metrics-grid">
          {data.metrics.map((metric) => (
            <article key={metric.label} className="metric-card panel">
              <span className="metric-card__value">{metric.value}</span>
              <h4 className="metric-card__label">{metric.label}</h4>
              <p className="metric-card__desc">{metric.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
