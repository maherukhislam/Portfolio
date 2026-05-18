export interface SectionHeadingProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly highlightedText?: string;
  readonly description?: string;
  readonly centered?: boolean;
  readonly compact?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  highlightedText,
  description,
  centered = false,
  compact = false,
}: Readonly<SectionHeadingProps>) {
  const sectionClass = [
    "section-heading",
    centered ? "section-heading--centered" : "",
    compact ? "section-heading--compact" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const titleText = highlightedText ? title.replace(highlightedText, "").trimEnd() : title;

  return (
    <div className={sectionClass}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>
        {titleText}
        {highlightedText ? (
          <>
            {" "}
            <span>{highlightedText}</span>
          </>
        ) : null}
      </h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
