"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Database,
  Layers,
  Users,
  Store,
  Sparkles,
  CheckCircle2,
  Globe,
  Smartphone,
  Package,
  type LucideIcon,
} from "lucide-react";
import { OrganicBackground } from "@/components/OrganicBackground";

const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const Pill = ({ label, color }: { label: string; color?: string }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: "0.4rem",
    padding: "0.35rem 0.75rem", borderRadius: "0.6rem",
    background: color ? `${color}14` : "rgba(16,185,129,0.08)",
    border: `1px solid ${color ? `${color}40` : "rgba(16,185,129,0.25)"}`,
    color: color ?? "#10B981",
    fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.03em",
  }}>
    {label}
  </span>
);

const INNER_BG = "#1e293b";
const INNER_HEADING = "#FFFFFF";
const INNER_BODY = "#e2e8f0";

const timelineCardShell: React.CSSProperties = {
  background: "rgba(6, 11, 20, 0.45)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  padding: "clamp(1.5rem, 4vw, 2.25rem)",
  borderRadius: "clamp(1.25rem, 3vw, 1.75rem)",
  border: "1.5px solid rgba(16, 185, 129, 0.12)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
  height: "auto",
};

type FaseEvolucion = {
  id: string;
  orden: number;
  rangoLabel: string;
  titulo: string;
  commits: number;
  icon: LucideIcon;
  color: string;
  resumen: string;
  highlights: string[];
  destacado?: string;
};

const FASES: FaseEvolucion[] = [
  {
    id: "fase-01", orden: 1,
    rangoLabel: "03–06 abril",
    titulo: "Cimientos de Datos & Infraestructura",
    commits: 15, icon: Database, color: "#10B981",
    resumen: "Diseño del esquema Supabase + Prisma, políticas RLS multi-tenant y la máquina de estados de pedidos sobre un monorepo Turborepo recién escalado.",
    highlights: [
      "Esquema Prisma + Supabase inicial",
      "Políticas RLS de aislamiento multi-tenant",
      "Máquina de estados de pedidos (order state machine)",
      "Scaffold Turborepo: 8 apps + 3 packages",
    ],
  },
  {
    id: "fase-02", orden: 2,
    rangoLabel: "09–14 abril",
    titulo: "Componentes UI & Dashboard Admin",
    commits: 10, icon: Layers, color: "#34d399",
    resumen: "Primera librería de componentes compartida y el shell del panel SUPER_ADMIN, junto con la estandarización de entornos de desarrollo.",
    highlights: [
      "Librería de componentes @menu-bites/ui",
      "Shell del dashboard SUPER_ADMIN",
      "Estandarización de variables de entorno",
    ],
  },
  {
    id: "fase-03", orden: 3,
    rangoLabel: "18–24 abril",
    titulo: "Auth Móvil & Roles",
    commits: 10, icon: Users, color: "#22d3ee",
    resumen: "Autenticación JWT vía Supabase y definición de los 7 roles del ecosistema, junto a la base de la app móvil en Expo.",
    highlights: [
      "Auth JWT con Supabase",
      "7 roles: SUPER_ADMIN, ADMIN, GARZON, COCINA, CAJERO, BAR, CLIENTE",
      "Base de la app móvil (Expo)",
    ],
  },
  {
    id: "fase-04", orden: 4,
    rangoLabel: "27 abril – 03 mayo",
    titulo: "Dashboard Local & Operación",
    commits: 67, icon: Store, color: "#60a5fa",
    resumen: "Los 6 dashboards operativos quedan en vivo: suscripciones, branding dinámico, códigos QR, table merging y flujos de pago.",
    highlights: [
      "6 dashboards operativos en producción",
      "Suscripciones / billing",
      "Branding dinámico por restaurante",
      "QR de mesa, table merging y pagos",
    ],
  },
  {
    id: "fase-05", orden: 5,
    rangoLabel: "04–14 mayo",
    titulo: "Branding, Estilo & Paridad de Features",
    commits: 154, icon: Sparkles, color: "#a78bfa",
    resumen: "Fase de mayor velocidad: modernización UI/UX completa, inventario con import CSV, unificación realtime y theming consistente en los 8 dashboards.",
    highlights: [
      "Modernización UI/UX completa",
      "Inventario con import CSV",
      "Unificación de sincronización realtime",
      "Sistema de branding sage green + theming en 8 dashboards",
    ],
    destacado: "154 commits · pico de velocidad",
  },
  {
    id: "fase-06", orden: 6,
    rangoLabel: "15–19 mayo",
    titulo: "Testing, Documentación & Cierre",
    commits: 72, icon: CheckCircle2, color: "#fbbf24",
    resumen: "Push notifications, suite de pruebas completa y documentación técnica integral antes de la entrega final.",
    highlights: [
      "Push notifications (Web + Expo)",
      "651 tests (Vitest + Playwright) en 12 workspaces",
      "Documentación: SAD, esquema de BD, API spec, manual de usuario, seguridad",
      "PR #54 — cierre y entrega final",
    ],
    destacado: "651 tests · 12 workspaces",
  },
];

