import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Users, Trophy, Clock } from "lucide-react";

const stats = [
  { icon: MapPin, value: "6", label: "Quadras de Areia" },
  { icon: Users, value: "500+", label: "Atletas Mensais" },
  { icon: Trophy, value: "3", label: "Modalidades" },
  { icon: Clock, value: "7", label: "Dias por Semana" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted" ref={ref}>
      <div className="container-arena">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Sobre Nós
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 tracking-wide">
            SEU ESPAÇO DE <span className="text-primary">PRAIA</span> NA CIDADE
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            A Arena Praia Leopoldina é o maior complexo de esportes de areia da região. 
            Com 6 quadras profissionais, oferecemos Beach Tennis, Futevôlei e Vôlei de Praia 
            para todos os níveis. Além do esporte, temos um bar completo e eventos musicais 
            toda semana!
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center shadow-lg border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-display text-4xl text-foreground">{stat.value}</span>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
