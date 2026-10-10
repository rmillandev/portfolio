import { projects } from "../data/profile";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section className="section" id="proyectos" aria-labelledby="projects-title">
      <div className="section-shell">
        <SectionHeader
          id="projects-title"
          eyebrow="Proyectos destacados"
          title="Trabajo que puedes explorar"
          description="Un SaaS desarrollado en equipo, tres muestras personales de landing pages que diseñé y desarrollé, y otros proyectos técnicos."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
