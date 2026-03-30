"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, GitFork, ClipboardCheck, Calendar, Rocket, ChevronDown, ChevronUp, Mic } from "lucide-react";
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

export default function MethodologyPage() {
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
            Gestión & <br />
            <span style={{ fontStyle: "italic", color: "#C2440A" }}>Metodología Ágil</span>
          </h1>
          <p style={{ fontSize: "1.3rem", color: "#7A5035", maxWidth: "42rem", lineHeight: 1.6 }}>
            El éxito de Menú Bytes no solo reside en el código, sino en un proceso disciplinado de entrega de valor continua.
          </p>
        </div>

        {/* BLOQUE 1: SCRUM ADAPTADO */}
        <BlockContainer title="1. Ciclo de Vida: SCRUM Adaptado" icon={GitFork}>
          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{ color: "#7A5035", fontSize: "1.1rem", lineHeight: 1.8 }}>
              Trabajamos en **Sprints de 2 semanas**, asegurando que el feedback del usuario 
              sea incorporado rápidamente en el desarrollo.
            </p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "2rem", border: "1px solid rgba(180,120,60,0.1)", marginBottom: "2rem" }}>
            <img src="/metodologia-agil.svg" alt="Ciclo Ágil" style={{ width: "100%", height: "auto" }} />
          </div>

          <ScriptCard 
            title="Marco de Trabajo" 
            script="Trabajamos en ciclos iterativos de 2 semanas. Esto nos permitió pivotar rápido cuando descubrimos que las latencias operativas eran el mayor cuello de botella para las PYMEs gastronómicas."
          />
        </BlockContainer>

        {/* BLOQUE 2: CALIDAD & TDD */}
        <BlockContainer title="2. Cultura de Calidad (QA)" icon={ClipboardCheck}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginBottom: "2.5rem" }}>
            <div style={{ flex: "1 1 300px" }}>
              <p style={{ color: "#7A5035", fontSize: "1.05rem", lineHeight: 1.7 }}>
                Aplicamos **TDD (Test Driven Development)** en módulos críticos de facturación y seguridad, 
                garantizando que el sistema sea resistente a fallos.
              </p>
            </div>
            <div style={{ flex: "1 1 200px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {['TDD', 'Unit Tests', 'E2E', 'Linting'].map(t => (
                <div key={t} style={{ padding: "0.5rem", border: "1px solid rgba(194,68,10,0.2)", borderRadius: "0.5rem", textAlign: "center", fontSize: "0.8rem", color: "#C2440A", fontWeight: 700 }}>{t}</div>
              ))}
            </div>
          </div>
          <ScriptCard 
            title="Control de Calidad" 
            script="No entregamos nada sin validar. Aplicamos TDD en los módulos críticos de facturación para asegurar que cada comanda y pago esté siempre bien cuadrado, protegiendo el negocio del cliente."
          />
        </BlockContainer>

        {/* BLOQUE 3: PLANIFICACIÓN 16 SEMANAS */}
        <BlockContainer title="3. Cronograma de Impacto" icon={Calendar}>
          <div style={{ position: "relative", paddingLeft: "2rem", borderLeft: "2px solid #C2440A", marginBottom: "2.5rem" }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ color: "#C2440A", fontSize: "1rem", fontWeight: 800, marginBottom: "0.5rem" }}>Fase 1: Fundación (Semanas 1-4)</h4>
              <p style={{ color: "#7A5035", fontSize: "0.95rem" }}>Arquitectura, Base de Datos y Auth Multi-tenant.</p>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ color: "#C2440A", fontSize: "1rem", fontWeight: 800, marginBottom: "0.5rem" }}>Fase 2: Core Biz (Semanas 5-12)</h4>
              <p style={{ color: "#7A5035", fontSize: "0.95rem" }}>Gestión de Comandas, Motor Realtime y App Móvil.</p>
            </div>
            <div style={{ marginBottom: "0" }}>
              <h4 style={{ color: "#C2440A", fontSize: "1rem", fontWeight: 800, marginBottom: "0.5rem" }}>Fase 3: Integración & Lanzamiento (Semanas 13-16)</h4>
              <p style={{ color: "#7A5035", fontSize: "0.95rem" }}>Facturación Electrónica y Despliegue en Producción.</p>
            </div>
          </div>
          <ScriptCard 
            title="Roadmap" 
            script="Estamos en la fase final de un desarrollo de 16 semanas. Los próximos pasos incluyen la integración de pagos y el despliegue a una red masiva de locales en la región, marcando el inicio de la escalabilidad."
          />
        </BlockContainer>

        {/* BLOQUE 4: CIERRE INSTITUCIONAL */}
        <BlockContainer title="4. Conclusión & Futuro" icon={Rocket}>
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", color: "#2C1A0E", marginBottom: "1.5rem" }}>"Digitalizando el sabor, <br />automatizando el éxito."</h3>
            <p style={{ color: "#7A5035", fontSize: "1.1rem", maxWidth: "30rem", margin: "0 auto 2rem" }}>
              Menú Bytes no es solo software, es la transformación digital de las pequeñas y medianas empresas gastronómicas.
            </p>
            <Link href="/presentacion" style={{
              display: "inline-block", background: "#C2440A", color: "white", padding: "1rem 2.5rem", borderRadius: "100px", textDecoration: "none", fontWeight: 700, transition: "transform 0.3s ease"
            }} className="hover:scale-105 active:scale-95">
              Finalizar Presentación
            </Link>
          </div>
          <ScriptCard 
            title="Cierre" 
            script="Menú Bytes es más que código; es la transformación digital de las PYMEs. Estamos listos para llevar la eficiencia de las grandes cadenas a cada restaurante de barrio. Gracias."
          />
        </BlockContainer>

        {/* Footer info */}
        <div style={{ marginTop: "6rem", textAlign: "center", opacity: 0.6 }}>
          <p style={{ color: "#7A5035", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>
            Eje de Planificación · TPY1101 · 2026
          </p>
        </div>

      </div>
    </div>
  );
}
