"use client";

import Link from "next/link";
import { OrganicBackground } from "@/components/OrganicBackground";

const ArrowLeft = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export default function MockupsPage() {
  return (
    <div style={{
      position: "relative", width: "100%", minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "2.5rem 1.5rem", overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      
      {/* Fondo compartido */}
      <OrganicBackground />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        width: "100%", maxWidth: "860px", margin: "0 auto",
      }}>

        {/* Navegación y Header */}
        <div style={{ marginBottom: "3rem" }}>
          
          <Link href="/" className="fade-in delay-1" style={{
            display: "inline-flex", alignItems: "center", gap: "0.45rem",
            marginBottom: "2rem", color: "#C2440A",
            fontSize: "0.72rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: "none",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
          >
            <ArrowLeft />
            <span>Volver al menú</span>
          </Link>

          <div>
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
              Colección Completa
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
              <span style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #EA6F38 0%, #C2440A 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Mockups
              </span>
            </h1>

            {/* Subtítulo y Lista */}
            <div className="fade-up delay-3" style={{
              fontSize: "1.05rem", color: "#7A5035",
              maxWidth: "36rem",
              lineHeight: 1.75, fontWeight: 300,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              <p style={{ marginBottom: "1.25rem", color: "#5A3A25" }}>
                Catálogo de las distintas pantallas y flujos que se encuentran dentro de Menu Bytes. <br />
                Acá estarán las pantallas interactivas de:
              </p>
              
              <ul style={{
                margin: 0, padding: 0, listStyle: "none",
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "0.85rem",
              }}>
                {['Cliente', 'Admin', 'Cajero', 'Cocina', 'Mesero', 'Admin Multi-tenant'].map((rol) => (
                  <li key={rol} style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    background: "rgba(194,68,10,0.06)",
                    padding: "0.5rem 0.8rem",
                    borderRadius: "0.5rem",
                    border: "1px solid rgba(194,68,10,0.15)",
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C2440A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#C2440A" }}>{rol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Zona de contenido (Placeholder de los mockups de admin.pen) */}
        <div className="fade-up delay-4" style={{
           width: "100%",
           minHeight: "400px",
           display: "flex", alignItems: "center", justifyContent: "center",
           background: "rgba(255, 250, 240, 0.4)",
           border: "2px dashed rgba(180,120,60,0.2)",
           borderRadius: "1.5rem",
           backdropFilter: "blur(12px)",
           color: "#7A4F35",
           fontSize: "0.9rem",
           fontFamily: "'DM Sans', sans-serif",
        }}>
           [ Área reservada para la galería de mockups ]
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
  );
}
