import heroImg from "@/assets/hero-transport.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <img
        src={heroImg}
        alt="Flota de transporte en carretera"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block gradient-orange text-primary-foreground text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Transporte & Logística
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Movemos tu carga{" "}
            <span className="text-gradient">con seguridad</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Soluciones logísticas integrales con cobertura nacional.
            Rapidez, confianza y tecnología al servicio de tu negocio.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="gradient-orange text-primary-foreground px-8 py-3 rounded-md font-semibold text-base hover:opacity-90 transition"
            >
              Solicitar Cotización
            </a>
            <a
              href="#servicios"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-md font-semibold text-base hover:bg-primary-foreground/10 transition"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
