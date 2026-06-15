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
  icon: "server" | "bug" | "mobile" | "workflow";
}

export interface TechnologyGroup {
  category: string;
  items: string[];
}

export const profile = {
  name: "Ronald",
  role: "Desarrollador enfocado en backend, APIs e integracion de sistemas reales.",
  intro:
    "Construyo aplicaciones, servicios y herramientas que ayudan a resolver problemas reales de negocio, especialmente en sistemas administrativos, consumo de APIs, automatizacion de procesos e integracion con servicios externos.",
  email: "correo@ejemplo.com",
  github: "https://github.com/usuario",
  linkedin: "https://linkedin.com/in/usuario",
  location: "Colombia",
  cvUrl: "/cv/CV_Ronald.txt",
};

export const strengths = [
  "Backend",
  "APIs REST",
  "Bases de datos",
  "Integraciones",
  "Solucion de errores",
  "Aprendizaje continuo",
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
    title: "Publicacion de APIs en IIS",
    description:
      "Trabajo en publicacion y configuracion de APIs en entornos IIS, revisando errores de configuracion, archivos faltantes, rutas, permisos y despliegue.",
    technologies: ["ASP.NET Core", "IIS", "Windows Server", "Web.config"],
    icon: "server",
  },
  {
    title: "Manejo de errores en endpoints",
    description:
      "Revision de problemas relacionados con parametros enviados a endpoints, validacion de fechas, valores nulos y estructura correcta de peticiones HTTP.",
    technologies: ["C#", "ASP.NET Core", "Web API", "Postman"],
    icon: "bug",
  },
  {
    title: "Consumo de APIs desde aplicaciones externas",
    description:
      "Escenarios donde una aplicacion necesita consumir servicios backend, considerando red, localhost, IP local, puertos y pruebas desde otros dispositivos.",
    technologies: ["Android", "Kotlin", "APIs REST", "HTTP"],
    icon: "mobile",
  },
  {
    title: "Integracion con servicios externos",
    description:
      "Exploracion e integracion de servicios externos para automatizar o mejorar procesos, como extraccion de informacion desde documentos y validacion de respuestas.",
    technologies: ["OpenAI API", "Google Document AI", "OCR", "JSON"],
    icon: "workflow",
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
