"use client";

import React from "react";
import Link from "next/link";
import { OrganicBackground } from "@/components/OrganicBackground";
import { Compass, Cpu, Calendar } from "lucide-react";

const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const card: React.CSSProperties = {
  background: "rgba(15, 23, 42, 0.45)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  padding: "3rem",
  borderRadius: "2.5rem",
  border: "1.5px solid rgba(255, 255, 255, 0.05)",
  boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
};

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative overflow-x-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <OrganicBackground />

      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "1250px", margin: "0 auto", padding: "0 2rem" }}>

        {/* ── HEADER ── */}
        <div className="flex flex-col items-start py-12 mb-4">
          <Link href="/presentacion" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            color: "rgb(116, 163, 135)", fontSize: "0.8rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            textDecoration: "none", marginBottom: "2.5rem",
          }} className="hover:text-[#10B981] hover:translate-x-[-4px] transition-all">
            <ArrowLeftIcon />
            <span>Volver a Presentación</span>
          </Link>

          <div className="mb-2">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">E P 1 · V I S I Ó N &amp; P R O D U C T O</span>
          </div>
          <h1 style={{ margin: "0 0 1rem", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.05em", fontFamily: "'Fraunces', serif", color: "#fafaf9", lineHeight: 1.05 }}>
            Visión &amp; <span style={{ fontStyle: "italic", color: "#10B981" }}>Ecosistema</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#94a3b8", maxWidth: "48rem", lineHeight: 1.6 }}>
            Estrategia de digitalización integral basada en los diagramas de arquitectura y procesos oficiales. Despliegue escalable y resolución de la brecha tecnológica gastronómica.
          </p>
        </div>

        {/* ── SECCIONES ── */}
        <div className="flex flex-col gap-8 pb-24">

          {/* 1 — ¿Qué es Menú Bytes? */}
          <section>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">P R O B L E M Á T I C A</h2>
              <p className="text-3xl font-black tracking-tight text-white">1. ¿Qué es Menú Bytes?</p>
            </div>
            <div style={card}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <p style={{ fontSize: "1.2rem", color: "#fafaf9", fontWeight: 600, fontFamily: "'Fraunces', serif", margin: 0, lineHeight: 1.5 }}>
                  Menú Bytes nació como solución a los tiempos de espera que hay actualmente en los locales de comida.
                </p>
                <p style={{ fontSize: "1.05rem", color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>
                  La industria gastronómica de pequeña y mediana escala opera habitualmente sobre esquemas manuales de alta latencia. Desde la espera de la atención por parte del garzón, hasta la toma de pedidos verbal y la transcripción a comandas físicas, se generan cuellos de botella sistemáticos entre el salón, la cocina y la zona de caja.
                </p>
                <div style={{ borderTop: "1px solid rgba(16,185,129,0.15)", paddingTop: "1.5rem" }}>
                  <p style={{ fontSize: "1rem", color: "#10B981", fontWeight: 700, margin: 0, lineHeight: 1.5 }}>
                    Esto degrada la eficiencia del flujo de trabajo, eleva la tasa de error humano en facturación y reduce el índice crítico de rotación de mesas. Nuestro sistema suma una mejora directa en los tiempos de atención y en la calidad absoluta del servicio.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2 — Problemática */}
          <section>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Á R B O L   D E   P R O B L E M A S</h2>
              <p className="text-3xl font-black tracking-tight text-white">2. Problemática e Ineficiencia</p>
            </div>
            <div style={card}>
              <p style={{ fontSize: "1.05rem", color: "#94a3b8", marginBottom: "2rem", lineHeight: 1.6 }}>
                Análisis de las causas raíz que degradan la experiencia del cliente y la rentabilidad del local.
              </p>
              <div style={{ background: "rgba(10, 37, 76, 0.45)", padding: "1.5rem", borderRadius: "1.5rem", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <img src="/arbol-problemas.svg" alt="Árbol de Problemas" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </section>

          {/* 3 — Flujo As-Is */}
          <section>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">F L U J O   A C T U A L</h2>
              <p className="text-3xl font-black tracking-tight text-white">3. Flujo Operativo (As-Is)</p>
            </div>
            <div style={card}>
              <p style={{ fontSize: "1.05rem", color: "#94a3b8", marginBottom: "2rem", lineHeight: 1.6 }}>
                Diagrama de latencias del modelo tradicional (Toma de pedido verbal y comanda física).
              </p>
              <div style={{ background: "rgba(10, 37, 76, 0.45)", padding: "1.5rem", borderRadius: "1.5rem", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <img src="/situacion-actual.svg" alt="Situación Actual" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </section>

          {/* 4 — Objetivos Estratégicos */}
          <section>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">O B J E T I V O S</h2>
              <p className="text-3xl font-black tracking-tight text-white">4. Objetivos Estratégicos</p>
            </div>
            <div style={card}>
              <div>
                <div style={{ marginBottom: "2rem" }}>
                  <h4 style={{ color: "#10B981", fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1rem" }}>Objetivo General</h4>
                  <p style={{ fontSize: "1.2rem", color: "#fafaf9", fontWeight: 600, fontFamily: "'Fraunces', serif" }}>
                    Desarrollar Menú Bytes: Plataforma SaaS multi-tenant con menú QR/NFC, pedidos realtime y panel admin optimizado.
                  </p>
                </div>
                <div style={{ borderTop: "1px solid rgba(16,185,129,0.15)", paddingTop: "1.5rem" }}>
                  <h4 style={{ color: "rgb(116, 163, 135)", fontSize: "0.9rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1rem" }}>Hitos Técnicos</h4>
                  <ul style={{ paddingLeft: "1.2rem", color: "#94a3b8", fontSize: "1rem", lineHeight: 1.6 }}>
                    <li style={{ marginBottom: "0.75rem" }}>Aislamiento de datos nivel RLS en PostgreSQL para escalabilidad Multi-tenant.</li>
                    <li>Motor Realtime para notificaciones instantáneas entre Salón, Cocina, Barra y Caja.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 5 — Solución */}
          <section>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">F L U J O   S O L U C I Ó N</h2>
              <p className="text-3xl font-black tracking-tight text-white">5. Solución Menú Bytes</p>
            </div>
            <div style={card}>
              <p style={{ fontSize: "1.05rem", color: "#94a3b8", marginBottom: "2rem", lineHeight: 1.6 }}>
                Flujo operativo (To-Be) demostrando la reducción de latencia en la toma de pedidos mediante interacción directa del cliente o dispositivo móvil del garzón.
              </p>
              <div style={{ background: "rgba(10, 37, 76, 0.45)", padding: "1.5rem", borderRadius: "1.5rem", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <img src="/flujo-solucion.svg" alt="Flujo Solución" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </section>

          {/* 6 — Pilares de Menú Bytes */}
          <section>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">P I L A R E S</h2>
              <p className="text-3xl font-black tracking-tight text-white">6. Pilares de Menú Bytes</p>
            </div>
            <div style={card}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  {
                    Icon: Compass,
                    title: "Visión & Estrategia",
                    tag: "RESUMEN DEL PROBLEMA Y NUESTRA SOLUCIÓN",
                    desc: "Los restaurantes sufren pérdidas críticas debido a la lentitud en la toma de pedidos y fricción en los pagos. Menú Bytes digitaliza el 100% del proceso: el cliente escanea el código QR de su mesa, ordena desde su móvil sin descargar aplicaciones, y la comanda viaja directo e instantáneamente a la pantalla de cocina y garzones, eliminando intermediarios y esperas.",
                  },
                  {
                    Icon: Cpu,
                    title: "Ingeniería Avanzada",
                    tag: "STACK FULL-STACK",
                    desc: "Arquitectura omnicanal robusta unificada en TypeScript: Next.js 16+ en el panel web y React Native + Expo para la app móvil. Lógica de negocio y esquemas de validación compartidos para erradicar duplicación de código e inconsistencias.",
                  },
                  {
                    Icon: Calendar,
                    title: "Gestión & Metodología",
                    tag: "GARANTÍA DE VALOR",
                    desc: "Roadmap de 18 semanas bajo SCRUM iterativo. Entregas funcionales continuas con validación del flujo operativo core completo en condiciones de producción real desde el Hito 1 (Semana 4).",
                  },
                ].map(({ Icon, title, tag, desc }) => (
                  <div key={title} style={{
                    background: "rgba(6, 11, 20, 0.5)",
                    borderRadius: "1.25rem",
                    padding: "1.25rem 1.5rem",
                    border: "1px solid rgba(16,185,129,0.1)",
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                  }}>
                    <div style={{
                      width: "2.5rem", height: "2.5rem", flexShrink: 0,
                      borderRadius: "50%", background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon style={{ width: "1rem", height: "1rem", color: "#10B981" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#10B981", marginBottom: "0.25rem" }}>{tag}</div>
                      <div style={{ fontSize: "1rem", fontWeight: 800, color: "#fafaf9", marginBottom: "0.5rem" }}>{title}</div>
                      <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
