import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="GPI Transportes Empresariales" className="h-8" />
          </a>
          <div className="flex items-center gap-6 text-secondary-foreground/60 text-sm">
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <p className="text-secondary-foreground/40 text-xs">
            © 2026 GPI Transportes Empresariales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
