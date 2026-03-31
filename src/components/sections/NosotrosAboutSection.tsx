import { nosotrosAbout } from "@/data/nosotros-content";

const NosotrosAboutSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        {/* Section title with left border accent */}
        <div className="mb-12 border-l-4 border-primary pl-4">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            NOSOTROS
          </h2>
        </div>

        {/* Company description */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            {nosotrosAbout.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {nosotrosAbout.description}
          </p>
        </div>

        {/* Image carousel / gallery */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {nosotrosAbout.carouselImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`ERAK Consultores - imagen ${i + 1}`}
              className="h-48 w-full rounded object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosotrosAboutSection;
