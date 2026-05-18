const PRINCIPLES = [
  {
    key: "KBD",
    title: "Keyboard Navigation",
    desc: "Full site navigable without a pointer device — tab order, focus traps, and skip links implemented.",
  },
  {
    key: "FOC",
    title: "Focus Visibility",
    desc: "High-contrast focus rings on all interactive elements, meeting WCAG 2.1 SC 2.4.11 requirements.",
  },
  {
    key: "SEM",
    title: "Semantic Structure",
    desc: "Correct heading hierarchy, landmark regions, and ARIA labels verified for screen-reader compatibility.",
  },
  {
    key: "RES",
    title: "Responsive Readability",
    desc: "Fluid typography and layouts that eliminate horizontal scroll and maintain readability at any viewport.",
  },
  {
    key: "INC",
    title: "Inclusive Interaction",
    desc: "Sufficient colour contrast, no motion forced on users, and interaction patterns tested with assistive tools.",
  },
] as const;

export function AccessibilityBlock() {
  return (
    <article className="a11y-block panel" aria-labelledby="a11y-block-heading">
      <div className="a11y-block__header">
        <div className="a11y-block__badge" aria-hidden="true">
          <span>♿</span>
        </div>
        <div>
          <h3 id="a11y-block-heading">Accessibility Engineering</h3>
          <p className="a11y-block__cert">
            UNICEF Agora Certified · Verification ID:{" "}
            <code>wQE5kUfwA</code>
          </p>
        </div>
      </div>
      <p className="a11y-block__desc">
        Accessibility is treated as an engineering constraint, not an
        afterthought. Every interface I build is designed against the following
        principles from day one.
      </p>
      <div className="a11y-block__grid">
        {PRINCIPLES.map((p) => (
          <div key={p.key} className="a11y-principle">
            <span className="a11y-principle__key" aria-hidden="true">
              {p.key}
            </span>
            <div>
              <strong className="a11y-principle__title">{p.title}</strong>
              <p className="a11y-principle__desc">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
