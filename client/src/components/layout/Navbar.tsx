import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Trabalhos", id: "work" },
    { name: "Estúdio", id: "studio" },
    { name: "Serviços", id: "services" },
    { name: "Contato", id: "contact" }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Link href="/" className="text-2xl font-display font-bold tracking-tighter hover:text-primary transition-colors cursor-pointer">
          AURA
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="text-foreground hover:text-primary transition-colors cursor-pointer"
          data-testid="button-menu"
        >
          <Menu size={32} strokeWidth={1.5} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-background z-[60] flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors cursor-pointer"
              data-testid="button-close-menu"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <div className="flex flex-col space-y-8 text-center">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl md:text-7xl font-display font-bold hover:text-primary transition-colors cursor-pointer"
                  data-testid={`link-${item.id}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
