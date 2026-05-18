import { useState, useEffect, useRef } from "react";
import { SectionHeading } from "../SectionHeading";
import { TagRow } from "../TagRow";
import type { CaseStudy } from "../../data/mockData";

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
      tags: readonly string[];
      mediaClass?: string;
      link?: string;
      imageUrl?: string;
      caseStudy?: CaseStudy;
    }>;
    secondary: readonly Readonly<{
      title: string;
      description: string;
      tags: readonly string[];
      variant?: "default" | "teal";
      mediaClass?: string;
      link?: string;
      imageUrl?: string;
      caseStudy?: CaseStudy;
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageUrl) {
      setIsLoaded(true);
      return;
    }

    const element = containerRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => {
              setIsLoaded(true);
            };
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin: "100px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [imageUrl]);

  const style = imageUrl && isLoaded ? { backgroundImage: `url(${imageUrl})` } : {};
  const statusClass = imageUrl ? (isLoaded ? "project__media--loaded" : "project__media--loading") : "";

  return (
    <div
      ref={containerRef}
      className={`project__media ${mediaClass ?? ""} ${statusClass}`}
      style={style}
    />
  );
}

function ProjectCaseStudy({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="project__case-study" aria-label="System Case Study Monospace Log">
      <div className="project__case-study-title">
        <span>⚙️ SYSTEM_CASE_STUDY_LOG.md</span>
        <div className="project__case-study-dots" aria-hidden="true">
          <div className="project__case-study-dot" />
          <div className="project__case-study-dot" />
          <div className="project__case-study-dot" />
        </div>
      </div>
      <div className="project__case-study-grid">
        <div className="project__case-study-row">
          <span className="project__case-study-label">[PROBLEM]</span>
          <span className="project__case-study-value">{caseStudy.problem}</span>
        </div>
        <div className="project__case-study-row">
          <span className="project__case-study-label">[ROLE]</span>
          <span className="project__case-study-value">{caseStudy.role}</span>
        </div>
        <div className="project__case-study-row">
          <span className="project__case-study-label">[SOLUTION]</span>
          <span className="project__case-study-value">{caseStudy.solution}</span>
        </div>
        <div className="project__case-study-row">
          <span className="project__case-study-label">[IMPACT]</span>
          <span className="project__case-study-value" style={{ color: "#65d9ce", fontWeight: "bold" }}>
            {caseStudy.impact}
          </span>
        </div>
        <div className="project__case-study-row">
          <span className="project__case-study-label">[TECH]</span>
          <span className="project__case-study-value" style={{ fontFamily: "monospace" }}>
            {caseStudy.technologies.join(", ")}
          </span>
        </div>
        <div className="project__case-study-row">
          <span className="project__case-study-label">[CHALLENGE]</span>
          <span className="project__case-study-value">{caseStudy.challenges}</span>
        </div>
      </div>
    </div>
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
              <a href={data.featured.link} target="_blank" rel="noopener noreferrer" className="project__link-hover" aria-label={`${data.featured.title} (Opens in new tab)`}>
                {data.featured.title} <span className="project__link-arrow">↗</span>
              </a>
            ) : (
              data.featured.title
            )}
          </h3>
          <p>{data.featured.description}</p>
          {data.featured.caseStudy ? <ProjectCaseStudy caseStudy={data.featured.caseStudy} /> : null}
        </div>
      </article>

      <div className="project-grid">
        {data.secondary.map((project, index) => (
          <article key={project.title} className="project panel">
            {project.mediaClass ? (
              <ProjectMedia imageUrl={project.imageUrl} mediaClass={project.mediaClass} />
            ) : null}
            <div className={`project__body${index === 1 ? " project__body--centered" : ""}`}>
              {index === 1 ? <div className="icon-badge icon-badge--large" aria-hidden="true">&lt;&gt;</div> : null}
              <TagRow tags={project.tags} tealIndexes={project.variant === "teal" ? [0] : []} />
              <h3>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project__link-hover" aria-label={`${project.title} (Opens in new tab)`}>
                    {project.title} <span className="project__link-arrow">↗</span>
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p>{project.description}</p>
              {project.caseStudy ? <ProjectCaseStudy caseStudy={project.caseStudy} /> : null}
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
            <div className="icon-badge" aria-hidden="true">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
