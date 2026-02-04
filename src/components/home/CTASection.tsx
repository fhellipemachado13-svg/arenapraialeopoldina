import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Utensils, Music, Calendar } from "lucide-react";
import barImage from "@/assets/bar-beach.jpg";
import musicImage from "@/assets/live-music.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-arena">
        {/* Grid of CTAs */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bar CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl card-hover"
          >
            <div className="aspect-[16/10] relative">
              <img
                src={barImage}
                alt="Bar da Arena"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Utensils className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-white tracking-wide mb-3">
                  BAR & CARDÁPIO
                </h3>
                <p className="text-white/70 mb-6 max-w-sm">
                  Depois do jogo, o rolê continua aqui. Drinks, cervejas geladas e porções deliciosas.
                </p>
                <Button variant="hero" size="lg" asChild className="w-fit">
                  <Link to="/bar">Ver Cardápio</Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Events CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl card-hover"
          >
            <div className="aspect-[16/10] relative">
              <img
                src={musicImage}
                alt="Música ao vivo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Music className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-white tracking-wide mb-3">
                  EVENTOS & SHOWS
                </h3>
                <p className="text-white/70 mb-6 max-w-sm">
                  Todo fim de semana tem música ao vivo, DJs e eventos especiais. Venha curtir!
                </p>
                <Button variant="hero" size="lg" asChild className="w-fit">
                  <Link to="/eventos">Ver Agenda</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Classes CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-gradient-to-r from-primary via-accent to-orange-400 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display text-3xl md:text-5xl text-white tracking-wide mb-4">
              QUER APRENDER?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Oferecemos aulas de Beach Tennis e Futevôlei para iniciantes e intermediários. 
              Turmas com horários flexíveis!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroSecondary" size="xl" asChild>
                <Link to="/aulas" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Quero fazer aula
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
