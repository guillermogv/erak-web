import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Elemento decorativo de fondo - Sutil y profesional */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-20 z-0 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block px-3 py-1 mb-6 border border-slate-200 rounded-full animate-fade-in">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
              Consultoría Estratégica
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight text-slate-900 animate-fade-up">
            INVESTIGACIÓN SOCIAL, <br />
            <span className="text-red-700">DIAGNÓSTICO E IMPACTO.</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Impulsamos el desarrollo a través de procesos profundos de análisis y gestión de proyectos con estándares internacionales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {/* Botón vinculado a la página de Nosotros */}
            <a href="/nosotros" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full bg-red-700 hover:bg-red-800 text-white px-10 h-14 rounded-none font-bold tracking-wide transition-all duration-300 group shadow-lg shadow-red-900/10"
              >
                CONOCERLOS +
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            
            <a href="#servicios" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-slate-300 text-slate-700 px-10 h-14 rounded-none font-bold hover:bg-slate-50 transition-colors"
              >
                NUESTROS SERVICIOS
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll sutil */}
      <div className="absolute bottom-10 left-6 animate-bounce hidden md:block">
        <div className="w-px h-12 bg-slate-200 mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
