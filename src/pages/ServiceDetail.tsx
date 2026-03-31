import { useParams } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Section from "@/components/common/Section";
import { services } from "@/data/site-content";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <MainLayout>
        <Section>
          <p className="text-muted-foreground">Servicio no encontrado.</p>
        </Section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Section>
        <h1 className="text-3xl font-bold text-foreground">{service.title}</h1>
        <p className="mt-4 text-muted-foreground">
          Contenido del servicio próximamente.
        </p>
      </Section>
    </MainLayout>
  );
};

export default ServiceDetail;
