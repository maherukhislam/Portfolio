export interface FooterProps {
  readonly data: Readonly<{
    name: string;
    tagline: string;
    links: readonly Readonly<{ label: string; href: string }>[];
  }>;
}

export function Footer({ data }: Readonly<FooterProps>) {
  return (
    <footer className="site-footer">
      <div className="shell footer__inner">
        <div>
          <h2>{data.name}</h2>
          <p>{data.tagline}</p>
        </div>
        <div className="footer__links">
          {data.links.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
