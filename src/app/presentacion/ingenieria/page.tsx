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
  <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.8rem", color: "#fafaf9", fontWeight: 800, margin: "0 0 1rem 0", lineHeight: 1.2 }}>
    {text}
  </h2>
);

// SVGs Oficiales Vectorizados
const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" width="45" height="45">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NextJsLogo = () => (
  <svg viewBox="0 0 180 180" width="45" height="45">
    <circle cx="90" cy="90" r="90" fill="#000" stroke="rgba(255,255,255,0.1)" strokeWidth="4"/>
    <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 96.439c3.96-2.5 7.657-5.32 11.076-8.304l-1.567-1.503z" fill="#fff"/>
    <path d="M115 54h12v72h-12z" fill="#fff"/>
  </svg>
);

const SupabaseLogo = () => (
  <svg viewBox="0 0 24 24" width="45" height="45" fill="#3ECF8E">
    <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.05.061a.396.396 0 0 0 .353.637h9.494v8.958a.396.396 0 0 0 .716.233l9.081-12.261l.05-.061a.396.396 0 0 0-.485-.637z"/>
  </svg>
);

const VercelLogo = () => (
  <svg viewBox="0 0 24 24" width="45" height="45" fill="#fff">
    <path d="M24 22.525H0l12-21.05 12 21.05z"/>
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 100 100" width="45" height="45" fill="#F1502F">
    <path d="M96.06 43.19l-39.2-39.2c-2.4-2.4-6.3-2.4-8.8 0L24.57 27.48C24.47 27.58 24.37 27.68 24.27 27.8l-19.4 19.4c-2.4 2.4-2.4 6.3 0 8.8l39.2 39.2c2.4 2.4 6.3 2.4 8.8 0l22.7-22.7c1.3-1.3 2.7-2.6 4-3.9l16.4-16.4C98.5 49.52 98.46 45.69 96.06 43.19zM45.65 73.08c-3.1 0-5.6-2.5-5.6-5.6 0-2.4 1.5-4.4 3.7-5.2l-3.3-8c-1.3.4-2.7.6-4.1.6-1.5 0-2.9-.3-4.3-.8l-3.8 8.8c2.1.9 3.5 3 3.5 5.5 0 3.3-2.6 5.9-5.9 5.9s-5.9-2.6-5.9-5.9 2.6-5.9 5.9-5.9c.7 0 1.4.1 2 .4L31.62 54c-1.6-1.5-2.6-3.7-2.6-6 0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3c0 2-.7 4-1.9 5.6l3.6 8.5C39.42 63 42.32 66 45.65 66c3.1 0 5.6 2.5 5.6 5.6C51.25 74.78 48.75 73.08 45.65 73.08z"/>
  </svg>
);


