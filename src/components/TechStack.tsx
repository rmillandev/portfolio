import { technologyGroups } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function TechStack() {
  return (
    <section className="section" id="tecnologias" aria-labelledby="tech-title">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Tecnologias"
          title="Herramientas agrupadas por contexto"
          description="La lectura queda organizada por uso real: backend, frontend, datos, herramientas e integraciones."
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
