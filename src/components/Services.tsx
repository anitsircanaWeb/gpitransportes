import { Truck, Package, Clock, ShieldCheck, MapPin, BarChart3 } from "lucide-react";

const services = [
  { icon: Truck, title: "Carga Completa", desc: "Transporte dedicado para cargas completas con seguimiento en tiempo real." },
  { icon: Package, title: "Paquetería", desc: "Envíos de paquetería con tiempos de entrega garantizados." },
  { icon: Clock, title: "Entregas Express", desc: "Servicio urgente con entregas en el mismo día o al siguiente." },
  { icon: ShieldCheck, title: "Carga Asegurada", desc: "Cobertura total de seguro para proteger tu mercancía." },
  { icon: MapPin, title: "Cobertura Nacional", desc: "Red de distribución a lo largo de todo el país." },
  { icon: BarChart3, title: "Logística Integral", desc: "Gestión completa de almacenaje, inventario y distribución." },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Servicios</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-foreground">
            Soluciones de transporte a tu medida
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Ofrecemos una amplia gama de servicios logísticos diseñados para satisfacer las necesidades de tu empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-card rounded-lg p-6 border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-md gradient-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
