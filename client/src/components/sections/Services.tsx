import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  "Identidade de Marca",
  "Estratégia Digital",
  "Desenvolvimento Web",
  "Direção de Arte",
  "Motion Design",
  "Visualização 3D"
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-white text-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Nossos Serviços</h2>
            <p className="text-lg opacity-70">
              Soluções de design abrangentes, feitas sob medida para elevar a presença da sua marca no mundo digital e físico.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-0">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center justify-between py-8 border-b border-black/10 hover:px-4 transition-all duration-300 cursor-default"
                >
                  <span className="text-3xl md:text-5xl font-display font-medium group-hover:text-primary transition-colors">
                    {service}
                  </span>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
