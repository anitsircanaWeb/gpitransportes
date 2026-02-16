import { Trophy, MapPin, Users, Clock } from "lucide-react";

const matches = [
  { date: "Jueves 11 de junio", time: "8:00 PM", team1: "Corea del Sur", flag1: "kr", team2: "Repechaje UEFA", flag2: "" },
  { date: "Miércoles 18 de junio", time: "7:00 PM", team1: "México", flag1: "mx", team2: "Corea del Sur", flag2: "kr" },
  { date: "Martes 23 de junio", time: "8:00 PM", team1: "Colombia", flag1: "co", team2: "Repechaje Intercontinental", flag2: "" },
  { date: "Viernes 26 de junio", time: "6:00 PM", team1: "Uruguay", flag1: "uy", team2: "España", flag2: "es" },
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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {matches.map((match, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
            >
              <div className="gradient-orange p-4 text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-semibold text-sm">Estadio Guadalajara</span>
                  </div>
                  <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded font-semibold">{match.time}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-center gap-3 mb-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    {match.flag1 && <img src={`https://flagcdn.com/w40/${match.flag1}.png`} alt={match.team1} className="w-8 h-5 object-cover rounded-sm" />}
                    <span className="text-xl md:text-2xl font-heading font-bold text-orange-500">{match.team1}</span>
                  </div>
                  <span className="text-sm font-semibold text-orange-500">vs</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl font-heading font-bold text-orange-500">{match.team2}</span>
                    {match.flag2 && <img src={`https://flagcdn.com/w40/${match.flag2}.png`} alt={match.team2} className="w-8 h-5 object-cover rounded-sm" />}
                  </div>
                </div>
                <p className="text-sm text-black font-bold mb-4 text-center">{match.date}</p>

                <ul className="space-y-2 flex-1">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="mt-4 block text-center gradient-orange text-primary-foreground px-4 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition"
                >
                  Reservar Traslado
                </a>
              </div>
            </div>
          ))}
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
