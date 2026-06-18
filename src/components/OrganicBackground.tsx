import { GradientDots } from "./ui/gradient-dots";

export function OrganicBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {/* Base warm gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "#020617",
      }} />

      {/* Blob 1 — Emerald Glow */}
      <div style={{
        position: "absolute", top: "-10%", left: "-10%",
        width: "60vw", height: "60vw", maxWidth: 600, maxHeight: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,78,59,0.10) 0%, transparent 70%)",
        animation: "blobC 25s ease-in-out infinite alternate",
      }} />

      {/* Blob 2 — Sage Glow */}
      <div style={{
        position: "absolute", bottom: "-10%", right: "-10%",
        width: "50vw", height: "50vw", maxWidth: 500, maxHeight: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(116,163,135,0.05) 0%, transparent 70%)",
        animation: "blobC 20s ease-in-out infinite alternate-reverse",
      }} />

      {/* Dynamic Gradient Dots Layer */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.9, zIndex: 1 }}>
        <GradientDots 
          dotSize={4} 
          spacing={32}
          duration={25}
          dotColor="rgba(6, 95, 70, 0.28)"
          backgroundColor="transparent"
        />
      </div>

      {/* Subtle grain texture */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.02,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* Decorative wavy divider bottom */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, width: "100%", opacity: 0.05 }} viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill="#0a254c" />
      </svg>
    </div>
  );
}
