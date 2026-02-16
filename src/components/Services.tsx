import { Bus, Users, Clock, ShieldCheck, MapPin, CalendarCheck, Palmtree, Plane } from "lucide-react";

const services = [
  { icon: Bus, title: "Rutas Empresariales", desc: "Diseñamos rutas personalizadas para el traslado diario de tu personal desde y hacia tu empresa." },
  { icon: Users, title: "Transporte Ejecutivo", desc: "Camionetas equipadas con aire acondicionado y asientos cómodos para viajes corporativos." },
  { icon: Clock, title: "Puntualidad Garantizada", desc: "Cumplimos con los horarios establecidos para que tu operación nunca se detenga." },
  { icon: ShieldCheck, title: "Seguridad Total", desc: "Unidades con GPS, seguro de pasajeros y conductores capacitados y certificados." },
  { icon: MapPin, title: "Cobertura Metropolitana", desc: "Servicio en toda la zona metropolitana y rutas interurbanas cercanas." },
  { icon: CalendarCheck, title: "Servicio Programado", desc: "Contratos mensuales con horarios fijos o servicio especial por evento." },
  { icon: Palmtree, title: "Paquetes Turísticos Personalizados", desc: "Organizamos viajes turísticos a la medida con transporte cómodo y seguro para grupos." },
  { icon: Plane, title: "Traslados al Aeropuerto", desc: "Servicio de transporte puntual y confiable desde y hacia el aeropuerto para tu equipo o ejecutivos." },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Servicios</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-foreground">
            Transporte de personal confiable
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Camionetas modernas y equipadas para trasladar a tu equipo de trabajo con comodidad y seguridad.
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
