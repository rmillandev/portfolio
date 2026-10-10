export type Accent = "cyan" | "blue" | "green" | "amber";

export interface Project {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  status: string;
  github?: string;
  demo?: string;
  image?: string;
  imageAlt?: string;
  contribution?: string;
  visualLabel?: string;
  accent: Accent;
}

export interface ExperienceCase {
  title: string;
  description: string;
  technologies: string[];
  company?: string;
}

export interface TechnologyGroup {
  category: string;
  items: string[];
}

export const profile = {
  name: "Ronald",
  role: "Desarrollo soluciones de software que mejoran procesos, conectan servicios y facilitan el trabajo de las personas.",
  intro:
    "Trabajo con aplicaciones web, sistemas administrativos, automatización e integraciones. También desarrollo landing pages para negocios que necesitan presentar su oferta con claridad.",
  email: "rmillandev@gmail.com",
  github: "https://github.com/rmillandev",
  linkedin: "https://www.linkedin.com/in/ronald-millan/",
  location: "Colombia"
};

export interface Company {
  name: string;
  start: string; // e.g. "Mar 2022" or "2021"
  end: string; // e.g. "Jun 2024" or "Present"
  location?: string;
  summary?: string;
}

export const companies: Company[] = [
  {
    name: "G&G Retail",
    start: "Abril 2024",
    end: "Actualidad",
    location: "Sincelejo, Colombia",
    summary:"",
  },
  {
    name: "FRISBY",
    start: "Octubre 2022",
    end: "Abril 2023",
    location: "Remoto",
    summary: "",
  },
];

export const strengths = [
  "Desarrollo web",
  "Diseño adaptable",
  "APIs REST",
  "Bases de datos",
  "Integraciones",
  "Automatización",
];

export const projects: Project[] = [
  {
    title: "Oikentra",
    summary: "Aplicación de operaciones para pequeños negocios, desarrollada en equipo.",
    problem: "Llevar ventas, gastos, inventario y caja en herramientas separadas dificulta ver el estado del negocio.",
    solution: "Oikentra reúne esas tareas en una aplicación que también permite seguir trabajando sin conexión y sincronizar los datos.",
    technologies: [],
    status: "SaaS en equipo",
    demo: "https://oikentra.com/",
    visualLabel: "Oikentra",
    accent: "green",
  },
  {
    title: "Sistema integral de prescripciones",
    summary:
      "Sistema web para la gestión, control y descarga de prescripciones médicas estructurado por roles.",
    problem:
      "Centralizar y digitalizar las recetas médicas para facilitar el trabajo de médicos y el seguimiento de los pacientes.",
    solution:
      "Prototipo con acceso por roles, generación de recetas en PDF y un tablero para seguir sus estados.",
    technologies: ["TypeScript", "Next.js", "NestJS", "Prisma ORM", "PostgreSQL", "JWT"],
    status: "Prototipo en desarrollo",
    github: "https://github.com/rmillandev/prescripciones",
    accent: "cyan",
  },
  {
    title: "Automatización de rutina de gimnasio",
    summary:
      "API personal para registrar sesiones de entrenamiento.",
    problem:
      "Quería llevar un registro de mis entrenamientos en Google Calendar.",
    solution:
      "Conecté una API con una automatización en n8n para registrar las sesiones en el calendario.",
    technologies: ["C#", ".NET Core", "n8n"],
    status: "Proyecto personal",
    github: "https://github.com/rmillandev/api-gymautomation-n8n",
    accent: "green",
  },
  {
    title: "NEXO Servicios",
    summary: "Landing page demostrativa para servicios de mantenimiento, reparaciones e instalaciones.",
    problem: "Presentar varios servicios y facilitar que una persona explique qué trabajo necesita cotizar.",
    solution: "Organicé los servicios y un formulario que prepara la solicitud para enviarla por WhatsApp.",
    technologies: [],
    status: "Landing page · Muestra personal",
    contribution: "Diseño y desarrollo",
    demo: "https://landing-servicios-one.vercel.app/",
    image: "/images/landing-servicios.jpg",
    imageAlt: "Portada de la muestra NEXO Servicios con formulario de cotización",
    accent: "amber",
  },
  {
    title: "Miga & Mesa",
    summary: "Landing page demostrativa para un café y restaurante, con menú y consulta de reservas.",
    problem: "Ayudar a explorar la propuesta del lugar, consultar el menú y preparar una reserva.",
    solution: "Diseñé una página con categorías de platos y un formulario que prepara la consulta por WhatsApp.",
    technologies: [],
    status: "Landing page · Muestra personal",
    contribution: "Diseño y desarrollo",
    demo: "https://landing-restaurante-ten.vercel.app/",
    image: "/images/landing-restaurante.jpg",
    imageAlt: "Portada de la muestra Miga & Mesa con fotografía de café y comida",
    accent: "amber",
  },
  {
    title: "NAVA Barber Studio",
    summary: "Landing page demostrativa para barbería con servicios, galería y preparación de citas.",
    problem: "Mostrar estilos y servicios para que un visitante pueda decidir qué consulta hacer.",
    solution: "Diseñé una galería y un selector de servicio, estilo y horario que prepara un mensaje para WhatsApp.",
    technologies: [],
    status: "Landing page · Muestra personal",
    contribution: "Diseño y desarrollo",
    demo: "https://landing-barberia-ten.vercel.app/",
    image: "/images/landing-barberia.jpg",
    imageAlt: "Portada de la muestra NAVA Barber Studio con un barbero trabajando",
    accent: "amber",
  }
];

