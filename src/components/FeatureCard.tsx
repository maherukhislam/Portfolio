export interface FeatureCardProps {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly tag?: string;
  readonly tagVariant?: "default" | "teal";
  readonly meta?: string;
  readonly metaTone?: "default" | "blue";
}

export function FeatureCard({
  icon,
  title,
  description,
  tag,
  tagVariant = "default",
  meta,
  metaTone = "default",
}: Readonly<FeatureCardProps>) {
  return (
    <article className="feature-card">
      <div className="icon-badge">{icon}</div>
      <h3>{title}</h3>
      {meta ? <p className={`meta${metaTone === "blue" ? " meta--blue" : ""}`}>{meta}</p> : null}
      <p>{description}</p>
      {tag ? <span className={`tag${tagVariant === "teal" ? " tag--teal" : ""}`}>{tag}</span> : null}
    </article>
  );
}
