import { useState, useMemo } from "react";
import { SectionHeading } from "../SectionHeading";
import type { EngineeringNote } from "../../data/mockData";

export interface EngineeringNotesSectionProps {
  readonly data: readonly EngineeringNote[];
  readonly id: string;
}

// Detailed contents lookup to present when the user opens an article
const NOTES_DETAILS_LOOKUP: Record<string, string> = {
  "How I Structured Treasury Reporting": `
### Moving from Ledgers to Database Sync
The core challenge was replacing manual physical ledgers with a robust, automated Python + SQL sync pipeline. This was specifically designed for future treasurers with no database training.

#### Key Implementations:
*   **Data Integrity & Consistency**: Engineered PostgreSQL constraints and triggers to handle real-time balance calculations and prevent overdrafts or double entries.
*   **Python Sync Script**: Built a pipeline using Pandas and psycopg2 to parse transaction logs and sync them directly to Postgres, generating clean diagnostic logs.
*   **Accessible Admin Tool**: Deployed a CLI menu and scheduled exportable Excel templates to let non-technical coordinators audit and sign off on ledger transactions without needing database expertise.
`,
  "Improving Accessibility Focus Systems": `
### Applying WCAG 2.2 standards to Portals
Implementing learnings from UNICEF Agora training, I designed and developed an accessible keyboard navigation experience across the dashboard portal.

#### Key Implementations:
*   **Accessible Focus Rings**: Created dynamic SVG outline focus rings that automatically adapt contrast depending on background color, meeting the WCAG AAA 4.5:1 ratio requirement.
*   **Semantic Landmarks**: Restructured layout containers into proper HTML5 header, main, section, and footer elements, adding screen-reader labels to abstract visual cards.
*   **Skip-to-Content Mechanism**: Coded robust skip-to-content links that let keyboard users bypass heavy navigation lists and jump straight to primary dashboard sections.
`,
  "Lessons from Organizational Infrastructure": `
### Launching dccnsc.org for Dhaka College Science Club
Designed and deployed a modern CMS and portal to serve as the official hub for Dhaka College Science Club, focusing on site load speed, usability, and secure logins.

#### Key Implementations:
*   **Performance Optimization**: Engineered a lightweight custom Gutenberg template, lowering resource footprints and achieving page load times under 1.2s.
*   **Admin Custom Blocks**: Customized the WordPress visual builder, allowing student editors to easily update research notes and schedules without breaking site styling.
*   **Security & Reliability**: Hardened REST API routes, configured multi-layered firewalls to prevent brute-force login attempts, and established automated cloud backups.
`,
  "Rooppur Loads Its Fuel: What Today Actually Means for Bangladesh": `
### Strategic Assessment of Nuclear Power Infrastructure
An analysis of the Rooppur Nuclear Power Plant loading its fuel and its broader implications for Bangladesh's energy landscape and grid security.

#### Key Implementations:
*   **Baseload Grid Stability**: Assessing how Rooppur's 2,400 MW capacity will transition the national grid away from erratic gas/coal supplies to steady base load generation.
*   **Carbon Offset Metrics**: Once active, it will dramatically lower fuel import costs and cut greenhouse emissions by millions of tons annually.
*   **Safety Paradigms**: A review of the VVER-1200 Gen III+ reactor safety features, including passive heat removal systems, core catchers, and double-wall containment vessels.
`,
  "El Niño and Bangladesh Summer 2026": `
### Meteorological Warning System & Climate Mitigation
A comprehensive research analysis on the projected transition to El Niño conditions and its direct socio-environmental risks for Bangladesh.

#### Key Implementations:
*   **Agricultural Impact Matrix**: Analyzing rainfall delays that disrupt Aman paddy cultivation; recommended drought-tolerant seeds and smart irrigation schedules.
*   **Extreme Heat Analysis**: Modeled Western district temperatures exceeding 42°C, noting urban heat island effects and recommending public cooling sanctuaries.
*   **Public Health Risks**: Highlighted historical links between El Niño cycles, water table drops, and seasonal cholera/dengue outbreaks to coordinate early sanitization.
`,
  "The Virus the World Just Noticed - And Why Bangladesh Should Pay Attention": `
### Epidemiological Readiness for Rodent-Borne Viruses
A scientific overview of Hantaviruses, explaining the virology, transmission vectors, and localized public health preparation plans for urban centers.

#### Key Implementations:
*   **Transmission Vectors**: Discusses how aerosols from rodent excreta carry active pathogens, posing major threats in dense urban areas.
*   **Dense Metropolis Risk Profiles**: Analyzes waste management and urban density in Dhaka, proposing localized vector surveillance systems.
*   **Healthcare Recommendations**: Details diagnostic testing methods, respiratory support prep, and public hygiene education programs.
`,
  "Environmental Comfort as a Growth Strategy: Lessons from the Global South and Bangladesh": `
### Sustainable Urban Design & Thermal Comfort
Reimaging green building designs as an economic driver rather than just a regulatory cost, with case studies from tropical climates.

#### Key Implementations:
*   **Thermal Comfort & Productivity**: Linking heat stress with cognitive fatigue; showing that keeping classrooms and workspaces under 27°C increases productivity.
*   **Passive Cooling Designs**: Harnessing cross-ventilation, green roof insulation, shading louvers, and light-reflecting paints to lower cooling demand by up to 30%.
*   **Policy Guidelines**: A proposal for municipal building codes in Bangladesh to subsidize vertical gardens and require shade analysis for high-rise permits.
`,
  "The April 26 Rainfall: A Scientific Autopsy of Dhaka's AQI Plunge": `
### Wet Deposition and Atmospheric Cleanup Science
A meteorological case study breaking down how the rainfall of April 26 triggered a record-breaking plunge in Dhaka's Air Quality Index.

#### Key Implementations:
*   **Wet Scavenging Mechanics**: Explaining how heavy rain droplets collide with suspended PM2.5 and PM10 particles, dragging them to the ground.
*   **Boundary Layer Dynamics**: How storm convection broke the thermal inversion layer that traps metropolitan smog during winter/spring months.
*   **Statistical Analysis**: Showing the AQI drop from 195 (Unhealthy) to 32 (Good) within 6 hours, illustrating the efficacy of natural atmospheric flushing.
`,
};

