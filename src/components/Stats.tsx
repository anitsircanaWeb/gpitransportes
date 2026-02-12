const stats = [
  { value: "15+", label: "Años de Experiencia" },
  { value: "200+", label: "Empresas Atendidas" },
  { value: "50+", label: "Camionetas en Flota" },
  { value: "99%", label: "Puntualidad" },
];

const Stats = () => {
  return (
    <section id="nosotros" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Sobre Nosotros</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-secondary-foreground">
            Expertos en transporte de personal
          </h2>
          <p className="text-secondary-foreground/70 mt-4 max-w-xl mx-auto">
            Con más de una década trasladando equipos de trabajo, somos tu socio confiable en movilidad corporativa.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center animate-count-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">{s.value}</div>
              <p className="text-secondary-foreground/70 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
