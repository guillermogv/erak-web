import { nosotrosHero } from "@/data/nosotros-content";

// --- COMPONENTE NOSOTROS HERO: ELEVACIÓN CORPORATIVA ---
const NosotrosHeroSection = () => {
  return (
    <section className="relative min-h-[65vh] flex items-center bg-slate-950 overflow-hidden">
      {/* Capa de imagen de fondo con tratamiento premium y efecto Studio */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ 
          // Recomiendo encarecidamente cambiar la URL en nosotrosHeroData.ts por una de arquitectura o análisis.
          // Mientras tanto, forzamos un filtro 'Studio' con escala de grises y opacidad para seriedad.
          backgroundImage: `url(${nosotrosHero.backgroundImage})`,
          filter: 'grayscale(100%) brightness(0.7)' // Forzamos seriedad y contraste
        }}
      />
      
      {/* Overlay de degradado lateral profesional (Oscuro a Azul Profundo) para legibilidad nítida */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/30" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor forzado a la izquierda: Adiós al diseño centrado */}
        <div className="flex flex-col items-start text-left max-w-4xl">
          
          {/* Tagline superior editorial (Kicker) con acento azul */}
          <div className="flex items-center space-x-4 mb-10 animate-fade-in">
            <span className="h-[2px] w-12 bg-blue-600"></span>
            <span className="text-[11px] font-black tracking-[0.6em] text-blue-500 uppercase">
              Rigor Metodológico y Evidencia Técnica
            </span>
          </div>

          {/* Título Dominante: Nítido, Grande y con Peso (font-black) para autoridad */}
          <h1 className="text-6xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-12 animate-fade-in-up">
            {nosotrosHero.title}
          </h1>

          {/* Detalle visual de cierre (Línea de acento nítida) */}
          <div className="w-24 h-1.5 bg-blue-600 rounded-full shadow-lg shadow-blue-500/20"></div>
          
          {/* Tagline inferior implícito para dar contexto corporativo */}
          <p className="mt-8 text-blue-100/60 text-[10px] font-bold tracking-[0.4em] uppercase">
            Rigor Metodológico • 20 Años de Experiencia
          </p>
        </div>
      </div>
    </section>
  );
};

export default NosotrosHeroSection;
