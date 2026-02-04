import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-arena section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <span className="font-display text-2xl text-primary-foreground tracking-wider">
                ARENA PRAIA
              </span>
              <span className="font-display text-xl text-primary tracking-wider ml-2">
                LEOPOLDINA
              </span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Esporte, diversão e música em um só lugar. Venha viver a melhor experiência de praia da cidade!
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl text-primary mb-4 tracking-wide">NAVEGAÇÃO</h3>
            <ul className="space-y-2">
              {[
                { name: "Quadras", href: "/quadras" },
                { name: "Aulas", href: "/aulas" },
                { name: "Bar & Cardápio", href: "/bar" },
                { name: "Eventos", href: "/eventos" },
                { name: "Contato", href: "/contato" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl text-primary mb-4 tracking-wide">CONTATO</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Rua da Arena, 123 - Leopoldina, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+5511999999999" className="hover:text-primary transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contato@arenapraialeopoldina.com.br" className="hover:text-primary transition-colors">
                  contato@arenapraialeopoldina.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-xl text-primary mb-4 tracking-wide">HORÁRIOS</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li className="flex justify-between">
                <span>Segunda a Sexta</span>
                <span className="text-primary-foreground">08h - 23h</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados</span>
                <span className="text-primary-foreground">08h - 00h</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos</span>
                <span className="text-primary-foreground">08h - 22h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8 text-center text-sm text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Arena Praia Leopoldina. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
