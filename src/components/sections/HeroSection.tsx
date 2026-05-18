export interface HeroSectionProps {
  readonly data: Readonly<{
    id: string;
    eyebrow: string;
    title: string;
    highlightedText: string;
    description: string;
    primaryAction: Readonly<{ href: string; label: string }>;
    secondaryAction: Readonly<{ href: string; label: string }>;
    photo: Readonly<{
      fileName: string;
      alt: string;
      badge: string;
    }>;
    visualLabel: string;
    visualText: string;
  }>;
}

export function HeroSection({ data }: Readonly<HeroSectionProps>) {
  const [introText, endingText] = data.title.split(data.highlightedText);
  const photoSrc = `${import.meta.env.BASE_URL}${data.photo.fileName}`;

  return (
    <section className="hero shell section" id={data.id}>
      <div className="hero__copy">
        <p className="eyebrow">{data.eyebrow}</p>
        <h1>
          {introText}
          <span>{data.highlightedText}</span>
          {endingText}
        </h1>
        <p className="hero__lede">{data.description}</p>
        <div className="hero__actions">
          <a className="button button--primary" href={data.primaryAction.href}>
            {data.primaryAction.label}
          </a>
          <a className="button button--ghost" href={data.secondaryAction.href}>
            {data.secondaryAction.label}
          </a>
        </div>
      </div>

      <div className="hero__visual panel">
        <div className="hero__visual-top">
          <img
            className="hero__photo"
            src={photoSrc}
            alt={data.photo.alt}
          />
          <div className="hero__photo-glow" />
          <div className="hero__photo-badge">{data.photo.badge}</div>
        </div>
        <div className="hero__visual-bottom">
          <div className="hero__visual-badge">
            <span>{data.visualLabel}</span>
            <strong>{data.visualText}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