export const experienceCases: ExperienceCase[] = [
  {
    title: "Automatización de procesos en áreas contables",
    description:
      "Desarrollo soluciones para automatizar tareas repetitivas y facilitar el control de ventas, pagos y reportes, con menos errores manuales.",
    technologies: ["C#", ".NET Core", "SQL Server"],
    company: "G&G Retail",
  },
  {
    title: "Desarrollo de aplicación móvil conectada al backend",
    description:
      "Desarrollé una aplicación Android y mejoré su funcionamiento mientras se trasladaban procesos de escritorio a móvil.",
    technologies: ["Android", "Kotlin", "APIs REST", "Jetpack Compose"],
    company: "G&G Retail",
  },
  {
    title: "Integración con servicios externos",
    description:
      "Integré servicios para extraer información de documentos y validar respuestas desde el backend, de modo que pudieran reutilizarse en distintas aplicaciones.",
    technologies: ["OpenAI API", "Google Document AI", "OCR", "JSON"],
    company: "G&G Retail",
  },
  {
    title: "Implementación de API REST",
    description:
      "Participé en el diseño e implementación de endpoints para gestionar datos de empleados, con autenticación mediante JWT.",
    technologies: ["Java", "Spring Boot", "JWT"],
    company: "FRISBY",
  },
  {
    title: "Modelado de tablas para la base de datos",
    description:
      "Diseñé diagramas y tablas SQL para organizar los datos de empleados en la base de datos.",
    technologies: ["SQL"],
    company: "FRISBY",
  },
];

export const technologyGroups: TechnologyGroup[] = [
  {
    category: "Backend",
    items: ["C#", "ASP.NET Core", "NestJS", "APIs REST", "JWT"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Kotlin"],
  },
  {
    category: "Bases de datos",
    items: ["SQL Server", "PostgreSQL", "Prisma ORM"],
  },
  {
    category: "Herramientas",
    items: ["Git", "GitHub", "Visual Studio", "Visual Studio Code", "Postman", "Android Studio"],
  },
  {
    category: "Integraciones y servicios",
    items: ["OpenAI API", "Google Document AI", "Servicios REST"],
  },
];

export const workPrinciples = [
  "Me interesa escribir codigo claro y mantenible.",
  "Me enfoco en entender el problema antes de programar.",
  "Estoy mejorando constantemente mis habilidades tecnicas.",
];
