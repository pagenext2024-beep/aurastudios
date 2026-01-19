import { motion } from "framer-motion";
import work1 from "@assets/generated_images/minimalist_concrete_architecture_project.png";
import work2 from "@assets/generated_images/avant-garde_fashion_editorial.png";
import work3 from "@assets/generated_images/sleek_industrial_product_design.png";

const projects = [
  {
    id: 1,
    title: "Mono Arch",
    category: "Architecture",
    image: work1,
    year: "2024"
  },
  {
    id: 2,
    title: "Neon Vogue",
    category: "Editorial",
    image: work2,
    year: "2024"
  },
  {
    id: 3,
    title: "Sonic One",
    category: "Product",
    image: work3,
    year: "2023"
  }
];

export function Works() {
  return (
    <section id="work" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Selected Works</h2>
          <span className="hidden md:block text-muted-foreground">(2023 — 2024)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group cursor-pointer ${index === 2 ? "lg:col-span-2 lg:w-2/3 lg:mx-auto" : ""}`}
            >
              <div className="overflow-hidden mb-6">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="flex justify-between items-baseline border-t border-white/10 pt-4">
                <h3 className="text-2xl md:text-3xl font-display font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4 text-sm md:text-base text-muted-foreground">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
