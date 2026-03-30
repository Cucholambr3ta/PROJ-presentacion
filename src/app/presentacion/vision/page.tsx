"use client";

import React from "react";
import Link from "next/link";
import { OrganicBackground } from "@/components/OrganicBackground";
import { motion } from "framer-motion";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";

const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const VISION_BLOCKS = [
  {
    id: "vision-1",
    title: "1. Problemática e Ineficiencia",
    description: "Análisis de las causas raíz que degradan la experiencia del cliente y la rentabilidad del local.",
    image: "/arbol-problemas.svg",
    color: "rgba(31, 56, 100, 0.05)"
  },
  {
    id: "vision-2",
    title: "2. Flujo Operativo (As-Is)",
    description: "Diagrama de latencias del modelo tradicional (Toma de pedido verbal y comanda física).",
    image: "/situacion-actual.svg",
    color: "rgba(46, 95, 163, 0.05)"
  },
  {
    id: "vision-3",
    title: "3. Objetivos Estratégicos",
    content: (
      <div style={{ textAlign: "left" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h4 style={{ color: "#C2440A", fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1rem" }}>Objetivo General</h4>
          <p style={{ fontSize: "1.2rem", color: "#2C1A0E", fontWeight: 600, fontFamily: "'Fraunces', serif" }}>
            Desarrollar Menú Bytes: Plataforma SaaS multi-tenant con menú QR/NFC, pedidos realtime y panel admin optimizado.
          </p>
        </div>
        <div style={{ borderTop: "1px solid rgba(194,68,10,0.1)", paddingTop: "1.5rem" }}>
          <h4 style={{ color: "#7A5035", fontSize: "0.9rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1rem" }}>Hitos Técnicos</h4>
          <ul style={{ paddingLeft: "1.2rem", color: "#7A5035", fontSize: "1rem", lineHeight: 1.6 }}>
            <li>Aislamiento de datos nivel RLS en PostgreSQL para escalabilidad Multi-tenant.</li>
            <li>Motor Realtime para notificaciones instantáneas entre Salón, Cocina y Caja.</li>
          </ul>
        </div>
      </div>
    ),
    color: "rgba(31, 122, 69, 0.05)"
  },
  {
    id: "vision-4",
    title: "4. Estrategia Cloud PaaS Architecture",
    description: "Estructura de despliegue y flujo de datos basada en el stack moderno de Vercel y Supabase.",
    image: "/cloud-paas-architecture.svg",
    color: "rgba(194, 68, 10, 0.05)"
  }
];

export default function VisionPage() {
  return (
    <div style={{
      position: "relative", width: "100%", minHeight: "100vh",
      display: "flex", alignItems: "flex-start", justifyContent: "center",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <OrganicBackground />

      <div style={{
        position: "relative", zIndex: 2,
        width: "100%", maxWidth: "1200px", margin: "0 auto",
        padding: "0 2rem"
      }}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT COLUMN: FIXED CONTEXT */}
          <div className="md:sticky md:top-[10vh] md:h-[80vh] flex flex-col justify-center py-12">
            <Link href="/presentacion" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              color: "#B07040", fontSize: "0.8rem", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none", marginBottom: "3rem",
            }} className="group hover:text-[#C2440A] transition-all">
              <ArrowLeftIcon />
              <span>Volver a Presentación</span>
            </Link>

            <h1 style={{
              margin: "0 0 1.5rem",
              fontSize: "clamp(3rem, 6vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              fontFamily: "'Fraunces', serif",
              color: "#2C1A0E",
              lineHeight: 1.05
            }}>
              Visión & <br />
              <span style={{ fontStyle: "italic", color: "#C2440A" }}>Ecosistema</span>
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#7A5035", maxWidth: "30rem", lineHeight: 1.6 }}>
              Estrategia de digitalización integral basada en los diagramas de arquitectura y procesos oficiales. 
              Despliegue escalable y resolución de la brecha tecnológica gastronómica.
            </p>

            <div style={{ marginTop: "4rem", opacity: 0.4 }}>
              <p style={{ color: "#7A5035", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700 }}>
                Escanea para Consultar · Menú Bytes 2026
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY STACK */}
          <ContainerScroll className="min-h-[500vh] py-24 space-y-[20vh]">
            {VISION_BLOCKS.map((block, index) => (
              <CardSticky
                key={block.id}
                index={index}
                incrementY={60}
                incrementZ={0}
                className="w-full"
                style={{ top: `calc(10vh + ${index * 40}px)` }}
              >
                <div style={{
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  padding: "3rem",
                  borderRadius: "2.5rem",
                  border: "1.5px solid rgba(180,120,60,0.15)",
                  boxShadow: "0 25px 50px rgba(160,82,45,0.08)",
                  minHeight: "60vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: block.color
                }}>
                  <h2 style={{ 
                    margin: "0 0 1rem", 
                    fontSize: "1.8rem", 
                    fontWeight: 800, 
                    color: "#2C1A0E", 
                    fontFamily: "'Fraunces', serif" 
                  }}>
                    {block.title}
                  </h2>
                  
                  {block.description && (
                    <p style={{ fontSize: "1.05rem", color: "#7A5035", marginBottom: "2rem", lineHeight: 1.6 }}>
                      {block.description}
                    </p>
                  )}

                  {block.image && (
                    <div style={{ 
                      background: "white", 
                      padding: "1.5rem", 
                      borderRadius: "1.5rem", 
                      border: "1px solid rgba(180,120,60,0.1)",
                    }}>
                      <img src={block.image} alt={block.title} style={{ width: "100%", height: "auto" }} />
                    </div>
                  )}

                  {block.content && block.content}
                </div>
              </CardSticky>
            ))}
            
            {/* Spacer for final card visibility */}
            <div className="h-[20vh]" />

            {/* FINAL CALL TO ACTION BUTTON */}
            <div className="flex justify-center pb-32">
              <Link href="/presentacion" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "linear-gradient(135deg, #C2440A 0%, #8B2F07 100%)",
                color: "white",
                padding: "1.2rem 2.5rem",
                borderRadius: "100px",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 15px 35px rgba(194,68,10,0.25)",
                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
              }} className="hover:scale-105 hover:shadow-[0_20px_45px_rgba(194,68,10,0.35)] active:scale-95">
                <ArrowLeftIcon />
                <span>Finalizar Revisión de Visión</span>
              </Link>
            </div>
          </ContainerScroll>

        </div>

      </div>
    </div>
  );
}
