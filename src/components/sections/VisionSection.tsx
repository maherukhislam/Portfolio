import { TagRow } from "../TagRow";

export interface VisionSectionProps {
  readonly data: Readonly<{
    id: string;
    eyebrow: string;
    title: string;
    support: string;
    cards: readonly Readonly<{
      icon?: string;
      title: string;
      description: string;
      tags?: readonly string[];
    }>[];
    cta: Readonly<{
      title: string;
      description: string;
      action: Readonly<{ href: string; label: string }>;
    }>;
  }>;
}

export function VisionSection({ data }: Readonly<VisionSectionProps>) {
  return (
    <section className="shell section vision" id={data.id}>
      <article className="manifesto panel">
        <p className="eyebrow">{data.eyebrow}</p>
        <h2>
          I believe technology becomes meaningful when it{" "}
          <span className="accent-primary">improves systems</span>,{" "}
          <span className="accent-teal">expands access</span>, and creates long-term positive impact.
        </h2>
        <p className="manifesto__support">{data.support}</p>
      </article>

      <div className="vision-grid">
        <article className="vision-card panel vision-card--wide">
          <span className="tag tag--teal">Approach</span>
          <h3>{data.cards[0].title}</h3>
          <p>{data.cards[0].description}</p>
          <TagRow tags={data.cards[0].tags ?? []} />
        </article>

        {data.cards.slice(1).map((card) => (
          <article key={card.title} className="vision-card panel">
            <div className="icon-badge">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}

        <article className="vision-card panel vision-card--cta">
          <div>
            <h3>{data.cta.title}</h3>
            <p>{data.cta.description}</p>
          </div>
          <a className="button button--ghost" href={data.cta.action.href}>
            {data.cta.action.label}
          </a>
        </article>
      </div>
    </section>
  );
}
