import { AccessibilityBlock } from "./AccessibilityBlock";

export interface SkillsSectionProps {
  readonly data: Readonly<{
    id: string;
    title: string;
    description: string;
    groups: readonly Readonly<{
      icon: string;
      title: string;
      items: readonly string[];
    }>[];
    futureLearning: Readonly<{
      icon: string;
      title: string;
      description: string;
      tags: readonly string[];
    }>;
  }>;
}

export function SkillsSection({ data }: Readonly<SkillsSectionProps>) {
  return (
    <section className="shell section skills" id={data.id}>
      <div className="section-heading">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>

      {/* Three-tier stack breakdown */}
      <div className="card-grid card-grid--three" style={{ marginBottom: "2rem" }}>
        {data.groups.map((group) => (
          <article key={group.title} className="skill-card panel">
            <div className="skill-card__title">
              <div className="icon-badge">{group.icon}</div>
              <h3>{group.title}</h3>
            </div>
            <div className="skill-chip-row">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Accessibility Engineering block */}
      <AccessibilityBlock />

      {/* Future specialization */}
      <article className="future-learning panel" style={{ marginTop: "1rem" }}>
        <div>
          <div className="skill-card__title">
            <div className="icon-badge">{data.futureLearning.icon}</div>
            <h3>{data.futureLearning.title}</h3>
          </div>
          <p>{data.futureLearning.description}</p>
        </div>
        <div className="tag-row">
          {data.futureLearning.tags.map((tag, index) => (
            <span key={tag} className={`tag${index === 0 ? " tag--teal" : ""}`}>
              {tag}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
