import { FeatureCard } from "../FeatureCard";
import { SectionHeading } from "../SectionHeading";
import { TagRow } from "../TagRow";

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
    leadership: Readonly<{
      eyebrow: string;
      title: string;
      description: string;
      tags: readonly string[];
    }>;
  }>;
}

export function AchievementsSection({ data }: Readonly<AchievementsSectionProps>) {
  return (
    <section className="shell section achievements" id={data.id}>
      <SectionHeading title={data.title} highlightedText={data.highlightedText} description={data.description} />

      <div className="stack">
        <div className="subheading">
          <span className="subheading__icon">01</span>
          <h3>Scientific Aptitude</h3>
        </div>
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

      <div className="stack">
        <div className="subheading">
          <span className="subheading__icon">02</span>
          <h3>Professional Training</h3>
        </div>
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

      <div className="stack">
        <div className="subheading">
          <span className="subheading__icon">03</span>
          <h3>Leadership &amp; Service</h3>
        </div>
        <article className="leadership panel">
          <div className="leadership__visual" aria-hidden="true">
            <div className="leadership__seal" />
          </div>
          <div className="leadership__body">
            <p className="eyebrow eyebrow--small">{data.leadership.eyebrow}</p>
            <h4>{data.leadership.title}</h4>
            <p>{data.leadership.description}</p>
            <TagRow tags={data.leadership.tags} tealIndexes={[2]} />
          </div>
        </article>
      </div>
    </section>
  );
}