export default function EngineeringPage() {
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
        padding: "0 2rem"
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

            <h1 style={{
              margin: "0 0 1.5rem",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              fontFamily: "'Fraunces', serif",
              color: "#fafaf9",
              lineHeight: 1.05
            }}>
              Ingeniería <br />
              <span style={{ fontStyle: "italic", color: "#10B981" }}>Avanzada</span>
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#94a3b8", maxWidth: "30rem", lineHeight: 1.6 }}>
              Arquitectura unificada, serverless y basada en el paradigma de BaaS para garantizar estabilidad frente a alta demanda gastronómica.
            </p>

            <div style={{ marginTop: "3rem", opacity: 0.4 }}>
              <p style={{ color: "#94a3b8", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 800 }}>
                Eje de Software · Menú Bytes · 2026
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY STACK */}
          <ContainerScroll className="min-h-[400vh] py-24 space-y-[20vh]">

            {/* CARD 01 - REACT NATIVE + NEXTJS */}
            <CardSticky index={0} incrementY={60} incrementZ={0} className="w-full" style={{ top: `calc(10vh + 0px)` }}>
              <div style={{
                background: "rgba(15, 23, 42, 0.45)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                padding: "3rem",
                borderRadius: "2.5rem",
                border: "1.5px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                minHeight: "55vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "rgba(16, 185, 129, 0.03)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
                  <ReactLogo />
                  <NextJsLogo />
                </div>
                
                <SectionTitle text="1. Ecosistema Full-Stack Omnicanal" />
                
                <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  La omnicanalidad de Menú Bytes exige coherencia absoluta. Adoptamos un stack unificado en <strong style={{ color: "#fafaf9" }}>TypeScript</strong> que nos permite erradicar la duplicación de esfuerzos, compartiendo lógica de negocio y validaciones entre nuestras distintas plataformas operativas.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "0.5rem" }}>
                  <div style={{ background: "rgba(15, 23, 42, 0.35)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "1rem", padding: "1.5rem" }}>
                    <h4 style={{ margin: "0 0 0.75rem 0", color: "#fafaf9", fontWeight: 800, fontSize: "1.1rem" }}>Next.js 16+</h4>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.6 }}>
                      Impulsa el panel administrativo web y los menús QR de los clientes. Aprovechamos el <strong>SSR (Server-Side Rendering)</strong> de App Router para un SEO impecable en los menús, y un despacho de componentes ultrarápido.
                    </p>
                  </div>
                  <div style={{ background: "rgba(16, 185, 129, 0.03)", border: "1px solid rgba(16, 185, 129, 0.15)", borderRadius: "1rem", padding: "1.5rem" }}>
                    <h4 style={{ margin: "0 0 0.75rem 0", color: "#10B981", fontWeight: 800, fontSize: "1.1rem" }}>React Native + Expo</h4>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.6 }}>
                      Provee a los garzones de una aplicación nativa que corre directamente en el hardware del móvil, asegurando fluidez en la toma de pedidos y capacidad nativa para escanear mesas/QR.
                    </p>
                  </div>
                </div>
              </div>
            </CardSticky>

            {/* CARD 02 - SUPABASE */}
            <CardSticky index={1} incrementY={60} incrementZ={0} className="w-full" style={{ top: `calc(10vh + 45px)` }}>
              <div style={{
                background: "rgba(15, 23, 42, 0.45)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                padding: "3rem",
                borderRadius: "2.5rem",
                border: "1.5px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                minHeight: "55vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "rgba(16, 185, 129, 0.03)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                  <SupabaseLogo />
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#3ECF8E", letterSpacing: "-0.02em" }}>Supabase</span>
                </div>
                
                <SectionTitle text="2. Motor BaaS & Seguridad RLS" />
                
                <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Delegamos el mantenimiento de la infraestructura backend profunda a <strong>Supabase</strong> (Backend-as-a-Service), obteniendo una persistencia gestionada sobre el motor robusto de <strong>PostgreSQL</strong>. Reemplazamos las debilidades de la API REST convencional por acceso directo blindado.
                </p>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ background: "rgba(16, 185, 129, 0.03)", borderLeft: "4px solid #10B981", padding: "1rem 1.5rem", borderRadius: "0 1rem 1rem 0" }}>
                    <h4 style={{ margin: "0 0 0.25rem 0", color: "#fafaf9", fontWeight: 800 }}>Aislamiento Multi-tenant (RLS)</h4>
                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#94a3b8", lineHeight: 1.5 }}>Las políticas a nivel de fila (Row Level Security) actúan como un firewall virtual directamente en la Base de Datos. La data del Restaurante A jamás podrá mutar con la del Restaurante B, garantizando privacidad criptográfica para los clientes.</p>
                  </div>
                  <div style={{ background: "rgba(16, 185, 129, 0.03)", borderLeft: "4px solid #10B981", padding: "1rem 1.5rem", borderRadius: "0 1rem 1rem 0" }}>
                    <h4 style={{ margin: "0 0 0.25rem 0", color: "#fafaf9", fontWeight: 800 }}>Sincronización Realtime (WebSockets)</h4>
                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#94a3b8", lineHeight: 1.5 }}>Las comandas y actualizaciones de menú viajan a la cocina y a las cajas sin necesidad de que el usuario recargue (refresh). Esto reduce la latencia operativa a menos de <i>200ms</i>, emulando la velocidad de un POS físico.</p>
                  </div>
                </div>
              </div>
            </CardSticky>

            {/* CARD 03 - VERCEL */}
            <CardSticky index={2} incrementY={60} incrementZ={0} className="w-full" style={{ top: `calc(10vh + 90px)` }}>
              <div style={{
                background: "rgba(15, 23, 42, 0.45)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                padding: "3rem",
                borderRadius: "2.5rem",
                border: "1.5px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                minHeight: "55vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "rgba(16, 185, 129, 0.03)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                  <VercelLogo />
                  <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.05em" }}>Vercel</span>
                </div>
                
                <SectionTitle text="3. Despliegue Cloud PaaS" />
                
                <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Una plataforma gastronómica moderna no puede darse el lujo de experimentar caídas ni lentitud en horas pico. <strong>Vercel</strong> provee una infraestructura descentralizada y Serverless que anula nuestra necesidad de gestionar contenedores o clústeres físicos.
                </p>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  <div style={{ padding: "1rem", borderTop: "2px solid #10B981" }}>
                    <h4 style={{ margin: "0 0 0.5rem 0", color: "#fafaf9", fontWeight: 800 }}>Global Edge CDN</h4>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.6 }}>Los menús QR se distribuyen y cachean orgánicamente a través de la Red en los servidores globales más cercanos al celular del cliente, cargando en milisegundos.</p>
                  </div>
                  <div style={{ padding: "1rem", borderTop: "2px solid #10B981" }}>
                    <h4 style={{ margin: "0 0 0.5rem 0", color: "#fafaf9", fontWeight: 800 }}>Escalabilidad Serverless</h4>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.6 }}>Si hay 100 restaurantes colapsados de comandas un viernes por la noche, Vercel absorbe el impacto (auto-escalado iterativo) sin intervención humana ni configuraciones de balanceadores extra.</p>
                  </div>
                </div>
              </div>
            </CardSticky>

            {/* CARD 04 - GITFLOW */}
            <CardSticky index={3} incrementY={60} incrementZ={0} className="w-full" style={{ top: `calc(10vh + 135px)` }}>
              <div style={{
                background: "rgba(15, 23, 42, 0.45)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                padding: "3rem",
                borderRadius: "2.5rem",
                border: "1.5px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                minHeight: "55vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "rgba(16, 185, 129, 0.03)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                  <GitLogo />
                  <span style={{ fontSize: "1.6rem", fontWeight: 800, color: "#F1502F", letterSpacing: "-0.01em" }}>GitFlow / Turborepo</span>
                </div>
                
                <SectionTitle text="4. Orquestación y Turborepo" />
                
                <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  La calidad del producto final es proporcional a la disciplina estructural de los repositorios. Menú Bytes previene el "código espagueti" forjando el frontend en un entorno <strong>Monorepo</strong> y gestionando despliegues con GitFlow.
                </p>
                
                <div style={{ background: "rgba(16, 185, 129, 0.03)", border: "1px solid rgba(16, 185, 129, 0.15)", borderRadius: "1.5rem", padding: "1.5rem" }}>
                  <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.7 }}>
                    <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fafaf9" }}>Turborepo Workspaces:</strong> La app del Admin, la PWA del Garzón y el Menú Cliente residen en un mismo repositorio. Comparten tokens de diseño y utilidades TypeScript globales en un solo comando: <code>npm run dev</code>.</li>
                    <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fafaf9" }}>Estrategia de Ramas Semánticas:</strong> Operamos bajo un esquema inquebrantable de separación (`main` como producción bloqueada, `dev` como testeo, y `feat/*` para ramas cortas efímeras).</li>
                    <li><strong style={{ color: "#fafaf9" }}>Aprobación Gated (Code Review):</strong> Nadie altera producción de forma independiente o inadvertida. Toda fusión técnica exige la certificación de calidad (Pull Requests) para evitar regresiones lógicas antes de publicarse.</li>
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
