export type Accent = "cyan" | "blue" | "green" | "amber";

export interface Project {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  status: string;
  github: string;
  demo: string;
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
  role: "Mi enfoque principal esta orientado a soluciones que optimizan la operación, experiencia del usuario y automatización de procesos.",
  intro:
    "Tengo experiencia desarrollando soluciones para problemas reales de negocio, con especial énfasis en sistemas administrativos e integración de servicios externos. He impulsado la eficiencia operativa mediante la optimización y automatización de procesos, transformando tareas repetitivas en flujos de trabajo ágiles.",
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
  "Backend",
  "APIs REST",
  "Bases de datos",
  "Integraciones",
  "Solucion de errores",
  "Aprendizaje continuo",
  "Agentes de IA",
];

export const projects: Project[] = [
  {
    title: "MVP Sistema Integral de Prescripciones",
    summary:
      "Sistema web para la gestión, control y descarga de prescripciones médicas estructurado por roles.",
    problem:
      "Necesidad de centralizar y digitalizar el flujo de recetas médicas de forma ágil, permitiendo a médicos prescribir de forma directa y a pacientes llevar un control de su consumo sin depender de catálogos rígidos de productos.",
    solution:
      "Desarrollo de una solución de software de extremo a extremo basada en una arquitectura limpia. Implementa un sistema de autenticación y autorización para 3 roles independientes (Médico, Paciente, Administrador), un motor de generación de documentos en PDF para las recetas, y un tablero de analíticas para el seguimiento de estados.",
    technologies: ["TypeScript", "NextJS", "NestJS", "Prisma ORM", "Postgre SQL", "JWT"],
    status: "Prototipo / En desarrollo",
    github: "https://github.com/rmillandev/prescripciones",
    demo: "#",
    accent: "cyan",
  },
  {
    title: "API Automatizacion Rutina GYM",
    summary:
      "Backend para gestionar mis rutinas de entrenamiento",
    problem:
      "En mi rutina de entrenamiento necesitaba llevar el control en cada dia que vaya al gym y que se fuera registrando en mi google calendar.",
    solution:
      "Se implementa una API que consume un servicio de automatizacion construido en N8N que se conecta al google calendar para llevar el control de las secciones de entrenamiento.",
    technologies: ["C#", ".NET Core", "N8N"],
    status: "Proyecto personal",
    github: "https://github.com/rmillandev/api-gymautomation-n8n",
    demo: "",
    accent: "green",
  },
];

export const experienceCases: ExperienceCase[] = [
  {
    title: "Automatizacion de procesos en areas contables",
    description:
      "Trabajo en automatizar tareas repetitivas, desarrollando soluciones que facilitan la operacion y reducen errores humanos, llevando el control de ventas, pagos y reportes a un nuevo nivel de eficiencia.",
    technologies: ["C#", ".NET Core", "SQL Server"],
    company: "G&G Retail",
  },
  {
    title: "Desarrollo de app movil consumiendo servicios backend",
    description:
      "Desarrolle una app android, aplicando mejoras continuas y refactorizaciones, lo que permitio a los usuarios una mejor experiencia fluida y efeciente, ya que se agilizaron procesos debido a que se hizo una migracion de servicios de escritorio a movil.",
    technologies: ["Android", "Kotlin", "APIs REST", "Jetpack Compose"],
    company: "G&G Retail",
  },
  {
    title: "Integracion con servicios externos",
    description:
      "Exploracion e integracion de servicios externos para automatizar o mejorar procesos, como extraccion de informacion desde documentos y validacion de respuestas. Integrando en el Backend para un mejor control, seguridad y asi mismo poder reutilizarse en cualquier app o servicio Frontend.",
    technologies: ["OpenAI API", "Google Document AI", "OCR", "JSON"],
    company: "G&G Retail",
  },
  {
    title: "Implementacion API REST",
    description:
      "Participación en el diseño e implementación de endpoints de la API REST para la gestión de datos de los empleados, aplicando capa de seguridad con JWT.",
    technologies: ["Java", "Spring Boot", "JWT"],
    company: "FRISBY",
  },
  {
    title: "Modelado de tablas para la base de datos",
    description:
      "Modelado de las tablas a usar para la gestion de datos de los empleados, diseñando primero los diagramas para luego llevarlos a codigo SQL y finalmente poder anexar las tablas en la base de datos.",
    technologies: ["SQL"],
    company: "FRISBY",
  },
];

export const technologyGroups: TechnologyGroup[] = [
  {
    category: "Backend",
    items: ["C#", "ASP.NET Core", ".NET", "NestJS", "Node.js", "APIs REST", "JWT"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Consumo de APIs", "Diseno responsivo"],
  },
  {
    category: "Bases de datos",
    items: ["SQL Server", "PostgreSQL", "Prisma", "Consultas SQL"],
  },
  {
    category: "Herramientas",
    items: ["Git", "GitHub", "Visual Studio", "Visual Studio Code", "Postman", "IIS"],
  },
  {
    category: "Integraciones y servicios",
    items: ["OpenAI API", "Google Document AI", "OCR", "Servicios REST", "JSON"],
  },
];

export const workPrinciples = [
  "Me gusta documentar lo que construyo.",
  "Me interesa escribir codigo claro y mantenible.",
  "Me enfoco en entender el problema antes de programar.",
  "Estoy mejorando constantemente mis habilidades tecnicas.",
];
