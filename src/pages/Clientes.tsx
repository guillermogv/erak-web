import { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import { clients, clientCategories, companyInfo } from "@/data/site-content";

const Clientes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-[#0f172a] pt-32 pb-20">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-red-700/10 rounded-full blur-3xl z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-red-600 font-black tracking-[0.4em] text-[10px] uppercase">
            Nuestra trayectoria
          </span>
          <h1 className="text-7xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none mt-4">
            NUESTROS <br />
            <span className="text-red-700">CLIENTES</span>
          </h1>
          <p className="mt-8 text-slate-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed border-l border-white/20 pl-8">
            Confianza técnica y compromiso con el desarrollo regional
          </p>
        </div>
      </section>

      {/* Intro + Grid */}
      <section className="bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl mb-16">
            A lo largo de su historia, ERAK Consultores ha trabajado para muchas organizaciones nacionales e internacionales, de gobierno, empresas privadas y otras organizaciones implementadoras de proyectos. A continuación, se muestran algunas instituciones a las cuales se les ha proporcionado servicios de consultoría.
          </p>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-6 h-32 transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="bg-[#0f172a] py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">
            Sectores que confían en nosotros
          </h2>
          <div className="flex flex-wrap gap-3">
            {clientCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-white/5 border border-white/10 px-5 py-2 text-xs font-semibold tracking-wide text-slate-300 uppercase"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Clientes;
