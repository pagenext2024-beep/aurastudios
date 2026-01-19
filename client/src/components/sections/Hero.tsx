import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_chrome_fluid_shapes_for_hero_background.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="text-[15vw] leading-none font-display font-bold tracking-tighter text-white mix-blend-difference"
        >
          AURA
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12"
        >
          <p className="text-lg md:text-xl font-light tracking-wide uppercase text-white/80">
            Digital Experiences
          </p>
          <span className="hidden md:block w-2 h-2 rounded-full bg-primary" />
          <p className="text-lg md:text-xl font-light tracking-wide uppercase text-white/80">
            Global Creative Studio
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}
