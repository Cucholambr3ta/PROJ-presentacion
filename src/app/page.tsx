"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { OrganicBackground } from "../components/OrganicBackground";

/* ── Icons ── */
const EyeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const PresentationIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h20v14H2z" />
    <path d="M8 21l4-4 4 4" />
    <path d="M12 17v4" />
  </svg>
);

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const LeafIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

/* ── Card ── */
interface CardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  accent: string;
  tagLabel: string;
}

function Card({ title, description, icon: Icon, href, accent, tagLabel }: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1.75rem",
        borderRadius: "1.5rem",
        minHeight: "230px",
        textDecoration: "none",
        overflow: "hidden",
        cursor: "pointer",
        background: hovered
          ? "rgba(255, 248, 236, 0.98)"
          : "rgba(255, 250, 240, 0.75)",
        border: hovered
          ? `1.5px solid ${accent}55`
          : "1.5px solid rgba(180,120,60,0.15)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: hovered
          ? `0 16px 48px rgba(160,82,45,0.18), 0 4px 16px rgba(160,82,45,0.1)`
          : "0 4px 20px rgba(160,82,45,0.08)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.45s cubic-bezier(0.23,1,0.32,1)",
      }}
    >
      {/* Warm inner glow on hover */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 20% 20%, ${accent}18 0%, transparent 60%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
        borderRadius: "1.5rem",
      }} />

      {/* Decorative circle top-right */}
      <div style={{
        position: "absolute", top: "-24px", right: "-24px",
        width: "90px", height: "90px", borderRadius: "50%",
        background: `${accent}12`,
        transition: "transform 0.4s ease",
        transform: hovered ? "scale(1.3)" : "scale(1)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Tag pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "5px",
          padding: "0.25rem 0.65rem", borderRadius: "999px",
          background: `${accent}18`,
          border: `1px solid ${accent}30`,
          width: "fit-content",
        }}>
          <span style={{
            fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: accent,
            fontFamily: "'DM Sans', sans-serif",
          }}>{tagLabel}</span>
        </div>

        {/* Icon + title row */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "3rem", height: "3rem", borderRadius: "0.9rem",
            background: `${accent}22`,
            border: `1.5px solid ${accent}30`,
            color: accent,
            flexShrink: 0,
            transform: hovered ? "scale(1.08) rotate(-3deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
          }}>
            <Icon />
          </div>
          <h3 style={{
            margin: 0,
            fontSize: "1.25rem", fontWeight: 700,
            letterSpacing: "-0.025em", lineHeight: 1.2,
            color: "#2C1A0E",
            fontFamily: "'Fraunces', 'Georgia', serif",
            transition: "color 0.3s ease",
          }}>
            {title}
          </h3>
        </div>

        {/* Description */}
        <p style={{
          margin: 0, fontSize: "0.875rem", lineHeight: 1.7,
          color: "#7A4F35",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
        }}>
          {description}
        </p>
      </div>

      {/* CTA */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", alignItems: "center", gap: "0.45rem",
        marginTop: "1.1rem",
        color: hovered ? accent : "#B07040",
        fontSize: "0.72rem", fontWeight: 700,
        letterSpacing: "0.1em", textTransform: "uppercase",
        fontFamily: "'DM Sans', sans-serif",
        transition: "color 0.3s ease",
      }}>
        <span>Explorar</span>
        <div style={{
          transform: hovered ? "translateX(5px)" : "translateX(0)",
          transition: "transform 0.3s ease",
          display: "flex", alignItems: "center",
        }}>
          <ArrowRight />
        </div>
      </div>

      {/* Bottom accent line */}
      <div style={{
        position: "absolute", bottom: 0, left: "1.75rem", right: "1.75rem",
        height: "2px", borderRadius: "999px",
        background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        opacity: hovered ? 0.6 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
      }} />
    </Link>
  );
}

/* ── Data ── */
const cardsArray = [
  {
    title: "Explorar Mockups",
    description: "Descubre nuestra colección de mockups de alta calidad para presentar tus platos y menús.",
    icon: EyeIcon,
    href: "/mockups",
    accent: "#C2440A",
    tagLabel: "Galería",
  },
  {
    title: "Ver Presentación",
    description: "Conoce el ecosistema digital completo y las soluciones tecnológicas que ofrecemos.",
    icon: PresentationIcon,
    href: "/presentacion",
    accent: "#C2440A",
    tagLabel: "Portafolio",
  },
];

/* ── Main ── */
export default function Home() {
  return (
    <>

      <div style={{
        position: "relative", width: "100%", minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "2.5rem 1.5rem", overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}>

        <OrganicBackground />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 2,
          width: "100%", maxWidth: "860px", margin: "0 auto",
        }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>

            {/* Top badge */}
            <div className="fade-in delay-1" style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "0.3rem 0.9rem", borderRadius: "999px",
              background: "rgba(194,68,10,0.1)",
              border: "1px solid rgba(194,68,10,0.2)",
              marginBottom: "1.1rem",
              color: "#C2440A",
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif",
            }}>
              Tu guía de sabores
            </div>

            {/* Main title */}
            <h1 className="fade-up delay-2" style={{
              margin: "0 0 1rem",
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              fontFamily: "'Fraunces', Georgia, serif",
              color: "#2C1A0E",
            }}>
              Menu{" "}
              <span style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #EA6F38 0%, #C2440A 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Bytes
              </span>
            </h1>

            {/* Decorative divider */}
            <div className="fade-in delay-3" style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: "10px", marginBottom: "1rem",
            }}>
              <div style={{ height: "1px", width: "40px", background: "rgba(160,82,45,0.3)" }} />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#C2440A" opacity="0.5">
                <circle cx="12" cy="12" r="4" />
              </svg>
              <div style={{ height: "1px", width: "40px", background: "rgba(160,82,45,0.3)" }} />
            </div>

            <p className="fade-up delay-3" style={{
              fontSize: "1.05rem", color: "#7A5035",
              maxWidth: "30rem", margin: "0 auto",
              lineHeight: 1.75, fontWeight: 300,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Selecciona una opción para comenzar tu experiencia
            </p>
          </div>

          {/* Cards */}
          <div className="fade-up delay-4" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "1.25rem",
          }}>
            {cardsArray.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>

          {/* Footer hint */}
          <p className="fade-in delay-4" style={{
            textAlign: "center", marginTop: "2.5rem",
            fontSize: "0.75rem", color: "rgba(120,80,50,0.5)",
            letterSpacing: "0.06em", fontFamily: "'DM Sans', sans-serif",
          }}>
            © 2025 Menu Bytes
          </p>
        </div>
      </div>
    </>
  );
}
