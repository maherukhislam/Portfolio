import { SectionHeading } from "../SectionHeading";
import { TagRow } from "../TagRow";

export interface EducationSectionProps {
  readonly data: Readonly<{
    id: string;
    title: string;
    highlightedText: string;
    description: string;
    items: readonly Readonly<{
      institution: string;
      period: string;
      degree: string;
      focus: string;
      subjects: readonly string[];
      icon: string;
    }>[];
    academicInterests: Readonly<{
      title: string;
      description: string;
      tags: readonly string[];
    }>;
  }>;
}

export function EducationSection({ data }: Readonly<EducationSectionProps>) {
  return (
    <section className="shell section education" id={data.id}>
      <SectionHeading
        title={data.title}
        highlightedText={data.highlightedText}
        description={data.description}
      />

      <div className="education__grid">
        <div className="education__timeline">
          {data.items.map((item) => (
            <article key={item.institution} className="education-card panel">
              <div className="education-card__header">
                <div className="icon-badge">{item.icon}</div>
                <div>
                  <span className="meta">{item.period}</span>
                  <h3>{item.institution}</h3>
                  <p className="education-card__degree">{item.degree}</p>
                </div>
              </div>
              <div className="education-card__body">
                <p>{item.focus}</p>
                <div className="education-card__subjects">
                  <span className="education-card__subjects-label">Key Subjects:</span>
                  <TagRow tags={item.subjects} tealIndexes={[0, 1, 2, 4]} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <article className="academic-interests panel">
          <div className="academic-interests__title">
            <div className="icon-badge">STEM</div>
            <h3>{data.academicInterests.title}</h3>
          </div>
          <p>{data.academicInterests.description}</p>
          <div className="tag-row" style={{ marginTop: "1.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
            {data.academicInterests.tags.map((tag, index) => (
              <span key={tag} className={`tag${index % 2 === 0 ? " tag--teal" : ""}`}>
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
