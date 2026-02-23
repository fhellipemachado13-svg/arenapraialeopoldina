import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
const navLinks = [{
  name: "Início",
  href: "/"
}, {
  name: "Quadras",
  href: "/quadras"
}, {
  name: "Aulas",
  href: "/aulas"
}, {
  name: "Bar",
  href: "/bar"
}, {
  name: "Eventos",
  href: "/eventos"
}, {
  name: "Contato",
  href: "/contato"
 }, {
    name: "Patrocinadores",
    href: "/patrocinadores"
}, {
    name: "Instagram",
    href: "/instagram"
}];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;
  return <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-primary/20">
      <nav className="container-arena">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl text-primary-foreground tracking-wider">
              ARENA PRAIA
            </span>
            <span className="font-display text-xl md:text-2xl text-primary tracking-wider">
              LEOPOLDINA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.name} to={link.href} className={`text-sm font-medium transition-colors duration-300 ${isActive(link.href) ? "text-primary" : "text-primary-foreground/80 hover:text-primary"}`}>
                {link.name}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="whatsapp" size="sm" asChild>
              <a target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" href="https://wa.me/5532999544409?text=Ol\xE1! Quero saber mais sobre a Arena Praia Leopoldina">
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-primary-foreground p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-secondary border-t border-primary/20">
            <div className="container-arena px-4 py-4 flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className={`text-lg font-medium py-2 transition-colors ${isActive(link.href) ? "text-primary" : "text-primary-foreground/80"}`}>
                  {link.name}
                </Link>)}
              <Button variant="whatsapp" asChild className="mt-2">
                <a href="https://wa.me/5532999544409?text=Olá! Quero saber mais sobre a Arena Praia Leopoldina" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Falar pelo WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
};
export default Header;