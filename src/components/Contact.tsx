import { FileDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section className="section contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="section-shell contact-layout">
        <SectionHeader
          eyebrow="Contacto"
          title="Hablemos"
          description="Si quieres conocer mas sobre mi trabajo, revisar mis proyectos o hablar sobre una oportunidad, puedes contactarme por estos medios."
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
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              Enviar correo
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
            <a className="button button--ghost" href={profile.cvUrl} download>
              Descargar CV
              <FileDown size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
