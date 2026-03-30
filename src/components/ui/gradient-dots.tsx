"use client";

import React from "react";
import { motion } from "framer-motion";

type GradientDotsProps = React.ComponentProps<typeof motion.div> & {
  /** Dot size (default: 8) */
  dotSize?: number;
  /** Spacing between dots (default: 10) */
  spacing?: number;
  /** Animation duration (default: 30) */
  duration?: number;
  /** Color cycle duration (default: 6) */
  colorCycleDuration?: number;
  /** Background color (default: 'var(--background)') */
  backgroundColor?: string;
  /** Color of the dots (default: 'rgba(194, 68, 10, 0.4)') */
  dotColor?: string;
};

export function GradientDots({
  dotSize = 8,
  spacing = 10,
  duration = 30,
  colorCycleDuration = 6,
  backgroundColor = "var(--background)",
  dotColor = "rgba(194, 68, 10, 0.4)",
  className,
  ...props
}: GradientDotsProps) {
  const hexSpacing = spacing * 1.732; // Hexagonal spacing calculation

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundColor,
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${dotColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${dotColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, #C2440A, transparent 60%),
          radial-gradient(circle at 50% 50%, #EA6F38, transparent 60%),
          radial-gradient(circle at 50% 50%, #B07040, transparent 60%),
          radial-gradient(ellipse at 50% 50%, #2C1A0E, transparent 60%)
        `,
        backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% ${hexSpacing}px
        `,
        backgroundPosition: `
          0px 0px, ${spacing / 2}px ${hexSpacing / 2}px,
          0% 0%,
          0% 0%,
          0% 0px
        `,
      }}
      animate={{
        backgroundPosition: [
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`,
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
        ],
        filter: ["hue-rotate(0deg)", "hue-rotate(20deg)"], // Reduced hue range to stay in warm colors
      }}
      transition={{
        backgroundPosition: {
          duration: duration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
        filter: {
          duration: colorCycleDuration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      }}
      {...props}
    />
  );
}
