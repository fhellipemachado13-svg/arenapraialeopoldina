 import { motion } from "framer-motion";
 import Layout from "@/components/layout/Layout";
 import { Handshake, Building2 } from "lucide-react";
 
 const sponsors = [
   {
     id: 1,
     name: "Patrocinador 1",
     description: "Descrição do patrocinador",
     logo: null,
   },
   {
     id: 2,
     name: "Patrocinador 2",
     description: "Descrição do patrocinador",
     logo: null,
   },
   {
     id: 3,
     name: "Patrocinador 3",
     description: "Descrição do patrocinador",
     logo: null,
   },
   {
     id: 4,
     name: "Patrocinador 4",
     description: "Descrição do patrocinador",
     logo: null,
   },
   {
     id: 5,
     name: "Patrocinador 5",
     description: "Descrição do patrocinador",
     logo: null,
   },
   {
     id: 6,
     name: "Patrocinador 6",
     description: "Descrição do patrocinador",
     logo: null,
   },
 ];
 
 const Patrocinadores = () => {
   return (
     <Layout>
       {/* Hero Section */}
       <section className="relative py-32 md:py-40 bg-gradient-to-br from-secondary via-secondary to-black">
         <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
         <div className="relative z-10 text-center px-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
             <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary text-sm font-medium rounded-full mb-6">
               <Handshake className="w-4 h-4" />
               Parceiros Oficiais
             </span>
             <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground tracking-wider mb-4">
               NOSSOS{" "}
               <span className="text-gradient-sunset">PATROCINADORES</span>
             </h1>
             <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
               Empresas que acreditam no esporte e no lazer. Juntos, levamos a
               melhor experiência de praia para Leopoldina.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Sponsors Grid */}
       <section className="section-padding bg-background">
         <div className="container-arena">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
           >
             <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider mb-4">
               QUEM FAZ A ARENA ACONTECER
             </h2>
             <p className="text-muted-foreground max-w-xl mx-auto">
               Agradecemos a cada parceiro pelo apoio e confiança em nosso projeto
             </p>
           </motion.div>
 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {sponsors.map((sponsor, index) => (
               <motion.div
                 key={sponsor.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
               >
                 {/* Logo Placeholder */}
                 <div className="w-full h-32 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                   {sponsor.logo ? (
                     <img
                       src={sponsor.logo}
                       alt={sponsor.name}
                       className="max-w-full max-h-full object-contain"
                     />
                   ) : (
                     <Building2 className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
                   )}
                 </div>
 
                 {/* Sponsor Info */}
                 <h3 className="font-display text-xl text-foreground tracking-wide mb-2 group-hover:text-primary transition-colors">
                   {sponsor.name}
                 </h3>
                 <p className="text-sm text-muted-foreground">
                   {sponsor.description}
                 </p>
 
                 {/* Decorative Element */}
                 <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* CTA Section */}
       <section className="section-padding bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20">
         <div className="container-arena text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider mb-4">
               QUER SER UM PATROCINADOR?
             </h2>
             <p className="text-muted-foreground max-w-xl mx-auto mb-8">
               Faça parte dessa história. Entre em contato conosco e descubra como
               sua empresa pode apoiar o esporte e o lazer em Leopoldina.
             </p>
             <a
               href="https://wa.me/5532999544409?text=Olá! Tenho interesse em ser patrocinador da Arena Praia Leopoldina"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors"
             >
               <Handshake className="w-5 h-5" />
               Quero ser Patrocinador
             </a>
           </motion.div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Patrocinadores;