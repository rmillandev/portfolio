import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../data/profile";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-card__visual" aria-hidden="true">
        {project.visualLabel ? <span className="project-card__visual-label">{project.visualLabel}</span> : null}
        <div className="visual-window">
          <span />
          <span />
          <span />
        </div>
        <div className="visual-grid">
          <span className="visual-node visual-node--large" />
          <span className="visual-line" />
          <span className="visual-node" />
          <span className="visual-line visual-line--short" />
          <span className="visual-node visual-node--soft" />
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{number}</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <div className="case-points">
          <div>
            <strong>Problema</strong>
            <span>{project.problem}</span>
          </div>
          <div>
            <strong>Solución</strong>
            <span>{project.solution}</span>
          </div>
        </div>

        {project.technologies.length > 0 ? (
          <div className="tag-list" aria-label={`Tecnologías de ${project.title}`}>
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        ) : null}

        <div className="project-card__actions">
          {project.github ? (
            <a className="text-link" href={project.github} target="_blank" rel="noreferrer">
              GitHub <Github size={17} aria-hidden="true" />
            </a>
          ) : null}
          {project.demo ? (
            <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">
              Ver sitio
              <ExternalLink size={17} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
