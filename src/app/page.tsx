import React from 'react';
import PortalHero from '@/components/PortalHero';
import NavigationGrid from '@/components/NavigationGrid';
import MenuBytesLogo from '@/components/MenuBytesLogo';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center bg-[#060606] overflow-x-hidden selection:bg-[#DAA520]/30 selection:text-[#DAA520]">
      {/* Mesh Gradient Background Layer */}
      <div className="mesh-gradient opacity-60 pointer-events-none" />
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] pointer-events-none mix-blend-overlay" />

      {/* Header Navigation */}
      <header className="w-full max-w-7xl px-8 py-10 flex justify-between items-center z-50">
        <MenuBytesLogo />
        <nav className="hidden md:flex space-x-12">
          <span className="text-[10px] font-black tracking-[0.6em] text-gray-600 uppercase hover:text-[#DAA520] transition-colors cursor-default">Portafolio</span>
          <span className="text-[10px] font-black tracking-[0.6em] text-gray-500 uppercase hover:text-white transition-colors cursor-default underline decoration-[#DAA520] decoration-2 underline-offset-[12px]">Defensa 2026</span>
        </nav>
      </header>

      {/* Central Content Area */}
      <section className="relative flex-1 flex flex-col items-center w-full z-10">
        {/* Welcome Section */}
        <div className="w-full max-w-4xl px-4">
          <PortalHero />
        </div>
        
        {/* Navigation Section (Side-by-Side) */}
        <div className="w-full">
          <NavigationGrid />
        </div>
      </section>

      {/* Corporate Footer */}
      <footer className="w-full py-16 flex flex-col items-center justify-center space-y-6 z-20">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#DAA520]/30 to-transparent" />
        <p className="text-[9px] font-black tracking-[0.8em] text-gray-700 uppercase px-8 text-center leading-loose">
          Ecosistema OLYMP-IA &copy; {new Date().getFullYear()} — Supremacía Digital
        </p>
      </footer>
    </main>
  );
}
