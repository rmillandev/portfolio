import { Bug, Server, Smartphone, Workflow } from "lucide-react";
import { experienceCases, companies } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

const icons = {
  server: Server,
  bug: Bug,
  mobile: Smartphone,
  workflow: Workflow,
};

export function Experience() {
  return (
    <section className="section section--muted" id="experiencia" aria-labelledby="experience-title">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experiencia aplicada"
          title="Problemas tecnicos resueltos en contextos reales"
        />

        {companies.map((c) => {
          const casesForCompany = experienceCases.filter((ec) => ec.company === c.name);
          return (
            <div className="company-section" key={c.name}>
              <div className="company-header">
                <strong className="company-name">{c.name} | </strong>
                <span className="company-dates">{c.start} – {c.end}</span>
              </div>
              {c.summary ? <p className="company-summary">{c.summary}</p> : null}

              {casesForCompany.length > 0 && (
                <div className="experience-grid">
                  {casesForCompany.map((item) => (
                    <article className="experience-card" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="tag-list">
                        {item.technologies.map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

