import { workPrinciples } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section className="section section--muted" id="sobre-mi" aria-labelledby="about-title">
      <div className="section-shell about-layout">
        <SectionHeader
          eyebrow="Sobre mi"
          title="Aprender construyendo y resolviendo problemas reales"
          description="Una mirada mas humana del proceso: entender el sistema, ordenar el codigo y mejorar con cada entrega."
        />

        <div className="about-panel">
          <p>
            Me gusta aprender construyendo proyectos y resolviendo problemas reales. Disfruto
            entender como funciona un sistema por dentro, desde la base de datos hasta la API y la
            interfaz que consume la informacion.
          </p>
          <p>
            Actualmente estoy fortaleciendo mis conocimientos en desarrollo backend, arquitectura de
            APIs, buenas practicas, cloud y desarrollo fullstack. Mi objetivo es seguir creciendo
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
