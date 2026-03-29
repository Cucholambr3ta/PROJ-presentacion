import { useState, useEffect, useRef } from "react";

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

/* ── Floating blob background ── */
function OrganicBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {/* Base warm gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(160deg, #FDF3E3 0%, #FAE8CC 40%, #F5D9B0 100%)",
      }} />

      {/* Blob top-right — terracotta */}
      <div style={{
        position: "absolute", top: "-10%", right: "-8%",
        width: "55vw", height: "55vw", maxWidth: 600, maxHeight: 600,
        borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
        background: "radial-gradient(circle, rgba(234,111,56,0.18) 0%, transparent 70%)",
        animation: "blobA 14s ease-in-out infinite alternate",
      }} />

      {/* Blob bottom-left — amber */}
      <div style={{
        position: "absolute", bottom: "-15%", left: "-10%",
        width: "50vw", height: "50vw", maxWidth: 520, maxHeight: 520,
        borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%",
        background: "radial-gradient(circle, rgba(255,193,7,0.2) 0%, transparent 70%)",
        animation: "blobB 18s ease-in-out infinite alternate",
      }} />

      {/* Blob mid — warm rose */}
      <div style={{
        position: "absolute", top: "30%", left: "30%",
        width: "40vw", height: "40vw", maxWidth: 400, maxHeight: 400,
        borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%",
        background: "radial-gradient(circle, rgba(210,120,60,0.08) 0%, transparent 70%)",
        animation: "blobC 20s ease-in-out infinite alternate",
      }} />

      {/* Subtle grain texture */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* Decorative wavy divider bottom */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, width: "100%", opacity: 0.08 }} viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill="#A0522D" />
      </svg>
    </div>
  );
}

/* ── Card ── */
function Card({ title, description, icon: Icon, href, accent, tagLabel }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
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
          <LeafIcon style={{ color: accent, width: 12, height: 12 }} />
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
    </a>
  );
}

/* ── Data ── */
const cards = [
  {
    title: "Explorar Mockups",
    description: "Descubre nuestra colección de mockups de alta calidad para presentar tus platos y menús.",
    icon: EyeIcon,
    href: "#mockups",
    accent: "#C2440A",
    tagLabel: "Galería",
  },
  {
    title: "Ver Presentación",
    description: "Conoce el portafolio completo y las soluciones gastronómicas que ofrecemos para tu negocio.",
    icon: PresentationIcon,
    href: "#presentation",
    accent: "#B07010",
    tagLabel: "Portafolio",
  },
];

/* ── Main ── */
export default function MenuBytes() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,800;1,9..144,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }

        @keyframes blobA {
          0%   { transform: translate(0,0) scale(1)   rotate(0deg); }
          100% { transform: translate(3%,4%) scale(1.08) rotate(8deg); }
        }
        @keyframes blobB {
          0%   { transform: translate(0,0) scale(1)   rotate(0deg); }
          100% { transform: translate(-3%,-3%) scale(1.06) rotate(-6deg); }
        }
        @keyframes blobC {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(2%,-4%) scale(1.1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .fade-in  { animation: fadeIn  0.6s ease both; }
        .fade-up  { animation: fadeUp  0.7s cubic-bezier(0.23,1,0.32,1) both; }
        .delay-1  { animation-delay: 0.1s; }
        .delay-2  { animation-delay: 0.25s; }
        .delay-3  { animation-delay: 0.4s; }
        .delay-4  { animation-delay: 0.55s; }
      `}</style>

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
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
              </svg>
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
            {cards.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>

          {/* Footer hint */}
          <p className="fade-in delay-4" style={{
            textAlign: "center", marginTop: "2.5rem",
            fontSize: "0.75rem", color: "rgba(120,80,50,0.5)",
            letterSpacing: "0.06em", fontFamily: "'DM Sans', sans-serif",
          }}>
            © 2025 Menu Bytes · Hecho con ♥ y buen gusto
          </p>
        </div>
      </div>
    </>
  );
}
