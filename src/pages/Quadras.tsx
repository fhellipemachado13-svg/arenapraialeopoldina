import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, Clock, MapPin, Check } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-beach-arena.jpg";
const courts = [{
  id: 1,
  name: "Quadra 1",
  available: true
}, {
  id: 2,
  name: "Quadra 2",
  available: true
}, {
  id: 3,
  name: "Quadra 3",
  available: false
}, {
  id: 4,
  name: "Quadra 4",
  available: true
}, {
  id: 5,
  name: "Quadra 5",
  available: true
}, {
  id: 6,
  name: "Quadra 6",
  available: false
}];
const features = [{
  icon: MapPin,
  title: "6 Quadras",
  desc: "Quadras de areia profissionais"
}, {
  icon: Users,
  title: "Multiuso",
  desc: "Beach Tennis, Futevôlei, Vôlei"
}, {
  icon: Trophy,
  title: "Eventos",
  desc: "Campeonatos e torneios"
}, {
  icon: Clock,
  title: "Horário",
  desc: "Das 8h às 00h"
}];
const Quadras = () => {
  const [selectedCourt, setSelectedCourt] = useState<number | null>(null);
  return <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Quadras" className="w-full h-full object-cover" />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="font-display text-5xl md:text-7xl text-primary-foreground tracking-wider">QUADRAS e AGENDAMENTOS<span className="text-primary">AGENDAMENTOS</span>
          </motion.h1>
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }} className="text-primary-foreground/80 text-lg mt-4 max-w-2xl mx-auto">
            6 quadras de areia para você jogar Beach Tennis, Futevôlei ou Vôlei com os amigos
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-muted">
        <div className="container-arena">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => <motion.div key={feature.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-card p-6 rounded-2xl text-center shadow-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{feature.desc}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Court Selection */}
      <section className="section-padding">
        <div className="container-arena">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Escolha sua quadra
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 tracking-wide">
              RESERVE <span className="text-primary">AGORA  </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {courts.map((court) => <motion.div key={court.id} initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} onClick={() => court.available && setSelectedCourt(court.id)} className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${selectedCourt === court.id ? "border-primary bg-primary/10" : court.available ? "border-border bg-card hover:border-primary/50" : "border-border bg-muted opacity-50 cursor-not-allowed"}`}>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl text-foreground">{court.name}</h3>
                  {selectedCourt === court.id && <Check className="w-6 h-6 text-primary" />}
                </div>
                <p className={`text-sm mt-2 ${court.available ? "text-primary" : "text-muted-foreground"}`}>
                  {court.available ? "Disponível" : "Ocupada"}
                </p>
              </motion.div>)}
          </div>

          {/* Booking Form */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-2xl mx-auto bg-card p-8 rounded-2xl shadow-xl">
            <h3 className="font-display text-2xl text-foreground mb-6 text-center">
              Agende pelo WhatsApp
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              Escolha a quadra, data e horário e envie para nossa equipe confirmar sua reserva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="xl" asChild>
                <a href={`https://wa.me/5511999999999?text=Olá! Gostaria de reservar ${selectedCourt ? `a Quadra ${selectedCourt}` : "uma quadra"} na Arena Praia Leopoldina.`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Reservar minha quadra
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info */}
      <section className="section-padding bg-secondary">
        <div className="container-arena text-center">
          <h2 className="font-display text-3xl md:text-4xl text-secondary-foreground mb-6">
            ALUGUE PARA <span className="text-primary">QUALQUER OCASIÃO</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[{
            title: "Jogos entre amigos",
            desc: "Marque aquele racha com a turma"
          }, {
            title: "Treinos",
            desc: "Espaço ideal para sua evolução"
          }, {
            title: "Campeonatos",
            desc: "Eventos e torneios personalizados"
          }].map((item) => <div key={item.title} className="text-center">
                <h3 className="font-display text-xl text-primary mb-2">{item.title}</h3>
                <p className="text-secondary-foreground/70">{item.desc}</p>
              </div>)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default Quadras;