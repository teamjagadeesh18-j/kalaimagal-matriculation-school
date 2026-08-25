"use client";
import { TextEffect } from '@/components/core/text-effect';

import React, { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";

const Pin = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

export interface OrbitStep {
  title: string;
  description: string;
  color?: string;
}

export interface HowItWorksOrbitProps {
  title?: string;
  subtitle?: string;
  steps?: OrbitStep[];
  className?: string;
}

const DEFAULT_STEPS: OrbitStep[] = [
  { title: "Campus Enquiry", description: "Connect with admissions & visit our Pattabiram campus.", color: "#5727e7" },
  { title: "Submit Application", description: "Fill out the registration form with student records.", color: "#3b82f6" },
  { title: "Student Interaction", description: "Friendly assessment to evaluate readiness & placement.", color: "#a855f7" },
  { title: "Fee & Enrollment", description: "Complete admission formalities and receive confirmation.", color: "#f97316" },
  { title: "Academic Journey", description: "Join Kalaimagal and begin a path to excellence!", color: "#10b981" },
];

function getAngle(index: number, total: number) {
  return (index / total) * 360 - 90;
}
function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function HowItWorksOrbit({ steps, title, subtitle, className }: HowItWorksOrbitProps) {
  const data = steps && steps.length > 0 ? steps : DEFAULT_STEPS;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const size = 420;
  const center = size / 2;
  const radius = size * 0.34;

  return (
    <LazyMotion features={domAnimation}>
      <section className={`bg-white dark:bg-black py-12 px-6 relative overflow-hidden border-t border-[#e5e7eb] ${className || ""}`}>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.15]"
          style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px)", backgroundSize: "100% 32px" }}
        />
        <div className="max-w-2xl mx-auto text-center mb-8 relative z-10">
          <span className="inline-block px-3 py-1 rounded-[8px] bg-[#f2f2ff] text-[#5727e7] border border-[#5727e7]/20 text-xs font-semibold uppercase tracking-wider mb-2 font-body">
            ADMISSION PROCESS
          </span>
          <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white font-heading">
            {title || "How Admission Works"}
          </TextEffect>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-neutral-500 dark:text-neutral-400 mt-1.5 text-sm font-body">
            {subtitle || "Every step connects back to our core educational values."}
          </TextEffect>
        </div>

        <div ref={ref} className="relative mx-auto hidden md:block z-10" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="absolute inset-0 overflow-visible">
            {data.map((step, index) => {
              const angle = getAngle(index, data.length);
              const p = polarToCartesian(center, center, radius, angle);
              const d = `M ${center} ${center} L ${p.x} ${p.y}`;
              return (
                <m.path
                  key={index}
                  d={d}
                  stroke={step.color || "#5727e7"}
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="6 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.7, strokeDashoffset: [0, -22] } : {}}
                  transition={{
                    pathLength: { duration: 0.7, delay: index * 0.2, ease: "easeInOut" },
                    opacity: { duration: 0.7, delay: index * 0.2 },
                    strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: "linear", delay: index * 0.2 + 0.6 },
                  }}
                />
              );
            })}
          </svg>

          <m.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="absolute z-20 flex items-center justify-center rounded-full bg-[#5727e7] text-white font-bold text-xs shadow-2xl border-2 border-white"
            style={{ width: 70, height: 70, left: center - 35, top: center - 35 }}
          >
            <m.span animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}>
              Start
            </m.span>
          </m.div>

          {data.map((step, index) => {
            const angle = getAngle(index, data.length);
            const p = polarToCartesian(center, center, radius, angle);
            const cardW = 140;
            return (
              <m.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2, type: "spring", stiffness: 140, damping: 16 }}
                whileHover={{ scale: 1.06 }}
                className="absolute z-10"
                style={{ left: p.x - cardW / 2, top: p.y - 46, width: cardW }}
              >
                <div className="bg-white dark:bg-neutral-900 p-1 rounded-xl shadow-[0px_6px_14px_0px_#D3D3D3] dark:shadow-none border border-neutral-100 dark:border-neutral-800">
                  <div className="rounded-lg p-2.5 text-center" style={{ backgroundColor: `${step.color || "#5727e7"}12` }}>
                    <Pin className="w-3 h-3 mx-auto mb-1" style={{ color: step.color || "#5727e7" }} />
                    <span className="text-[10px] font-bold tracking-wide" style={{ color: step.color || "#5727e7" }}>STEP {index + 1}</span>
                    <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs font-semibold text-neutral-800 dark:text-neutral-100 mt-0.5">{step.title}</TextEffect>
                    <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-neutral-500 dark:text-neutral-400 text-[10px] mt-0.5 leading-snug">{step.description}</TextEffect>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>

        <div className="md:hidden flex flex-col gap-4 max-w-sm mx-auto relative z-10">
          {data.map((step, index) => (
            <div key={step.title} className="flex gap-3 items-start bg-white p-3 rounded-lg border border-neutral-100 shadow-sm">
              <div className="w-3 h-3 rounded-full mt-1 shrink-0" style={{ backgroundColor: step.color || "#5727e7" }} />
              <div>
                <span className="text-[10px] font-bold tracking-wide" style={{ color: step.color || "#5727e7" }}>STEP {index + 1}</span>
                <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-semibold text-sm text-neutral-800 dark:text-neutral-100">{step.title}</TextEffect>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-neutral-500 dark:text-neutral-400 text-xs mt-0.5">{step.description}</TextEffect>
              </div>
            </div>
          ))}
        </div>
      </section>
    </LazyMotion>
  );
}
