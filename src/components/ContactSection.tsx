import { useState } from "react";

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
  const [message, setMessage] = useState("");

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

      <div className="contact-layout">
        <form
          className="contact-form panel"
          onSubmit={(event) => {
            event.preventDefault();
            setMessage(
              "Thanks - your message is staged in the interface. Connect Formspree, Netlify Forms, or a custom backend next to make delivery live.",
            );
          }}
        >
          <div className="field-row">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Jane Doe" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="jane@example.com" />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input type="text" name="subject" placeholder="Collaboration Proposal" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={6} placeholder="Detail your inquiry..." />
          </label>
          <button className="button button--primary" type="submit">
            Send Message
          </button>
          <p className="form-note" aria-live="polite">
            {message}
          </p>
        </form>

        <div className="contact-side">
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
            <a className="button button--ghost" href="#contact">
              {data.dossier.actionLabel}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
