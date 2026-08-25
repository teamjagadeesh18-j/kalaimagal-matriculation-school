"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface PulsatingBorderProps {
  colors?: string[];
  colorBack?: string;
  speed?: number;
  radius?: number;
  thickness?: number;
  softness?: number;
  intensity?: number;
  bloom?: number;
  spotSize?: number;
  spread?: number;
  style?: React.CSSProperties;
  label?: string;
  link?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const DEFAULT_COLORS = ["#F2244F", "#4DA6E6", "#379590"];

export function PulsatingBorder({
  colors = DEFAULT_COLORS,
  speed = 1,
  radius = 35,
  thickness = 3,
  style,
  label = "PULSATING BORDER",
  link = "",
  onClick,
  className = "",
  children,
}: PulsatingBorderProps) {
  const content = children || label;
  const isLink = Boolean(link);
  const Tag: any = isLink ? motion.a : motion.button;
  const tagProps = isLink ? { href: link } : { onClick, type: "button" as const };
  const gradientStr = `conic-gradient(from 0deg at 50% 50%, ${colors.join(", ")}, ${colors[0]})`;

  return (
    <div
      className={`relative inline-flex items-center justify-center group ${className}`}
      style={{
        borderRadius: `${radius}px`,
        padding: `${thickness}px`,
        ...style,
      }}
    >
      {/* Outer Pulsing Glow */}
      <motion.div
        className="absolute -inset-[4px] rounded-[inherit] opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: gradientStr }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 6 / Math.max(0.1, speed) }}
      />
      {/* Border gradient ring */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{ background: gradientStr }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 6 / Math.max(0.1, speed) }}
      />
      {/* Button surface */}
      <Tag
        {...tagProps}
        className="relative z-10 w-full h-full rounded-[inherit] bg-[#1a1b26] text-white px-8 py-3.5 font-bold text-base flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02] active:scale-[0.98]"
        style={{ borderRadius: `${Math.max(0, radius - thickness)}px` }}
      >
        {content}
      </Tag>
    </div>
  );
}

export default PulsatingBorder;
