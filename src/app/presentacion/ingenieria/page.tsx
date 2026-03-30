"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, Database, Zap, ShieldCheck, ChevronDown, ChevronUp, Mic } from "lucide-react";
import { OrganicBackground } from "@/components/OrganicBackground";
import { motion, AnimatePresence } from "framer-motion";

const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const BlockContainer = ({ title, children, icon: Icon }: { title: string; children: React.ReactNode; icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    style={{
      background: "rgba(255, 255, 255, 0.45)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      padding: "2.5rem",
      borderRadius: "2.5rem",
      border: "1.5px solid rgba(180,120,60,0.12)",
      marginBottom: "4rem",
      boxShadow: "0 15px 45px rgba(160,82,45,0.04)"
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
      <div style={{ color: "#C2440A", background: "rgba(194,68,10,0.1)", padding: "0.75rem", borderRadius: "1rem" }}>
        <Icon size={24} />
      </div>
      <h2 style={{ margin: 0, fontSize: "1.75rem", fontWeight: 800, color: "#2C1A0E", fontFamily: "'Fraunces', serif" }}>
        {title}
      </h2>
    </div>
    {children}
  </motion.div>
);

const ScriptCard = ({ title, script }: { title: string, script: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ 
      marginBottom: "1rem", 
      background: "rgba(44, 26, 14, 0.03)", 
      borderRadius: "1rem", 
      border: "1px solid rgba(44, 26, 14, 0.08)",
      overflow: "hidden"
    }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%", padding: "1rem 1.5rem", display: "flex", justifyContent: "space-between", 
          alignItems: "center", background: "none", border: "none", cursor: "pointer",
          textAlign: "left", color: "#2C1A0E", fontWeight: 700, fontSize: "0.9rem"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Mic size={16} color="#C2440A" />
          <span>Guion: {title}</span>
        </div>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ padding: "0 1.5rem 1.5rem", fontSize: "0.95rem", color: "#7A5035", lineHeight: 1.6, fontStyle: "italic" }}
          >
            "{script}"
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function EngineeringPage() {
  return (
    <div style={{
      position: "relative", width: "100%", minHeight: "100vh",
      display: "flex", alignItems: "flex-start", justifyContent: "center",
      padding: "4rem 1.5rem", overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <OrganicBackground />

      <div style={{
        position: "relative", zIndex: 2,
        width: "100%", maxWidth: "900px", margin: "0 auto",
      }}>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4rem" }}>
          <Link href="/presentacion" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            color: "#B07040", fontSize: "0.8rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            textDecoration: "none", transition: "all 0.3s ease",
          }} className="group hover:text-[#C2440A] hover:translate-x-[-4px]">
            <ArrowLeftIcon />
            <span>Volver a Presentación</span>
          </Link>
        </div>

        {/* Hero */}
        <div style={{ marginBottom: "6rem" }}>
          <h1 style={{
            margin: "0 0 1.5rem",
            fontSize: "clamp(3rem, 8vw, 5rem)",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            fontFamily: "'Fraunces', serif",
            color: "#2C1A0E",
            lineHeight: 1.05
          }}>
            Ingeniería de <br />
            <span style={{ fontStyle: "italic", color: "#C2440A" }}>Software Avanzada</span>
          </h1>
          <p style={{ fontSize: "1.3rem", color: "#7A5035", maxWidth: "42rem", lineHeight: 1.6 }}>
            Nuestra arquitectura no solo resuelve el problema de hoy, sino que está construida para escalar y asegurar cada dato de la operación.
          </p>
        </div>

        {/* BLOQUE 1: STACK CORE */}
        <BlockContainer title="1. Ecosistema Full-Stack" icon={Cpu}>
          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{ color: "#7A5035", fontSize: "1.1rem", lineHeight: 1.8 }}>
              Utilizamos un stack moderno unificado que permite la omnicanalidad absoluta. 
              <b> Next.js 14</b> para la administración pesada y <b>React Native / Expo</b> para la movilidad crítica en el salón.
            </p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "2rem", border: "1px solid rgba(180,120,60,0.1)", marginBottom: "2rem" }}>
            <img src="/stack-tecnologico.svg" alt="Stack Tecnológico" style={{ width: "100%", height: "auto" }} />
          </div>

          <ScriptCard 
            title="Stack Tecnológico" 
            script="Elegimos Next.js 14 para el panel web y React Native/Expo para el móvil. ¿Por qué? Porque compartimos lógica de negocio y aseguramos que el garzón tenga una app nativa rápida mientras el dueño revisa sus ventas desde cualquier navegador."
          />
        </BlockContainer>

        {/* BLOQUE 2: SEGURIDAD RLS */}
        <BlockContainer title="2. Aislamiento de Datos (RLS)" icon={ShieldCheck}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginBottom: "2rem" }}>
            <div style={{ flex: "1 1 300px" }}>
              <h4 style={{ color: "#C2440A", fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1rem" }}>Seguridad nivel Pro</h4>
              <p style={{ color: "#7A5035", fontSize: "1.05rem", lineHeight: 1.7 }}>
                Implementamos <b>Row Level Security (RLS)</b> directamente en PostgreSQL. Esto garantiza que cada restaurante tenga un muro virtual infranqueable.
              </p>
            </div>
            <div style={{ flex: "1 1 200px", background: "rgba(194,68,10,0.05)", padding: "1.5rem", borderRadius: "1.5rem" }}>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.9rem", color: "#2C1A0E", lineHeight: 1.6 }}>
                <li>Aislamiento Multi-tenant</li>
                <li>Políticas dinámicas de acceso</li>
                <li>Cifrado JWT nativo</li>
              </ul>
            </div>
          </div>
          <ScriptCard 
            title="Datos y RLS" 
            script="La seguridad es innegociable. Usamos Row Level Security en PostgreSQL. Esto significa que los datos de 'Restaurante A' nunca, bajo ninguna circunstancia, serán visibles para el 'Restaurante B', aunque compartan la misma base de datos."
          />
        </BlockContainer>

        {/* BLOQUE 3: REALTIME */}
        <BlockContainer title="3. Experiencia en Tiempo Real" icon={Zap}>
          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{ color: "#7A5035", fontSize: "1.1rem", lineHeight: 1.8 }}>
              Eliminamos el 'Refresh'. Las comandas viajan vía <b>WebSockets (Supabase Realtime)</b> desde el cliente/garzón hasta la cocina en menos de 200ms.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
            {['Cero Latencia', 'Live Tracing', 'Auto-Sync'].map((tag) => (
              <div key={tag} style={{ textAlign: "center", padding: "1rem", background: "rgba(194,68,10,0.1)", borderRadius: "1rem", color: "#C2440A", fontWeight: 800, fontSize: "0.85rem" }}>
                {tag}
              </div>
            ))}
          </div>
          <ScriptCard 
            title="Realtime" 
            script="La magia ocurre en la cocina. Gracias a los WebSockets de Supabase Realtime, la comanda aparece en la pantalla del chef al instante. Sin recargar, sin esperas, garantizando un servicio fluido."
          />
        </BlockContainer>

        {/* BLOQUE 4: CALIDAD */}
        <BlockContainer title="4. Estandarización & Calidad" icon={Database}>
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ color: "#7A5035", fontSize: "1.1rem", lineHeight: 1.8 }}>
              Un ecosistema profesional requiere orden. Usamos <b>Turborepo</b> para gestionar nuestro monorepo, asegurando builds veloces y consistencia total entre plataformas.
            </p>
          </div>
          <div style={{ borderLeft: "3px solid #C2440A", paddingLeft: "1.5rem", marginBottom: "2rem" }}>
            <p style={{ margin: 0, fontSize: "1rem", color: "#2C1A0E", fontWeight: 700 }}>"No es solo código, es ingeniería de alta disponibilidad."</p>
          </div>
          <ScriptCard 
            title="Monorepo y Calidad" 
            script="Para trabajar de forma profesional, implementamos un Monorepo con Turborepo. Esto nos permite testear todo el ecosistema de forma simultánea, garantizando que cada pieza funcione antes de subir a producción."
          />
        </BlockContainer>

        {/* Footer info */}
        <div style={{ marginTop: "6rem", textAlign: "center", opacity: 0.6 }}>
          <p style={{ color: "#7A5035", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>
            Eje de Robustez Técnica · Software Engineering
          </p>
        </div>

      </div>
    </div>
  );
}
