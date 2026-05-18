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

      <div className="card-grid card-grid--three">
        {data.groups.map((group) => (
          <article key={group.title} className="skill-card panel">
            <div className="skill-card__title">
              <div className="icon-badge">{group.icon}</div>
              <h3>{group.title}</h3>
            </div>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className="future-learning panel">
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
