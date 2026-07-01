"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Utensils,
  Zap,
  Star,
  Store,
  Compass,
  Cpu,
  Calendar,
  Layers,
  GitBranch,
  Users,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

export default function PresentationPage() {
  const router = useRouter();

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

        <div className="flex items-center gap-2 flex-wrap justify-end">
          <button
            onClick={() => router.push("/presentacion/evolucion")}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-wider text-slate-400 hover:bg-white/10 hover:scale-105 transition-all"
          >
            <GitBranch className="w-3.5 h-3.5" />
            Evolución
          </button>
          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-wider text-slate-400">
            Defensa Final · TPY1101
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-30 flex-1 flex flex-col items-center justify-center px-6 pt-12 pb-24 text-center max-w-7xl mx-auto w-full">
        
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

        <p className="text-lg md:text-xl text-slate-400 font-medium mb-16 max-w-3xl leading-relaxed">
          Menú Bytes es un ecosistema digital inteligente diseñado para erradicar las esperas en la atención gastronómica y optimizar los flujos de cocina en tiempo real.
        </p>

        {/* ── NAVEGACIÓN DE EVALUACIONES PARCIALES ── */}
        <section className="w-full mb-24">
          <div className="flex flex-col items-center gap-2 mb-10">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">D E F E N S A   F I N A L</h2>
            <p className="text-3xl font-black tracking-tight text-white">Evaluaciones Parciales</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
            {/* EP1 */}
            <div className="group relative bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 text-left hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xs font-black text-emerald-400">EP1</div>
                <div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">Evaluación Parcial 1</div>
                  <div className="text-sm font-black text-white">Visión & Producto</div>
                </div>
              </div>
              <div className="space-y-2 mb-8">
                <button onClick={() => router.push("/presentacion/vision")} className="w-full flex items-center justify-between px-4 py-3 bg-slate-950/60 border border-white/5 rounded-xl text-xs font-black text-slate-300 hover:text-white hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all">
                  <span className="flex items-center gap-2"><Compass className="w-3.5 h-3.5 text-emerald-500" /> Visión & Ecosistema</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
                <button onClick={() => router.push("/presentacion/mockups")} className="w-full flex items-center justify-between px-4 py-3 bg-slate-950/60 border border-white/5 rounded-xl text-xs font-black text-slate-300 hover:text-white hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all">
                  <span className="flex items-center gap-2"><Store className="w-3.5 h-3.5 text-emerald-500" /> Mockups & Wireframes</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              </div>
              <div className="text-[10px] text-slate-600 font-mono">2 secciones</div>
            </div>

            {/* EP2 */}
            <div className="group relative bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 text-left hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-xs font-black text-blue-400">EP2</div>
                <div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">Evaluación Parcial 2</div>
                  <div className="text-sm font-black text-white">Ingeniería & Gestión</div>
                </div>
              </div>
              <div className="space-y-2 mb-8">
                <button onClick={() => router.push("/presentacion/ingenieria")} className="w-full flex items-center justify-between px-4 py-3 bg-slate-950/60 border border-white/5 rounded-xl text-xs font-black text-slate-300 hover:text-white hover:border-blue-500/20 hover:bg-blue-500/5 transition-all">
                  <span className="flex items-center gap-2"><Cpu className="w-3.5 h-3.5 text-blue-400" /> Ingeniería Avanzada</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
                <button onClick={() => router.push("/presentacion/metodologia")} className="w-full flex items-center justify-between px-4 py-3 bg-slate-950/60 border border-white/5 rounded-xl text-xs font-black text-slate-300 hover:text-white hover:border-blue-500/20 hover:bg-blue-500/5 transition-all">
                  <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-blue-400" /> Metodología & Gestión</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              </div>
              <div className="text-[10px] text-slate-600 font-mono">2 secciones</div>
            </div>

            {/* EP3 */}
            <div className="group relative bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 text-left hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-xs font-black text-amber-400">EP3</div>
                <div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">Evaluación Parcial 3</div>
                  <div className="text-sm font-black text-white">Pruebas & Calidad</div>
                </div>
              </div>
              <div className="space-y-2 mb-8">
                <button onClick={() => router.push("/presentacion/pruebas")} className="w-full flex items-center justify-between px-4 py-3 bg-slate-950/60 border border-white/5 rounded-xl text-xs font-black text-slate-300 hover:text-white hover:border-amber-500/20 hover:bg-amber-500/5 transition-all">
                  <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Pruebas & Calidad</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              </div>
              <div className="text-[10px] text-slate-600 font-mono">1 sección</div>
            </div>
          </div>
        </section>

        {/* ── sections moved to /presentacion/ingenieria ── */}
        {/* ── SECCIÓN 7: CRONOGRAMA DE TRABAJO (FASES) ── */}
        <section className="w-full mb-36 space-y-16">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">C I C L O   D E   E N T R E G A</h2>
            <p className="text-3xl font-black tracking-tight text-white">Cronograma de Desarrollo (18 Semanas)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
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
          <div className="relative w-full max-w-7xl group cursor-default">
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