import React from 'react';

export default function Contact() {
  return (
    <section className="relative w-full bg-[#121212] z-20 py-32 px-6 sm:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12">
        
        <div className="flex flex-col gap-6 items-center">
          <div className="h-20 w-20 rounded-full border border-white/20 flex items-center justify-center animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Let's work together.
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl">
            I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative magic, I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <a href="mailto:gamjt97@gmail.com" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 group font-medium tracking-wide">
            <span>gamjt97@gmail.com</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="tel:6235401069" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all duration-300 font-medium tracking-wide">
            <span>+91 6235401069</span>
          </a>
        </div>

        <div className="pt-32 pb-4 text-center text-white/30 text-sm font-light tracking-widest flex flex-col gap-6 items-center w-full">
          <div className="flex gap-8 mb-4">
            <a href="https://linkedin.com/in/gamiljacob" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 mix-blend-difference">LINKEDIN</a>
            <a href="https://github.com/Gamjt19" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 mix-blend-difference">GITHUB</a>
          </div>
          <p className="uppercase">© {new Date().getFullYear()} GAMIL JACOB THOMAS. FULL STACK DEVELOPER.</p>
        </div>

      </div>
    </section>
  );
}
