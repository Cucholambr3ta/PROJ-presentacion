"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PortalHero = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-6 pt-20 pb-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-bold tracking-tight text-white"
      >
        Menu <span className="text-[#DAA520]">Bytes</span>
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="flex flex-col space-y-4"
      >
        <p className="text-xl md:text-2xl font-light text-gray-400 tracking-wide uppercase">
          Eleva. Digitaliza. Inspira.
        </p>
        <p className="max-w-2xl text-gray-500 text-lg leading-relaxed px-4">
          Revolucionando la experiencia culinaria con menús digitales sofisticados e interactivos, 
          diseñados para la innovación gastronómica de vanguardia.
        </p>
      </motion.div>
    </div>
  );
};

export default PortalHero;
