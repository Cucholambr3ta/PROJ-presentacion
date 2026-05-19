"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  QrCode, 
  Utensils, 
  Zap, 
  Star, 
  ArrowRight, 
  Store, 
  Compass,
  Cpu,
  Calendar,
  Layers,
  Database,
  Cloud,
  GitBranch,
  Users,
  ShieldCheck,
  Terminal,
  Server,
  Globe,
  Lock,
  Bell,
  Wifi,
  Play,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  Info
} from "lucide-react";

export default function PresentationPage() {
  const router = useRouter();

  // State for Monorepo Explorer
  const [activeApp, setActiveApp] = useState("customer-portal");

  // State for Security Layers
  const [activeSecurityLayer, setActiveSecurityLayer] = useState(4);

  // State for Dual-Station Live Simulator
  const [simStep, setSimStep] = useState(0);
  const [simKitchenReady, setSimKitchenReady] = useState(false);
  const [simBarReady, setSimBarReady] = useState(false);

  const monorepoData = {
    "customer-portal": {
      name: "customer-portal",
      port: "3005",
      role: "CLIENTE",
      desc: "Portal web responsivo del cliente final. Se accede escaneando el código QR único de la mesa. Carga el menú, gestiona pedidos en tiempo real y permite solicitar la cuenta o llamar al garzón sin instalar aplicaciones nativas.",
      tech: "Next.js 16+ (CSR/SSR), Tailwind CSS v4, Supabase Realtime Client",
      file: "apps/customer-portal",
      color: "from-emerald-500 to-teal-400"
    },
    "local-dashboard": {
      name: "local-dashboard",
      port: "3003",
      role: "ADMIN",
      desc: "Panel administrativo y operativo principal del restaurante. Permite configurar menús, editar categorías, definir mesas, gestionar la caja, visualizar estadísticas históricas y personalizar el branding dinámico (Branding Engine).",
      tech: "Next.js 16+ (App Router), Prisma Client, Tailwind CSS v4",
      file: "apps/local-dashboard",
      color: "from-blue-500 to-indigo-500"
    },
    "kitchen-kds": {
      name: "kitchen-kds",
      port: "3001",
      role: "COCINA",
      desc: "Pantalla de visualización de cocina (Kitchen Display Screen). Recibe comandas en tiempo real, permite marcar preparaciones en curso o listas, emite alertas sonoras configurables y opera offline mediante Service Worker Cache-First.",
      tech: "Next.js 16+, Service Worker Offline Cache, HTML5 Audio API",
      file: "apps/kitchen-kds",
      color: "from-amber-500 to-orange-500"
    },
    "bar-dashboard": {
      name: "bar-dashboard",
      port: "3006",
      role: "BAR",
      desc: "KDS dedicada en barra para bebidas, jugos y cócteles. Cuenta con filtrado automático de categorías asignadas a BAR, control independiente de preparación (bar_preparing/bar_ready) y alertas de quiebre de stock de insumos rápidos.",
      tech: "Next.js 16+, StockAlertModal, Polymorphic KDS Settings",
      file: "apps/bar-dashboard",
      color: "from-purple-500 to-pink-500"
    },
    "waiter-terminal": {
      name: "waiter-terminal",
      port: "3002",
      role: "GARZON",
      desc: "Terminal móvil web para el personal de sala. Gestiona mesas en tiempo real (limpieza, pedidos, solicitudes de ayuda de mesa). Recibe notificaciones push nativas al instante en el móvil al completarse un pedido en cocina o barra.",
      tech: "Next.js 16+, Web Push API, Service Worker Push Listener",
      file: "apps/waiter-terminal",
      color: "from-rose-500 to-red-500"
    },
    "cashier-dashboard": {
      name: "cashier-dashboard",
      port: "3004",
      role: "CAJERO",
      desc: "Panel dedicado para facturación, cierres de mesa y cobro directo. Visualiza subtotales por mesa, gestiona métodos de pago (efectivo, tarjeta) y libera la mesa para la fase de limpieza automática (transición OCCUPIED → CLEANING).",
      tech: "Next.js 16+, Shared Formatter utils, CLP Currency parsing",
      file: "apps/cashier-dashboard",
      color: "from-cyan-500 to-teal-500"
    },
    "admin-dashboard": {
      name: "admin-dashboard",
      port: "3000",
      role: "SUPER_ADMIN",
      desc: "Panel administrativo SaaS global. Permite dar de alta nuevos restaurantes (tenants), gestionar planes de suscripción mensuales, realizar mantención global del sistema y monitorear el estado general de la plataforma SaaS.",
      tech: "Next.js 16+, Supabase Admin client, SaaS Subscription controller",
      file: "apps/admin-dashboard",
      color: "from-slate-700 to-slate-900"
    },
    "@menu-bites/auth": {
      name: "@menu-bites/auth",
      port: "Package",
      role: "LÓGICA CORE",
      desc: "Paquete centralizado que gestiona las conexiones del cliente Supabase, control de cookies HTTPOnly por aplicación, hooks compartidos (useRealtimeSync, useBarOrders), formatters (CLP, timeAgo) y constantes operacionales del negocio.",
      tech: "Prisma Schema, JWT Client, Centralized Reactivity Hooks",
      file: "packages/auth",
      color: "from-emerald-400 to-green-600"
    },
    "@menu-bites/ui": {
      name: "@menu-bites/ui",
      port: "Package",
      role: "LIBRERÍA UI",
      desc: "Biblioteca unificada de componentes visuales premium construidos sobre Tailwind CSS. Exporta botones, tablas, modales y layouts premium que aseguran paridad visual 100% idéntica en todo el ecosistema (Solid Design).",
      tech: "Tailwind CSS v4, Lucide Icons, Premium CSS Variable hooks",
      file: "packages/ui",
      color: "from-emerald-400 to-teal-500"
    }
  };

  const securityLayers = [
    {
      num: 1,
      name: "Capa 1: Edge CDN (Vercel)",
      resp: "Vercel Global Network Edge",
      desc: "HTTPS forzado con TLS 1.3. La CDN global distribuye los assets estáticos del menú digital del cliente final en menos de 200ms del primer render. Absorbe y mitiga ráfagas masivas de tráfico y ataques DDoS básicos en el borde de la red.",
      snippet: "TLS 1.3 Enforced • Global Caching • Edge Caching Filters"
    },
    {
      num: 2,
      name: "Capa 2: Middleware RBAC (Next.js)",
      resp: "Next.js Edge Middleware",
      desc: "El middleware edge (`src/proxy.ts`) extrae de forma segura el token JWT de las cookies HttpOnly (sb-{app}-session), valida el rol del usuario (RBAC) y certifica el aislamiento de inquilinos. Un garzón del Restaurante A jamás podrá acceder a rutas del Restaurante B.",
      snippet: `// middleware.ts (Edge Runtime)
const session = await getSession();
const userTenant = session?.user?.app_metadata?.restaurant_id;
const userRole = session?.user?.app_metadata?.role;

if (userTenant !== currentRouteSlugTenantId) {
  return Response.redirect('/403-forbidden');
}`
    },
    {
      num: 3,
      name: "Capa 3: API & Lazy Client Initialization",
      resp: "Next.js API Handler",
      desc: "Las API Routes sanitizan los payloads de entrada y gestionan la lógica de negocio profunda. Incorporamos inicialización perezosa (lazy initialization) del cliente Supabase administrativo dentro del handler de solicitudes para garantizar resiliencia en tiempo de construcción (Vercel build-time).",
      snippet: `// apps/local-dashboard/src/app/api/settings/route.ts
export async function GET(req: Request) {
  // Inicialización perezosa al recibir el request, previene fallos de compilación sin envs
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  ...
}`
    },
    {
      num: 4,
      name: "Capa 4: Row Level Security (RLS)",
      resp: "PostgreSQL Engine (Supabase)",
      desc: "La última y más infranqueable línea de defensa. Row Level Security está habilitado en todas las tablas transaccionales de PostgreSQL. Las políticas RLS filtran los resultados utilizando el ID de usuario del JWT firmado, bloqueando consultas cruzadas directamente a nivel de base de datos.",
      snippet: `-- PostgreSQL RLS Active Policy
CREATE POLICY "tenant_isolation"
ON public.orders FOR ALL TO authenticated
USING (
  restaurant_id = (SELECT restaurant_id FROM users WHERE id = auth.uid())
);`
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden">
      
      {/* Viewport Cyber-Sleek Neon Border */}
      <div className="fixed inset-0 border-[6px] md:border-[12px] border-slate-950 pointer-events-none z-50" />
      <div className="fixed inset-2 md:inset-4 border border-emerald-500/10 pointer-events-none z-50 rounded-2xl shadow-[inset_0_0_30px_rgba(16,185,129,0.06),_0_0_20px_rgba(16,185,129,0.04)]" />

      {/* Background Decorative Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-15%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[50%] h-[50%] bg-emerald-600/5 rounded-full blur-[140px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-40 flex items-center justify-between px-6 py-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => router.push("/")}>
          <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Utensils className="w-5 h-5 text-slate-950" />
          </div>
          <span className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Menu<span className="text-emerald-500">Bites</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-wider text-slate-400">
            Presentación v2.4.0
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-30 flex-1 flex flex-col items-center justify-center px-6 pt-12 pb-24 text-center max-w-6xl mx-auto w-full">
        
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10 animate-bounce">
          <Star className="w-3 h-3 fill-current" />
          TALLER APLICADO DE PROGRAMACIÓN (TPY1101)
        </div>

        {/* Huge Headline */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tightest mb-8 leading-[0.95] lg:max-w-5xl text-white">
          Pide sin <span className="text-emerald-500">esperas</span>, disfruta sin <span className="relative inline-block">
            límites
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </span>.
        </h1>

        <p className="text-lg md:text-xl text-slate-400 font-medium mb-24 max-w-3xl leading-relaxed">
          Menú Bytes es un ecosistema digital inteligente diseñado para erradicar las esperas en la atención gastronómica y optimizar los flujos de cocina en tiempo real.
        </p>

        {/* ── SECCIÓN 1: PILARES ESTRATÉGICOS (FCTO: PROBLEM & SOLUTION) ── */}
        <section className="w-full mb-36 space-y-16">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">N U E S T R A   P R O P U E S T A</h2>
            <p className="text-3xl font-black tracking-tight text-white">Pilares de Menú Bytes</p>
          </div>

          {/* Optimized Anti-Collision Grid Cards */}
          <div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto w-full">
            {[
              {
                icon: Compass,
                title: "Visión & Estrategia",
                tag: "RESUMEN DEL PROBLEMA Y NUESTRA SOLUCIÓN",
                desc: "Los restaurantes sufren pérdidas críticas debido a la lentitud en la toma de pedidos y fricción en los pagos. Menú Bytes digitaliza el 100% del proceso: el cliente escanea el código QR de su mesa, ordena desde su móvil sin descargar aplicaciones, y la comanda viaja directo e instantáneamente a la pantalla de cocina y garzones, eliminando intermediarios y esperas."
              },
              {
                icon: Cpu,
                title: "Ingeniería Avanzada",
                tag: "STACK FULL-STACK",
                desc: "Construimos una arquitectura omnicanal robusta unificada en TypeScript, utilizando Next.js 16+ en el panel web y React Native + Expo para la aplicación móvil nativa del personal de salón. Compartimos lógica de negocio y esquemas de validación de datos para erradicar la duplicación de código e inconsistencias."
              },
              {
                icon: Calendar,
                title: "Gestión & Metodología",
                tag: "GARANTÍA DE VALOR",
                desc: "Orquestamos un desarrollo iterativo ágil bajo un Roadmap de 18 semanas. La elección de SCRUM permite despachar entregas funcionales continuas y validar el flujo operativo core completo (Hito 1 - Semana 4) en condiciones de producción real."
              }
            ].map((pilar, idx) => (
              <div 
                key={idx} 
                className="group relative pt-14 pb-8 px-8 md:px-12 bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] text-left transition-all duration-500 hover:bg-slate-950/60 hover:-translate-y-1 hover:border-emerald-500/20 w-full"
              >
                {/* Floating Badge Icon */}
                <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-slate-950 border border-white/10 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/5 group-hover:border-emerald-500/30 group-hover:scale-110 transition-all duration-500 z-20">
                  <pilar.icon className="w-6 h-6 text-emerald-500" />
                </div>

                {/* Symmetrical Grid Layout to prevent any text overlaps */}
                <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 items-start">
                  <div className="space-y-2">
                    <div className="inline-flex px-3 py-1 bg-slate-950/80 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-wider text-emerald-400/80">
                      {pilar.tag}
                    </div>
                    <h3 className="font-bold text-white text-2xl leading-tight">{pilar.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    {pilar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECCIÓN 2: INTERACTIVE MONOREPO EXPLORER ── */}
        <section className="w-full mb-36 space-y-12">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">E S T R U C T U R A   D E L   P R O Y E C T O</h2>
            <p className="text-3xl font-black tracking-tight text-white">Explorador del Monorepo Turborepo</p>
          </div>

          <div className="max-w-5xl mx-auto w-full bg-slate-950/30 backdrop-blur-xl border border-white/10 rounded-[3rem] p-6 md:p-10 text-left relative">
            <div className="absolute top-6 right-8 hidden md:flex items-center gap-1.5 text-xs text-slate-500">
              <Terminal className="w-3.5 h-3.5 text-emerald-500 animate-pulse" /> npm workspaces active
            </div>

            {/* Grid layout for tabs and details */}
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
              
              {/* App List Tabs */}
              <div className="space-y-2 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-3 mb-2">Aplicaciones (apps/)</div>
                {Object.values(monorepoData).filter(item => item.port !== "Package").map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveApp(item.name)}
                    className={`w-full text-left px-4 py-3 rounded-2xl border text-xs font-black tracking-wide transition-all flex items-center justify-between group ${
                      activeApp === item.name
                        ? "bg-emerald-500/10 border-emerald-500/30 text-white"
                        : "bg-slate-950/40 border-white/5 text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded-md font-mono uppercase ${
                      activeApp === item.name ? "bg-emerald-500 text-slate-950" : "bg-white/5 text-slate-500"
                    }`}>
                      {item.role}
                    </span>
                  </button>
                ))}

                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-3 mt-4 mb-2">Paquetes (packages/)</div>
                {Object.values(monorepoData).filter(item => item.port === "Package").map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveApp(item.name)}
                    className={`w-full text-left px-4 py-3 rounded-2xl border text-xs font-black tracking-wide transition-all flex items-center justify-between group ${
                      activeApp === item.name
                        ? "bg-emerald-500/10 border-emerald-500/30 text-white"
                        : "bg-slate-950/40 border-white/5 text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="font-mono text-[11px]">{item.name}</span>
                    <span className="text-[8px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md font-mono uppercase">
                      CORE
                    </span>
                  </button>
                ))}
              </div>

              {/* Dynamic Details Panel */}
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
                      <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                        {monorepoData[activeApp as keyof typeof monorepoData].desc}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1.5">Módulos & Tecnologías Destacadas</span>
                      <div className="flex flex-wrap gap-2">
                        {monorepoData[activeApp as keyof typeof monorepoData].tech.split(", ").map((t) => (
                          <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300 font-medium">
                            {t}
                          </span>
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

        {/* ── SECCIÓN 3: DUAL-STATION REALTIME ORDER LIFE-CYCLE ── */}
        <section className="w-full mb-36 space-y-12">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">F L U J O   D E   C O M A N D A S</h2>
            <p className="text-3xl font-black tracking-tight text-white">Enrutamiento Realtime Dual-Estación (v2.4.0)</p>
          </div>

          <div className="max-w-5xl mx-auto w-full bg-slate-950/30 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 text-left relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[30%] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
              
              {/* Left Column: Interactive Simulation */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">PROCESAMIENTO MULTI-KDS DE PEDIDOS</span>
                  <h4 className="text-2xl font-black text-white">Simulador de Transición Realtime</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Menu Bites implementa una **preparación descentralizada**. Cuando un pedido es mixto, la Barra y la Cocina operan de forma independiente mediante banderas específicas en Supabase.
                  </p>
                </div>

                {/* Simulation Pipeline States */}
                <div className="flex items-center justify-between border-t border-b border-white/10 py-6 max-w-lg">
                  <div className="text-center">
                    <span className="text-[9px] font-black text-slate-500 uppercase block mb-1">Mesa Cliente</span>
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-xs font-black text-emerald-400 mx-auto">M2</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                  <div className="text-center">
                    <span className="text-[9px] font-black text-slate-500 uppercase block mb-1">Router Api</span>
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500 flex items-center justify-center text-xs font-black text-indigo-400 mx-auto">API</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                  <div className="text-center">
                    <span className="text-[9px] font-black text-slate-500 uppercase block mb-1">KDS Cocina</span>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-black mx-auto transition-all ${
                      simKitchenReady ? "bg-amber-500/20 border-amber-500 text-amber-400" : "bg-slate-900 border-white/10 text-slate-600"
                    }`}>KDS</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                  <div className="text-center">
                    <span className="text-[9px] font-black text-slate-500 uppercase block mb-1">KDS Barra</span>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-black mx-auto transition-all ${
                      simBarReady ? "bg-purple-500/20 border-purple-500 text-purple-400" : "bg-slate-900 border-white/10 text-slate-600"
                    }`}>BAR</div>
                  </div>
                </div>

                {/* Simulator Action Console */}
                <div className="bg-slate-950/70 border border-white/5 rounded-2xl p-6 space-y-4 max-w-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Status: {simKitchenReady && simBarReady ? "READY" : (simKitchenReady || simBarReady ? "PREPARING" : "PENDING")}
                    </span>
                    <button 
                      onClick={() => {
                        setSimKitchenReady(false);
                        setSimBarReady(false);
                        setSimStep(0);
                      }}
                      className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest flex items-center gap-1 transition-all"
                    >
                      <RotateCcw className="w-3 h-3" /> Reiniciar
                    </button>
                  </div>

                  <div className="space-y-2 py-2">
                    <div className="text-xs text-slate-300 font-mono">
                      {simStep === 0 && "> [Sistema Listo] Genera una comanda mixta (1 Pizza + 1 Mojito) para iniciar."}
                      {simStep === 1 && "> [API Enrutada] Pizza enrutada a Cocina (KITCHEN); Mojito enrutado a Barra (BAR)."}
                      {simStep === 2 && "> [Preparando] Barra completa preparación. Mojito en estado 'bar_ready=true'. Estado global: PREPARING (Cocina sigue trabajando)."}
                      {simStep === 3 && "> [Completado] Cocina completa preparación 'kitchen_ready=true'. Ambos listos. Pedido cambia automáticamente a status 'READY'."}
                    </div>
                  </div>

                  {/* Simulator steps triggers */}
                  <div className="flex gap-2">
                    {simStep === 0 && (
                      <button 
                        onClick={() => setSimStep(1)} 
                        className="px-4 py-2 bg-emerald-500 text-slate-950 font-black rounded-lg text-xs uppercase tracking-wider flex items-center gap-1 hover:scale-105 active:scale-95 transition-all"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" /> Crear Pedido Mixto
                      </button>
                    )}
                    {simStep === 1 && (
                      <button 
                        onClick={() => {
                          setSimBarReady(true);
                          setSimStep(2);
                        }} 
                        className="px-4 py-2 bg-purple-500 text-white font-black rounded-lg text-xs uppercase tracking-wider flex items-center gap-1 hover:scale-105 active:scale-95 transition-all"
                      >
                        Despachar Bebida en Barra
                      </button>
                    )}
                    {simStep === 2 && (
                      <button 
                        onClick={() => {
                          setSimKitchenReady(true);
                          setSimStep(3);
                        }} 
                        className="px-4 py-2 bg-amber-500 text-slate-950 font-black rounded-lg text-xs uppercase tracking-wider flex items-center gap-1 hover:scale-105 active:scale-95 transition-all"
                      >
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

              {/* Right Column: Database columns details */}
              <div className="bg-slate-950/50 border border-white/5 rounded-3xl p-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Base de Datos (Tabla Orders)</div>
                  
                  <div className="space-y-4">
                    <div className="border-b border-white/5 pb-3">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-mono text-emerald-400">kitchen_preparing</span>
                        <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 font-mono">boolean</span>
                      </div>
                      <p className="text-[11px] text-slate-500">Determina si la estación de cocina está preparando alimentos de la comanda.</p>
                    </div>

                    <div className="border-b border-white/5 pb-3">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-mono text-emerald-400">kitchen_ready</span>
                        <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 font-mono">boolean</span>
                      </div>
                      <p className="text-[11px] text-slate-500">Cocina completó todos los ítems asignados del ticket.</p>
                    </div>

                    <div className="border-b border-white/5 pb-3">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-mono text-purple-400">bar_preparing</span>
                        <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 font-mono">boolean</span>
                      </div>
                      <p className="text-[11px] text-slate-500">Determina si la estación de barra está preparando bebidas o licores.</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-mono text-purple-400">bar_ready</span>
                        <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 font-mono">boolean</span>
                      </div>
                      <p className="text-[11px] text-slate-500">La barra completó de preparar todos los licores y jugos.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 text-[11px] text-slate-400 italic">
                  * El estado general de orders cambia a READY automáticamente sólo cuando (kitchen_ready = true AND bar_ready = true)
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SECCIÓN 4: INTERACTIVE 4-LAYER SECURITY SYSTEM ── */}
        <section className="w-full mb-36 space-y-12">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">S E G U R I D A D   T E G N O L Ó G I C A</h2>
            <p className="text-3xl font-black tracking-tight text-white">Modelo de Seguridad en Profundidad (RBAC & RLS)</p>
          </div>

          <div className="max-w-5xl mx-auto w-full bg-slate-950/30 backdrop-blur-xl border border-white/10 rounded-[3rem] p-6 md:p-10 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
              
              {/* Layers tab triggers */}
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
                    }`}>
                      L{layer.num}
                    </span>
                    <span>{layer.name.split(": ")[1]}</span>
                  </button>
                ))}
              </div>

              {/* Layers Code Snippets / Details */}
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

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {securityLayers[activeSecurityLayer - 1].desc}
                  </p>

                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">ESPECIFICACIÓN / IMPLEMENTACIÓN</span>
                    <pre className="p-4 bg-[#010409] border border-white/5 rounded-xl text-xs font-mono text-emerald-400 overflow-x-auto select-all max-h-[180px] overflow-y-auto custom-scrollbar">
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

        {/* ── SECCIÓN 5: CLOUD & DEPLOYMENT INFRASTRUCTURE ── */}
        <section className="w-full mb-36 space-y-16">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">I N F R A E S T R U C T U R A   &   D E S P L I E G U E</h2>
            <p className="text-3xl font-black tracking-tight text-white">Servicios Cloud & Calidad de Código</p>
          </div>

          <div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto w-full">
            {[
              {
                icon: Cloud,
                title: "Hospedaje & Almacenamiento",
                tag: "VERCEL SERVERLESS PAAS",
                desc: "Almacenamos y distribuimos la aplicación web administrativa y el menú digital del cliente a través de **Vercel** y su Edge CDN global. Esto garantiza tiempos de respuesta del primer render en menos de 200ms y un escalado automático serverless capaz de absorber ráfagas masivas de pedidos."
              },
              {
                icon: Database,
                title: "Persistencia & RLS",
                tag: "SUPABASE POSTGRESQL",
                desc: "Persistimos el estado en **Supabase** (PostgreSQL). La integridad y aislamiento de datos multi-tenant está blindada directamente en el motor mediante políticas de seguridad a nivel de fila (RLS). La información del menú y pedidos del Restaurante A jamás se cruzará con el Restaurante B."
              },
              {
                icon: GitBranch,
                title: "Develop vs Main (GitFlow)",
                tag: "ENTORNOS AUTOMÁTICOS",
                desc: "Operamos bajo un esquema estricto de GitFlow. La rama `develop` sirve para integrar cambios y desplegar automáticamente entornos efímeros de testeo en Vercel para validación. La rama `main` queda bloqueada y protegida, actualizándose solo tras certificar la estabilidad en preproducción."
              }
            ].map((pilar, idx) => (
              <div 
                key={idx} 
                className="group relative pt-14 pb-8 px-8 md:px-12 bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] text-left transition-all duration-500 hover:bg-slate-950/60 hover:-translate-y-1 hover:border-emerald-500/20 w-full"
              >
                {/* Floating Badge Icon */}
                <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-slate-950 border border-white/10 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/5 group-hover:border-emerald-500/30 group-hover:scale-110 transition-all duration-500 z-20">
                  <pilar.icon className="w-6 h-6 text-emerald-500" />
                </div>

                {/* Symmetrical Grid Layout to prevent any text overlaps */}
                <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 items-start">
                  <div className="space-y-2">
                    <div className="inline-flex px-3 py-1 bg-slate-950/80 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-wider text-emerald-400/80">
                      {pilar.tag}
                    </div>
                    <h3 className="font-bold text-white text-2xl leading-tight">{pilar.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    {pilar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECCIÓN 6: RESILIENCE OFFLINE & WEB PUSH ── */}
        <section className="w-full mb-36 space-y-16">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">R E S I L I E N C I A   O F F L I N E</h2>
            <p className="text-3xl font-black tracking-tight text-white">Service Workers & Notificaciones Web Push</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full text-left">
            
            {/* Sw.js KDS */}
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
                  La pantalla de cocina (`apps/kitchen-kds`) registra un Service Worker con estrategia **Cache-First** para los assets estáticos de compilación (`_next/static`) y **Network-First** con fallback offline para la interfaz de comanda. Si la red local pierde acceso a Internet, la cocina puede seguir visualizando el KDS y operar con los últimos pedidos en cola.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6 text-[10px] font-mono text-amber-500">
                sw.js • Cache-First static asset caching active
              </div>
            </div>

            {/* Web Push Waiter */}
            <div className="bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shadow-md">
                  <Bell className="w-6 h-6 text-rose-500 animate-swing" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">WAITER MOBILE TERMINAL PUSH</span>
                  <h4 className="text-xl font-bold text-white">Notificaciones Push nativas en Sala</h4>
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  El personal de garzones recibe alertas nativas de sistema en su móvil cuando un pedido de su mesa está listo. El terminal (`apps/waiter-terminal`) se suscribe mediante la **Web Push API** cifrada con claves VAPID en servidor. Al despachar en barra o cocina, el worker despierta la app mediante notificaciones push en segundo plano.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6 text-[10px] font-mono text-rose-500">
                VAPID • web-push + RFC 8292 standard protocol
              </div>
            </div>

          </div>
        </section>

        {/* ── SECCIÓN 7: CRONOGRAMA DE TRABAJO (FASES) ── */}
        <section className="w-full mb-36 space-y-16">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">C I C L O   D E   E N T R E G A</h2>
            <p className="text-3xl font-black tracking-tight text-white">Cronograma de Desarrollo (18 Semanas)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
            {[
              { icon: Layers, title: "Inicio (W1 - W3)", tag: "FASE 1: CONFIGURACIÓN", desc: "Elaboración del SAD, contratos de Base de Datos y diseño modular del Design System." },
              { icon: Zap, title: "Desarrollo (W4 - W12)", tag: "FASE 2: CONSTRUCCIÓN", desc: "Hito 1 (W4) con el flujo operativo core completamente funcional y paralelización de flujos.", current: "Semana 11" },
              { icon: Star, title: "QA & Cierre (W13 - W18)", tag: "FASE 3: CERTIFICACIÓN", desc: "Pruebas de estrés concurrentes, endurecimiento RLS y despliegue final a producción." }
            ].map((step, idx) => (
              <div 
                key={idx} 
                className={`group relative pt-14 pb-8 px-6 bg-slate-950/40 backdrop-blur-xl border rounded-[2.5rem] text-center transition-all duration-500 hover:-translate-y-1 flex flex-col items-center justify-between min-h-[250px] ${
                  step.current 
                    ? "border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.1)]" 
                    : "border-white/10 hover:border-emerald-500/30"
                }`}
              >
                {/* Floating Badge Icon */}
                <div className={`absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-slate-950 border rounded-full flex items-center justify-center shadow-lg transition-all duration-500 z-20 ${
                  step.current 
                    ? "border-emerald-500 shadow-emerald-500/10 scale-110" 
                    : "border-white/10 group-hover:border-emerald-500/30 group-hover:scale-110"
                }`}>
                  <step.icon className="w-6 h-6 text-emerald-500" />
                </div>

                {step.current && (
                  <div className="absolute top-4 right-4 px-2 py-0.5 bg-emerald-500 text-slate-950 text-[9px] font-black uppercase rounded-md tracking-wider animate-pulse">
                    {step.current} (Actual)
                  </div>
                )}

                <div className="space-y-3 mt-2">
                  <div className="inline-flex px-2.5 py-0.5 bg-slate-950/80 border border-white/10 rounded-full text-[8px] font-black uppercase tracking-wider text-emerald-400/80">
                    {step.tag}
                  </div>
                  <h3 className="text-lg font-black text-white">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed px-2">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECCIÓN 8: INTEGRANTES & FILOSOFÍA ── */}
        <section className="w-full mb-12 flex justify-center">
          <div className="relative w-full max-w-3xl group cursor-default">
            <div className="absolute inset-0 bg-emerald-500 blur-3xl opacity-5 pointer-events-none" />
            <div className="relative flex flex-col items-center gap-10 p-8 md:p-12 bg-gradient-to-b from-slate-950 to-[#020617] border border-white/10 rounded-[3rem] shadow-2xl">
              
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center shadow-xl">
                <Users className="w-8 h-8 text-emerald-500" />
              </div>
              
              <div className="space-y-2 w-full text-center">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">Equipo de Desarrollo</h2>
                <p className="text-sm text-slate-400">Asignación de Roles por Objetivo para eliminar dependencias técnicas</p>
              </div>

              {/* Members horizontal profile cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
                {/* Integrante 3: José Luis Medina Mercado */}
                <div className="p-6 bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
                  <div>
                    <div className="inline-flex px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded-md text-[9px] font-black uppercase text-blue-400 tracking-widest mb-3">
                      Product Owner / Project Manager
                    </div>
                    <h3 className="font-black text-white text-lg leading-tight mb-1">José Luis Medina Mercado</h3>
                    <div className="text-[10px] font-mono text-slate-500 mb-4">RUT: 13731386-3</div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Responsabilidades</span>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Visión del producto y priorización del backlog. Validación de requerimientos por sprint. Coordinación con el docente. Gestión de planificación semestral y seguimiento de hitos.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Integrante 2: Alejandro Andres Placencia Menares */}
                <div className="p-6 bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
                  <div>
                    <div className="inline-flex px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-[9px] font-black uppercase text-emerald-400 tracking-widest mb-3">
                      Fullstack Dev / UI-UX Designer
                    </div>
                    <h3 className="font-black text-white text-lg leading-tight mb-1">Alejandro Andres Placencia Menares</h3>
                    <div className="text-[10px] font-mono text-slate-500 mb-4">RUT: 17070619-6</div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Responsabilidades</span>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Diseño de interfaces web y móvil (Next.js, Tailwind CSS, Expo, NativeWind). Definición de arquitectura visual y UX por roles. Desarrollo de componentes compartidos. Foco en frontend y backend.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Integrante 1: Héctor Omar Antonio Robledo Aguilar */}
                <div className="p-6 bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
                  <div>
                    <div className="inline-flex px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded-md text-[9px] font-black uppercase text-purple-400 tracking-widest mb-3">
                      QA Engineer / Fullstack Dev
                    </div>
                    <h3 className="font-black text-white text-lg leading-tight mb-1">Héctor Omar Antonio Robledo Aguilar</h3>
                    <div className="text-[10px] font-mono text-slate-500 mb-4">RUT: 21150403-K</div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Responsabilidades</span>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Asegurar la calidad mediante pruebas unitarias/integración (Jest/Testing Library). Desarrollo frontend (Next.js/Expo) y backend. Validación de políticas RLS de Supabase. Facilitador de ceremonias Scrum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophy Quote */}
              <div className="border-t border-white/10 pt-8 w-full text-center">
                <p className="text-sm text-slate-300 font-medium italic leading-relaxed px-4">
                  &ldquo;Cada rol elimina dependencias: mientras Héctor consolida la capa de datos, Alejandro construye las interfaces y José garantiza la coherencia arquitectónica.&rdquo;
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-30 px-6 py-12 border-t border-white/5 bg-slate-950/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Utensils className="w-3 h-3 text-slate-950" />
            </div>
            <span className="text-sm font-black tracking-tighter">
              Menu<span className="text-emerald-500">Bites</span>
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
            © 2026 GASTRO ANALYTICS 360 · ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}