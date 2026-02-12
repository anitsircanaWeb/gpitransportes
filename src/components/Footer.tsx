import { Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2 text-secondary-foreground font-heading text-lg font-bold">
            <Truck className="w-6 h-6 text-primary" />
            TransLogix
          </a>
          <div className="flex items-center gap-6 text-secondary-foreground/60 text-sm">
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <p className="text-secondary-foreground/40 text-xs">
            © 2026 TransLogix. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
