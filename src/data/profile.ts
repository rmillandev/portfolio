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
    title: "API para extraccion de datos de comprobantes",
    summary:
      "API disenada para recibir imagenes de comprobantes de pago y extraer informacion relevante como fecha, valor, banco, referencia y numero de comprobante.",
    problem:
      "Muchas empresas reciben comprobantes de pago en imagen y deben revisar la informacion manualmente.",
    solution:
      "Se plantea una API que recibe una imagen, procesa el documento y devuelve una respuesta estructurada en formato JSON.",
    technologies: [".NET", "C#", "API REST", "OCR", "JSON", "Postman"],
    status: "Prototipo / En desarrollo",
    github: "#",
    demo: "#",
    accent: "cyan",
  },
  {
    title: "Sistema de metricas por fecha",
    summary:
      "Aplicacion para consultar informacion filtrada por fecha inicial, fecha final y empresa, mostrando resultados organizados para analisis.",
    problem:
      "Los usuarios necesitan consultar informacion especifica por rangos de fecha de forma rapida y clara.",
    solution:
      "Se construye un endpoint que recibe parametros de consulta y devuelve datos listos para ser visualizados en una tabla.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "JavaScript", "HTML", "CSS"],
    status: "Demo funcional",
    github: "#",
    demo: "#",
    accent: "blue",
  },
  {
    title: "API segura con autenticacion JWT",
    summary:
      "Backend con autenticacion mediante JWT, manejo de usuarios y proteccion de rutas segun roles.",
    problem:
      "Muchas aplicaciones necesitan controlar el acceso a ciertas funciones segun el tipo de usuario.",
    solution:
      "Se implementa login, generacion de token, rutas protegidas y validacion de roles.",
    technologies: ["NestJS", "Node.js", "JWT", "Prisma", "PostgreSQL"],
    status: "Proyecto personal",
    github: "#",
    demo: "#",
    accent: "green",
  },
  {
    title: "App Android consumiendo API",
    summary:
      "Aplicacion movil sencilla que consume informacion desde una API y muestra datos en pantalla.",
    problem:
      "Se necesita conectar una aplicacion movil con servicios backend para consultar informacion en tiempo real.",
    solution:
      "Se desarrolla una app Android que realiza peticiones HTTP, procesa respuestas JSON y muestra resultados al usuario.",
    technologies: ["Kotlin", "Android", "API REST", "JSON"],
    status: "Practica / Laboratorio",
    github: "#",
    demo: "#",
    accent: "amber",
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
