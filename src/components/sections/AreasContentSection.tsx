import { services } from "@/data/site-content";
import Section from "@/components/common/Section";
import { BarChart3, Users, Target, Database, GraduationCap } from "lucide-react";

const icons: Record<string, any> = {
  consultoria: GraduationCap,
  captura: Database,
  lineas: Target,
  opinion: Users,
  investigacion: BarChart3,
};

const AreasContentSection = () => {
  return (
    // CAMBIO: He quitado el id="servicios" para evitar conflictos de anclaje
    <Section className="bg-[#0f172a] py-24 relative overflow-hidden">
      
      {/* Elementos decorativos de fondo coherentes con el estilo HERO de ERAK */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-900/10 skew-x-12 transform translate-x-20 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-900/5 -skew-x-12 transform -translate-x-32 z-0 pointer-events-none" />

      <div className="relative z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((area) => {
          const Icon = icons[area.id] || Target;
          
          const descriptions: Record<string, string> = {
            consultoria: "Servicios diseñados para fortalecer las capacidades técnicas de profesionales en áreas de estadística, investigación y gestión estratégica, alineados a los estándares de organismos internacionales.",
            captura: "Procesamiento riguroso de grandes volúmenes de información utilizando tecnología de vanguardia para garantizar la precisión técnica requerida por las instituciones públicas y el sector privado.",
            lineas: "Generación de evidencia técnica para la toma de decisiones institucionales y la medición del impacto social, con un enfoque metodológico riguroso y un profundo compromiso ético.",
            opinion: "Análisis científico de las percepciones y tendencias sociales para organismos multinacionales, transformando datos en conocimiento estratégico que facilita la comprensión del entorno.",
            investigacion: "Estudios profundos dirigidos a comprender dinámicas sociales y educativas complejas, proporcionando soluciones sostenibles y basadas en la evidencia para nuestros clientes regionales."
          };

          return (
            <div 
              key={area.id}
              className="group relative p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl hover:bg-white/10 transition-all duration-500 flex flex-col h-full"
            >
              {/* Icono con contenedor premium */}
              <div className="mb-8 inline-flex p-4 rounded-xl bg-red-700 text-white shadow-xl group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300 w-fit">
                <Icon size={32} strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-extrabold tracking-tighter text-white mb-5 uppercase font-sans leading-tight group-hover:text-red-500 transition-colors duration-300">
                {area.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-slate-300 font-light flex-grow">
                {descriptions[area.id] || "Servicios especializados de alta precisión técnica para el sector público y organismos internacionales."}
              </p>

              <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-red-600 opacity-70 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black tracking-[0.2em] uppercase">Especialidad Técnica</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
              
              {/* Línea de acento inferior animada */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-700 group-hover:w-full transition-all duration-700" />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default AreasContentSection;
