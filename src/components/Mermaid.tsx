"use client";

import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface MermaidProps {
  chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "base",
      themeVariables: {
        primaryColor: "#FCF7F1",
        primaryTextColor: "#2C1A0E",
        primaryBorderColor: "#C2440A",
        lineColor: "#B07040",
        secondaryColor: "#F5D9B0",
        tertiaryColor: "#FFFFFF",
      },
      securityLevel: "loose",
      fontFamily: "DM Sans",
    });

    if (mermaidRef.current) {
      mermaidRef.current.innerHTML = "";
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      mermaid.render(id, chart).then(({ svg }) => {
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = svg;
        }
      });
    }
  }, [chart]);

  return (
    <div 
      ref={mermaidRef} 
      className="mermaid-container flex justify-center py-6 overflow-x-auto w-full"
      style={{
        background: "rgba(255, 255, 255, 0.3)",
        borderRadius: "1rem",
        padding: "1rem",
        border: "1px solid rgba(194,68,10,0.1)",
      }}
    />
  );
};

export default Mermaid;
