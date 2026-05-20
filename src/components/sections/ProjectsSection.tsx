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
  const [filter, setFilter] = useState<"all" | "systems" | "themes" | "dev">("all");

  return (
    <section className="shell section projects" id={data.id}>
      <SectionHeading
        eyebrow={data.eyebrow}
        title={data.title}
        highlightedText={data.highlightedText}
        description={data.description}
      />

      {/* Dynamic Projects Filter bar */}
      <div className="projects-filter-nav" role="tablist" aria-label="Projects Filter">
        <button
          className={`projects-filter-btn ${filter === "all" ? "is-active" : ""}`}
          onClick={() => setFilter("all")}
          role="tab"
          aria-selected={filter === "all"}
        >
          All Work
        </button>
        <button
          className={`projects-filter-btn ${filter === "systems" ? "is-active" : ""}`}
          onClick={() => setFilter("systems")}
          role="tab"
          aria-selected={filter === "systems"}
        >
          Web Infrastructure
        </button>
        <button
          className={`projects-filter-btn ${filter === "themes" ? "is-active" : ""}`}
          onClick={() => setFilter("themes")}
          role="tab"
          aria-selected={filter === "themes"}
        >
          Frontend &amp; Themes
        </button>
        <button
          className={`projects-filter-btn ${filter === "dev" ? "is-active" : ""}`}
          onClick={() => setFilter("dev")}
          role="tab"
          aria-selected={filter === "dev"}
        >
          In Development
        </button>
      </div>

      <div className="projects-content-container">
        {filter === "all" && (
          <div className="tab-panel animate-fade-in">
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
          </div>
        )}

        {filter === "systems" && (
          <div className="tab-panel animate-fade-in card-grid card-grid--two">
            <article className="project panel">
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

            <article className="project panel">
              <ProjectMedia imageUrl={data.secondary[0].imageUrl} mediaClass={data.secondary[0].mediaClass} />
              <div className="project__body">
                <TagRow tags={data.secondary[0].tags} tealIndexes={[]} />
                <h3>
                  {data.secondary[0].link ? (
                    <a href={data.secondary[0].link} target="_blank" rel="noopener noreferrer" className="project__link-hover" aria-label={`${data.secondary[0].title} (Opens in new tab)`}>
                      {data.secondary[0].title} <span className="project__link-arrow">↗</span>
                    </a>
                  ) : (
                    data.secondary[0].title
                  )}
                </h3>
                <p>{data.secondary[0].description}</p>
                {data.secondary[0].caseStudy ? <ProjectCaseStudy caseStudy={data.secondary[0].caseStudy} /> : null}
              </div>
            </article>
          </div>
        )}

        {filter === "themes" && (
          <div className="tab-panel animate-fade-in">
            <article className="project panel">
              <div className="project__body" style={{ minHeight: "auto" }}>
                <div className="icon-badge icon-badge--large" aria-hidden="true">&lt;&gt;</div>
                <TagRow tags={data.secondary[1].tags} tealIndexes={[0]} />
                <h3>
                  {data.secondary[1].link ? (
                    <a href={data.secondary[1].link} target="_blank" rel="noopener noreferrer" className="project__link-hover" aria-label={`${data.secondary[1].title} (Opens in new tab)`}>
                      {data.secondary[1].title} <span className="project__link-arrow">↗</span>
                    </a>
                  ) : (
                    data.secondary[1].title
                  )}
                </h3>
                <p>{data.secondary[1].description}</p>
                {data.secondary[1].caseStudy ? <ProjectCaseStudy caseStudy={data.secondary[1].caseStudy} /> : null}
              </div>
            </article>
          </div>
        )}

        {filter === "dev" && (
          <div className="tab-panel animate-fade-in card-grid card-grid--three">
            {data.loadingItems.map((item) => (
              <article key={item.title} className="placeholder-card panel">
                <div className="icon-badge" aria-hidden="true">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
