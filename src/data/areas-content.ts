/**
 * Content for the Areas page — faithful replica of https://erakconsultores.com/erak/public/areas
 */

const IMG_BASE = "https://erakconsultores.com/erak/public/assets/img";

export interface AreaItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tagline: string;
}

export const areasHero = {
  title: "ÁREAS DE INVESTIGACIÓN",
  backgroundImage: `${IMG_BASE}/areas.jpg`,
};

export const areas: AreaItem[] = [
  {
    id: "lineas-base",
    title: "Área de Líneas Base y Evaluaciones",
    description:
      "Nuestros consultores son especialistas en levantamiento de líneas base, evaluaciones intermedias y evaluaciones de impacto, aplicando modelos estadísticos para que nuestros clientes tomen las mejores decisiones en la implementación de programas sociales en general.",
    icon: `${IMG_BASE}/area%20de%20consultoria-01.svg`,
    tagline:
      "Contamos con un equipo de profesionales en las áreas de economía, sociología, ingeniería, matemática, estadística y otras ciencias aplicadas.",
  },
  {
    id: "captura-datos",
    title: "Captura masiva de datos",
    description:
      "En el área de captura masiva de datos, disponemos de un staff de digitadores, encuestadores y operadores técnicos con vasta experiencia, para el levantamiento de altos volúmenes de datos utilizando dispositivos móviles (tabletas), diseño de bases de datos y proyectos de procesamiento de datos de manera general. Desarrollamos además procesos de Big Data y Minería de Datos (Datamining).",
    icon: `${IMG_BASE}/area%20de%20captura%20de%20datos-02.svg`,
    tagline:
      "Contamos con un equipo de profesionales en las aréas de economía, sociología, ingeniería, matemática, estadísticas y otras...",
  },
  {
    id: "opinion-publica",
    title: "Área de opinión pública e investigación de mercado",
    description:
      "En el área de la investigación de la opinión pública e investigación de mercados, contamos con un staff de profesionales que aplican herramientas científicas para obtener información que sirva para la toma de decisiones oportunas a las empresas. Nuestro equipo de trabajo utiliza herramientas científicas, combina análisis cuantitativo y cualitativo, utiliza modelos estadísticos para segmentar mercados, y conocer la forma de pensar y sentir del cliente, el grado de asociación o proximidad respecto a la competencia; hacemos además análisis multivariante de datos que auscultan el posicionamiento de la marca.",
    icon: `${IMG_BASE}/area%20de%20opini%C3%B3n%20publica%20y%20mercado-03.svg`,
    tagline:
      "Realizamos estudios e investigación de opinión pública basados en potentes modelos estadísticos multivariados.",
  },
  {
    id: "capacitaciones",
    title: "Área de capacitaciones técnicas",
    description:
      'Capacitamos a profesionales para fortalecer sus competencias en análisis estadístico, investigación científica, económica y social, Monitoreo y Evaluación (M&E) a través de su Centro de Excelencia "CAPACITA".',
    icon: `${IMG_BASE}/area%20de%20capacitaciones%20tecnicas-04.svg`,
    tagline:
      "Ofrecemos capacitaciones y fortalecimiento de capacidades en procesos, herramientas, y softwares, tales como: SPSS, STATA y Nvivo.",
  },
  {
    id: "consultoria-empresarial",
    title: "Área de consultoría empresarial",
    description:
      "En el área de consultoría, nos especializamos en investigación social, contamos con expertos en el área de levantamiento de líneas base, evaluaciones de desempeño, impacto y estudios especializados; Evaluación y diagnósticos de programas sociales, análisis de costo-beneficio.",
    icon: `${IMG_BASE}/area%20de%20opini%C3%B3n%20publica%20y%20mercado-03.svg`,
    tagline: "",
  },
];
