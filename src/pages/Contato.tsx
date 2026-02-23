import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Rua Acácio Serpa, 538 - Leopoldina/MG",
    sub: "CEP: 36704-079",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(32) 99954-4409",
    sub: "WhatsApp disponível",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "arenapraialeopoldina@gmail.com",
    sub: "Respondemos em até 24h",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg a Sex: 08h - 23h",
    sub: "Sáb: 08h - 00h | Dom: 08h - 00h",
  },
];

const Contato = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center bg-secondary">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-secondary-foreground tracking-wider"
          >
            FALE <span className="text-primary">CONOSCO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-secondary-foreground/70 text-lg mt-4 max-w-xl mx-auto"
          >
            Estamos prontos para atender você!
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="section-padding">
        <div className="container-arena">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-2xl shadow-lg flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground">{info.title}</h3>
                    <p className="text-foreground mt-1">{info.content}</p>
                    <p className="text-muted-foreground text-sm">{info.sub}</p>
                  </div>
                </motion.div>
              ))}

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-card p-6 rounded-2xl shadow-lg"
              >
                <h3 className="font-display text-xl text-foreground mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/arenapraialeopoldina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary transition-colors group"
                  >
                    <Instagram className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </a>
                  <a
                    href="https://facebook.com/arenapraialeopoldina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary transition-colors group"
                  >
                    <Facebook className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Button variant="whatsapp" size="xl" className="w-full" asChild>
                  <a
                    href="https://wa.me/5511999999999?text=Olá! Gostaria de falar com a Arena Praia Leopoldina."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Falar com a Arena
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden shadow-xl h-[500px]"
            >
              <iframe
                src="https://maps.google.com/maps?q=Ac%C3%A1cio+Serpa%2C+510+-+Meia+Laranja%2C+Leopoldina+-+MG%2C+36700-000&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Arena Praia Leopoldina"
              />
            </motion.div>
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
              VENHA NOS VISITAR!
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Estamos esperando você para viver a melhor experiência de esportes de praia, 
              drinks gelados e música ao vivo da cidade!
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
