import { clients, clientCategories, companyInfo } from "@/data/site-content";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

const ClientsSection = () => {
  return (
    <Section id="clientes" className="bg-slate-50 py-24">
      <div className="mb-2 text-xs font-bold tracking-[0.2em] text-red-700 uppercase">
        Nuestra trayectoria
      </div>

      <SectionHeading title="Nuestros clientes" className="text-slate-900" />

      <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-700">
        {companyInfo.clientsIntro}
      </p>

      <ul className="mb-12 flex flex-wrap gap-x-6 gap-y-2 border-b border-slate-200 pb-8">
        {clientCategories.map((cat) => (
          <li key={cat} className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            • {cat}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap justify-center gap-8">
        {clients.map((client) => (
          <div
            key={client.name}
            className="group flex h-32 w-32 items-center justify-center rounded-full bg-white p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md hover:scale-105"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-full w-auto object-contain grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ClientsSection;
