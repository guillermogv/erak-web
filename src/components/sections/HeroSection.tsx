import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative w-full bg-[#1a2333]">
      {/* EFECTO DE DESPLAZAMIENTO SUAVE:
          Este contenedor usa 'sticky' y una máscara de desvanecimiento dinámica.
          Al bajar, el contenido parece disolverse en el aire.
      */}
      <div 
        className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden"
        style={{
          perspective: "1000px",
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 95%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 95%)',
        }}
      >
        {/* Background Decor Animado */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-red-900/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10 flex-grow flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">Research & Consulting</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Potenciamos el <span className="text-red-700">Futuro</span> de la Investigación con <span className="italic font-light text-slate-400">Inteligencia Estratégica.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-light">
              En ERAK, fusionamos consultorías de alto nivel con tecnología de vanguardia para diseñar ecosistemas de análisis cuanti-cualitativo que impulsan la gestión basada en evidencias.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white px-8 h-14 rounded-none font-bold tracking-wide transition-all duration-300 group">
                CONOCERLOS +
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-gray hover:bg-gray/5 px-8 h-14 rounded-none font-bold tracking-wide backdrop-blur-sm">
                <Play className="mr-2 h-4 w-4 fill-current" />
                VER PORTAFOLIO
              </Button>
            </div>
          </div>
        </div>

        {/* Marquee en Movimiento con Desvanecimiento Lateral */}
        <div className="w-full relative z-20 pb-12 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1a2333] to-transparent z-30" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1a2333] to-transparent z-30" />
          
          <div className="flex whitespace-nowrap animate-marquee-infinite border-y border-white/5 py-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center">
                <span className="mx-16 text-[10px] font-bold tracking-[0.6em] text-white/20 uppercase">ESTRATEGIA</span>
                <div className="h-1 w-1 rounded-full bg-red-800/50"></div>
                <span className="mx-16 text-[10px] font-bold tracking-[0.6em] text-white/20 uppercase">INTELIGENCIA</span>
                <div className="h-1 w-1 rounded-full bg-red-800/50"></div>
                <span className="mx-16 text-[10px] font-bold tracking-[0.6em] text-white/20 uppercase">RESULTADOS</span>
                <div className="h-1 w-1 rounded-full bg-red-800/50"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          animation: marquee-infinite 50s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Hero;
