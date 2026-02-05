import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, GraduationCap, Utensils, Music } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-beach-arena.jpg";
const HeroSection = () => {
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Arena Praia Leopoldina - Quadras de areia ao pôr do sol" className="w-full h-full object-cover" />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-arena px-4 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto">
          <motion.span initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }} className="inline-block px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full mb-6"> 6 Quadras de Areia • Beach Tennis • Futevôlei • Vôlei</motion.span>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-wider mb-6">
            ESPORTE, DIVERSÃO E
            <span className="text-gradient-sunset block mt-2">MÚSICA EM UM SÓ LUGAR</span>
          </h1>

          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.5
        }} className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            A Arena Praia Leopoldina é o seu destino para esporte na areia, drinks gelados e as melhores noites com música ao vivo.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.7
        }} className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/quadras" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Agendar Quadra
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/aulas" className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Ver Aulas
              </Link>
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1
        }} className="flex flex-wrap justify-center gap-6 mt-12">
            <Link to="/bar" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
              <Utensils className="w-4 h-4" />
              <span>Ver Cardápio</span>
            </Link>
            <Link to="/eventos" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
              <Music className="w-4 h-4" />
              <span>Agenda de Eventos</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div animate={{
          y: [0, 12, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>;
};
export default HeroSection;