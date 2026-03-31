"use client";

import React from "react";
import Link from "next/link";
import { OrganicBackground } from "@/components/OrganicBackground";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";

const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const Label = ({ text }: { text: string }) => (
  <div style={{ color: "rgb(176, 112, 64)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
    {text}
  </div>
);

const SectionTitle = ({ text }: { text: string }) => (
  <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.8rem", color: "rgb(44, 26, 14)", fontWeight: 800, margin: "0 0 2rem 0", lineHeight: 1.2 }}>
    {text}
  </h2>
);

export default function MethodologyPage() {
  return (
    <div style={{
      position: "relative", width: "100%", minHeight: "100vh",
      display: "flex", alignItems: "flex-start", justifyContent: "center",
      fontFamily: "'DM Sans', sans-serif",
      backgroundColor: "#fcf7f1",
    }}>
      <OrganicBackground />

      <div style={{
        position: "relative", zIndex: 2,
        width: "100%", maxWidth: "1250px", margin: "0 auto",
        padding: "0 2rem"
      }}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">

          {/* LEFT COLUMN: FIXED CONTEXT */}
          <div className="md:sticky md:top-[10vh] md:h-[80vh] flex flex-col justify-center py-12">
            <Link href="/presentacion" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              color: "rgb(176, 112, 64)", fontSize: "0.8rem", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none", marginBottom: "3rem",
            }} className="group hover:text-[#c2440a] hover:translate-x-[-4px] transition-all">
              <ArrowLeftIcon />
              <span>Volver a Presentación</span>
            </Link>

            <h1 style={{
              margin: "0 0 1.5rem",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              fontFamily: "'Fraunces', serif",
              color: "rgb(44, 26, 14)",
              lineHeight: 1.05
            }}>
              Gestión & <br />
              <span style={{ fontStyle: "italic", color: "#c2440a" }}>Metodología Ágil</span>
            </h1>
            <p style={{ fontSize: "1.2rem", color: "rgb(122, 80, 53)", maxWidth: "30rem", lineHeight: 1.6 }}>
              El éxito de Menú Bytes no solo reside en el código, sino en un proceso disciplinado de entrega de valor continua.
            </p>

            <div style={{ marginTop: "3rem", opacity: 0.5 }}>
              <p style={{ color: "rgb(122, 80, 53)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 800 }}>
                Eje de Planificación · TPY1101 · 2026
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY STACK */}
          <ContainerScroll className="min-h-[500vh] py-24 space-y-[20vh]">

            {/* CARD 01 - CRONOGRAMA */}
            <CardSticky index={0} incrementY={60} incrementZ={0} className="w-full" style={{ top: `calc(10vh + 0px)` }}>
              <div style={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                padding: "3rem",
                borderRadius: "2.5rem",
                border: "1.5px solid rgba(180,120,60,0.15)",
                boxShadow: "0 25px 50px rgba(160,82,45,0.08)",
                minHeight: "55vh",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(194, 68, 10, 0.05)"
              }}>
                <Label text="01 — CRONOGRAMA DE IMPACTO" />
                <SectionTitle text="Estructura de Fases (16 Semanas)" />
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
                  <div style={{ background: "#ffffff", border: "1px solid rgba(44, 26, 14, 0.10)", borderRadius: "1rem", padding: "1.5rem" }}>
                    <h3 style={{ color: "rgb(44, 26, 14)", fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.75rem" }}>INICIO (W1 - W3)</h3>
                    <ul style={{ color: "rgb(122, 80, 53)", fontSize: "0.95rem", lineHeight: 1.5, paddingLeft: "1.2rem", margin: 0 }}>
                      <li style={{ marginBottom: "0.5rem" }}>SAD & Requisitos</li>
                      <li style={{ marginBottom: "0.5rem" }}>Esquema BD</li>
                      <li>Design System</li>
                    </ul>
                  </div>

                  <div style={{ background: "rgba(194,68,10,0.06)", border: "1px solid #c2440a", boxShadow: "0 15px 35px rgba(194,68,10,0.12)", borderRadius: "1rem", padding: "1.5rem" }}>
                    <h3 style={{ color: "rgb(44, 26, 14)", fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.75rem 0" }}>DESARROLLO (W4 - W12)</h3>
                    <div style={{ display: "inline-block", background: "rgba(194,68,10,0.12)", color: "#c2440a", border: "1px solid rgba(194,68,10,0.3)", padding: "0.25rem 0.5rem", borderRadius: "0.5rem", fontSize: "0.7rem", fontWeight: 800, marginBottom: "1rem" }}>
                      ★ HITO 1 (W4): Flujo Core
                    </div>
                    <ul style={{ color: "rgb(122, 80, 53)", fontSize: "0.95rem", lineHeight: 1.5, paddingLeft: "1.2rem", margin: 0 }}>
                      <li style={{ marginBottom: "0.5rem" }}>Edge & Realtime (Hector)</li>
                      <li style={{ marginBottom: "0.5rem" }}>UI Next.js (Alejandro)</li>
                      <li>Monorepo (Jose Luis)</li>
                    </ul>
                  </div>

                  <div style={{ background: "#ffffff", border: "1px solid rgba(44, 26, 14, 0.10)", borderRadius: "1rem", padding: "1.5rem" }}>
                    <h3 style={{ color: "rgb(44, 26, 14)", fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.75rem" }}>CIERRE (W13 - W16)</h3>
                    <ul style={{ color: "rgb(122, 80, 53)", fontSize: "0.95rem", lineHeight: 1.5, paddingLeft: "1.2rem", margin: 0 }}>
                      <li style={{ marginBottom: "0.5rem" }}>QA & Stress</li>
                      <li style={{ marginBottom: "0.5rem" }}>Hardening (RLS)</li>
                      <li>Entrega Final</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardSticky>

            {/* CARD 02 - GANTT */}
            <CardSticky index={1} incrementY={60} incrementZ={0} className="w-full" style={{ top: `calc(10vh + 30px)` }}>
              <div style={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                padding: "3rem",
                borderRadius: "2.5rem",
                border: "1.5px solid rgba(180,120,60,0.15)",
                boxShadow: "0 25px 50px rgba(160,82,45,0.08)",
                minHeight: "55vh",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(31, 56, 100, 0.05)"
              }}>
                <Label text="02 — CARTA GANTT EN VIVO" />
                <SectionTitle text="Roadmap Semanal — Vista Notion" />

                <div style={{ background: "#ffffff", border: "1px solid rgba(44, 26, 14, 0.10)", borderRadius: "1rem", overflow: "hidden", marginTop: "1rem" }}>
                  <div style={{ padding: "1rem", borderBottom: "1px solid rgba(44, 26, 14, 0.10)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#c2440a" }} />
                    <span style={{ color: "rgb(122, 80, 53)", fontSize: "0.8rem", fontWeight: 600 }}>Gantt DUOC · Roadmap 16 Semanas · Tiempo Real</span>
                  </div>
                  
                  <img 
                    src="/gantt.png" 
                    alt="Carta Gantt Menu Bytes" 
                    style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} 
                  />
                  <div style={{ padding: "0.75rem 1rem", background: "rgba(44, 26, 14, 0.02)", borderTop: "1px solid rgba(44, 26, 14, 0.10)", color: "rgb(176, 112, 64)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Carta Gantt · TPY1101 · 2026
                  </div>
                </div>
              </div>
            </CardSticky>

            {/* CARD 03 - INTEGRANTES */}
            <CardSticky index={2} incrementY={60} incrementZ={0} className="w-full" style={{ top: `calc(10vh + 60px)` }}>
              <div style={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                padding: "3rem",
                borderRadius: "2.5rem",
                border: "1.5px solid rgba(180,120,60,0.15)",
                boxShadow: "0 25px 50px rgba(160,82,45,0.08)",
                minHeight: "55vh",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(124, 58, 237, 0.05)"
              }}>
                <Label text="03 — INTEGRANTES" />
                <SectionTitle text="Asignación de Roles por Objetivo" />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
                  {/* Card JL */}
                  <div style={{ background: "#ffffff", border: "1px solid rgba(44, 26, 14, 0.10)", borderRadius: "1rem", padding: "1.25rem" }}>
                    <div style={{ display: "inline-block", background: "rgba(59,130,246,0.1)", color: "#2563eb", padding: "0.2rem 0.6rem", borderRadius: "0.5rem", fontSize: "0.7rem", fontWeight: 800, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                      PRODUCT OWNER/MANAGER
                    </div>
                    <h3 style={{ color: "rgb(44, 26, 14)", fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>Jose Luis Medina</h3>
                    <p style={{ color: "rgb(122, 80, 53)", fontSize: "0.85rem", margin: 0, lineHeight: 1.4 }}>Product Owner / Product Manager</p>
                  </div>

                  {/* Card Hector */}
                  <div style={{ background: "#ffffff", border: "1px solid rgba(44, 26, 14, 0.10)", borderRadius: "1rem", padding: "1.25rem" }}>
                    <div style={{ display: "inline-block", background: "rgba(194,68,10,0.12)", color: "#c2440a", padding: "0.2rem 0.6rem", borderRadius: "0.5rem", fontSize: "0.7rem", fontWeight: 800, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                      QA & DEV
                    </div>
                    <h3 style={{ color: "rgb(44, 26, 14)", fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>Hector Robledo</h3>
                    <p style={{ color: "rgb(122, 80, 53)", fontSize: "0.85rem", margin: 0, lineHeight: 1.4 }}>QA / Desarrollador</p>
                  </div>

                  {/* Card Alejandro */}
                  <div style={{ background: "#ffffff", border: "1px solid rgba(44, 26, 14, 0.10)", borderRadius: "1rem", padding: "1.25rem" }}>
                    <div style={{ display: "inline-block", background: "rgba(124,58,237,0.1)", color: "#7c3aed", padding: "0.2rem 0.6rem", borderRadius: "0.5rem", fontSize: "0.7rem", fontWeight: 800, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                      UX/UI & DEV
                    </div>
                    <h3 style={{ color: "rgb(44, 26, 14)", fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>Alejandro Placencia</h3>
                    <p style={{ color: "rgb(122, 80, 53)", fontSize: "0.85rem", margin: 0, lineHeight: 1.4 }}>Diseñador UX UI y Desarrollador</p>
                  </div>
                </div>

                <div style={{ borderLeft: "3px solid #c2440a", background: "rgba(194,68,10,0.06)", padding: "1.25rem 1.5rem", borderRadius: "0 1rem 1rem 0" }}>
                  <p style={{ color: "rgb(44, 26, 14)", fontSize: "0.95rem", fontStyle: "italic", margin: 0, lineHeight: 1.5 }}>
                    "Cada rol elimina dependencias: mientras Hector consolida la capa de datos, Alejandro construye las interfaces y Jose Luis garantiza la coherencia arquitectónica."
                  </p>
                </div>
              </div>
            </CardSticky>

            {/* CARD 04 - CICLO DE VIDA */}
            <CardSticky index={3} incrementY={60} incrementZ={0} className="w-full" style={{ top: `calc(10vh + 90px)` }}>
              <div style={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                padding: "3rem",
                borderRadius: "2.5rem",
                border: "1.5px solid rgba(180,120,60,0.15)",
                boxShadow: "0 25px 50px rgba(160,82,45,0.08)",
                minHeight: "45vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "rgba(31, 122, 69, 0.05)"
              }}>
                <Label text="04 — CICLO DE VIDA" />
                <SectionTitle text="SCRUM Adaptado: Entrega Continua" />
                
                <p style={{ fontSize: "1.1rem", color: "rgb(122, 80, 53)", lineHeight: 1.7, maxWidth: "100%" }}>
                  Trabajamos en <strong style={{ color: "rgb(44, 26, 14)" }}>Sprints semanales</strong>, asegurando que el feedback sea incorporado rápidamente. La elección Ágil sobre cascada responde a la necesidad de validar el <strong style={{ color: "#c2440a" }}>Hito 1 (W4)</strong> con el flujo operativo completo funcionando. Solo Ágil garantiza ese punto de control temprano con un equipo de 3 personas y un plazo hermético.
                </p>
              </div>
            </CardSticky>

            {/* CARD 05 - COHERENCIA TÉCNICA */}
            <CardSticky index={4} incrementY={60} incrementZ={0} className="w-full" style={{ top: `calc(10vh + 120px)` }}>
              <div style={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                padding: "3rem",
                borderRadius: "2.5rem",
                border: "1.5px solid rgba(180,120,60,0.15)",
                boxShadow: "0 25px 50px rgba(160,82,45,0.08)",
                minHeight: "55vh",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(31, 122, 69, 0.05)"
              }}>
                <Label text="05 — COHERENCIA TÉCNICA" />
                <SectionTitle text="Stack Proporcional al Problema" />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
                  <div style={{ background: "#ffffff", border: "1px solid rgba(44, 26, 14, 0.10)", borderRadius: "1rem", padding: "1.5rem" }}>
                    <div style={{ display: "inline-block", background: "rgba(194,68,10,0.12)", color: "#c2440a", padding: "0.2rem 0.6rem", borderRadius: "0.5rem", fontSize: "0.7rem", fontWeight: 800, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                      EFICIENCIA
                    </div>
                    <h3 style={{ color: "rgb(44, 26, 14)", fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.5rem 0" }}>Supabase</h3>
                    <p style={{ color: "rgb(122, 80, 53)", fontSize: "0.85rem", margin: 0, lineHeight: 1.5 }}>
                      Delegamos infraestructura al motor administrado. El 100% va a la lógica.
                    </p>
                  </div>

                  <div style={{ background: "#ffffff", border: "1px solid rgba(44, 26, 14, 0.10)", borderRadius: "1rem", padding: "1.5rem" }}>
                    <div style={{ display: "inline-block", background: "rgba(194,68,10,0.12)", color: "#c2440a", padding: "0.2rem 0.6rem", borderRadius: "0.5rem", fontSize: "0.7rem", fontWeight: 800, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                      MONOREPO
                    </div>
                    <h3 style={{ color: "rgb(44, 26, 14)", fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.5rem 0" }}>Turborepo</h3>
                    <p style={{ color: "rgb(122, 80, 53)", fontSize: "0.85rem", margin: 0, lineHeight: 1.5 }}>
                      3 apps comparten fuente de verdad. Cero inconsistencias paralelas.
                    </p>
                  </div>

                  <div style={{ background: "#ffffff", border: "1px solid rgba(44, 26, 14, 0.10)", borderRadius: "1rem", padding: "1.5rem" }}>
                    <div style={{ display: "inline-block", background: "rgba(194,68,10,0.12)", color: "#c2440a", padding: "0.2rem 0.6rem", borderRadius: "0.5rem", fontSize: "0.7rem", fontWeight: 800, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                      SEGURIDAD
                    </div>
                    <h3 style={{ color: "rgb(44, 26, 14)", fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.5rem 0" }}>Postgres RLS</h3>
                    <p style={{ color: "rgb(122, 80, 53)", fontSize: "0.85rem", margin: 0, lineHeight: 1.5 }}>
                      Aislamiento a nivel de fila (Row Level Security) multi-tenant nativo.
                    </p>
                  </div>
                </div>

                <div style={{ borderLeft: "3px solid #c2440a", background: "rgba(194,68,10,0.06)", padding: "1.5rem", borderRadius: "0 1rem 1rem 0" }}>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.4rem", color: "rgb(44, 26, 14)", margin: "0 0 0.5rem 0", lineHeight: 1.2 }}>
                    "Digitalizando el sabor, automatizando el éxito."
                  </h3>
                  <p style={{ color: "rgb(122, 80, 53)", fontSize: "0.95rem", margin: 0, lineHeight: 1.5 }}>
                    La metodología Ágil y el stack son la respuesta proporcional al plazo hermético de 16 semanas.
                  </p>
                </div>
              </div>
            </CardSticky>

            {/* Spacer for final card visibility */}
            <div className="h-[20vh]" />


          </ContainerScroll>
        </div>
      </div>
    </div>
  );
}
