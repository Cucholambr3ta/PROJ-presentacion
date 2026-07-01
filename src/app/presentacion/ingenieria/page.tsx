"use client";

import React, { useState } from "react";
import Link from "next/link";
import { OrganicBackground } from "@/components/OrganicBackground";
import {
  Terminal,
  ShieldCheck,
  Cloud,
  Database,
  GitBranch,
  Wifi,
  Bell,
  Play,
  RotateCcw,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

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
  const [activeApp, setActiveApp] = useState("customer-portal");
  const [activeSecurityLayer, setActiveSecurityLayer] = useState(4);
  const [simStep, setSimStep] = useState(0);
  const [simKitchenReady, setSimKitchenReady] = useState(false);
  const [simBarReady, setSimBarReady] = useState(false);

  const monorepoData = {
    "customer-portal": {
      name: "customer-portal", port: "3005", role: "CLIENTE",
      desc: "Portal web responsivo del cliente final. Se accede escaneando el código QR único de la mesa. Carga el menú, gestiona pedidos en tiempo real y permite solicitar la cuenta o llamar al garzón sin instalar aplicaciones nativas.",
      tech: "Next.js 16+ (CSR/SSR), Tailwind CSS v4, Supabase Realtime Client",
      file: "apps/customer-portal", color: "from-emerald-500 to-teal-400"
    },
    "local-dashboard": {
      name: "local-dashboard", port: "3003", role: "ADMIN",
      desc: "Panel administrativo y operativo principal del restaurante. Permite configurar menús, editar categorías, definir mesas, gestionar la caja, visualizar estadísticas históricas y personalizar el branding dinámico (Branding Engine).",
      tech: "Next.js 16+ (App Router), Prisma Client, Tailwind CSS v4",
      file: "apps/local-dashboard", color: "from-blue-500 to-indigo-500"
    },
    "kitchen-kds": {
      name: "kitchen-kds", port: "3001", role: "COCINA",
      desc: "Pantalla de visualización de cocina (Kitchen Display Screen). Recibe comandas en tiempo real, permite marcar preparaciones en curso o listas, emite alertas sonoras configurables y opera offline mediante Service Worker Cache-First.",
      tech: "Next.js 16+, Service Worker Offline Cache, HTML5 Audio API",
      file: "apps/kitchen-kds", color: "from-amber-500 to-orange-500"
    },
    "bar-dashboard": {
      name: "bar-dashboard", port: "3006", role: "BAR",
      desc: "KDS dedicada en barra para bebidas, jugos y cócteles. Cuenta con filtrado automático de categorías asignadas a BAR, control independiente de preparación (bar_preparing/bar_ready) y alertas de quiebre de stock de insumos rápidos.",
      tech: "Next.js 16+, StockAlertModal, Polymorphic KDS Settings",
      file: "apps/bar-dashboard", color: "from-purple-500 to-pink-500"
    },
    "waiter-terminal": {
      name: "waiter-terminal", port: "3002", role: "GARZON",
      desc: "Terminal móvil web para el personal de sala. Gestiona mesas en tiempo real (limpieza, pedidos, solicitudes de ayuda de mesa). Recibe notificaciones push nativas al instante en el móvil al completarse un pedido en cocina o barra.",
      tech: "Next.js 16+, Web Push API, Service Worker Push Listener",
      file: "apps/waiter-terminal", color: "from-rose-500 to-red-500"
    },
    "cashier-dashboard": {
      name: "cashier-dashboard", port: "3004", role: "CAJERO",
      desc: "Panel dedicado para facturación, cierres de mesa y cobro directo. Visualiza subtotales por mesa, gestiona métodos de pago (efectivo, tarjeta) y libera la mesa para la fase de limpieza automática (transición OCCUPIED → CLEANING).",
      tech: "Next.js 16+, Shared Formatter utils, CLP Currency parsing",
      file: "apps/cashier-dashboard", color: "from-cyan-500 to-teal-500"
    },
    "admin-dashboard": {
      name: "admin-dashboard", port: "3000", role: "SUPER_ADMIN",
      desc: "Panel administrativo SaaS global. Permite dar de alta nuevos restaurantes (tenants), gestionar planes de suscripción mensuales, realizar mantención global del sistema y monitorear el estado general de la plataforma SaaS.",
      tech: "Next.js 16+, Supabase Admin client, SaaS Subscription controller",
      file: "apps/admin-dashboard", color: "from-slate-700 to-slate-900"
    },
    "@menu-bites/auth": {
      name: "@menu-bites/auth", port: "Package", role: "LÓGICA CORE",
      desc: "Paquete centralizado que gestiona las conexiones del cliente Supabase, control de cookies HTTPOnly por aplicación, hooks compartidos (useRealtimeSync, useBarOrders), formatters (CLP, timeAgo) y constantes operacionales del negocio.",
      tech: "Prisma Schema, JWT Client, Centralized Reactivity Hooks",
      file: "packages/auth", color: "from-emerald-400 to-green-600"
    },
    "@menu-bites/ui": {
      name: "@menu-bites/ui", port: "Package", role: "LIBRERÍA UI",
      desc: "Biblioteca unificada de componentes visuales premium construidos sobre Tailwind CSS. Exporta botones, tablas, modales y layouts premium que aseguran paridad visual 100% idéntica en todo el ecosistema (Solid Design).",
      tech: "Tailwind CSS v4, Lucide Icons, Premium CSS Variable hooks",
      file: "packages/ui", color: "from-emerald-400 to-teal-500"
    }
  };

  const securityLayers = [
    {
      num: 1, name: "Capa 1: Edge CDN (Vercel)", resp: "Vercel Global Network Edge",
      desc: "HTTPS forzado con TLS 1.3. La CDN global distribuye los assets estáticos del menú digital del cliente final en menos de 200ms del primer render. Absorbe y mitiga ráfagas masivas de tráfico y ataques DDoS básicos en el borde de la red.",
      snippet: "TLS 1.3 Enforced • Global Caching • Edge Caching Filters"
    },
    {
      num: 2, name: "Capa 2: Middleware RBAC (Next.js)", resp: "Next.js Edge Middleware",
      desc: "El middleware edge (src/proxy.ts) extrae de forma segura el token JWT de las cookies HttpOnly (sb-{app}-session), valida el rol del usuario (RBAC) y certifica el aislamiento de inquilinos. Un garzón del Restaurante A jamás podrá acceder a rutas del Restaurante B.",
      snippet: `// middleware.ts (Edge Runtime)\nconst session = await getSession();\nconst userTenant = session?.user?.app_metadata?.restaurant_id;\nconst userRole = session?.user?.app_metadata?.role;\n\nif (userTenant !== currentRouteSlugTenantId) {\n  return Response.redirect('/403-forbidden');\n}`
    },
    {
      num: 3, name: "Capa 3: API & Lazy Client Initialization", resp: "Next.js API Handler",
      desc: "Las API Routes sanitizan los payloads de entrada y gestionan la lógica de negocio profunda. Incorporamos inicialización perezosa (lazy initialization) del cliente Supabase administrativo dentro del handler de solicitudes para garantizar resiliencia en tiempo de construcción (Vercel build-time).",
      snippet: `// apps/local-dashboard/src/app/api/settings/route.ts\nexport async function GET(req: Request) {\n  const supabaseAdmin = createClient(\n    process.env.NEXT_PUBLIC_SUPABASE_URL!,\n    process.env.SUPABASE_SERVICE_ROLE_KEY!\n  );\n  ...\n}`
    },
    {
      num: 4, name: "Capa 4: Row Level Security (RLS)", resp: "PostgreSQL Engine (Supabase)",
      desc: "La última y más infranqueable línea de defensa. Row Level Security está habilitado en todas las tablas transaccionales de PostgreSQL. Las políticas RLS filtran los resultados utilizando el ID de usuario del JWT firmado, bloqueando consultas cruzadas directamente a nivel de base de datos.",
      snippet: `-- PostgreSQL RLS Active Policy\nCREATE POLICY "tenant_isolation"\nON public.orders FOR ALL TO authenticated\nUSING (\n  restaurant_id = (SELECT restaurant_id FROM users WHERE id = auth.uid())\n);`
    }
  ];

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
            <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">E P 3 · I N G E N I E R Í A   A V A N Z A D A</span>
          </div>
          <h1 style={{ margin: "0 0 1rem", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.05em", fontFamily: "'Fraunces', serif", color: "#fafaf9", lineHeight: 1.05 }}>
            Ingeniería <span style={{ fontStyle: "italic", color: "#10B981" }}>Avanzada</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#94a3b8", maxWidth: "48rem", lineHeight: 1.6 }}>
            Arquitectura unificada, serverless y basada en el paradigma de BaaS para garantizar estabilidad frente a alta demanda gastronómica.
          </p>
        </div>

      </div>

      {/* ── ALL SECTIONS ── */}
      <div className="relative z-30 flex flex-col items-center px-6 pb-24 max-w-7xl mx-auto w-full">

        {/* CARD 01 — ECOSISTEMA */}
        <section className="w-full mb-16 space-y-8">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">S T A C K   F U L L - S T A C K</h2>
            <p className="text-3xl font-black tracking-tight text-white">1. Ecosistema Full-Stack Omnicanal</p>
          </div>
          <div className="w-full bg-slate-950/30 backdrop-blur-xl border border-white/10 rounded-[3rem] p-6 md:p-10 text-left">
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
              <ReactLogo />
              <NextJsLogo />
            </div>
            <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              La omnicanalidad de Menú Bytes exige coherencia absoluta. Adoptamos un stack unificado en <strong style={{ color: "#fafaf9" }}>TypeScript</strong> que nos permite erradicar la duplicación de esfuerzos, compartiendo lógica de negocio y validaciones entre nuestras distintas plataformas operativas.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
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
        </section>

        {/* CARD 02 — SUPABASE */}
        <section className="w-full mb-16 space-y-8">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">B A A S   &   S E G U R I D A D</h2>
            <p className="text-3xl font-black tracking-tight text-white">2. Motor BaaS & Seguridad RLS</p>
          </div>
          <div className="w-full bg-slate-950/30 backdrop-blur-xl border border-white/10 rounded-[3rem] p-6 md:p-10 text-left">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <SupabaseLogo />
              <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#3ECF8E", letterSpacing: "-0.02em" }}>Supabase</span>
            </div>
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
        </section>

        {/* CARD 03 — VERCEL */}
        <section className="w-full mb-16 space-y-8">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">D E S P L I E G U E   C L O U D</h2>
            <p className="text-3xl font-black tracking-tight text-white">3. Despliegue Cloud PaaS</p>
          </div>
          <div className="w-full bg-slate-950/30 backdrop-blur-xl border border-white/10 rounded-[3rem] p-6 md:p-10 text-left">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <VercelLogo />
              <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.05em" }}>Vercel</span>
            </div>
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
        </section>

        {/* CARD 04 — GITFLOW */}
        <section className="w-full mb-16 space-y-8">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">O R Q U E S T A C I Ó N</h2>
            <p className="text-3xl font-black tracking-tight text-white">4. GitFlow & Turborepo</p>
          </div>
          <div className="w-full bg-slate-950/30 backdrop-blur-xl border border-white/10 rounded-[3rem] p-6 md:p-10 text-left">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <GitLogo />
              <span style={{ fontSize: "1.6rem", fontWeight: 800, color: "#F1502F", letterSpacing: "-0.01em" }}>GitFlow / Turborepo</span>
            </div>
            <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              La calidad del producto final es proporcional a la disciplina estructural de los repositorios. Menú Bytes previene el &ldquo;código espagueti&rdquo; forjando el frontend en un entorno <strong>Monorepo</strong> y gestionando despliegues con GitFlow.
            </p>
            <div style={{ background: "rgba(16, 185, 129, 0.03)", border: "1px solid rgba(16, 185, 129, 0.15)", borderRadius: "1.5rem", padding: "1.5rem" }}>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.7 }}>
                <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fafaf9" }}>Turborepo Workspaces:</strong> La app del Admin, la PWA del Garzón y el Menú Cliente residen en un mismo repositorio. Comparten tokens de diseño y utilidades TypeScript globales en un solo comando: <code>npm run dev</code>.</li>
                <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fafaf9" }}>Estrategia de Ramas Semánticas:</strong> Operamos bajo un esquema inquebrantable de separación (main como producción bloqueada, dev como testeo, y feat/* para ramas cortas efímeras).</li>
                <li><strong style={{ color: "#fafaf9" }}>Aprobación Gated (Code Review):</strong> Nadie altera producción de forma independiente o inadvertida. Toda fusión técnica exige la certificación de calidad (Pull Requests) para evitar regresiones lógicas antes de publicarse.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN: INTERACTIVE MONOREPO EXPLORER ── */}
        <section className="w-full mb-36 space-y-12">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">E S T R U C T U R A   D E L   P R O Y E C T O</h2>
            <p className="text-3xl font-black tracking-tight text-white">Explorador del Monorepo Turborepo</p>
          </div>

          <div className="max-w-7xl mx-auto w-full bg-slate-950/30 backdrop-blur-xl border border-white/10 rounded-[3rem] p-6 md:p-10 text-left relative">
            <div className="absolute top-6 right-8 hidden md:flex items-center gap-1.5 text-xs text-slate-500">
              <Terminal className="w-3.5 h-3.5 text-emerald-500 animate-pulse" /> npm workspaces active
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
              <div className="space-y-2 max-h-[420px] overflow-y-auto pr-2">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-3 mb-2">Aplicaciones (apps/)</div>
                {Object.values(monorepoData).filter(item => item.port !== "Package").map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveApp(item.name)}
                    className={`w-full text-left px-4 py-3 rounded-2xl border text-xs font-black tracking-wide transition-all flex items-center justify-between ${
                      activeApp === item.name
                        ? "bg-emerald-500/10 border-emerald-500/30 text-white"
                        : "bg-slate-950/40 border-white/5 text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded-md font-mono uppercase ${
                      activeApp === item.name ? "bg-emerald-500 text-slate-950" : "bg-white/5 text-slate-500"
                    }`}>{item.role}</span>
                  </button>
                ))}
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-3 mt-4 mb-2">Paquetes (packages/)</div>
                {Object.values(monorepoData).filter(item => item.port === "Package").map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveApp(item.name)}
                    className={`w-full text-left px-4 py-3 rounded-2xl border text-xs font-black tracking-wide transition-all flex items-center justify-between ${
                      activeApp === item.name
                        ? "bg-emerald-500/10 border-emerald-500/30 text-white"
                        : "bg-slate-950/40 border-white/5 text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="font-mono text-[11px]">{item.name}</span>
                    <span className="text-[8px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md font-mono uppercase">CORE</span>
                  </button>
                ))}
              </div>

              <div className="bg-slate-950/50 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-[380px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                    <div>
                      <div className="inline-flex px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono tracking-wider text-slate-400 mb-2">
                        {monorepoData[activeApp as keyof typeof monorepoData].file}
                      </div>
                      <h4 className="text-2xl md:text-3xl font-black text-white">{monorepoData[activeApp as keyof typeof monorepoData].name}</h4>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Usuario / Puerto</span>
                      <span className="text-lg font-black text-emerald-500">
                        {monorepoData[activeApp as keyof typeof monorepoData].role}
                        {monorepoData[activeApp as keyof typeof monorepoData].port !== "Package" && ` (Port :${monorepoData[activeApp as keyof typeof monorepoData].port})`}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Descripción del Rol</span>
                      <p className="text-sm md:text-base text-slate-300 leading-relaxed">{monorepoData[activeApp as keyof typeof monorepoData].desc}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1.5">Módulos & Tecnologías Destacadas</span>
                      <div className="flex flex-wrap gap-2">
                        {monorepoData[activeApp as keyof typeof monorepoData].tech.split(", ").map((t) => (
                          <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300 font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6 mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Listo para Entornos Staging y Compilación Turborepo</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">Turborepo Cache hit: true (100% validated)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN: DUAL-STATION REALTIME ORDER LIFE-CYCLE ── */}
        <section className="w-full mb-36 space-y-12">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">F L U J O   D E   C O M A N D A S</h2>
            <p className="text-3xl font-black tracking-tight text-white">Enrutamiento Realtime Dual-Estación (v2.4.0)</p>
          </div>

          <div className="max-w-7xl mx-auto w-full bg-slate-950/30 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 text-left relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[30%] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
              <div className="space-y-8">
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">PROCESAMIENTO MULTI-KDS DE PEDIDOS</span>
                  <h4 className="text-2xl font-black text-white">Simulador de Transición Realtime</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Menu Bites implementa una preparación descentralizada. Cuando un pedido es mixto, la Barra y la Cocina operan de forma independiente mediante banderas específicas en Supabase.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-b border-white/10 py-6 max-w-2xl">
                  {[
                    { label: "Mesa Cliente", val: "M2", active: true, color: "emerald" },
                    { label: "Router Api", val: "API", active: true, color: "indigo" },
                    { label: "KDS Cocina", val: "KDS", active: simKitchenReady, color: "amber" },
                    { label: "KDS Barra", val: "BAR", active: simBarReady, color: "purple" },
                  ].map((node, i) => (
                    <React.Fragment key={node.val}>
                      {i > 0 && <ChevronRight className="w-4 h-4 text-slate-600" />}
                      <div className="text-center">
                        <span className="text-[9px] font-black text-slate-500 uppercase block mb-1">{node.label}</span>
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-black mx-auto transition-all ${
                          node.active
                            ? `bg-${node.color}-500/20 border-${node.color}-500 text-${node.color}-400`
                            : "bg-slate-900 border-white/10 text-slate-600"
                        }`}>{node.val}</div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                <div className="bg-slate-950/70 border border-white/5 rounded-2xl p-6 space-y-4 max-w-2xl">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Status: {simKitchenReady && simBarReady ? "READY" : (simKitchenReady || simBarReady ? "PREPARING" : "PENDING")}
                    </span>
                    <button
                      onClick={() => { setSimKitchenReady(false); setSimBarReady(false); setSimStep(0); }}
                      className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest flex items-center gap-1 transition-all"
                    >
                      <RotateCcw className="w-3 h-3" /> Reiniciar
                    </button>
                  </div>
                  <div className="text-xs text-slate-300 font-mono py-2">
                    {simStep === 0 && "> [Sistema Listo] Genera una comanda mixta (1 Pizza + 1 Mojito) para iniciar."}
                    {simStep === 1 && "> [API Enrutada] Pizza enrutada a Cocina (KITCHEN); Mojito enrutado a Barra (BAR)."}
                    {simStep === 2 && "> [Preparando] Barra completa preparación. Mojito en estado 'bar_ready=true'. Estado global: PREPARING (Cocina sigue trabajando)."}
                    {simStep === 3 && "> [Completado] Cocina completa preparación 'kitchen_ready=true'. Ambos listos. Pedido cambia automáticamente a status 'READY'."}
                  </div>
                  <div className="flex gap-2">
                    {simStep === 0 && (
                      <button onClick={() => setSimStep(1)} className="px-4 py-2 bg-emerald-500 text-slate-950 font-black rounded-lg text-xs uppercase tracking-wider flex items-center gap-1 hover:scale-105 active:scale-95 transition-all">
                        <Play className="w-3.5 h-3.5 fill-current" /> Crear Pedido Mixto
                      </button>
                    )}
                    {simStep === 1 && (
                      <button onClick={() => { setSimBarReady(true); setSimStep(2); }} className="px-4 py-2 bg-purple-500 text-white font-black rounded-lg text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all">
                        Despachar Bebida en Barra
                      </button>
                    )}
                    {simStep === 2 && (
                      <button onClick={() => { setSimKitchenReady(true); setSimStep(3); }} className="px-4 py-2 bg-amber-500 text-slate-950 font-black rounded-lg text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all">
                        Despachar Alimento en Cocina
                      </button>
                    )}
                    {simStep === 3 && (
                      <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-black rounded-lg text-xs uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" /> Comanda Lista en Sala!
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/50 border border-white/5 rounded-3xl p-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Base de Datos (Tabla Orders)</div>
                  <div className="space-y-4">
                    {[
                      { field: "kitchen_preparing", color: "emerald", desc: "Determina si la estación de cocina está preparando alimentos de la comanda." },
                      { field: "kitchen_ready", color: "emerald", desc: "Cocina completó todos los ítems asignados del ticket." },
                      { field: "bar_preparing", color: "purple", desc: "Determina si la estación de barra está preparando bebidas o licores." },
                      { field: "bar_ready", color: "purple", desc: "La barra completó de preparar todos los licores y jugos." },
                    ].map((f, i) => (
                      <div key={f.field} className={i < 3 ? "border-b border-white/5 pb-3" : ""}>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className={`font-mono text-${f.color}-400`}>{f.field}</span>
                          <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 font-mono">boolean</span>
                        </div>
                        <p className="text-[11px] text-slate-500">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 text-[11px] text-slate-400 italic">
                  * El estado general de orders cambia a READY automáticamente sólo cuando (kitchen_ready = true AND bar_ready = true)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN: 4-LAYER SECURITY SYSTEM ── */}
        <section className="w-full mb-36 space-y-12">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">S E G U R I D A D   T E C N O L Ó G I C A</h2>
            <p className="text-3xl font-black tracking-tight text-white">Modelo de Seguridad en Profundidad (RBAC & RLS)</p>
          </div>

          <div className="max-w-7xl mx-auto w-full bg-slate-950/30 backdrop-blur-xl border border-white/10 rounded-[3rem] p-6 md:p-10 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
              <div className="space-y-3">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-3 mb-2">Capas de Protección</div>
                {securityLayers.map((layer) => (
                  <button
                    key={layer.num}
                    onClick={() => setActiveSecurityLayer(layer.num)}
                    className={`w-full text-left px-4 py-3.5 rounded-2xl border text-xs font-black tracking-wide transition-all flex items-center gap-3 ${
                      activeSecurityLayer === layer.num
                        ? "bg-emerald-500/10 border-emerald-500/30 text-white"
                        : "bg-slate-950/40 border-white/5 text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono ${
                      activeSecurityLayer === layer.num ? "bg-emerald-500 text-slate-950 font-black" : "bg-slate-800 text-slate-500"
                    }`}>L{layer.num}</span>
                    <span>{layer.name.split(": ")[1]}</span>
                  </button>
                ))}
              </div>

              <div className="bg-slate-950/50 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[360px]">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">COMPONENTE RESPONSABLE</span>
                      <h4 className="text-xl font-black text-white">{securityLayers[activeSecurityLayer - 1].name}</h4>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg text-[9px] font-black uppercase">
                      {securityLayers[activeSecurityLayer - 1].resp}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">{securityLayers[activeSecurityLayer - 1].desc}</p>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">ESPECIFICACIÓN / IMPLEMENTACIÓN</span>
                    <pre className="p-4 bg-[#010409] border border-white/5 rounded-xl text-xs font-mono text-emerald-400 overflow-x-auto select-all max-h-[180px] overflow-y-auto">
                      {securityLayers[activeSecurityLayer - 1].snippet}
                    </pre>
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 border-t border-white/5 pt-4 mt-6 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Blindado contra Inyección SQL, Tenant Leakage e IDOR (Direct Object References).
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN: CLOUD & DEPLOYMENT INFRASTRUCTURE ── */}
        <section className="w-full mb-36 space-y-16">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">I N F R A E S T R U C T U R A   &   D E S P L I E G U E</h2>
            <p className="text-3xl font-black tracking-tight text-white">Servicios Cloud & Calidad de Código</p>
          </div>

          <div className="grid grid-cols-1 gap-10 max-w-7xl mx-auto w-full">
            {[
              { icon: Cloud, title: "Hospedaje & Almacenamiento", tag: "VERCEL SERVERLESS PAAS", desc: "Almacenamos y distribuimos la aplicación web administrativa y el menú digital del cliente a través de Vercel y su Edge CDN global. Esto garantiza tiempos de respuesta del primer render en menos de 200ms y un escalado automático serverless capaz de absorber ráfagas masivas de pedidos." },
              { icon: Database, title: "Persistencia & RLS", tag: "SUPABASE POSTGRESQL", desc: "Persistimos el estado en Supabase (PostgreSQL). La integridad y aislamiento de datos multi-tenant está blindada directamente en el motor mediante políticas de seguridad a nivel de fila (RLS). La información del menú y pedidos del Restaurante A jamás se cruzará con el Restaurante B." },
              { icon: GitBranch, title: "Develop vs Main (GitFlow)", tag: "ENTORNOS AUTOMÁTICOS", desc: "Operamos bajo un esquema estricto de GitFlow. La rama develop sirve para integrar cambios y desplegar automáticamente entornos efímeros de testeo en Vercel para validación. La rama main queda bloqueada y protegida, actualizándose solo tras certificar la estabilidad en preproducción." }
            ].map((pilar, idx) => (
              <div key={idx} className="group relative pt-14 pb-8 px-8 md:px-12 bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] text-left transition-all duration-500 hover:bg-slate-950/60 hover:-translate-y-1 hover:border-emerald-500/20 w-full">
                <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-slate-950 border border-white/10 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/5 group-hover:border-emerald-500/30 group-hover:scale-110 transition-all duration-500 z-20">
                  <pilar.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 items-start">
                  <div className="space-y-2">
                    <div className="inline-flex px-3 py-1 bg-slate-950/80 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-wider text-emerald-400/80">{pilar.tag}</div>
                    <h3 className="font-bold text-white text-2xl leading-tight">{pilar.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">{pilar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECCIÓN: RESILIENCE OFFLINE & WEB PUSH ── */}
        <section className="w-full mb-12 space-y-16">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">R E S I L I E N C I A   O F F L I N E</h2>
            <p className="text-3xl font-black tracking-tight text-white">Service Workers & Notificaciones Web Push</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto w-full text-left">
            <div className="bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-md">
                  <Wifi className="w-6 h-6 text-amber-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">KITCHEN KDS SERVICE WORKER</span>
                  <h4 className="text-xl font-bold text-white">Caché offline y Resiliencia en Cocina</h4>
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  La pantalla de cocina (apps/kitchen-kds) registra un Service Worker con estrategia Cache-First para los assets estáticos de compilación (_next/static) y Network-First con fallback offline para la interfaz de comanda. Si la red local pierde acceso a Internet, la cocina puede seguir visualizando el KDS y operar con los últimos pedidos en cola.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6 text-[10px] font-mono text-amber-500">
                sw.js • Cache-First static asset caching active
              </div>
            </div>

            <div className="bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shadow-md">
                  <Bell className="w-6 h-6 text-rose-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">WAITER MOBILE TERMINAL PUSH</span>
                  <h4 className="text-xl font-bold text-white">Notificaciones Push nativas en Sala</h4>
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  El personal de garzones recibe alertas nativas de sistema en su móvil cuando un pedido de su mesa está listo. El terminal (apps/waiter-terminal) se suscribe mediante la Web Push API cifrada con claves VAPID en servidor. Al despachar en barra o cocina, el worker despierta la app mediante notificaciones push en segundo plano.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6 text-[10px] font-mono text-rose-500">
                VAPID • web-push + RFC 8292 standard protocol
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
