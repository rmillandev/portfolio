import { strengths } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function AboutPreview() {
  return (
    <section className="section section--intro" id="presentacion" aria-labelledby="presentacion-title">
      <div className="section-shell intro-grid">
        <SectionHeader
          eyebrow="Presentacion breve"
          title="Soluciones practicas conectadas con procesos reales"
          description="Un perfil tecnico orientado a construir servicios claros, mantenibles y faciles de integrar."
        />

        <div className="intro-copy" id="presentacion-title">
          <p>
            Soy desarrollador con interes en crear soluciones practicas, mantenibles y conectadas
            con procesos reales. Me gusta trabajar en la construccion de APIs, integracion de
            servicios, manejo de datos y desarrollo de herramientas que faciliten tareas dentro de
            una empresa.
          </p>
          <p>
            He tenido experiencia trabajando con tecnologias como C#, .NET, SQL Server, JavaScript
            y servicios externos. Tambien me interesa seguir fortaleciendo mis conocimientos en
            arquitectura, cloud, buenas practicas y desarrollo fullstack.
          </p>
          <div className="strength-list" aria-label="Fortalezas">
            {strengths.map((strength) => (
              <span key={strength}>{strength}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
