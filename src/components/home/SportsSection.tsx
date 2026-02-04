import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import beachTennisImg from "@/assets/beach-tennis.jpg";
import futevoleiImg from "@/assets/futevolei.jpg";
import voleiPraiaImg from "@/assets/volei-praia.jpg";

const sports = [
  {
    title: "Beach Tennis",
    description: "O esporte que mais cresce no Brasil! Venha jogar em nossas quadras de areia com a melhor estrutura.",
    image: beachTennisImg,
    href: "/quadras",
  },
  {
    title: "Futevôlei",
    description: "A tradição do futevôlei brasileiro com aulas e locação de quadras para todos os níveis.",
    image: futevoleiImg,
    href: "/quadras",
  },
  {
    title: "Vôlei de Praia",
    description: "Quadras profissionais para praticar o vôlei de praia com os amigos ou em competições.",
    image: voleiPraiaImg,
    href: "/quadras",
  },
];

const SportsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-arena">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Modalidades
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mt-3 tracking-wide">
            ESCOLHA SEU <span className="text-primary">ESPORTE</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl card-hover"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-3xl text-white tracking-wide mb-2">
                    {sport.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">
                    {sport.description}
                  </p>
                  <Button variant="hero" size="sm" asChild>
                    <Link to={sport.href} className="flex items-center gap-2">
                      Saiba mais
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="gradient" size="lg" asChild>
            <Link to="/quadras">Ver todas as quadras</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SportsSection;
