import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../data/profile";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function linkProps(href: string) {
  return href === "#"
    ? {}
    : {
        target: "_blank",
        rel: "noreferrer",
      };
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-card__visual" aria-hidden="true">
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
            <strong>Solucion</strong>
            <span>{project.solution}</span>
          </div>
        </div>

        <div className="tag-list" aria-label={`Tecnologias de ${project.title}`}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-card__actions">
          <a className="text-link" href={project.github} {...linkProps(project.github)}>
            GitHub
            <Github size={17} aria-hidden="true" />
          </a>
          {project.demo && project.demo !== "" ? (
            <a className="text-link" href={project.demo} {...linkProps(project.demo)}>
              Demo
              <ExternalLink size={17} aria-hidden="true" />
            </a>
          ) : (
            <p className="text-link">Sin demo</p>
          )}
        </div>
      </div>
    </article>
  );
}
