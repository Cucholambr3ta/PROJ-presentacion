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

const SectionTitle = ({ text }: { text: string }) => (
  <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.4rem, 4vw, 1.8rem)", color: "#fafaf9", fontWeight: 800, margin: "0 0 1rem 0", lineHeight: 1.2 }}>
    {text}
  </h2>
);

// Posición de anclaje CONSTANTE para todas las tarjetas (sin cascada hacia abajo).
const CARD_TOP = "clamp(1.25rem, 6vh, 4.5rem)";

// ── Estilos base reutilizados (paridad con vision/ingenieria) ──
// Altura por contenido + tope al viewport con scroll interno de seguridad,
// para que ninguna tarjeta densa quede cortada en pantallas pequeñas.
const cardShell: React.CSSProperties = {
  background: "rgba(15, 23, 42, 0.45)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  padding: "clamp(1.5rem, 4vw, 3rem)",
  borderRadius: "clamp(1.5rem, 4vw, 2.5rem)",
  border: "1.5px solid rgba(255, 255, 255, 0.05)",
  boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  maxHeight: `calc(100dvh - ${CARD_TOP} - 1.5rem)`,
  overflowY: "auto",
  backgroundColor: "rgba(16, 185, 129, 0.03)",
};

const Pill = ({ label }: { label: string }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: "0.4rem",
    padding: "0.35rem 0.75rem", borderRadius: "0.6rem",
    background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)", color: "#10B981",
    fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.03em",
  }}>
    {label}
  </span>
);

// ── Datos: Plan de pruebas (casos representativos) ──
const CASOS = [
  { id: "F-01", func: "Cliente crea pedido vía QR", esperado: "Mesa pasa a OCCUPIED; el pedido aparece en Waiter Terminal en tiempo real" },
  { id: "F-05", func: "KDS marca pedido READY", esperado: "Cashier ve la orden; el garzón recibe alerta sonora y push" },
  { id: "F-06", func: "Cajero cobra la mesa", esperado: "Órdenes → DELIVERED; mesa → CLEANING; comprobante se abre" },
  { id: "SEC-01", func: "ADMIN de Restaurante A consulta datos de B", esperado: "RLS retorna 0 filas (nunca 500 ni datos cruzados)" },
  { id: "P-03", func: "Cocina marca READY con garzón suscrito", esperado: "Notificación nativa del SO con mesa y mensaje (Web Push VAPID)" },
  { id: "U-01", func: "formatCLP(36000)", esperado: 'Retorna "$36.000" en formato es-CL' },
];

// ── Datos: Mejoras propuestas priorizadas (hallazgo → mejora → estándar) ──
const MEJORAS = [
  {
    prio: "ALTA",
    hallazgo: "POST /api/orders ejecuta hasta 8 operaciones secuenciales sin transacción (riesgo de pedido huérfano + 200–400 ms en cloud)",
    mejora: "Función RPC en Postgres (plpgsql, SECURITY DEFINER): 8 viajes → 1, operación atómica todo-o-nada",
    estandar: "Corrección · Seguridad",
  },
  {
    prio: "MEDIA",
    hallazgo: "Consultas independientes (restaurante + menu_items + categorías) ejecutadas en serie",
    mejora: "Paralelizar consultas independientes y unir menu_items/categorías con JOIN (8 → 4-5 viajes)",
    estandar: "Eficiencia",
  },
  {
    prio: "BAJA",
    hallazgo: "GET /api/orders filtra por table_id (polling del portal) sin índice en esa columna",
    mejora: "Crear índice sobre orders(table_id) — costo mínimo, mejora la lectura más frecuente",
    estandar: "Eficiencia",
  },
  {
    prio: "ALTA",
    hallazgo: "npm audit: next 16.0–16.2.5 con CVEs de bypass de middleware (3 altas)",
    mejora: "Actualizar next ≥ 16.2.6 (no-major) y re-testear middleware.ts del auth gateway",
    estandar: "Seguridad",
  },
  {
    prio: "MEDIA",
    hallazgo: "Críticos en cadena de testing/build (vitest, shell-quote, tmp, nx)",
    mejora: "npm audit fix automático (no-major); vitest 4 requiere revisar breaking changes",
    estandar: "Seguridad · Pertinencia",
  },
];

