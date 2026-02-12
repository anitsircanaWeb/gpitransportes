import { Lock, Timer, Gauge, Award, Scale, Headphones } from "lucide-react";

const values = [
  { icon: Lock, label: "Seguridad." },
  { icon: Timer, label: "Puntualidad." },
  { icon: Gauge, label: "Eficiencia." },
  { icon: Award, label: "Calidad." },
  { icon: Scale, label: "Responsabilidad." },
  { icon: Headphones, label: "Servicio al cliente." },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col items-center gap-3 text-center">
              <v.icon className="w-12 h-12 text-secondary-foreground" strokeWidth={1.5} />
              <p className="text-secondary-foreground font-medium text-sm">{v.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
