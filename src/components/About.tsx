import { strengths } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section className="section section--muted" id="sobre-mi" aria-labelledby="about-title">
      <div className="section-shell about-layout">
        <SectionHeader
          id="about-title"
          eyebrow="Sobre mí"
          title="Entender el problema antes de construir"
          description="Soy desarrollador de software en Colombia. Me interesa crear soluciones prácticas y mantenibles que ayuden en la operación diaria de un negocio."
        />

        <div className="about-panel">
          <p>
            He trabajado en sistemas administrativos, aplicaciones móviles e integración de servicios. Me gusta entender el problema antes de elegir las herramientas y construir la solución.
          </p>
          <div className="strength-list" aria-label="Áreas de trabajo">
            {strengths.map((strength) => (
              <span key={strength}>{strength}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
