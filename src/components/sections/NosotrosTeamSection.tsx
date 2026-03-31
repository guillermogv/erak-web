import { consultoresSenior, equipoTecnico } from "@/data/nosotros-content";
import Section from "@/components/common/Section";

const MemberCard = ({ member, isSenior }: { member: any; isSenior?: boolean }) => {
  // Manejo de URL para evitar errores de carga
  const photoUrl = decodeURIComponent(member.photo);

  return (
    <div className="group relative flex flex-col items-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-red-700/50 hover:-translate-y-2">
      
      {/* Fotografía Estilo Executive Gallery */}
      <div className={`relative mb-8 rounded-full overflow-hidden border-2 shadow-2xl transition-all duration-500 ${isSenior ? 'w-48 h-48 border-red-700/30 group-hover:border-red-700' : 'w-36 h-36 border-slate-700/30 group-hover:border-slate-500'}`}>
        <img 
          src={photoUrl} 
          alt={member.name} 
          className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a]/50 to-transparent" />
      </div>

      {/* Identidad Visual Premium */}
      <div className="text-center w-full">
        <h3 className={`font-black text-white uppercase tracking-tighter mb-4 transition-colors ${isSenior ? 'text-2xl group-hover:text-red-500' : 'text-xl'}`}>
          {member.name}
        </h3>
        
        <div className="space-y-2">
          {member.lines.map((line: string, idx: number) => (
            <p key={idx} className={`${idx === 0 ? 'text-red-600 font-bold text-[10px] tracking-[0.2em]' : 'text-slate-400 text-sm font-light'} uppercase leading-tight`}>
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Detalle de Acento Inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-red-700 group-hover:w-1/3 transition-all duration-700 rounded-full" />
    </div>
  );
};

const NosotrosTeamSection = () => {
  return (
    <Section className="bg-[#0b0f1a] py-32 relative overflow-hidden">
      {/* Marca de agua decorativa */}
      <div className="absolute top-0 right-0 text-white/[0.01] font-black text-[22vw] leading-none pointer-events-none -translate-y-1/3 select-none">
        ERAK
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Sección Consultores Senior */}
        <div className="mb-32">
          <div className="flex flex-col mb-16">
            <span className="text-red-600 font-black tracking-[0.4em] text-xs mb-4">LIDERAZGO ESTRATÉGICO</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter border-l-8 border-red-700 pl-8">
              CONSULTORES <span className="text-red-700">SENIOR</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {consultoresSenior.map((m) => (
              <MemberCard key={m.name} member={m} isSenior />
            ))}
          </div>
        </div>

        {/* Sección Equipo Técnico */}
        <div>
          <div className="flex flex-col mb-16">
            <span className="text-slate-500 font-black tracking-[0.4em] text-xs mb-4">CUERPO TÉCNICO</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter border-l-8 border-slate-700 pl-8">
              EQUIPO <span className="text-slate-500/50">ESPECIALIZADO</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipoTecnico.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default NosotrosTeamSection;
