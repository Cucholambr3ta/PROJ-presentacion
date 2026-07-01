"use client";

import React from "react";
import Link from "next/link";
import { OrganicBackground } from "@/components/OrganicBackground";

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

const Label = ({ text }: { text: string }) => (
  <div style={{ color: "#10B981", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
    {text}
  </div>
);

const SectionTitle = ({ text }: { text: string }) => (
  <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.8rem", color: "#fafaf9", fontWeight: 800, margin: "0 0 2rem 0", lineHeight: 1.2 }}>
    {text}
  </h2>
);

export default function MethodologyPage() {
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
            <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">E P 2 · G E S T I Ó N &amp; M E T O D O L O G Í A</span>
          </div>
          <h1 style={{ margin: "0 0 1rem", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.05em", fontFamily: "'Fraunces', serif", color: "#fafaf9", lineHeight: 1.05 }}>
            Gestión &amp; <span style={{ fontStyle: "italic", color: "#10B981" }}>Metodología Ágil</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#94a3b8", maxWidth: "48rem", lineHeight: 1.6 }}>
            El éxito de Menú Bytes no solo reside en el código, sino en un proceso disciplinado de entrega de valor continua.
          </p>
        </div>

        {/* ── SECCIONES ── */}
        <div className="flex flex-col gap-8 pb-24">

          {/* 01 — CRONOGRAMA */}
          <section>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">C R O N O G R A M A</h2>
              <p className="text-3xl font-black tracking-tight text-white">Estructura de Fases (18 Semanas)</p>
            </div>
            <div style={card}>
              <Label text="01 — CRONOGRAMA DE IMPACTO" />
              <SectionTitle text="Estructura de Fases (18 Semanas)" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
                <div style={{ background: "rgba(15, 23, 42, 0.35)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "1rem", padding: "1.5rem" }}>
                  <h3 style={{ color: "#fafaf9", fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.75rem" }}>INICIO (W1 - W3)</h3>
                  <ul style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.5, paddingLeft: "1.2rem", margin: 0 }}>
                    <li style={{ marginBottom: "0.5rem" }}>SAD & Requisitos</li>
                    <li style={{ marginBottom: "0.5rem" }}>Esquema BD</li>
                    <li>Design System</li>
                  </ul>
                </div>

                <div style={{ background: "rgba(16, 185, 129, 0.03)", border: "1px solid #10B981", boxShadow: "0 15px 35px rgba(16,185,129,0.08)", borderRadius: "1rem", padding: "1.5rem", position: "relative" }}>
                  <div style={{ position: "absolute", top: "-10px", right: "10px", background: "#10B981", color: "#030712", fontSize: "0.65rem", fontWeight: 900, padding: "2px 8px", borderRadius: "4px", boxShadow: "0 0 10px rgba(16,185,129,0.5)" }} className="animate-pulse">
                    SEMANA 11 (ACTUAL)
                  </div>
                  <h3 style={{ color: "#fafaf9", fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.75rem 0" }}>DESARROLLO (W4 - W12)</h3>
                  <div style={{ display: "inline-block", background: "rgba(16,185,129,0.12)", color: "#10B981", border: "1px solid rgba(16,185,129,0.3)", padding: "0.25rem 0.5rem", borderRadius: "0.5rem", fontSize: "0.7rem", fontWeight: 800, marginBottom: "1rem" }}>
                    ★ HITO 1 (W4): Flujo Core
                  </div>
                  <ul style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.5, paddingLeft: "1.2rem", margin: 0 }}>
                    <li style={{ marginBottom: "0.5rem" }}>Edge & Realtime (Héctor)</li>
                    <li style={{ marginBottom: "0.5rem" }}>UI Next.js (Alejandro)</li>
                    <li>Monorepo (José)</li>
                  </ul>
                </div>

                <div style={{ background: "rgba(15, 23, 42, 0.35)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "1rem", padding: "1.5rem" }}>
                  <h3 style={{ color: "#fafaf9", fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.75rem" }}>CIERRE (W13 - W18)</h3>
                  <ul style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.5, paddingLeft: "1.2rem", margin: 0 }}>
                    <li style={{ marginBottom: "0.5rem" }}>QA & Stress</li>
                    <li style={{ marginBottom: "0.5rem" }}>Hardening (RLS)</li>
                    <li>Entrega Final</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 02 — GANTT */}
          <section>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">C A R T A   G A N T T</h2>
              <p className="text-3xl font-black tracking-tight text-white">Roadmap Semanal — Vista Notion</p>
            </div>
            <div style={card}>
              <Label text="02 — CARTA GANTT EN VIVO" />
              <SectionTitle text="Roadmap Semanal — Vista Notion" />
              <div style={{ background: "rgba(15, 23, 42, 0.35)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "1rem", overflow: "hidden" }}>
                <div style={{ padding: "1rem", borderBottom: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
                  <span style={{ color: "#94a3b8", fontSize: "0.8rem", fontWeight: 600 }}>Gantt DUOC · Roadmap 18 Semanas · Tiempo Real</span>
                </div>
                <img src="/gantt.png" alt="Carta Gantt Menu Bytes" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
                <div style={{ padding: "0.75rem 1rem", background: "rgba(15, 23, 42, 0.15)", borderTop: "1px solid rgba(255, 255, 255, 0.05)", color: "#10B981", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Carta Gantt · TPY1101 · 2026
                </div>
              </div>
            </div>
          </section>

          {/* 03 — INTEGRANTES */}
          <section>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">E Q U I P O</h2>
              <p className="text-3xl font-black tracking-tight text-white">Asignación de Roles por Objetivo</p>
            </div>
            <div style={card}>
              <Label text="03 — INTEGRANTES" />
              <SectionTitle text="Asignación de Roles por Objetivo" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ background: "rgba(15, 23, 42, 0.35)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "1rem", padding: "1.25rem" }}>
                  <div style={{ display: "inline-block", background: "rgba(59,130,246,0.12)", color: "#3b82f6", padding: "0.2rem 0.6rem", borderRadius: "0.5rem", fontSize: "0.7rem", fontWeight: 800, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                    PRODUCT OWNER/MANAGER
                  </div>
                  <h3 style={{ color: "#fafaf9", fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>José Medina</h3>
                  <p style={{ color: "#94a3b8", fontSize: "0.85rem", margin: 0, lineHeight: 1.4 }}>Product Owner / Product Manager</p>
                </div>
                <div style={{ background: "rgba(15, 23, 42, 0.35)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "1rem", padding: "1.25rem" }}>
                  <div style={{ display: "inline-block", background: "rgba(16,185,129,0.12)", color: "#10b981", padding: "0.2rem 0.6rem", borderRadius: "0.5rem", fontSize: "0.7rem", fontWeight: 800, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                    QA & DEV
                  </div>
                  <h3 style={{ color: "#fafaf9", fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>Héctor Robledo</h3>
                  <p style={{ color: "#94a3b8", fontSize: "0.85rem", margin: 0, lineHeight: 1.4 }}>QA / Desarrollador</p>
                </div>
                <div style={{ background: "rgba(15, 23, 42, 0.35)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "1rem", padding: "1.25rem" }}>
                  <div style={{ display: "inline-block", background: "rgba(139,92,246,0.12)", color: "#8b5cf6", padding: "0.2rem 0.6rem", borderRadius: "0.5rem", fontSize: "0.7rem", fontWeight: 800, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                    UX/UI & DEV
                  </div>
                  <h3 style={{ color: "#fafaf9", fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>Alejandro Placencia</h3>
                  <p style={{ color: "#94a3b8", fontSize: "0.85rem", margin: 0, lineHeight: 1.4 }}>Diseñador UX UI y Desarrollador</p>
                </div>
              </div>
              <div style={{ borderLeft: "3px solid #10B981", background: "rgba(16,185,129,0.03)", padding: "1.25rem 1.5rem", borderRadius: "0 1rem 1rem 0" }}>
                <p style={{ color: "#fafaf9", fontSize: "0.95rem", fontStyle: "italic", margin: 0, lineHeight: 1.5 }}>
                  &ldquo;Cada rol elimina dependencias: mientras Héctor consolida la capa de datos, Alejandro construye las interfaces y José garantiza la coherencia arquitectónica.&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* 04 — CICLO DE VIDA */}
          <section>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">M E T O D O L O G Í A</h2>
              <p className="text-3xl font-black tracking-tight text-white">SCRUM Adaptado: Entrega Continua</p>
            </div>
            <div style={card}>
              <Label text="04 — CICLO DE VIDA" />
              <SectionTitle text="SCRUM Adaptado: Entrega Continua" />
              <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.7 }}>
                Trabajamos en <strong style={{ color: "#fafaf9" }}>Sprints semanales</strong>, asegurando que el feedback sea incorporado rápidamente. La elección Ágil sobre cascada responde a la necesidad de validar el <strong style={{ color: "#10b981" }}>Hito 1 (W4)</strong> con el flujo operativo completo funcionando. Solo Ágil garantiza ese punto de control temprano con un equipo de 3 personas y un plazo hermético.
              </p>
            </div>
          </section>

          {/* 05 — COHERENCIA TÉCNICA */}
          <section>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">S T A C K</h2>
              <p className="text-3xl font-black tracking-tight text-white">Stack Proporcional al Problema</p>
            </div>
            <div style={card}>
              <Label text="05 — COHERENCIA TÉCNICA" />
              <SectionTitle text="Stack Proporcional al Problema" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
                {[
                  { tag: "EFICIENCIA", title: "Supabase", desc: "Delegamos infraestructura al motor administrado. El 100% va a la lógica." },
                  { tag: "MONOREPO", title: "Turborepo", desc: "3 apps comparten fuente de verdad. Cero inconsistencias paralelas." },
                  { tag: "SEGURIDAD", title: "Postgres RLS", desc: "Aislamiento a nivel de fila (Row Level Security) multi-tenant nativo." },
                ].map((item) => (
                  <div key={item.title} style={{ background: "rgba(15, 23, 42, 0.35)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "1rem", padding: "1.5rem" }}>
                    <div style={{ display: "inline-block", background: "rgba(16,185,129,0.12)", color: "#10b981", padding: "0.2rem 0.6rem", borderRadius: "0.5rem", fontSize: "0.7rem", fontWeight: 800, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                      {item.tag}
                    </div>
                    <h3 style={{ color: "#fafaf9", fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.5rem 0" }}>{item.title}</h3>
                    <p style={{ color: "#94a3b8", fontSize: "0.85rem", margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ borderLeft: "3px solid #10B981", background: "rgba(16,185,129,0.03)", padding: "1.5rem", borderRadius: "0 1rem 1rem 0" }}>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.4rem", color: "#fafaf9", margin: "0 0 0.5rem 0", lineHeight: 1.2 }}>
                  &ldquo;Digitalizando el sabor, automatizando el éxito.&rdquo;
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.95rem", margin: 0, lineHeight: 1.5 }}>
                  La metodología Ágil y el stack son la respuesta proporcional al plazo hermético de 18 semanas.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
