import { Trophy, MapPin, Users, Clock } from "lucide-react";

const matches = [
  { date: "Jueves 11 de junio", time: "8:00 PM", teams: "Corea del Sur vs Repechaje UEFA" },
  { date: "Miércoles 18 de junio", time: "7:00 PM", teams: "México vs Corea del Sur" },
  { date: "Martes 23 de junio", time: "8:00 PM", teams: "Colombia vs Repechaje Intercontinental" },
  { date: "Viernes 26 de junio", time: "6:00 PM", teams: "Uruguay vs España" },
];

const features = ["Traslado redondo al estadio", "Capacidad hasta 20 pasajeros", "Aire acondicionado", "Salida desde punto acordado", "Paradas intermedias incluidas", "Conductor bilingüe disponible"];

const WorldCup = () => {
  return (
    <section id="mundialistas" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 gradient-orange text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Trophy className="w-4 h-4" />
            Mundial 2026
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground">
            Traslados Mundialistas
          </h2>
          <p className="text-secondary-foreground/70 mt-4 max-w-2xl mx-auto">
            Llega a los partidos del Mundial 2026 en Guadalajara con comodidad y seguridad. Paquetes de transporte grupal a las sedes oficiales.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col">
            <div className="gradient-orange p-6 text-primary-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold text-lg">Traslado a Estadio Akron</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-semibold text-secondary-foreground mb-4">Partidos en Guadalajara</h3>
              <div className="space-y-3 mb-6">
                {matches.map((match, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm font-medium text-secondary-foreground">{match.teams}</p>
                      <p className="text-xs text-muted-foreground">{match.date}</p>
                    </div>
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded">{match.time}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-secondary-foreground mb-3">Incluye</h3>
              <ul className="space-y-3 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="mt-6 block text-center gradient-orange text-primary-foreground px-5 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition"
              >
                Reservar Traslado
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-secondary-foreground/60 text-sm">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Grupos de 6 a 40 personas
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Reserva con anticipación
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            Precios especiales por partido
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldCup;
