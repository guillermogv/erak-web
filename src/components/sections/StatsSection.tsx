import { stats } from "@/data/site-content";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

const StatsSection = () => {
  return (
    <Section id="numeros" className="bg-slate-50 py-24">
      <SectionHeading title="Nuestros números hablan por sí solos" className="text-slate-900" />
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => (
          <div key={stat.label} className="group text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-red-100">
              <img
                src={`https://erakconsultores.com/erak/public/assets/img/icons/${stat.icon}.svg`}
                alt={stat.label}
                className="h-10 w-10 opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <p className="text-4xl font-extrabold tracking-tighter text-slate-900 md:text-5xl transition-colors duration-300 group-hover:text-red-700">
              {stat.value}
            </p>
            <div className="mx-auto mt-2 h-1 w-6 bg-red-600/20 rounded-full transition-all duration-500 group-hover:w-12 group-hover:bg-red-600" />
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 group-hover:text-slate-900">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default StatsSection;
