"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavigationGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-8 pt-20 pb-40 max-w-6xl mx-auto w-full z-20">
      {/* Opción 1: Mockups */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        <Link 
          href="/mockups"
          className="block relative p-[2px] rounded-3xl bg-gradient-to-b from-[#DAA520]/60 to-transparent transition-all duration-700 hover:from-[#DAA520]"
        >
          <div className="relative glass-gold rounded-[22px] p-12 flex flex-col items-center text-center space-y-8 min-h-[400px] justify-center overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-radial-gradient from-[#DAA520]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <span className="text-xs font-black tracking-[0.5em] text-[#DAA520] uppercase bg-[#DAA520]/10 px-4 py-2 rounded-full">Prototipos</span>
            
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-white tracking-tight group-hover:scale-105 transition-transform duration-500">Explorar Mockups</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-[320px]">
                Inmersión visual en la interfaz de Menu Bytes. Diseños interactivos de alta fidelidad.
              </p>
            </div>

            <div className="pt-4">
              <div className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm font-bold tracking-widest group-hover:bg-[#DAA520] group-hover:text-black transition-all duration-500 uppercase">
                Iniciar Demo
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Opción 2: Presentación */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative group"
      >
        <Link 
          href="/presentacion"
          className="block relative p-[2px] rounded-3xl bg-gradient-to-b from-white/30 to-transparent transition-all duration-700 hover:from-white/60"
        >
          <div className="relative glass rounded-[22px] p-12 flex flex-col items-center text-center space-y-8 min-h-[400px] justify-center overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <span className="text-xs font-black tracking-[0.5em] text-gray-500 uppercase bg-white/5 px-4 py-2 rounded-full">Académico</span>
            
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-white tracking-tight group-hover:scale-105 transition-transform duration-500">Ver Presentación</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-[320px]">
                Arquitectura, defensa técnica y fundamentación del proyecto de grado.
              </p>
            </div>

            <div className="pt-4">
              <div className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm font-bold tracking-widest group-hover:bg-white group-hover:text-black transition-all duration-500 uppercase">
                Ver Contenido
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default NavigationGrid;
