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
            We are a collective of visionaries, crafting <span className="text-primary italic">digital artifacts</span> that transcend the ordinary. We believe in the power of design to evoke emotion and drive culture.
          </h2>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded in 2024, AURA has quickly established itself as a leader in avant-garde digital design. We partner with brands that aren't afraid to break the rules.
              </p>
            </div>
            <div className="flex gap-16 text-sm uppercase tracking-widest text-muted-foreground">
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold">Location</span>
                <span>New York</span>
                <span>London</span>
                <span>Tokyo</span>
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
