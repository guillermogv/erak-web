import MainLayout from "@/layouts/MainLayout";
import NosotrosHeroSection from "@/components/sections/NosotrosHeroSection";
import NosotrosAboutSection from "@/components/sections/NosotrosAboutSection";
import NosotrosTeamSection from "@/components/sections/NosotrosTeamSection";

const Nosotros = () => {
  return (
    <MainLayout>
      <NosotrosHeroSection />
      <NosotrosAboutSection />
      <NosotrosTeamSection />
    </MainLayout>
  );
};

export default Nosotros;
