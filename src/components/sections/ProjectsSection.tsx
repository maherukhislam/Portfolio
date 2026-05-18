import { useState, useEffect } from "react";
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
      link?: string;
      imageUrl?: string;
    }>;
    secondary: readonly Readonly<{
      title: string;
      description: string;
      problem: string;
      tags: readonly string[];
      variant?: "default" | "teal";
      mediaClass?: string;
      link?: string;
      imageUrl?: string;
    }>[];
    loadingTitle: string;
    loadingItems: readonly Readonly<{
      icon: string;
      title: string;
      description: string;
    }>[];
  }>;
}

function ProjectMedia({ imageUrl, mediaClass }: { imageUrl?: string; mediaClass?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!imageUrl) {
      setIsLoaded(true);
      return;
    }
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [imageUrl]);

  const style = imageUrl && isLoaded ? { backgroundImage: `url(${imageUrl})` } : {};
  const statusClass = imageUrl ? (isLoaded ? "project__media--loaded" : "project__media--loading") : "";

  return (
    <div
      className={`project__media ${mediaClass ?? ""} ${statusClass}`}
      style={style}
    />
  );
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
        <ProjectMedia imageUrl={data.featured.imageUrl} mediaClass={data.featured.mediaClass} />
        <div className="project__body">
          <TagRow tags={data.featured.tags} tealIndexes={[2]} />
          <h3>
            {data.featured.link ? (
              <a href={data.featured.link} target="_blank" rel="noopener noreferrer" className="project__link-hover">
                {data.featured.title} <span className="project__link-arrow">↗</span>
              </a>
            ) : (
              data.featured.title
            )}
          </h3>
          <p>{data.featured.description}</p>
          <p className="project__problem">{data.featured.problem}</p>
        </div>
      </article>

      <div className="project-grid">
        {data.secondary.map((project, index) => (
          <article key={project.title} className="project panel">
            {project.mediaClass ? (
              <ProjectMedia imageUrl={project.imageUrl} mediaClass={project.mediaClass} />
            ) : null}
            <div className={`project__body${index === 1 ? " project__body--centered" : ""}`}>
              {index === 1 ? <div className="icon-badge icon-badge--large">&lt;&gt;</div> : null}
              <TagRow tags={project.tags} tealIndexes={project.variant === "teal" ? [0] : []} />
              <h3>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project__link-hover">
                    {project.title} <span className="project__link-arrow">↗</span>
                  </a>
                ) : (
                  project.title
                )}
              </h3>
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
