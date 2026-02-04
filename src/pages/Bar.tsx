import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Beer, Wine, Coffee, UtensilsCrossed } from "lucide-react";
import barImage from "@/assets/bar-beach.jpg";

const menuCategories = [
  {
    icon: Wine,
    title: "Drinks",
    items: [
      { name: "Caipirinha de Limão", price: "R$ 22" },
      { name: "Caipirinha de Frutas", price: "R$ 25" },
      { name: "Mojito", price: "R$ 28" },
      { name: "Gin Tônica", price: "R$ 30" },
      { name: "Moscow Mule", price: "R$ 32" },
      { name: "Aperol Spritz", price: "R$ 35" },
    ],
  },
  {
    icon: Beer,
    title: "Cervejas",
    items: [
      { name: "Heineken Long Neck", price: "R$ 12" },
      { name: "Budweiser Long Neck", price: "R$ 10" },
      { name: "Corona Extra", price: "R$ 15" },
      { name: "Stella Artois", price: "R$ 14" },
      { name: "Balde 5 Long Necks", price: "R$ 50" },
    ],
  },
  {
    icon: Coffee,
    title: "Bebidas",
    items: [
      { name: "Água Mineral", price: "R$ 5" },
      { name: "Água com Gás", price: "R$ 6" },
      { name: "Refrigerante Lata", price: "R$ 7" },
      { name: "Suco Natural", price: "R$ 12" },
      { name: "Energético", price: "R$ 15" },
      { name: "Água de Coco", price: "R$ 10" },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Porções",
    items: [
      { name: "Batata Frita", price: "R$ 35" },
      { name: "Isca de Frango", price: "R$ 42" },
      { name: "Anéis de Cebola", price: "R$ 28" },
      { name: "Bolinho de Bacalhau (6un)", price: "R$ 45" },
      { name: "Linguiça Acebolada", price: "R$ 38" },
      { name: "Mix de Petiscos", price: "R$ 55" },
    ],
  },
];

const Bar = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={barImage} alt="Bar da Arena" className="w-full h-full object-cover" />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-primary-foreground tracking-wider"
          >
            BAR & <span className="text-primary">CARDÁPIO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground/80 text-xl mt-4 max-w-2xl mx-auto italic"
          >
            "Depois do jogo, o rolê continua aqui."
          </motion.p>
        </div>
      </section>

      {/* About Bar */}
      <section className="section-padding bg-secondary">
        <div className="container-arena text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-secondary-foreground mb-6">
              O PONTO DE <span className="text-primary">ENCONTRO</span> DA ARENA
            </h2>
            <p className="text-secondary-foreground/70 text-lg max-w-3xl mx-auto">
              Nosso bar é o lugar perfeito para relaxar depois do jogo, encontrar os amigos 
              ou simplesmente curtir uma tarde com drinks gelados e boa música. 
              Cardápio completo com drinks, cervejas artesanais e porções deliciosas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu */}
      <section className="section-padding">
        <div className="container-arena">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Cardápio
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 tracking-wide">
              NOSSO <span className="text-primary">MENU</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {menuCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-center border-b border-border pb-3 last:border-0">
                      <span className="text-foreground">{item.name}</span>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-arena text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              VENHA <span className="text-primary">CURTIR</span> COM A GENTE
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              O bar da Arena está aberto todos os dias. Perfeito para depois do jogo, 
              happy hour com os amigos ou eventos especiais.
            </p>
            <Button variant="gradient" size="xl" asChild>
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o bar e reservas."
                target="_blank"
                rel="noopener noreferrer"
              >
                Fazer reserva
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Bar;
