import { projects } from "../data/profile";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section className="section" id="proyectos" aria-labelledby="projects-title">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Proyectos destacados"
          title=""
          description="Proyectos personales donde aplico de manera autodidacta mis conocimientos y retos en diferentes tecnologias"
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
