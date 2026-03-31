/**
 * Centralized site content — ERAK Consultores
 * Versión Híbrida: Servicios (Local) + Clientes (Internet)
 */

// 1. Configuración de Rutas
const IMG_LOCAL = ""; // Fotos en la raíz de la carpeta 'public'
const IMG_REMOTE = "https://erakconsultores.com/erak/public/assets/img";
const ASSETS_BASE = "/assets";

// 2. Interfaces
export interface NavItem { label: string; href: string; }
export interface ServiceItem { id: string; title: string; slug: string; image: string; }
export interface StatItem { icon: string; value: string; label: string; }
export interface ClientItem { name: string; logo: string; }
export interface SocialLink { platform: string; url: string; icon: string; }
export interface CourseItem { id: string; title: string; description: string; image: string; }

// 3. Navegación
export const navigation: NavItem[] = [
  { label: "INICIO", href: "/" },
  { label: "ÁREAS", href: "/areas" },
  { label: "NOSOTROS", href: "/nosotros" },
  { label: "CLIENTES", href: "/clientes" },
  { label: "CAPACITA", href: "/formacion" },
  { label: "E-LEARNING", href: "/e-learning" },
  { label: "CONTÁCTANOS", href: "/contacto" },
];

// 4. SERVICIOS (Usando archivos en 'public')
export const services: ServiceItem[] = [
  { id: "consultoria", title: "Capacitación y Consultoría Empresarial", slug: "consultoria", image: `${IMG_LOCAL}/consultoria.png` },
  { id: "captura", title: "Captura masiva de datos", slug: "captura-de-datos", image: `${IMG_LOCAL}/captura.png` },
  { id: "lineas", title: "Líneas Base y Evaluaciones", slug: "lineas-de-bases-y-evaluaciones", image: `${IMG_LOCAL}/linea.png` },
  { id: "opinion", title: "Estudios y Opinión Pública", slug: "estudios-y-opinion-publica", image: `${IMG_LOCAL}/opinion.png` },
  { id: "investigacion", title: "Investigación social y educativa", slug: "investigacion-social-y-educativa", image: `${IMG_LOCAL}/investigacion.png` },
];

// 5. CLIENTES (Rutas corregidas para logotipos remotos)
export const clients: ClientItem[] = [
  { name: "Terra Nouva", logo: `${IMG_REMOTE}/clients/Terra%20Nouva.png` },
  { name: "TSE", logo: `${IMG_REMOTE}/clients/tse.png` },
  { name: "UNICEF", logo: `${IMG_REMOTE}/clients/unicef.png` },
  { name: "USAID", logo: `${IMG_REMOTE}/clients/usaid.png` },
  { name: "WORLD VISION", logo: `${IMG_REMOTE}/clients/Visi%C3%B3n%20Mundial.png` },
  { name: "BID", logo: `${IMG_REMOTE}/clients/BID.jfif` },
  { name: "CORSATUR", logo: `${IMG_REMOTE}/clients/CORSATUR.jfif` },
  { name: "FEDISAL", logo: `${IMG_REMOTE}/clients/FEDISAL.jfif` },
  { name: "Centroamerica Diversa", logo: `${IMG_REMOTE}/clients/Centroamerica%20Diversa.jpeg` },
  { name: "Banco Mundial", logo: `${IMG_REMOTE}/clients/Banco%20mundial.jpg` },
  { name: "FHI360", logo: `${IMG_REMOTE}/clients/FHI360.jpg` },
  { name: "FOSALUD", logo: `${IMG_REMOTE}/clients/fosalud.jpg` },
  { name: "FUNDE", logo: `${IMG_REMOTE}/clients/funde.jpg` },
  { name: "INDRA SISTEMAS", logo: `${IMG_REMOTE}/clients/INDRA%20SISTEMAS.jpg` },
  { name: "INSAFORP", logo: `${IMG_REMOTE}/clients/Insaforp-Logo.jpg` },
  { name: "ISNA", logo: `${IMG_REMOTE}/clients/isna.jpg` },
  { name: "LWR", logo: `${IMG_REMOTE}/clients/LWR.jpg` },
  { name: "OIM", logo: `${IMG_REMOTE}/clients/oim.jpg` },
  { name: "PATH", logo: `${IMG_REMOTE}/clients/path.jpg` },
  { name: "SAVE THE CHILDREN", logo: `${IMG_REMOTE}/clients/SAVE%20THE%20CHILDREN.jpg` },
  { name: "SICA", logo: `${IMG_REMOTE}/clients/sica.jpg` },
  { name: "Smartmatic", logo: `${IMG_REMOTE}/clients/smarmatic.jpg` },
  { name: "TELCOR", logo: `${IMG_REMOTE}/clients/TELCOR.jpg` },
  { name: "Chemonics", logo: `${IMG_REMOTE}/clients/chemonics-2.png` },
  { name: "Children Believe", logo: `${IMG_REMOTE}/clients/children-believe-logo-full-colour.png` },
  { name: "COMCAVIS", logo: `${IMG_REMOTE}/clients/COMCAVIS.png` },
  { name: "CONEUPA", logo: `${IMG_REMOTE}/clients/CONEUPA.png` },
  { name: "CONNA", logo: `${IMG_REMOTE}/clients/conna.png` },
  { name: "CREATIVE", logo: `${IMG_REMOTE}/clients/CREATIVE.png` },
  { name: "EDUCO", logo: `${IMG_REMOTE}/clients/educo.png` },
  { name: "FIU", logo: `${IMG_REMOTE}/clients/fiu.png` },
  { name: "FUSALMO", logo: `${IMG_REMOTE}/clients/FUSALMO.png` },
  { name: "ITCHA", logo: `${IMG_REMOTE}/clients/itcha.png` },
  { name: "MCDI", logo: `${IMG_REMOTE}/clients/MCDI.png` },
  { name: "MINEDUCYT", logo: `${IMG_REMOTE}/clients/MINEDUCYT.png` },
  { name: "Ministerio de justicia", logo: `${IMG_REMOTE}/clients/Ministerio%20de%20justicia.png` },
  { name: "Ministerio de trabajo", logo: `${IMG_REMOTE}/clients/Ministerio%20de%20trabajo.png` },
  { name: "OEA", logo: `${IMG_REMOTE}/clients/oea.png` },
  { name: "OXFAM", logo: `${IMG_REMOTE}/clients/oxfam.png` },
  { name: "Palladium", logo: `${IMG_REMOTE}/clients/Palladium.png` },
  { name: "PLAN Internacional", logo: `${IMG_REMOTE}/clients/Plan%20Internacional.png` },
  { name: "PNUD", logo: `${IMG_REMOTE}/clients/PNUD.png` },
];

