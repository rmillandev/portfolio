import { ArrowRight, Mail } from "lucide-react";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <img src="/images/backend-systems-hero.png" alt="" />
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content section-shell">
        <p className="hero__eyebrow">DESARROLLADOR DE SOFTWARE</p>
        <h1 id="hero-title">Hola, soy {profile.name}</h1>
        <p className="hero__subtitle">{profile.role}</p>
        <p className="hero__text">{profile.intro}</p>

        <div className="hero__actions" aria-label="Acciones principales">
          <a className="button button--primary" href="#proyectos">
            Ver proyectos
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button button--secondary" href="#contacto">
            Hablemos de tu proyecto
            <Mail size={18} aria-hidden="true" />
          </a>
        </div>

        <dl className="hero__stats" aria-label="Resumen profesional">
          <div>
            <dt>CO</dt>
            <dd>{profile.location}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
