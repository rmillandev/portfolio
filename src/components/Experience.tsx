import { Bug, Server, Smartphone, Workflow } from "lucide-react";
import { experienceCases } from "../data/profile";
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
          description="Una forma segura de mostrar criterio tecnico sin exponer informacion privada de empresas o codigo confidencial."
        />

        <div className="experience-grid">
          {experienceCases.map((item) => {
            const Icon = icons[item.icon];

            return (
              <article className="experience-card" key={item.title}>
                <div className="experience-card__icon" aria-hidden="true">
                  <Icon size={23} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">
                  {item.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
