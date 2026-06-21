import { technologyGroups } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function TechStack() {
  return (
    <section className="section" id="tecnologias" aria-labelledby="tech-title">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Tecnologias"
          title=""
          description="Herramientas y tecnologias agrupadas por contexto"
        />

        <div className="tech-grid">
          {technologyGroups.map((group) => (
            <article className="tech-card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
