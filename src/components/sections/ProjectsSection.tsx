import { SectionHeading } from "../SectionHeading";
import { TagRow } from "../TagRow";

export interface ProjectsSectionProps {
  readonly data: Readonly<{
    id: string;
    eyebrow: string;
    title: string;
    highlightedText: string;
    description: string;
    featured: Readonly<{
      title: string;
      description: string;
      problem: string;
      tags: readonly string[];
      mediaClass?: string;
    }>;
    secondary: readonly Readonly<{
      title: string;
      description: string;
      problem: string;
      tags: readonly string[];
      variant?: "default" | "teal";
      mediaClass?: string;
    }>[];
    loadingTitle: string;
    loadingItems: readonly Readonly<{
      icon: string;
      title: string;
      description: string;
    }>[];
  }>;
}

export function ProjectsSection({ data }: Readonly<ProjectsSectionProps>) {
  return (
    <section className="shell section projects" id={data.id}>
      <SectionHeading
        eyebrow={data.eyebrow}
        title={data.title}
        highlightedText={data.highlightedText}
        description={data.description}
      />

      <article className="project project--featured panel">
        <div className={`project__media ${data.featured.mediaClass ?? ""}`} />
        <div className="project__body">
          <TagRow tags={data.featured.tags} tealIndexes={[2]} />
          <h3>{data.featured.title}</h3>
          <p>{data.featured.description}</p>
          <p className="project__problem">{data.featured.problem}</p>
        </div>
      </article>

      <div className="project-grid">
        {data.secondary.map((project, index) => (
          <article key={project.title} className="project panel">
            {project.mediaClass ? <div className={`project__media ${project.mediaClass}`} /> : null}
            <div className={`project__body${index === 1 ? " project__body--centered" : ""}`}>
              {index === 1 ? <div className="icon-badge icon-badge--large">&lt;&gt;</div> : null}
              <TagRow tags={project.tags} tealIndexes={project.variant === "teal" ? [0] : []} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project__problem">{project.problem}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="section-heading section-heading--compact">
        <h3>{data.loadingTitle}</h3>
      </div>

      <div className="card-grid card-grid--three">
        {data.loadingItems.map((item) => (
          <article key={item.title} className="placeholder-card panel">
            <div className="icon-badge">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
