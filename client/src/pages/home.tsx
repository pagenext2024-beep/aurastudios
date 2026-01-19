import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Works } from "@/components/sections/Works";
import { Services } from "@/components/sections/Services";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Services />
      <Footer />
    </div>
  );
}
