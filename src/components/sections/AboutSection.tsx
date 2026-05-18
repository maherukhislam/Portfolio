import { FeatureCard } from "../FeatureCard";

export interface AboutSectionProps {
  readonly data: Readonly<{
    id: string;
    eyebrow: string;
    title: string;
    highlightedText: string;
    description: string;
    narrativeTitle: string;
    timeline: readonly Readonly<{
      phase: string;
      title: string;
      description: string;
      tone?: "teal" | "primary";
    }>[];
    quote: string;
    focusCards: readonly Readonly<{
      icon: string;
      title: string;
      description: string;
    }>[];
  }>;
}

export function AboutSection({ data }: Readonly<AboutSectionProps>) {
  return (
    <section className="shell section about" id={data.id}>
      <div className="about__hero">
        <div>
          <p className="eyebrow">{data.eyebrow}</p>
          <h2>
            {data.title} <span>{data.highlightedText}</span>
          </h2>
          <p>{data.description}</p>
        </div>

        <div className="about__art panel" aria-hidden="true">
          <div className="about__art-ring" />
          <div className="about__art-core" />
        </div>
      </div>

      <div className="section-heading">
        <h3>{data.narrativeTitle}</h3>
      </div>

      <div className="timeline">
        {data.timeline.map((item) => (
          <article key={item.phase} className="timeline__item">
            <div className="timeline__label">
              <span>{item.phase}</span>
            </div>
            <div className={`timeline__dot${item.tone === "primary" ? " timeline__dot--secondary" : ""}`} />
            <div className="timeline__content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <blockquote className="quote-panel panel">
        <span className="quote-mark">"</span>
        <p>{data.quote}</p>
      </blockquote>

      <div className="card-grid card-grid--three">
        {data.focusCards.map((card) => (
          <FeatureCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
        ))}
      </div>
    </section>
  );
}
