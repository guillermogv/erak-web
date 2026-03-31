import { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import AreasContentSection from "@/components/sections/AreasContentSection";

const Areas = () => {
  // 1. Forzamos el scroll al inicio (Indispensable para UX)
  useEffect(() => {
    window.scrollTo(0, 0);
    // Log de control para que veas en la consola que la página cargó
    console.log("Página de Áreas cargada correctamente.");
  }, []);

  return (
    <MainLayout>
      {/* 2. Contenedor principal sin bloqueos de estado */}
      <main className="bg-[#0f172a] min-h-screen pt-32 pb-20">
        
        {/* Cabecera de Impacto - Estilo Silicon Valley / Consulting */}
        <div className="max-w-7xl mx-auto px-6 mb-16 relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-700/10 rounded-full blur-3xl z-0" />
          
          <div className="relative z-10">
            <span className="text-red-600 font-black tracking-[0.4em] text-[10px] uppercase">
              Estrategia y Evidencia
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none mt-4">
              NUESTRAS <br />
              <span className="text-red-700">ÁREAS</span>
            </h1>
            <p className="mt-8 text-slate-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed border-l border-white/20 pl-8">
              Transformamos datos complejos en decisiones estratégicas. Nuestra metodología combina rigor científico con visión empresarial para organismos globales.
            </p>
          </div>
        </div>

        {/* 3. Inserción de la sección de contenido que ya revisamos */}
        <div className="relative z-10">
          <AreasContentSection />
        </div>

      </main>
    </MainLayout>
  );
};

export default Areas;
