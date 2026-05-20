import { useState } from "react";
import { FeatureCard } from "../FeatureCard";
import { SectionHeading } from "../SectionHeading";
import type { LeadershipItem } from "../../data/mockData";

export interface AchievementsSectionProps {
  readonly data: Readonly<{
    id: string;
    title: string;
    highlightedText: string;
    description: string;
    science: readonly Readonly<{
      icon?: string;
      title: string;
      meta: string;
      description: string;
      metaTone?: "default" | "blue";
    }>[];
    training: readonly Readonly<{
      title: string;
      meta: string;
      description: string;
      metaTone?: "default" | "blue";
    }>[];
    leadershipLogs: readonly LeadershipItem[];
  }>;
}

export function AchievementsSection({ data }: Readonly<AchievementsSectionProps>) {
  const [activeTab, setActiveTab] = useState<"science" | "training" | "leadership">("science");

  return (
    <section className="shell section achievements" id={data.id}>
      <SectionHeading title={data.title} highlightedText={data.highlightedText} description={data.description} />

      <div className="achievements-tabs-container">
        <div className="achievements-tabs-nav" role="tablist" aria-label="Credentials Categories">
          <button
            className={`achievements-tab-btn ${activeTab === "science" ? "is-active" : ""}`}
            onClick={() => setActiveTab("science")}
            role="tab"
            aria-selected={activeTab === "science"}
            aria-controls="science-panel"
            id="tab-science"
          >
            <span className="tab-number">01</span> Scientific Aptitude
          </button>
          <button
            className={`achievements-tab-btn ${activeTab === "training" ? "is-active" : ""}`}
            onClick={() => setActiveTab("training")}
            role="tab"
            aria-selected={activeTab === "training"}
            aria-controls="training-panel"
            id="tab-training"
          >
            <span className="tab-number">02</span> Professional Training
          </button>
          <button
            className={`achievements-tab-btn ${activeTab === "leadership" ? "is-active" : ""}`}
            onClick={() => setActiveTab("leadership")}
            role="tab"
            aria-selected={activeTab === "leadership"}
            aria-controls="leadership-panel"
            id="tab-leadership"
          >
            <span className="tab-number">03</span> Leadership Logs
          </button>
        </div>

        <div className="achievements-tab-content">
          {activeTab === "science" && (
            <div
              className="tab-panel animate-fade-in"
              id="science-panel"
              role="tabpanel"
              aria-labelledby="tab-science"
            >
              <div className="card-grid card-grid--two">
                {data.science.map((item) => (
                  <FeatureCard
                    key={item.title}
                    icon={item.icon ?? "AWD"}
                    title={item.title}
                    meta={item.meta}
                    metaTone={item.metaTone}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === "training" && (
            <div
              className="tab-panel animate-fade-in"
              id="training-panel"
              role="tabpanel"
              aria-labelledby="tab-training"
            >
              <div className="card-grid card-grid--two">
                {data.training.map((item) => (
                  <FeatureCard
                    key={item.title}
                    icon="TRN"
                    title={item.title}
                    meta={item.meta}
                    metaTone={item.metaTone}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === "leadership" && (
            <div
              className="tab-panel animate-fade-in"
              id="leadership-panel"
              role="tabpanel"
              aria-labelledby="tab-leadership"
            >
              <div className="card-grid card-grid--three" style={{ gap: "1.5rem" }}>
                {data.leadershipLogs.map((log) => (
                  <article key={log.role} className="panel" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <span className="icon-badge" aria-hidden="true" style={{ fontSize: "1.1rem" }}>{log.icon}</span>
                      <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#65d9ce", border: "1px solid rgba(101, 217, 206, 0.2)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                        {log.period}
                      </span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: "bold", color: "#e6edf3", margin: 0 }}>{log.role}</h4>
                      <p style={{ fontSize: "0.85rem", color: "#65d9ce", margin: "0.15rem 0 0 0", opacity: 0.9 }}>{log.organization}</p>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "#8b949e", fontStyle: "italic", margin: 0 }}>
                      &ldquo;{log.impact}&rdquo;
                    </p>
                    <ul style={{ margin: "0.5rem 0 0 0", paddingLeft: "1.15rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      {log.details.map((detail, dIdx) => (
                        <li key={dIdx} style={{ fontSize: "0.8rem", color: "#c9d1d9", lineHeight: "1.45" }}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
