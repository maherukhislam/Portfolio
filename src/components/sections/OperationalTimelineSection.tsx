import type { OperationalTimelineEntry } from "../../data/mockData";

const CATEGORY_COLORS: Record<string, string> = {
  Military: "#94a3ff",
  Leadership: "#65d9ce",
  Engineering: "#65d9ce",
  Academic: "#94a3ff",
  Science: "#65d9ce",
  Environment: "#94a3ff",
  Training: "#94a3ff",
  Civic: "#65d9ce",
};

export interface OperationalTimelineSectionProps {
  readonly entries: readonly OperationalTimelineEntry[];
}

export function OperationalTimelineSection({
  entries,
}: Readonly<OperationalTimelineSectionProps>) {
  return (
    <section
      className="shell section op-timeline"
      id="timeline"
      aria-label="Operational Timeline"
    >
      <div className="section-heading">
        <p className="eyebrow">Evidence Record</p>
        <h2>
          Operational <span>Timeline</span>
        </h2>
        <p>
          A chronological record of appointments, certifications, competitions,
          and civic engagements — grounded in verifiable milestones.
        </p>
      </div>

      <div className="op-timeline__track">
        {entries.map((entry, i) => (
          <article
            key={`${entry.date}-${entry.event}`}
            className={`op-timeline__entry${i % 2 === 0 ? " op-timeline__entry--left" : " op-timeline__entry--right"}`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="op-timeline__connector">
              <div
                className="op-timeline__dot"
                style={{
                  background:
                    CATEGORY_COLORS[entry.category] ?? "var(--primary)",
                  boxShadow: `0 0 0 5px ${CATEGORY_COLORS[entry.category] ?? "var(--primary)"}22`,
                }}
                aria-hidden="true"
              />
            </div>

            <div className="op-timeline__card panel">
              <div className="op-timeline__meta">
                <span
                  className="op-timeline__category"
                  style={{
                    color: CATEGORY_COLORS[entry.category] ?? "var(--primary)",
                    borderColor: `${CATEGORY_COLORS[entry.category] ?? "var(--primary)"}33`,
                  }}
                >
                  {entry.category}
                </span>
                <time className="op-timeline__date">{entry.date}</time>
              </div>
              <p className="op-timeline__event">{entry.event}</p>
            </div>
          </article>
        ))}

        <div className="op-timeline__line" aria-hidden="true" />
      </div>
    </section>
  );
}