export function EngineeringNotesSection({ data, id }: Readonly<EngineeringNotesSectionProps>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [activeNote, setActiveNote] = useState<EngineeringNote | null>(null);

  // Extract all unique tags dynamically from the data
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    tags.add("All");
    data.forEach((note) => {
      note.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, [data]);

  // Filter notes based on selected tag and search query
  const filteredNotes = useMemo(() => {
    return data.filter((note) => {
      const matchesTag = selectedTag === "All" || note.tags.includes(selectedTag);
      const matchesSearch =
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTag && matchesSearch;
    });
  }, [data, selectedTag, searchQuery]);

  return (
    <section className="shell section engineering-notes" id={id}>
      <SectionHeading
        title="Engineering Insights"
        highlightedText="&amp; Analyses"
        description="Technical write-ups, ecological autopsies, and strategic analyses exploring modern software development, epidemiology, and climate science."
      />

      {/* Search and Tag Filtering Controls */}
      <div className="notes-controls panel">
        <div className="notes-search-wrapper">
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input
            type="text"
            className="notes-search-input"
            placeholder="Search notes by keyword, tag, title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search engineering notes"
          />
          {searchQuery && (
            <button
              className="notes-search-clear"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search query"
            >
              ✕
            </button>
          )}
        </div>

        <div className="notes-tags-list" role="group" aria-label="Filter notes by tag">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`notes-tag-btn ${selectedTag === tag ? "is-active" : ""}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Note Cards */}
      <div className="notes-grid card-grid card-grid--three">
        {filteredNotes.map((note) => (
          <article key={note.title} className="panel note-card">
            <div className="note-card__meta">
              <span className="note-card__date" aria-label={`Published in ${note.date}`}>
                📅 {note.date}
              </span>
            </div>
            <h3 className="note-card__title">{note.title}</h3>
            <p className="note-card__excerpt">{note.excerpt}</p>
            <div className="note-card__footer">
              <div className="note-card__tags">
                {note.tags.map((t) => (
                  <span key={t} className="note-card__tag">
                    #{t}
                  </span>
                ))}
              </div>
              <button
                className="note-card__btn"
                onClick={() => setActiveNote(note)}
                aria-label={`Read note: ${note.title}`}
              >
                Read Log <span>→</span>
              </button>
            </div>
          </article>
        ))}

        {filteredNotes.length === 0 && (
          <div className="notes-empty-state">
            <p>No engineering insights matched your criteria.</p>
            <button
              className="notes-tag-btn"
              onClick={() => {
                setSearchQuery("");
                setSelectedTag("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Modal / Drawer for Reading Note Detail */}
      {activeNote && (
        <div
          className="notes-modal-overlay"
          onClick={() => setActiveNote(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="notes-modal-card panel animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="notes-modal-close"
              onClick={() => setActiveNote(null)}
              aria-label="Close article modal"
            >
              ✕
            </button>

            <div className="notes-modal-header">
              <div className="notes-modal-meta">
                <span className="note-card__date">📅 {activeNote.date}</span>
                <div className="note-card__tags">
                  {activeNote.tags.map((t) => (
                    <span key={t} className="note-card__tag">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
              <h2 id="modal-title" className="notes-modal-title">
                {activeNote.title}
              </h2>
              <div className="notes-modal-divider" aria-hidden="true" />
            </div>

            <div className="notes-modal-body">
              <p className="notes-modal-excerpt">{activeNote.excerpt}</p>
              <div className="notes-modal-markdown">
                {NOTES_DETAILS_LOOKUP[activeNote.title] ? (
                  NOTES_DETAILS_LOOKUP[activeNote.title]
                    .trim()
                    .split("\n\n")
                    .map((block, index) => {
                      if (block.startsWith("### ")) {
                        return <h3 key={index}>{block.replace("### ", "")}</h3>;
                      }
                      if (block.startsWith("#### ")) {
                        return <h4 key={index}>{block.replace("#### ", "")}</h4>;
                      }
                      if (block.startsWith("*   ")) {
                        return (
                          <ul key={index}>
                            {block
                              .split("\n")
                              .map((line) => (
                                <li key={line}>{line.replace("*   ", "").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
                              ))}
                          </ul>
                        );
                      }
                      return <p key={index}>{block}</p>;
                    })
                ) : (
                  <p>Detailed analysis report log is currently loading from cloud files...</p>
                )}
              </div>
            </div>

            <div className="notes-modal-footer">
              <button className="note-card__btn" onClick={() => setActiveNote(null)}>
                Close Log
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
