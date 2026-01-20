import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_chrome_fluid_shapes_for_hero_background.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Animated Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(30,0,50,0.4) 50%, rgba(0,0,0,0.6) 100%)"
          }}
        />
        
        {/* Animated Floating Particles/Glow */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(120, 80, 255, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(120, 80, 255, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(120, 80, 255, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(120, 80, 255, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

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
            Experiências Digitais
          </p>
          <motion.span 
            className="hidden md:block w-2 h-2 rounded-full bg-primary"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="text-lg md:text-xl font-light tracking-wide uppercase text-white/80">
            Estúdio Criativo Global
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