// 6. Otros Datos (Estadísticas y Cursos Detallados)
export const stats: StatItem[] = [
  { icon: "clientes", value: "+35", label: "CLIENTES" },
  { icon: "proyectos", value: "+60", label: "PROYECTOS REALIZADOS" },
  { icon: "experiencia", value: "+20", label: "AÑOS DE EXPERIENCIA" },
  { icon: "paises", value: "+5", label: "PAÍSES" },
  { icon: "expertos", value: "+20", label: "EXPERTOS" },
  { icon: "cursos", value: "+10", label: "CURSOS IMPARTIDOS" },
];

export const socialLinks: SocialLink[] = [
  { platform: "Facebook", url: "https://www.facebook.com/ErakSV/", icon: "Facebook" },
  { platform: "Twitter", url: "https://twitter.com/ErakConsultores", icon: "Twitter" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/erak-consultores-250962136", icon: "Linkedin" },
  { platform: "WhatsApp", url: "https://wa.me/+50322560155", icon: "MessageCircle" },
];

export const courses: CourseItem[] = [
  { 
    id: "spss-modeler", 
    title: "SPSS Modeler", 
    description: "Especialización en minería de datos y modelado predictivo avanzado para identificar patrones, anticipar tendencias y optimizar la toma de decisiones estratégicas mediante algoritmos de vanguardia.", 
    image: `${IMG_REMOTE}/courses/1%20-%20SPSS%20Modeler.jpg` 
  },
  { 
    id: "spss-estadistica", 
    title: "SPSS Estadística", 
    description: "Dominio integral del análisis estadístico descriptivo e inferencial aplicado a la investigación social y de mercados, garantizando la rigurosidad técnica en el manejo de grandes volúmenes de información.", 
    image: `${IMG_REMOTE}/courses/2%20-%20SPSS.jpg` 
  },
  { 
    id: "logistica", 
    title: "Logística y gestión estratégica de compras", 
    description: "Optimización de la cadena de suministro y procesos de adquisición pública y privada, enfocada en la eficiencia operativa, reducción de costos y transparencia en la gestión de recursos.", 
    image: `${IMG_REMOTE}/courses/3%20-%20Logistica%20y%20gestion%20estrategica%20de%20compras.jpg` 
  },
  { 
    id: "marketing", 
    title: "Dirección de Marketing", 
    description: "Desarrollo de estrategias de posicionamiento, branding moderno y análisis del comportamiento del consumidor para fortalecer la identidad institucional y la competitividad en mercados globales.", 
    image: `${IMG_REMOTE}/courses/4%20-%20Especializacion%20en%20Direccion%20de%20Marketing.jpg` 
  },
  { 
    id: "inteligencia-emocional", 
    title: "Inteligencia Emocional aplicada a la empresa", 
    description: "Fortalecimiento del liderazgo, la resiliencia y la gestión de equipos de alto rendimiento, promoviendo una cultura organizacional saludable y orientada al cumplimiento de objetivos.", 
    image: `${IMG_REMOTE}/courses/5%20-%20Inteligencia%20Emocional%20aplicada%20a%20la%20empresa.jpg` 
  },
  { 
    id: "nvivo", 
    title: "Nvivo", 
    description: "Capacitación avanzada en el análisis de datos cualitativos, facilitando la codificación y síntesis de información compleja proveniente de entrevistas, grupos focales y documentos bibliográficos.", 
    image: `${IMG_REMOTE}/courses/6%20-%20Nvivo.jpg` 
  },
  { 
    id: "backtesting", 
    title: "Pruebas de Backtesting", 
    description: "Evaluación y validación de modelos de riesgo de crédito y liquidez mediante simulaciones históricas, asegurando la estabilidad financiera y el cumplimiento de normativas internacionales.", 
    image: `${IMG_REMOTE}/courses/7%20-%20Pruebas%20de%20Backtesting.jpg` 
  },
];

// 7. Información Corporativa Detallada
export const companyInfo = {
  name: "ERAK CONSULTORES",
  tagline: "INVESTIGACIÓN SOCIAL, ESTUDIOS DE MERCADO, EVALUACIONES Y ESTUDIOS",
  heroDescription: "Proporcionamos servicios de investigación científica y consultoría de alto nivel para organismos internacionales, instituciones públicas y sector privado, transformando datos en decisiones estratégicas con impacto social.",
  about: "ERAK Consultores es una firma consultora con más de 20 años de experiencia acumulada en el diseño, ejecución y evaluación de proyectos de desarrollo en Centroamérica. Nos especializamos en la generación de evidencia técnica para la toma de decisiones institucionales.",
  mission: "Contribuir a la mejora continua de las organizaciones mediante la provisión de servicios de consultoría e investigación de alta calidad, basados en metodologías rigurosas y un profundo compromiso ético con el desarrollo social.",
  vision: "Ser una consultora líder en el desarrollo de proyectos de investigación y evaluación a nivel regional, reconocida por nuestra excelencia técnica, innovación tecnológica y capacidad de generar soluciones sostenibles para nuestros clientes.",
  clientsIntro: "A lo largo de su historia, ERAK Consultores ha trabajado con una amplia gama de organizaciones que confían en nuestra capacidad técnica y profesionalismo para alcanzar sus objetivos institucionales.",
  coursesIntro: "Disponemos de cursos especializados diseñados para fortalecer las capacidades técnicas de profesionales en áreas de estadística, investigación y gestión estratégica.",
  portfolioUrl: `${ASSETS_BASE}/Portafolio_Erak_Consultores.pdf`,
  brochureUrl: `${ASSETS_BASE}/Brochure_ERAK_CONSULTORES.pdf`,
  logoUrl: `${IMG_REMOTE}/numbers.png`,
};

export const contactInfo = {
  address: "Alameda Manuel Enrique Araujo, Centro Comercial Feria Rosa, Edificio C Locales 207-208, San Salvador",
  hours: {
    weekdays: "Lunes a Viernes: 8:00 am - 5:00 pm",
    saturday: "Sábado: 8:00 am - 12:00 pm",
  },
  phones: ["(503) 2256-0155", "(503) 7797-5563", "(503) 7939-2464"],
  emails: ["info@erakconsultores.com", "capacita@erakconsultores.com", "ecrespin@erakconsultores.com"],
};

export const clientCategories = [
  "Organismos internacionales.", "Instituciones públicas.", "Sector educativo.", 
  "Sector salud.", "Bancos e instituciones financieras.", 
  "Organizaciones no gubernamentales nacionales.", "Otros.",
];

export const courseSelectOptions = [
  "SPSS Modeler", "SPSS", "SPSS AMOS", "Nvivo", "Survey ToGo", 
  "Inteligencia Emocional", "Marketing", "Logística", "Backtesting",
];
