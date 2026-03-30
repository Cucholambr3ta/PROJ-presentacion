import { GradientDots } from "./ui/gradient-dots";

export function OrganicBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {/* Base warm gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(160deg, #FDF3E3 0%, #FAE8CC 40%, #F5D9B0 100%)",
      }} />

      {/* Blob mid — warm rose */}
      <div style={{
        position: "absolute", top: "30%", left: "30%",
        width: "40vw", height: "40vw", maxWidth: 400, maxHeight: 400,
        borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%",
        background: "radial-gradient(circle, rgba(210,120,60,0.08) 0%, transparent 70%)",
        animation: "blobC 20s ease-in-out infinite alternate",
      }} />

      {/* Dynamic Gradient Dots Layer (MOVED TO TOP OF BLOBS) */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.8, zIndex: 1 }}>
        <GradientDots 
          dotSize={6} 
          spacing={30}
          duration={20}
          dotColor="rgba(194, 68, 10, 0.8)"
          backgroundColor="transparent"
        />
      </div>

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
