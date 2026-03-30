"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Layers, 
  Zap, 
  Smartphone, 
  Database, 
  ChevronRight,
  Sparkles,
  Users,
  Compass,
  Calendar,
  Cpu,
  ArrowRight
} from "lucide-react";
import { OrganicBackground } from "@/components/OrganicBackground";

const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

interface PartIndicatorProps {
  number: string;
  label: string;
}

const PartIndicator: React.FC<PartIndicatorProps> = ({ number, label }) => (
  <div className="fade-in delay-2" style={{
    display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem",
    borderLeft: "4px solid #C2440A", paddingLeft: "1.5rem"
  }}>
    <span style={{ 
      fontSize: "4rem", fontWeight: 900, color: "rgba(194,68,10,0.15)", 
      fontFamily: "'Fraunces', serif", lineHeight: 1 
    }}>{number}</span>
    <span style={{ 
      fontSize: "1.25rem", fontWeight: 700, color: "#C2440A", 
      textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'DM Sans', sans-serif" 
    }}>{label}</span>
  </div>
);

interface SectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  index: number;
  href: string;
}

const Section: React.FC<SectionProps> = ({ title, description, icon, highlights, index, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href}
      className={`fade-up delay-${(index % 4) + 1} group`}
      style={{
        display: "block",
        position: "relative",
        background: isHovered ? "rgba(255, 250, 240, 0.95)" : "rgba(255, 250, 240, 0.7)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: isHovered ? "2px solid #C2440A" : "1.5px solid rgba(180,120,60,0.15)",
        borderRadius: "2.5rem",
        padding: "3rem",
        marginBottom: "3rem",
        boxShadow: isHovered ? "0 20px 50px rgba(194,68,10,0.1)" : "0 12px 40px rgba(160,82,45,0.06)",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        transform: isHovered ? "scale(1.02) translateY(-5px)" : "scale(1)",
        textDecoration: "none",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "4rem", height: "4rem", borderRadius: "1.25rem",
              background: isHovered ? "#C2440A" : "rgba(194,68,10,0.12)",
              border: "1.5px solid rgba(194,68,10,0.25)",
              color: isHovered ? "#FFFFFF" : "#C2440A",
              flexShrink: 0,
              transition: "all 0.3s ease",
            }}>
              {icon}
            </div>
            <h3 style={{
              margin: 0,
              fontSize: "2rem", fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#2C1A0E",
              fontFamily: "'Fraunces', serif",
            }}>
              {title}
            </h3>
          </div>
          <div style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateX(0)" : "translateX(-10px)",
            transition: "all 0.3s ease",
            color: "#C2440A"
          }}>
            <ArrowRight size={32} strokeWidth={2.5} />
          </div>
        </div>

        <p style={{
          margin: 0, fontSize: "1.1rem", lineHeight: 1.8,
          color: "#7A5035",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
        }}>
          {description}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", marginTop: "0.5rem" }}>
          {highlights.map((h, i) => (
            <div key={i} style={{ 
              display: "flex", alignItems: "center", gap: "0.85rem",
              background: isHovered ? "rgba(194,68,10,0.05)" : "rgba(255,255,255,0.4)", 
              padding: "0.75rem 1rem", borderRadius: "1rem",
              transition: "all 0.3s ease",
            }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#C2440A" }} />
              <span style={{ fontSize: "0.9rem", color: "#2C1A0E", fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{h}</span>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: "1rem",
          fontSize: "0.85rem",
          fontWeight: 700,
          color: "#C2440A",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          opacity: 0.8
        }}>
          <span>Explorar sección</span>
          <ChevronRight size={14} />
        </div>
      </div>
    </Link>
  );
};

export default function PresentationPage() {
  const sections = [
    {
      title: "Visión & Estrategia",
      description: "Redefinimos el servicio gastronómico mediante la digitalización estratégica de sus procesos. Menú Bytes orquesta un flujo operativo eficiente que conecta a clientes, personal de salón y cocina en tiempo real, eliminando fricciones tradicionales.",
      icon: <Compass size={32} />,
      highlights: ["Digitalización de Procesos Críticos", "Flujo Operativo de Alta Eficiencia", "Comunicación Realtime Multicanal"],
      href: "/presentacion/vision"
    },
    {
      title: "Ingeniería Avanzada",
      description: "Stack de alto rendimiento basado en Next.js 16 y Turbopack. Implementación de Diseño Atómico y componentes reactivos con optimización de carga extrema para una respuesta instantánea.",
      icon: <Cpu size={32} />,
      highlights: ["Turbo-Engine Performance", "Atomic Design System", "Reactividad Extrema (Next.js 16)"],
      href: "/presentacion/ingenieria"
    },
    {
      title: "Gestión & Metodología",
      description: "Planificación robusta ejecutada en un Roadmap de 16 semanas. Enfoque en la entrega de valor constante mediante ciclos iterativos y estándares de calidad bajo el protocolo OLYMP-IA.",
      icon: <Calendar size={32} />,
      highlights: ["Roadmap de 16 Semanas", "Agile SCRUM Core", "Quality Gates (Tier 1-3)"],
      href: "/presentacion/metodologia"
    }
  ];

  return (
    <div style={{
      position: "relative", width: "100%", minHeight: "100vh",
      display: "flex", alignItems: "flex-start", justifyContent: "center",
      padding: "2.5rem 1.5rem", overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <OrganicBackground />

      <div style={{
        position: "relative", zIndex: 2,
        width: "100%", maxWidth: "1000px", margin: "0 auto",
      }}>

        {/* Back Button */}
        <Link href="/" style={{
          display: "inline-flex", alignItems: "center", gap: "0.45rem",
          marginBottom: "3rem", color: "#B07040",
          fontSize: "0.72rem", fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase",
          fontFamily: "'DM Sans', sans-serif",
          textDecoration: "none",
          transition: "all 0.3s ease",
        }}
          className="fade-in delay-1 group hover:text-[#C2440A] hover:translate-x-[-4px]"
        >
          <ArrowLeftIcon />
          <span>Volver al menú</span>
        </Link>

        {/* --- CARÁTULA --- */}
        <div style={{ marginBottom: "6rem" }}>
          <div className="fade-in delay-1" style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "0.4rem 1.2rem", borderRadius: "999px",
            background: "rgba(194,68,10,0.08)",
            border: "1.5px solid rgba(194,68,10,0.15)",
            marginBottom: "1.5rem",
            color: "#C2440A",
            fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}>
            Taller Aplicado de Programación (TPY1101)
          </div>

          <h1 className="fade-up delay-2" style={{
            margin: "0 0 2rem",
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            lineHeight: 0.95,
            fontFamily: "'Fraunces', serif",
            color: "#2C1A0E",
          }}>
            Proyecto <br />
            <span style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #EA6F38 0%, #C2440A 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Menú Bytes
            </span>
          </h1>

          <div className="fade-up delay-3" style={{
            display: "flex", flexWrap: "wrap", gap: "2.5rem", marginTop: "3rem"
          }}>
            <div>
              <p style={{ color: "#B07040", fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
                Integrantes
              </p>
              <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
                {["José Medina", "Alejandro Placencia", "Héctor Robledo"].map(name => (
                  <div key={name} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#2C1A0E", fontWeight: 700, fontSize: "1.1rem" }}>
                    <Users size={16} strokeWidth={3} style={{ color: "#C2440A" }} />
                    {name}
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ maxWidth: "340px" }}>
              <p style={{ color: "#B07040", fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
                Propuesta
              </p>
              <p style={{ color: "#7A5035", fontSize: "1rem", lineHeight: 1.6 }}>
                Digitalización del ecosistema gastronómico mediante una arquitectura modular y escalable.
              </p>
            </div>
          </div>
        </div>

        {/* --- DYNAMIC SECTIONS --- */}
        <div style={{ marginBottom: "8rem" }}>
          {sections.map((section, idx) => (
            <div key={idx} style={{ marginBottom: "6rem" }}>
              <PartIndicator number={`0${idx + 1}`} label={section.title.split(' ')[0]} />
              <Section 
                index={idx}
                {...section}
              />
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}