export default function PruebasPage() {
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
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              color: "rgb(116, 163, 135)", fontSize: "0.8rem", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none", marginBottom: "3rem",
            }} className="group hover:text-[#10B981] hover:translate-x-[-4px] transition-all">
              <ArrowLeftIcon />
              <span>Volver a Presentación</span>
            </Link>

            <span style={{
              display: "inline-block", width: "fit-content",
              padding: "0.35rem 0.85rem", marginBottom: "1.25rem",
              borderRadius: "999px", background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.22)", color: "#10B981",
              fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase",
            }}>
              Evaluación Parcial 3 · TPY1101
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
              Validación & <br />
              <span style={{ fontStyle: "italic", color: "#10B981" }}>Calidad</span>
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#94a3b8", maxWidth: "30rem", lineHeight: 1.6 }}>
              Plan de pruebas, aplicación de la validación funcional, de seguridad y de
              rendimiento, y las mejoras priorizadas derivadas de los resultados.
            </p>

            <div style={{ marginTop: "3rem", opacity: 0.4 }}>
              <p style={{ color: "#94a3b8", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 800 }}>
                Eje de Aseguramiento de Calidad · Menú Bytes · 2026
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY STACK */}
          <ContainerScroll className="min-h-[700vh] py-24 space-y-[20vh]">

            {/* CARD 01 — ESTRATEGIA / PIRÁMIDE */}
            <CardSticky index={0} incrementY={60} incrementZ={0} className="w-full" style={{ top: CARD_TOP }}>
              <div style={cardShell}>
                <Pill label="ESTRATEGIA QA" />
                <div style={{ height: "1.25rem" }} />
                <SectionTitle text="1. Pirámide de Pruebas Multi-tenant" />
                <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  La calidad se asegura con una <strong style={{ color: "#fafaf9" }}>pirámide balanceada</strong> sobre
                  la arquitectura SaaS multi-tenant: muchas pruebas unitarias en la base, integración
                  en el centro y flujos E2E críticos en la cima, complementadas con pruebas no funcionales.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    { t: "Tier 4 — E2E (Playwright)", d: "Flujos críticos de usuario completos (login admin, portal cliente)" },
                    { t: "Tier 3 — Integración (Vitest)", d: "Hooks Realtime, temas dinámicos, RBAC, rutas API" },
                    { t: "Tier 2 — Unitarias (Vitest)", d: "Lógica de negocio, formateadores y utilidades puras" },
                    { t: "Tier 1 — Manual / Visual", d: "UX, responsive, accesibilidad y branding" },
                  ].map((r) => (
                    <div key={r.t} style={{ background: "rgba(15,23,42,0.35)", borderLeft: "4px solid #10B981", padding: "0.85rem 1.25rem", borderRadius: "0 0.9rem 0.9rem 0" }}>
                      <h4 style={{ margin: "0 0 0.15rem 0", color: "#fafaf9", fontWeight: 800, fontSize: "0.98rem" }}>{r.t}</h4>
                      <p style={{ margin: 0, fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.5 }}>{r.d}</p>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.5rem" }}>
                  <Pill label="843 Vitest" />
                  <Pill label="23 pgTAP" />
                  <Pill label="E2E Playwright" />
                  <Pill label="k6 carga" />
                  <Pill label="Semgrep SAST" />
                  <Pill label="npm audit" />
                </div>
              </div>
            </CardSticky>

            {/* CARD 02 — PLAN DE PRUEBAS (CRITERIO 1) */}
            <CardSticky index={1} incrementY={60} incrementZ={0} className="w-full" style={{ top: CARD_TOP }}>
              <div style={cardShell}>
                <Pill label="CRITERIO 1 · 30% DEFENSA" />
                <div style={{ height: "1.25rem" }} />
                <SectionTitle text="2. Plan de Pruebas — Casos & Resultado Esperado" />
                <p style={{ fontSize: "1.05rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  Cada funcionalidad crítica se traduce en un caso con su <strong style={{ color: "#fafaf9" }}>resultado
                  esperado</strong> verificable. Extracto del catálogo (ver Plan de Pruebas Maestro completo):
                </p>

                <div style={{ overflowX: "auto", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
                    <thead>
                      <tr style={{ background: "rgba(16,185,129,0.07)" }}>
                        <th style={{ textAlign: "left", padding: "0.7rem 0.9rem", color: "#10B981", fontWeight: 800, letterSpacing: "0.04em" }}>ID</th>
                        <th style={{ textAlign: "left", padding: "0.7rem 0.9rem", color: "#10B981", fontWeight: 800 }}>Funcionalidad a comprobar</th>
                        <th style={{ textAlign: "left", padding: "0.7rem 0.9rem", color: "#10B981", fontWeight: 800 }}>Resultado esperado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CASOS.map((c, i) => (
                        <tr key={c.id} style={{ background: i % 2 ? "rgba(255,255,255,0.015)" : "transparent", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                          <td style={{ padding: "0.7rem 0.9rem", color: "#fafaf9", fontWeight: 700, fontFamily: "monospace", whiteSpace: "nowrap" }}>{c.id}</td>
                          <td style={{ padding: "0.7rem 0.9rem", color: "#cbd5e1" }}>{c.func}</td>
                          <td style={{ padding: "0.7rem 0.9rem", color: "#94a3b8" }}>{c.esperado}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: "0.78rem", color: "#64748b", marginTop: "1rem", fontStyle: "italic" }}>
                  Criterios PASS/FAIL definidos: 100% unitarias verdes · 0 tenant-leakage · flujos E2E críticos en Chromium y WebKit.
                </p>
              </div>
            </CardSticky>

            {/* CARD 03 — BASE DE DATOS DE PRUEBAS */}
            <CardSticky index={2} incrementY={60} incrementZ={0} className="w-full" style={{ top: CARD_TOP }}>
              <div style={cardShell}>
                <Pill label="AMBIENTE DE PRUEBAS" />
                <div style={{ height: "1.25rem" }} />
                <SectionTitle text="3. Base de Datos de Pruebas" />
                <p style={{ fontSize: "1.05rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Las pruebas corren contra una <strong style={{ color: "#fafaf9" }}>instancia Supabase local
                  (Docker)</strong> con datos deterministas, aislada del entorno productivo.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div style={{ background: "rgba(15,23,42,0.35)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "1rem", padding: "1.25rem" }}>
                    <h4 style={{ margin: "0 0 0.5rem 0", color: "#10B981", fontWeight: 800, fontSize: "0.95rem", fontFamily: "monospace" }}>supabase/seed.sql</h4>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.55 }}>Restaurante demo con IDs deterministas (alineados con <code style={{ color: "#cbd5e1" }}>seed-data.ts</code> de k6) para resultados reproducibles.</p>
                  </div>
                  <div style={{ background: "rgba(15,23,42,0.35)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "1rem", padding: "1.25rem" }}>
                    <h4 style={{ margin: "0 0 0.5rem 0", color: "#10B981", fontWeight: 800, fontSize: "0.95rem", fontFamily: "monospace" }}>reset_testing.sql</h4>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.55 }}>Restablece el estado entre corridas; garantiza independencia entre pruebas.</p>
                  </div>
                  <div style={{ background: "rgba(15,23,42,0.35)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "1rem", padding: "1.25rem" }}>
                    <h4 style={{ margin: "0 0 0.5rem 0", color: "#10B981", fontWeight: 800, fontSize: "0.95rem", fontFamily: "monospace" }}>supabase start</h4>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.55 }}>Levanta Postgres + migraciones + RLS reales para las pruebas pgTAP.</p>
                  </div>
                  <div style={{ background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: "1rem", padding: "1.25rem" }}>
                    <h4 style={{ margin: "0 0 0.5rem 0", color: "#fafaf9", fontWeight: 800, fontSize: "0.95rem" }}>pgTAP (23 pruebas)</h4>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.55 }}>Máquina de estados del pedido + aislamiento multi-tenant (RLS) validados en la propia BD.</p>
                  </div>
                </div>
              </div>
            </CardSticky>

            {/* CARD 04 — APLICACIÓN DE PRUEBAS / RESULTADOS (CRITERIO 2) */}
            <CardSticky index={3} incrementY={60} incrementZ={0} className="w-full" style={{ top: CARD_TOP }}>
              <div style={cardShell}>
                <Pill label="CRITERIO 2 · 20% DEFENSA" />
                <div style={{ height: "1.25rem" }} />
                <SectionTitle text="4. Aplicación de Pruebas: Resultados" />
                <p style={{ fontSize: "1.05rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  Validación ejecutada en las tres dimensiones: funcionalidad, seguridad y rendimiento.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  <div style={{ background: "rgba(16,185,129,0.04)", borderLeft: "4px solid #10B981", padding: "1rem 1.25rem", borderRadius: "0 1rem 1rem 0" }}>
                    <h4 style={{ margin: "0 0 0.3rem 0", color: "#fafaf9", fontWeight: 800 }}>Funcional &amp; Calidad</h4>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.55 }}>843 pruebas Vitest + 23 pgTAP (RLS y triggers) + E2E Playwright. Suite verde sobre 12 workspaces del monorepo.</p>
                  </div>
                  <div style={{ background: "rgba(16,185,129,0.04)", borderLeft: "4px solid #10B981", padding: "1rem 1.25rem", borderRadius: "0 1rem 1rem 0" }}>
                    <h4 style={{ margin: "0 0 0.3rem 0", color: "#fafaf9", fontWeight: 800 }}>Seguridad</h4>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.55 }}>Semgrep SAST: <strong style={{ color: "#10B981" }}>0 hallazgos</strong> sobre ~582 reglas. npm audit (SCA): 29 vulns en dependencias (3 críticas, 3 altas, 23 moderadas). Revisión de secretos: sin credenciales expuestas en el código.</p>
                  </div>
                  <div style={{ background: "rgba(16,185,129,0.04)", borderLeft: "4px solid #10B981", padding: "1rem 1.25rem", borderRadius: "0 1rem 1rem 0" }}>
                    <h4 style={{ margin: "0 0 0.3rem 0", color: "#fafaf9", fontWeight: 800 }}>Rendimiento (k6)</h4>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.55 }}>Carga normal (30 VUs): p95 <strong style={{ color: "#10B981" }}>37.6 ms</strong>, 0% errores — todos los SLO cumplidos. Punto de quiebre (knee) ~50–100 req/s. Baseline relativo (modo dev + Docker compartiendo CPU).</p>
                  </div>
                </div>
              </div>
            </CardSticky>

            {/* CARD 05 — HALLAZGO CRÍTICO */}
            <CardSticky index={4} incrementY={60} incrementZ={0} className="w-full" style={{ top: CARD_TOP }}>
              <div style={cardShell}>
                <Pill label="HALLAZGO PRINCIPAL" />
                <div style={{ height: "1.25rem" }} />
                <SectionTitle text="5. Cuello de Botella: Creación de Pedidos" />
                <p style={{ fontSize: "1.05rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  El endpoint <code style={{ color: "#cbd5e1", background: "rgba(0,0,0,0.3)", padding: "0.1rem 0.4rem", borderRadius: "0.3rem" }}>POST /api/orders</code> ejecuta hasta
                  <strong style={{ color: "#fafaf9" }}> 8 operaciones secuenciales</strong> contra la base de datos, <strong style={{ color: "#fafaf9" }}>sin transacción</strong>.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div style={{ background: "rgba(15,23,42,0.35)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "1rem", padding: "1.25rem" }}>
                    <h4 style={{ margin: "0 0 0.5rem 0", color: "#10B981", fontWeight: 800, fontSize: "0.95rem" }}>Riesgo de Correctitud</h4>
                    <p style={{ margin: 0, fontSize: "0.86rem", color: "#94a3b8", lineHeight: 1.55 }}>Si una inserción intermedia falla, el sistema queda con un pedido parcial o huérfano, sin rollback posible. Es integridad de datos, no solo velocidad.</p>
                  </div>
                  <div style={{ background: "rgba(15,23,42,0.35)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "1rem", padding: "1.25rem" }}>
                    <h4 style={{ margin: "0 0 0.5rem 0", color: "#10B981", fontWeight: 800, fontSize: "0.95rem" }}>Costo oculto en Cloud</h4>
                    <p style={{ margin: 0, fontSize: "0.86rem", color: "#94a3b8", lineHeight: 1.55 }}>Local cada viaje cuesta ~0.5 ms (imperceptible). En producción 20–50 ms por viaje → piso de 200–400 ms por pedido. Invisible en el baseline local.</p>
                  </div>
                </div>
              </div>
            </CardSticky>

            {/* CARD 06 — MEJORAS PROPUESTAS (CRITERIO 3) */}
            <CardSticky index={5} incrementY={60} incrementZ={0} className="w-full" style={{ top: CARD_TOP }}>
              <div style={cardShell}>
                <Pill label="CRITERIO 3 · 20% DEFENSA" />
                <div style={{ height: "1.25rem" }} />
                <SectionTitle text="6. Mejoras Propuestas Priorizadas" />
                <p style={{ fontSize: "1.02rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  Trazabilidad <strong style={{ color: "#fafaf9" }}>hallazgo → mejora → estándar de calidad</strong>.
                  Propuestas priorizadas a partir de los resultados (pendientes de implementación).
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                  {MEJORAS.map((m, i) => (
                    <div key={i} style={{ background: "rgba(15,23,42,0.4)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "1rem", padding: "1rem 1.15rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                        <Pill label={m.prio} />
                        <span style={{ fontSize: "0.72rem", color: "#10B981", fontWeight: 700, letterSpacing: "0.03em" }}>{m.estandar}</span>
                      </div>
                      <p style={{ margin: "0 0 0.35rem 0", fontSize: "0.84rem", color: "#cbd5e1", lineHeight: 1.5 }}>
                        <strong style={{ color: "#fafaf9" }}>Hallazgo: </strong>{m.hallazgo}
                      </p>
                      <p style={{ margin: 0, fontSize: "0.84rem", color: "#94a3b8", lineHeight: 1.5 }}>
                        <strong style={{ color: "#10B981" }}>Mejora: </strong>{m.mejora}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardSticky>

            {/* CARD 07 — CONCLUSIÓN & LECCIONES */}
            <CardSticky index={6} incrementY={60} incrementZ={0} className="w-full" style={{ top: CARD_TOP }}>
              <div style={cardShell}>
                <Pill label="CIERRE" />
                <div style={{ height: "1.25rem" }} />
                <SectionTitle text="7. Conclusión & Lecciones Aprendidas" />
                <p style={{ fontSize: "1.05rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Bajo carga normal el sistema responde de forma óptima (p95 ~38 ms, 0% errores). La
                  prioridad real combina <strong style={{ color: "#fafaf9" }}>rendimiento y correctitud</strong>, no
                  velocidad pura: no hay intervención urgente, sino un punto estructural a optimizar.
                </p>

                <div style={{ background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: "1.5rem", padding: "1.5rem" }}>
                  <h4 style={{ margin: "0 0 0.75rem 0", color: "#10B981", fontWeight: 800, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Lecciones aprendidas</h4>
                  <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#94a3b8", fontSize: "0.92rem", lineHeight: 1.7 }}>
                    <li>El baseline <strong style={{ color: "#fafaf9" }}>local no refleja</strong> la latencia de red real en la nube; medir contra build de producción.</li>
                    <li>La <strong style={{ color: "#fafaf9" }}>transaccionalidad</strong> es tan importante como la velocidad: una RPC atómica resuelve ambos.</li>
                    <li>Un SAST limpio (0 hallazgos) <strong style={{ color: "#fafaf9" }}>no garantiza</strong> ausencia total de fallos; la seguridad real vive en RLS y dependencias.</li>
                    <li>Evitar la <strong style={{ color: "#fafaf9" }}>optimización prematura</strong>: medir primero, priorizar por impacto después.</li>
                  </ul>
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
