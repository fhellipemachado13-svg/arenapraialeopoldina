import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Users, Zap, Calendar, CheckCircle } from "lucide-react";
import beachTennisImg from "@/assets/beach-tennis.jpg";
import futevoleiImg from "@/assets/futevolei.jpg";

const classes = [
  {
    title: "Beach Tennis",
    description: "O esporte que mais cresce no Brasil! Aulas para iniciantes e intermediários com professores certificados.",
    image: beachTennisImg,
    levels: ["Iniciante", "Intermediário"],

    schedule: "Confira os dias das aulas",
  },
  {
    title: "Futevôlei",
    description: "Aprenda a arte do futevôlei brasileiro. Técnicas de controle, passes e finalizações.",
    image: futevoleiImg,
    levels: ["Iniciante"],
    schedule: "Confira os dias das aulas",
  },
];

const benefits = [
  { icon: Heart, title: "Saúde", desc: "Exercício completo e divertido" },
  { icon: Zap, title: "Técnica", desc: "Evolução com profissionais" },
  { icon: Users, title: "Socialização", desc: "Faça novos amigos" },
  { icon: GraduationCap, title: "Aprendizado", desc: "Do zero ao avançado" },
];

const Aulas = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-secondary">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-y-1/2" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
          >
            <GraduationCap className="w-10 h-10 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-secondary-foreground tracking-wider"
          >
            AULAS <span className="text-primary">NA AREIA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-secondary-foreground/70 text-lg mt-4 max-w-2xl mx-auto"
          >
            Aprenda Beach Tennis e Futevôlei com os melhores professores da região
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-arena">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="section-padding bg-muted">
        <div className="container-arena">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Modalidades
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 tracking-wide">
              ESCOLHA SUA <span className="text-primary">AULA</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {classes.map((classItem, index) => (
              <motion.div
                key={classItem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card rounded-2xl overflow-hidden shadow-xl card-hover"
              >
                <div className="aspect-video relative">
                  <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl text-foreground mb-3">{classItem.title}</h3>
                  <p className="text-muted-foreground mb-4">{classItem.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {classItem.levels.map((level) => (
                      <span
                        key={level}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {level}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                    <Calendar className="w-4 h-4" />
                    <span>{classItem.schedule}</span>
                  </div>

                  <Button variant="gradient" className="w-full" asChild>
                    <a
                      href={`https://wa.me/5532999544409?text=Olá! Tenho interesse nas aulas de ${classItem.title}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quero fazer aula
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary via-accent to-primary">
        <div className="container-arena text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-primary-foreground tracking-wide mb-6">
              AGENDE SUA AULA EXPERIMENTAL
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Venha conhecer nossa estrutura e experimentar uma aula gratuita!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {["Horários flexíveis", "Professores qualificados", "Material incluso"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-primary-foreground">
                  <CheckCircle className="w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Button variant="heroSecondary" size="xl" className="mt-8" asChild>
              <a
                href="https://wa.me/5532999544409?text=Olá! Gostaria de agendar uma aula experimental."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar aula experimental
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Aulas;