const ARQUITECTURA_FINAL: { label: string; value: string; icon: LucideIcon }[] = [
  { label: "Apps web", value: "7", icon: Globe },
  { label: "App móvil", value: "1 (Expo)", icon: Smartphone },
  { label: "Paquetes compartidos", value: "3", icon: Package },
  { label: "Tests", value: "651", icon: CheckCircle2 },
  { label: "Roles", value: "7", icon: Users },
];

function PhaseNode({ fase, align }: { fase: FaseEvolucion; align: "left" | "right" }) {
  const isLeft = align === "left";
  const Icon = fase.icon;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{
          position: "absolute",
          left: "1.25rem",
          top: "0.25rem",
          width: "2.75rem",
          height: "2.75rem",
          borderRadius: "50%",
          background: "#030712",
          border: `2px solid ${fase.color}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
          boxShadow: `0 0 20px ${fase.color}55`,
        }}
        className="md:left-1/2 md:-translate-x-1/2"
      >
        <Icon className="w-5 h-5" style={{ color: fase.color }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`pl-20 md:pl-0 ${isLeft ? "md:col-start-1 md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
      >
        <div style={timelineCardShell}>
          <div className={`flex gap-2 flex-wrap ${isLeft ? "md:justify-end" : "justify-start"}`}>
            <Pill label={fase.rangoLabel} color={fase.color} />
            <Pill label={`${fase.commits} commits`} />
          </div>
          <h3 style={{
            fontFamily: "'Fraunces', serif", fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
            color: "#fafaf9", fontWeight: 800, margin: "0.85rem 0 0.6rem 0", lineHeight: 1.25,
          }}>
            {fase.titulo}
          </h3>
          <p style={{ fontSize: "0.95rem", color: "#94a3b8", lineHeight: 1.6, margin: "0 0 1rem 0" }}>
            {fase.resumen}
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
            {fase.highlights.map((h) => (
              <li
                key={h}
                className={`flex gap-2 ${isLeft ? "md:flex-row-reverse md:justify-end" : "justify-start"}`}
                style={{ fontSize: "0.85rem", color: INNER_BODY, lineHeight: 1.5 }}
              >
                <span style={{ color: fase.color, fontWeight: 800 }}>•</span>
                {h}
              </li>
            ))}
          </ul>
          {fase.destacado && (
            <div style={{ marginTop: "1rem" }}>
              <Pill label={fase.destacado} color={fase.color} />
            </div>
          )}
        </div>
      </motion.div>

      <div className={isLeft ? "hidden md:block md:col-start-2" : "hidden md:block md:col-start-1 md:row-start-1"} />
    </div>
  );
}

function TimelineSpine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <div
        className="hidden md:block"
        style={{
          position: "absolute", left: "50%", top: 0, bottom: 0, width: "2px",
          background: "rgba(16,185,129,0.15)", transform: "translateX(-50%)",
        }}
      />
      <div
        className="md:hidden"
        style={{
          position: "absolute", left: "1.25rem", top: 0, bottom: 0, width: "2px",
          background: "rgba(16,185,129,0.15)",
        }}
      />

      <motion.div
        className="hidden md:block"
        style={{
          position: "absolute", left: "50%", top: 0, width: "2px",
          background: "linear-gradient(to bottom, #10B981, #34d399)",
          transform: "translateX(-50%)",
          height: lineHeight,
          boxShadow: "0 0 12px rgba(16,185,129,0.5)",
        }}
      />
      <motion.div
        className="md:hidden"
        style={{
          position: "absolute", left: "1.25rem", top: 0, width: "2px",
          background: "linear-gradient(to bottom, #10B981, #34d399)",
          height: lineHeight,
          boxShadow: "0 0 12px rgba(16,185,129,0.5)",
        }}
      />

      <div className="flex flex-col gap-20 md:gap-28 py-12">
        {FASES.map((fase, i) => (
          <PhaseNode key={fase.id} fase={fase} align={i % 2 === 0 ? "left" : "right"} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ position: "relative", marginTop: "1rem", paddingBottom: "4rem" }}
      >
        <div style={{
          background: "rgba(16,185,129,0.06)",
          border: "1.5px solid rgba(16,185,129,0.25)",
          borderRadius: "clamp(1.25rem, 3vw, 1.75rem)",
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
        }}>
          <Pill label="ESTADO ACTUAL" />
          <h3 style={{
            fontFamily: "'Fraunces', serif", fontSize: "clamp(1.3rem, 3.5vw, 1.7rem)",
            color: "#fafaf9", fontWeight: 800, margin: "0.85rem 0 1.5rem 0", lineHeight: 1.25,
          }}>
            47 días después: la arquitectura completa
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {ARQUITECTURA_FINAL.map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} style={{ background: INNER_BG, borderRadius: "16px", padding: "1.1rem", textAlign: "center" }}>
                  <StatIcon className="w-5 h-5 mx-auto mb-2" style={{ color: "#34d399" }} />
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: INNER_HEADING, fontFamily: "'Fraunces', serif" }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.2rem" }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function EvolucionPage() {
  return (
    <div style={{
      position: "relative", width: "100%", minHeight: "100vh",
      display: "flex", alignItems: "flex-start", justifyContent: "center",
      fontFamily: "'Outfit', sans-serif",
    }}>
      <OrganicBackground />

      <div style={{
        position: "relative", zIndex: 2,
        width: "100%", maxWidth: "1250px", margin: "0 auto",
        padding: "0 2rem",
      }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">

          {/* LEFT COLUMN: FIXED CONTEXT */}
          <div className="md:sticky md:top-[10vh] md:h-[80vh] flex flex-col justify-center py-12">
            <Link href="/presentacion" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem", width: "fit-content",
              color: "#34d399", fontSize: "0.8rem", fontWeight: 800,
              letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none", marginBottom: "3rem",
              padding: "0.5rem 1rem", borderRadius: "0.7rem",
              background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)",
            }} className="group hover:bg-[rgba(16,185,129,0.18)] hover:translate-x-[-4px] transition-all">
              <ArrowLeftIcon />
              <span>Volver a Presentación</span>
            </Link>

            <div style={{ borderLeft: "3px solid #10B981", paddingLeft: "1.5rem" }}>
              <span style={{
                display: "inline-block", width: "fit-content",
                padding: "0.35rem 0.85rem", marginBottom: "1.25rem",
                borderRadius: "999px", background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.3)", color: "#34d399",
                fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase",
              }}>
                47 días · 327 commits
              </span>

              <h1 style={{
                margin: "0 0 1.5rem",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.05em",
                fontFamily: "'Fraunces', serif",
                color: "#fafaf9",
                lineHeight: 1.05,
              }}>
                Evolución del <br />
                <span style={{ fontStyle: "italic", color: "#10B981" }}>Proyecto</span>
              </h1>
              <p style={{ fontSize: "1.2rem", color: "#cbd5e1", maxWidth: "30rem", lineHeight: 1.6 }}>
                Del primer commit a la entrega final: 6 fases de desarrollo que llevaron a
                Menu Bites desde el esquema de base de datos hasta una plataforma SaaS
                multi-tenant completa, en producción.
              </p>
            </div>

            <div style={{ marginTop: "3rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ width: "1.75rem", height: "2px", background: "#10B981", display: "inline-block" }} />
              <p style={{ color: "#cbd5e1", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 800, margin: 0 }}>
                Línea de Tiempo · Menú Bytes · 2026
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: SCROLL TIMELINE */}
          <div className="py-12">
            <TimelineSpine />
          </div>
        </div>
      </div>
    </div>
  );
}
