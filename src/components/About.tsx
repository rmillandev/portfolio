import { workPrinciples } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section className="section section--muted" id="sobre-mi" aria-labelledby="about-title">
      <div className="section-shell about-layout">
        <SectionHeader
          eyebrow="Sobre mi"
          title="Aprender construyendo y resolviendo problemas reales"
          description=""
        />

        <div className="about-panel">
          <p>
            Actualmente estoy fortaleciendo mis conocimientos en desarrollo fullstack, buenas practicas, clean code, cloud. Mi objetivo es seguir creciendo
            como desarrollador y construir soluciones cada vez mas completas, ordenadas y utiles.
          </p>

          <ul className="principle-list">
            {workPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
