import React from 'react';
import PortalHero from '@/components/PortalHero';
import NavigationGrid from '@/components/NavigationGrid';
import MenuBytesLogo from '@/components/MenuBytesLogo';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-between overflow-hidden bg-[#0A0A0A]">
      {/* Mesh Gradient Layer */}
      <div className="mesh-gradient opacity-40 scale-150" />
      
      {/* Noise Texture */}
      <div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.10] pointer-events-none mix-blend-overlay" />

      {/* Header / Nav */}
      <header className="w-full max-w-7xl px-8 py-12 flex justify-between items-center z-10">
        <MenuBytesLogo />
        <nav className="hidden md:flex items-center space-x-12">
          <span className="text-xs font-black tracking-[0.5em] text-gray-600 uppercase hover:text-[#DAA520] transition-colors cursor-default">Portafolio</span>
          <div className="w-8 h-[1px] bg-gray-800" />
          <span className="text-xs font-black tracking-[0.5em] text-gray-500 uppercase hover:text-white transition-colors cursor-default underline decoration-[#DAA520] decoration-2 underline-offset-8">Defensa 2026</span>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center w-full z-10 px-4">
        <PortalHero />
        <NavigationGrid />
      </section>

      {/* Footer */}
      <footer className="w-full py-12 flex flex-col items-center justify-center space-y-4 z-10">
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent" />
        <p className="text-[10px] font-black tracking-[0.6em] text-gray-700 uppercase">
          Ecosistema OLYMP-IA &copy; {new Date().getFullYear()} — Supremacía Digital
        </p>
      </footer>
    </main>
  );
}
