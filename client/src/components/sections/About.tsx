import { motion } from "framer-motion";

export function About() {
  return (
    <section id="studio" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1]">
            Somos um coletivo de visionários, criando <span className="text-primary italic">artefatos digitais</span> que transcendem o comum. Acreditamos no poder do design para evocar emoção e impulsionar a cultura.
          </h2>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Fundada em 2024, a AURA estabeleceu-se rapidamente como líder em design digital de vanguarda. Fazemos parcerias com marcas que não têm medo de quebrar regras.
              </p>
            </div>
            <div className="flex gap-16 text-sm uppercase tracking-widest text-muted-foreground">
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold">Localização</span>
                <span>Nova York</span>
                <span>Londres</span>
                <span>Tóquio</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold">Social</span>
                <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
