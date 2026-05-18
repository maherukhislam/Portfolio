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
