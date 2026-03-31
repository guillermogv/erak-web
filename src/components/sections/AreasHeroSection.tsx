import { areasHero } from "@/data/areas-content";

const AreasHeroSection = () => {
  return (
    <section
      className="relative flex min-h-[350px] items-center justify-center bg-cover bg-center md:min-h-[450px]"
      style={{ backgroundImage: `url('${areasHero.backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
};

export default AreasHeroSection;
