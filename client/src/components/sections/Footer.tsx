export function Footer() {
  return (
    <footer id="contact" className="py-32 px-6 bg-background text-white min-h-[80vh] flex flex-col justify-between">
      <div className="container mx-auto">
        <h2 className="text-xl font-mono mb-8 uppercase tracking-widest opacity-50">Start a project</h2>
        <a 
          href="mailto:hello@aura.studio"
          className="text-[8vw] leading-none font-display font-bold hover:text-primary transition-colors break-all"
        >
          HELLO@AURA.STUDIO
        </a>
      </div>
      
      <div className="container mx-auto mt-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-lg">AURA</span>
          <span className="opacity-50 text-sm">© 2026 All Rights Reserved</span>
        </div>
        
        <div className="flex gap-8 text-sm uppercase tracking-wider">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
