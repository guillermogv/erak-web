import { companyInfo } from "@/data/site-content";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import { Target, Eye } from "lucide-react"; // Importamos los isotipos para Misión y Visión

const AboutSection = () => {
  return (
    <Section id="nosotros" className="bg-gray-50 py-24 relative overflow-hidden">
      {/* Elemento decorativo sutil en rojo suave */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 skew-x-12 transform translate-x-20" />

      <div className="mb-4 text-xs font-bold tracking-[0.3em] text-red-700 uppercase font-sans">
        Excelencia Consultiva
      </div>
      
      <SectionHeading 
        title="Quiénes somos" 
        subtitle="Estudios y Opinión Pública" 
        className="text-slate-900" 
      />

      <div className="grid gap-12 mt-12 md:grid-cols-2 items-center">
        {/* RECUADRO CON CONTRASTE (Letra gris oscuro sobre fondo blanco) */}
        <div className="relative p-8 rounded-2xl bg-white border border-gray-200 shadow-xl">
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-red-700" />
          <p className="text-base leading-relaxed text-slate-800 md:text-lg font-normal">
            <strong className="text-slate-950 font-bold border-b-2 border-red-700/50 pb-1">
              ERAK Consultores
            </strong> 
            {" "}{companyInfo.about.replace("ERAK Consultores ", "")}
          </p>
        </div>

        <div className="space-y-10">
          {/* Bloque MISIÓN con Isotipo Rojo */}
          <div className="group relative pl-12 transition-all duration-300 hover:translate-x-2">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-700/20 group-hover:bg-red-700 transition-colors" />
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 bg-red-50 rounded-lg">
                <Target className="w-8 h-8 text-red-700" /> {/* Isotipo de Objetivo */}
              </div>
              <h3 className="text-xl font-extrabold tracking-tighter text-slate-900 uppercase font-sans">
                MISIÓN
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base font-medium italic">
              {companyInfo.mission}
            </p>
          </div>

          {/* Bloque VISIÓN con Isotipo Rojo */}
          <div className="group relative pl-12 transition-all duration-300 hover:translate-x-2">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-700/20 group-hover:bg-red-700 transition-colors" />
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 bg-red-50 rounded-lg">
                <Eye className="w-8 h-8 text-red-700" /> {/* Isotipo de Visión */}
              </div>
              <h3 className="text-xl font-extrabold tracking-tighter text-slate-900 uppercase font-sans">
                VISIÓN
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base font-medium italic">
              {companyInfo.vision}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
