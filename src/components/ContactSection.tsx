export interface ContactSectionProps {
  readonly data: Readonly<{
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    links: readonly Readonly<{ label: string; value: string; href: string }>[];
    dossier: Readonly<{
      icon: string;
      title: string;
      description: string;
      actionLabel: string;
    }>;
  }>;
}

export function ContactSection({ data }: Readonly<ContactSectionProps>) {
  return (
    <section className="shell section contact" id={data.id}>
      <div className="section-heading section-heading--centered">
        <p className="eyebrow eyebrow--status">
          <span className="status-dot" />
          {data.eyebrow}
        </p>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>

      <div className="card-grid card-grid--two">
        <article className="panel contact-card">
          <h3>Digital Presence</h3>
          <ul className="contact-list">
            {data.links.map((link) => (
              <li key={link.label}>
                <span>{link.label}</span>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article className="panel dossier-card">
          <div className="icon-badge icon-badge--large">{data.dossier.icon}</div>
          <h3>{data.dossier.title}</h3>
          <p>{data.dossier.description}</p>
          <a className="button button--ghost" href="/Maherukh_Islam_Professional_Dossier.md" target="_blank" rel="noreferrer">
            {data.dossier.actionLabel}
          </a>
        </article>
      </div>
    </section>
  );
}
