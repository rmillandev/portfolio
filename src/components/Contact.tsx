import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section className="section contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="section-shell contact-layout">
        <SectionHeader
          id="contact-title"
          eyebrow="Contacto"
          title="Cuéntame qué quieres construir"
          description="Si tienes una idea o un proceso que quieres mejorar, cuéntame qué necesitas, cuál es tu objetivo y qué plazo tienes en mente. También podemos hablar de una landing page para tu negocio."
        />

        <div className="contact-panel">
          <div className="contact-row">
            <Mail size={19} aria-hidden="true" />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact-row">
            <Github size={19} aria-hidden="true" />
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="contact-row">
            <Linkedin size={19} aria-hidden="true" />
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="contact-row">
            <MapPin size={19} aria-hidden="true" />
            <span>{profile.location}</span>
          </div>

          <div className="contact-actions">
            <a className="button button--primary" href={`mailto:${profile.email}?subject=Consulta%20sobre%20un%20proyecto`}>
              Hablemos de tu proyecto
              <Mail size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary" href={profile.github} target="_blank" rel="noreferrer">
              Ver GitHub
              <Github size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              Ver LinkedIn
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
