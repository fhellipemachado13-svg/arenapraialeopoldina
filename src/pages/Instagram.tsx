import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Instagram as InstagramIcon, ExternalLink } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/arenapraialeopoldina/";

const Instagram = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center bg-secondary">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/15 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center mx-auto mb-6"
          >
            <InstagramIcon className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-secondary-foreground tracking-wider"
          >
            NOSSO <span className="text-primary">INSTAGRAM</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-secondary-foreground/70 text-lg mt-4 max-w-xl mx-auto"
          >
            Acompanhe tudo que rola na Arena Praia Leopoldina!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <Button variant="gradient" size="xl" asChild>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <InstagramIcon className="w-5 h-5" />
                Seguir @arenapraialeopoldina
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Instagram Embed */}
      <section className="section-padding">
        <div className="container-arena">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              @arenapraialeopoldina
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 tracking-wide">
              SIGA-NOS NO <span className="text-primary">INSTAGRAM</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Veja fotos, vídeos e fique por dentro de tudo que acontece na Arena!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="w-full" style={{ minHeight: "600px" }}>
              <iframe
                src="https://www.instagram.com/arenapraialeopoldina/embed"
                width="100%"
                height="800"
                frameBorder="0"
                scrolling="yes"
                allowTransparency
                className="w-full rounded-2xl"
                title="Instagram Arena Praia Leopoldina"
              />
            </div>
          </motion.div>

          {/* CTA below embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button variant="outline" size="lg" asChild>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <InstagramIcon className="w-5 h-5" />
                Ver perfil completo no Instagram
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888]">
        <div className="container-arena text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-4">
              NÃO PERCA NENHUMA NOVIDADE!
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Siga a Arena Praia Leopoldina no Instagram e fique por dentro de eventos, 
              promoções e tudo que acontece na melhor arena de esportes de praia!
            </p>
            <Button
              size="xl"
              className="bg-white text-[#e6683c] hover:bg-white/90 hover:scale-105 shadow-xl font-bold"
              asChild
            >
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <InstagramIcon className="w-5 h-5" />
                Seguir agora
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Instagram;
