import { ArrowRight, LayoutTemplate, PanelsTopLeft, Workflow } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    title: "Aplicaciones y sistemas web",
    description: "Construyo herramientas para organizar información y apoyar procesos de negocio.",
    icon: PanelsTopLeft,
  },
  {
    title: "Automatización e integraciones",
    description: "Conecto servicios y simplifico tareas repetitivas cuando aportan valor a la operación.",
    icon: Workflow,
  },
  {
    title: "Landing pages",
    description: "Creo páginas para presentar una oferta de forma clara y facilitar el contacto con clientes potenciales.",
    icon: LayoutTemplate,
  },
];

export function Services() {
  return (
    <section className="section section--intro" id="servicios" aria-labelledby="services-title">
      <div className="section-shell">
        <SectionHeader
          id="services-title"
          eyebrow="Servicios"
          title="Soluciones según lo que necesitas"
          description="Mi trabajo abarca desarrollo de software para procesos de negocio y páginas web enfocadas en comunicar una oferta."
        />
        <div className="services-grid">
          {services.map(({ title, description, icon: Icon }) => (
            <article className="service-card" key={title}>
              <Icon size={25} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <a className="text-link services-link" href="#contacto">
          Cuéntame qué necesitas <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
