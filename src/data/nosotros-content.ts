/**
 * Content for the Nosotros page — Premium Redesign 2026
 * Faithful replica of https://erakconsultores.com/erak/public/nosotros with high-end terminology.
 */

const IMG_BASE = "https://erakconsultores.com/erak/public/assets/img";

export const nosotrosHero = {
  title: "NOSOTROS",
  backgroundImage: `${IMG_BASE}/nosotros.jpg`,
  // Tagline invisible para que la IA lo use como subtítulo de impacto
  subtitle: "20 AÑOS DE RIGOR METODOLÓGICO Y EVIDENCIA TÉCNICA",
};

export const nosotrosAbout = {
  heading: "ERAK Consultores",
  description:
    "Somos una firma consultora de élite especializada en la arquitectura de proyectos de investigación cuantitativa y cualitativa. Líderes regionales en Evaluación de programas sociales, evaluaciones de impacto y análisis costo-beneficio bajo estándares internacionales de organismos multilaterales.",
  carouselImages: Array.from({ length: 9 }, (_, i) => `${IMG_BASE}/carrusel/${i + 1}.jpg`),
};

export interface TeamMember {
  name: string;
  photo: string;
  lines: string[];
}

// ---------------------------------------------------------
// CONSULTORES SENIOR: El núcleo estratégico de la firma
// ---------------------------------------------------------
export const consultoresSenior: TeamMember[] = [
  {
    name: "Dr. Elner Crespín",
    photo: `${IMG_BASE}/teams/Dr.%20Elner%20Osm%C3%ADn%20Cresp%C3%ADn%201.png`,
    lines: ["Líder de Estrategia", "Especialista en Evaluaciones, Estudios y Sistematizaciones"],
  },
  {
    name: "Ing. Hugo Crespín",
    photo: `${IMG_BASE}/teams/Ing.%20Hugo%20Cresp%C3%ADn%201.png`,
    lines: ["Director de Tecnología", "Especialista en Arquitectura de Sistemas e Infraestructura TI"],
  },
  {
    name: "Licda. Liduvina de Morán",
    photo: `${IMG_BASE}/teams/Licda.%20Liduvina%20de%20Mor%C3%A1n%201.png`,
    lines: ["Senior Advisor", "Especialista en Monitoreo y Evaluación (M&E) y Educación"],
  },
  {
    name: "Dr. Ricardo Herrera",
    photo: `${IMG_BASE}/teams/Lic.%20Ricardo%20Herrera%201.png`,
    lines: ["Legal & Compliance", "Derecho de familia y Resolución de Conflictos Institucionales"],
  },
  {
    name: "Lic. Mauricio Varela",
    photo: `${IMG_BASE}/teams/Lic.%20Mauricio%20Varela%201.png`,
    lines: ["Operations Lead", "Planificación de Demanda y Cadena de Abastecimiento Global"],
  },
  {
    name: "Lic. Herbert Crespín",
    photo: `${IMG_BASE}/teams/Lic.%20Herbert%20Cresp%C3%ADn%201.png`,
    lines: ["Consultor de Gestión", "Especialista en Administración Escolar y Gobernanza"],
  },
];

// ---------------------------------------------------------
// EQUIPO TÉCNICO: La fuerza operativa de precisión
// ---------------------------------------------------------
export const equipoTecnico: TeamMember[] = [
  {
    name: "Licda. Diana Orellana",
    photo: `${IMG_BASE}/teams/Diana%20Orellana1.png`,
    lines: ["Técnica Senior", "Trabajadora Social y Especialista en Investigación"],
  },
  {
    name: "Lic. Fernando Umanzor",
    photo: `${IMG_BASE}/teams/Fernando%20Umanzor%201.png`,
    lines: ["Project Manager", "Administrador de Empresas y Gestión de Proyectos"],
  },
  {
    name: "Licda. Karelin Castro",
    photo: `${IMG_BASE}/teams/Karelin%20Castro%201.png`,
    lines: ["Analista Económica", "Especialista en Investigación de Campo"],
  },
  {
    name: "Licda. Paola Pérez",
    photo: `${IMG_BASE}/teams/Paola%20P%C3%A9rez%201.png`,
    
    lines: ["Economista", "Técnica de Investigación Cuantitativa"],
  },
  {
    name: "Licda. Katherine Ramírez",
    photo: `${IMG_BASE}/teams/Katherine%20Ram%C3%ADrez%201.png`,
    lines: ["Data Scientist", "Economista y Especialista en Investigación"],
  },
  {
    name: "Lic. Pedro Saravia",
    photo: `${IMG_BASE}/teams/Pedro%20Saravia%201.png`,
    lines: ["Data Analyst", "Economista y Especialista en Investigación Cuantitativa"],
  },
  {
    name: "Ing. Ricardo Crespín",
    photo: `${IMG_BASE}/teams/Ricardo%20Cresp%C3%ADn%201.png`,
    lines: ["Engineering Lead", "Ingeniero Industrial y Especialista en Logística"],
  },
  {
    name: "Licda. Rubidia Regalado",
    photo: `${IMG_BASE}/teams/Rubidia%20Regalado%201.png`,
    lines: ["Especialista Cualitativa", "Trabajadora Social e Investigación de Impacto"],
  },
];
