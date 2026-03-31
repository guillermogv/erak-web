import { courses, companyInfo } from "@/data/site-content";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import { 
  BarChart3, 
  ShoppingCart, 
  ShieldCheck, 
  Database, 
  BrainCircuit, 
  PieChart, 
  Search, 
  Smartphone,
  TrendingUp,
  LineChart,
  ArrowUpRight
} from "lucide-react";

const getCourseIcon = (id: string) => {
  switch (id) {
    case 'logistica': return <ShoppingCart size={22} />;
    case 'backtesting-credito': return <ShieldCheck size={22} />;
    case 'backtesting-liquidez': return <LineChart size={22} />;
    case 'spss-modeler': return <Database size={22} />;
    case 'spss': return <BarChart3 size={22} />;
    case 'spss-amos': return <PieChart size={22} />;
    case 'nvivo': return <Search size={22} />;
    case 'survey-togo': return <Smartphone size={22} />;
    case 'inteligencia-emocional': return <BrainCircuit size={22} />;
    case 'marketing': return <TrendingUp size={22} />;
    default: return <BarChart3 size={22} />;
  }
};

const CoursesSection = () => {
  return (
    <Section id="formacion" className="bg-[#f4f7f9] py-24 border-t border-slate-200">
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-red-700"></div>
            <span className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase">
              Especialización Profesional
            </span>
          </div>
          
          <SectionHeading 
            title="Formación Continua" 
            className="text-slate-900 font-black tracking-tighter text-4xl mb-6" 
          />

          <p className="text-lg leading-relaxed text-slate-600 font-light border-l-2 border-slate-300 pl-6">
            {companyInfo.coursesIntro}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="group relative flex flex-col justify-between bg-white p-8 h-[360px] border border-slate-100 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              <div>
                <div className="mb-8 flex justify-between items-start">
                  {/* Caja Roja con Icono Gris */}
                  <div className="p-4 bg-red-700 text-slate-300 shadow-lg shadow-red-900/10 transition-transform duration-500 group-hover:scale-110">
                    {getCourseIcon(course.id)}
                  </div>
                  <ArrowUpRight className="text-slate-300 group-hover:text-red-700 transition-colors" size={20} />
                </div>

                <h3 className="text-xl font-bold leading-tight tracking-tight text-slate-900 mb-3">
                  {course.title}
                </h3>
                
                <div className="h-1 w-12 bg-red-700 transition-all duration-500 group-hover:w-20" />
              </div>

              <p className="text-sm leading-relaxed text-slate-500 font-normal line-clamp-4">
                {course.description}
              </p>
              
              {/* Se eliminó la marca de agua decorativa que contenía letras */}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CoursesSection;
