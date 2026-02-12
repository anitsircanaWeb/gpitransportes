import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Inicio", "Servicios", "Nosotros", "Contacto"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2 text-primary-foreground font-heading text-xl font-bold">
          <Truck className="w-7 h-7 text-primary" />
          <span>TransLogix</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden md:inline-flex gradient-orange text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
        >
          Cotizar Ahora
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-secondary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-secondary-foreground/10 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              {l}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-2 block text-center gradient-orange text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold"
          >
            Cotizar Ahora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
