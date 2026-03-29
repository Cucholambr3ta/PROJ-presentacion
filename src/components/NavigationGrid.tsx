"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavigationGrid = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 px-8 pt-16 pb-32 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="flex-1"
      >
        <Link 
          href="/mockups"
          className="group block relative p-[1px] rounded-2xl bg-gradient-to-br from-[#DAA520]/40 to-transparent transition-all duration-500 hover:from-[#DAA520]/60"
        >
          <div className="relative glass-gold rounded-2xl p-12 flex flex-col items-center space-y-6 overflow-hidden min-h-[320px] justify-center">
            {/* Inner Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <span className="text-xs font-black tracking-[0.5em] uppercase text-[#DAA520]">Experiencia</span>
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-4xl font-bold text-white tracking-tight">Explorar Mockups</h3>
              <div className="w-12 h-[1px] bg-[#DAA520]/30 group-hover:w-24 transition-all duration-700" />
            </div>
            <p className="text-center text-gray-400 text-base font-light max-w-[280px]">Prototipos interactivos de alta fidelidad para el sistema Menu Bytes.</p>
          </div>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 0.1 }}
        className="flex-1"
      >
        <Link 
          href="/presentacion"
          className="group block relative p-[1px] rounded-2xl bg-gradient-to-br from-white/20 to-transparent transition-all duration-500 hover:from-white/30"
        >
          <div className="relative glass rounded-2xl p-12 flex flex-col items-center space-y-6 overflow-hidden min-h-[320px] justify-center">
            {/* Inner Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <span className="text-xs font-black tracking-[0.5em] uppercase text-gray-500">Contenido</span>
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-4xl font-bold text-white tracking-tight">Ver Presentación</h3>
              <div className="w-12 h-[1px] bg-white/10 group-hover:w-24 transition-all duration-700" />
            </div>
            <p className="text-center text-gray-400 text-base font-light max-w-[280px]">Defensa de título, arquitectura técnica y casos de uso.</p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default NavigationGrid;
