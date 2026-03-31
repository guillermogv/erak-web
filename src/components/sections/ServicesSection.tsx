import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site-content";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

const ServicesSection = () => {
  return (
    <Section id="servicios" className="bg-[#fcfcfc] py-24 border-b border-slate-100">
      <div className="mb-4 text-xs font-bold tracking-[0.25em] text-red-700 uppercase font-sans">
        Propuesta de Valor
      </div>
      
      <SectionHeading title="SERVICIOS" className="text-slate-900 font-extrabold tracking-tight" />

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/servicios/${service.slug}`}
            className="group relative flex flex-col overflow-hidden bg-white rounded-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100"
          >
            {/* Imagen con Overlay Técnico */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <div className="absolute inset-0 z-10 bg-slate-900/5 transition-opacity duration-500 group-hover:opacity-0" />
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Contenido con Tipografía Curada */}
            <div className="flex flex-col p-8 bg-white">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight font-['Open_Sans',sans-serif]">
                {service.title}
              </h3>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium italic text-slate-500 font-serif">
                  Consultoría Especializada
                </span>
                
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 transition-all duration-300 group-hover:bg-red-50">
                  <ArrowRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-700" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;
