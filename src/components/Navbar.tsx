import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Inicio", href: "#inicio", id: "inicio" },
  { label: "Experiencia", href: "#experiencia", id: "experiencia" },
  { label: "Proyectos", href: "#proyectos", id: "proyectos" },
  { label: "Tecnologias", href: "#tecnologias", id: "tecnologias" },
  { label: "Sobre mi", href: "#sobre-mi", id: "sobre-mi" },
  { label: "Contacto", href: "#contacto", id: "contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("inicio");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-34% 0px -58% 0px", threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar section-shell" aria-label="Navegacion principal">
        <a className="navbar__brand" href="#inicio" onClick={() => setIsOpen(false)}>
          <span className="navbar__mark">R</span>
          <span>Ronald</span>
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <div id="primary-navigation" className={`navbar__links ${isOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              className={activeId === item.id ? "is-active" : ""}
              href={item.href}
              onClick={() => {
                setActiveId(item.id);
                setIsOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
