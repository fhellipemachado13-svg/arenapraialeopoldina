import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Music, Calendar, Clock, MapPin } from "lucide-react";
import liveMusic from "@/assets/live-music.jpg";

const upcomingEvents = [
  {
    date: "08",
    month: "FEV",
    day: "Sábado",
    title: "Pagodin com Batuque de 2",
    description: "Pagode ao vivo com o grupo Batuque de 2",
    time: "16h às 00h",
    type: "Ao Vivo",
  },
  {
    date: "14",
    month: "MAR",
    day: "Sábado",
    title: "Tardezinha Arena Curtâe",
    description: "Tardezinha especial na Arena com muita música e diversão",
    time: "16h às 00h",
    type: "Especial",
  },
];

const Eventos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={liveMusic} alt="Eventos" className="w-full h-full object-cover" />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-full bg-primary/30 backdrop-blur-sm flex items-center justify-center mx-auto mb-6"
          >
            <Music className="w-10 h-10 text-primary-foreground" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-primary-foreground tracking-wider"
          >
            EVENTOS & <span className="text-primary">MÚSICA AO VIVO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground/80 text-lg mt-4 max-w-2xl mx-auto"
          >
            Todo fim de semana tem música, diversão e energia contagiante!
          </motion.p>
        </div>
      </section>

      {/* About Events */}
      <section className="section-padding bg-muted">
        <div className="container-arena">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Music, title: "Música ao Vivo", desc: "Bandas e artistas toda semana" },
              { icon: Calendar, title: "Todo Fim de Semana", desc: "Sexta, sábado e domingo" },
              { icon: MapPin, title: "Na Arena", desc: "Palco ao ar livre" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-lg"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="section-padding">
        <div className="container-arena">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Agenda
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 tracking-wide">
              PRÓXIMOS <span className="text-primary">EVENTOS</span>
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-start md:items-center card-hover"
              >
                {/* Date */}
                <div className="flex-shrink-0 w-20 text-center">
                  <span className="font-display text-4xl text-primary">{event.date}</span>
                  <p className="text-muted-foreground text-sm uppercase">{event.month}</p>
                  <p className="text-foreground text-xs">{event.day}</p>
                </div>

                {/* Info */}
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-foreground">{event.title}</h3>
                  <p className="text-muted-foreground mt-1">{event.description}</p>
                  <div className="flex items-center gap-2 mt-3 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <Button variant="default" asChild>
                    <a
                      href={`https://wa.me/5532999544409?text=Olá! Quero saber mais sobre o evento "${event.title}" do dia ${event.date}/${event.month}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Saiba mais
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-arena text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-secondary-foreground mb-6">
              QUER REALIZAR SEU <span className="text-primary">EVENTO</span> AQUI?
            </h2>
            <p className="text-secondary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              A Arena Praia Leopoldina é o espaço perfeito para festas, confraternizações, 
              aniversários e eventos corporativos. Entre em contato!
            </p>
            <Button variant="gradient" size="xl" asChild>
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de realizar um evento na Arena."
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar sobre eventos
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Eventos;
