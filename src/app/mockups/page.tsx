"use client";

import Link from "next/link";
import { OrganicBackground } from "@/components/OrganicBackground";
import { Gallery4 } from "@/components/blocks/gallery4";

const ArrowLeft = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const mockupsData = [
  {
    id: "cliente",
    title: "Pantalla Cliente",
    description: "Flujo de autoservicio y órdenes digitales para el comensal.",
    href: "/navigation/client.html",
    image: "/images/mockups/client.png",
  },
  {
    id: "admin",
    title: "Módulo Admin",
    description: "Gestión centralizada de menús, precios y analíticas del local.",
    href: "/navigation/admin.html",
    image: "/images/mockups/admin.png",
  },
  {
    id: "cajero",
    title: "Módulo Cajero",
    description: "Terminal de cobro y cierre de facturación rápida.",
    href: "/navigation/cashier.html",
    image: "/images/mockups/cashier.png",
  },
  {
    id: "cocina",
    title: "KDS (Cocina)",
    description: "Monitor de producción y control de tiempos de despacho.",
    href: "/navigation/kitchen.html",
    image: "/images/mockups/kitchen.png",
  },
  {
    id: "mesero",
    title: "App Mesero",
    description: "Toma de comandas ágil desde dispositivos móviles.",
    href: "/navigation/waiter.html",
    image: "/images/mockups/waiter.png",
  },
  {
    id: "admin-mt",
    title: "Multi-tenant Office",
    description: "Monitor global para franquicias y múltiples sucursales.",
    href: "/navigation/mt-admin.html",
    image: "/images/mockups/mt-admin.png",
  },
];

export default function MockupsPage() {
  return (
    <div style={{
      position: "relative", width: "100%", minHeight: "100vh",
      display: "flex", alignItems: "flex-start", justifyContent: "center",
      padding: "2.5rem 1.5rem", overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
    }}>

      <OrganicBackground />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        width: "100%", maxWidth: "1200px", margin: "0 auto",
      }}>

        {/* Navegación y Header */}
        <div style={{ marginBottom: "2rem" }}>

          <Link href="/" style={{
            display: "inline-flex", alignItems: "center", gap: "0.45rem",
            marginBottom: "2rem", color: "#B07040",
            fontSize: "0.72rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
            className="fade-in delay-1 group hover:text-[#C2440A] hover:translate-x-[-4px]"
          >
            <ArrowLeft />
            <span>Volver al menú</span>
          </Link>

          <div>
            <div className="fade-in delay-1" style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "0.3rem 0.9rem", borderRadius: "999px",
              background: "rgba(194,68,10,0.1)",
              border: "1px solid rgba(194,68,10,0.2)",
              marginBottom: "1.1rem",
              color: "#C2440A",
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}>
              Colección Digital
            </div>

            <h1 className="fade-up delay-2" style={{
              margin: "0 0 1rem",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
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

            <div className="fade-up delay-3" style={{
              fontSize: "1.08rem", color: "#7A5035",
              maxWidth: "42rem",
              lineHeight: 1.7, fontWeight: 300,
            }}>
              <p>
                Explora los flujos digitales que componen el ecosistema de <strong>Menu Bytes</strong>.
                Esta demostración, bajo la identidad visual de la marca ficticia <em>"Trattoria Toscana"</em>,
                ilustra la capacidad camaleónica de nuestra plataforma para adoptar el ADN de cada cliente
                garantizando una experiencia de marca coherente y una eficiencia operativa absoluta.
              </p>
            </div>
          </div>
        </div>

        {/* Galería Interactiva */}
        <div className="fade-up delay-4" style={{ marginTop: "-2.5rem" }}>
          <Gallery4
            title="Explosión Visual"
            description="Interactúa con cada tarjeta para navegar por los prototipos vivos de Menu Bytes."
            items={mockupsData}
          />
        </div>

        {/* Footer */}
        <p className="fade-in delay-4" style={{
          textAlign: "center", marginTop: "1rem",
          fontSize: "0.75rem", color: "rgba(120,80,50,0.5)",
          letterSpacing: "0.06em",
        }}>
          © 2025 Menu Bytes · Design by OLYMP-IA
        </p>
      </div>
    </div>
  );
}
