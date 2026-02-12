import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-foreground">
            ¿Necesitas transporte para tu equipo?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Contáctanos y recibe una cotización personalizada para el traslado de tu personal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md gradient-orange flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Teléfono</h4>
                <p className="text-muted-foreground text-sm">+52 (55) 1234-5678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md gradient-orange flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Correo</h4>
                <p className="text-muted-foreground text-sm">contacto@translogix.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md gradient-orange flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Dirección</h4>
                <p className="text-muted-foreground text-sm">Av. Industria #456, Col. Centro, CDMX</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                required
                className="w-full px-4 py-3 rounded-md bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                required
                className="w-full px-4 py-3 rounded-md bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <input
              type="text"
              placeholder="Asunto"
              required
              className="w-full px-4 py-3 rounded-md bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              rows={4}
              placeholder="Describe tu necesidad de transporte de personal..."
              required
              className="w-full px-4 py-3 rounded-md bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              className="gradient-orange text-primary-foreground px-8 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              {submitted ? "¡Enviado!" : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
