import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CoursesSection from "@/components/sections/CoursesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <ClientsSection />
      <CoursesSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
