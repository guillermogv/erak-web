import { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import AreasContentSection from "@/components/sections/AreasContentSection";

const Areas = () => {
  // 1. Control de scroll y carga
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Sección ÁREAS: Identidad visual ERAK aplicada.");
  }, []);

  return (
    <MainLayout>
      {/* 2. Contenedor Principal con el Azul Deep Navy corporativo #29334e */}
      <main className="bg-[#29334e] min-h-screen pt-32 pb-20 overflow-hidden">
        
        {/* Cabecera de Impacto - Estilo Consultoría de Élite */}
        <div className="max-w-7xl mx-auto px-6 mb-20 relative">
          
          {/* Elemento decorativo sutil en Rojo ERAK #a61e2d con baja opacidad */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#a61e2d]/10 rounded-full blur-[120px] z-0" />
          
          <div className="relative z-10">
            {/* Subtítulo en Parmigiano (Serif) con opacidad para jerarquía */}
            <span className="text-[#a61e2d] font-medium tracking-[0.3em] text-xs uppercase mb-6 block" style={{ fontFamily: 'Parmigiano, serif', opacity: 0.9 }}>
              Rigor Metodológico e Inteligencia Estratégica
            </span>
            
            {/* Título Principal en Open Sans (Bold) con tracking reducido */}
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-[0.9] mt-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              NUESTRAS <br />
              <span className="text-[#a61e2d]">ÁREAS</span>
            </h1>
            
            {/* Párrafo descriptivo con Inter Regular y borde sutil para elegancia */}
            <p className="mt-10 text-white/80 text-lg md:text-xl font-normal max-w-2xl leading-relaxed border-l-2 border-[#a61e2d] pl-8" style={{ fontFamily: "'Inter', sans-serif" }}>
              Transformamos la complejidad de los datos en decisiones estratégicas de alto impacto. 
              Nuestras áreas de especialización fusionan el análisis técnico con una visión 
              global para organismos internacionales y el sector público.
            </p>
          </div>
        </div>

        {/* 3. Inserción de la sección de contenido detallado */}
        {/* Asegúrate de que AreasContentSection también use los mismos tokens de color */}
        <div className="relative z-10">
          <AreasContentSection />
        </div>

      </main>
    </MainLayout>
  );
};

export default Areas;
