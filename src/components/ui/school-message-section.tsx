"use client";

import React from "react";
import { TextEffect } from "@/components/core/text-effect";

export default function SchoolMessageSection() {
  const config = {
    themeBg: "bg-[#f9fafb]",
    border: "border-[#e5e7eb]",
    primaryText: "text-[#030712]",
    cardBg: "bg-white",
    salutation: "DEAR PARENTS & DEAR STUDENTS",
    heading: "A Sacred Partnership for Your Child's Future",
    paragraph1: "Entrusting your child to our institution is a decision of paramount significance. For decades, our school has stood as a beacon of academic prestige, unwavering discipline, and holistic character building.",
    paragraph2: "We do not merely educate; we shape future visionaries, engineers, doctors, and compassionate leaders. Every morning when your child walks through our gates, they enter an environment engineered for greatness.",
    stats: [
      { value: "100%", label: "State Board Pass Rate" },
      { value: "35+", label: "Years of Educational Excellence" },
      { value: "5000+", label: "Proud Alumni Network" }
    ]
  };

  return (
    <section className={`w-full ${config.themeBg} py-20 md:py-28 px-4 sm:px-6 md:px-8 border-t border-b ${config.border} font-body relative overflow-hidden`}>
      <div className="max-w-[1280px] mx-auto">
        <div 
          className={`${config.cardBg} rounded-xl p-8 sm:p-12 md:p-14 border ${config.border} relative overflow-hidden`}
          style={{
            boxShadow: "0 20px 50px -10px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)"
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: "#5727e7" }} />
          
          <div 
            className="absolute top-6 right-10 text-9xl font-serif select-none pointer-events-none opacity-5"
            style={{ color: "#5727e7" }}
          >
            “
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <span 
              className="px-3.5 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-widest border shadow-xs"
              style={{
                backgroundColor: "rgba(87, 39, 231, 0.08)",
                color: "#5727e7",
                borderColor: "rgba(87, 39, 231, 0.2)"
              }}
            >
              {config.salutation}
            </span>
            <span 
              className="text-xs font-extrabold tracking-widest uppercase"
              style={{ color: "#5727e7" }}
            >
              LEADERSHIP DIRECTIVE
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <TextEffect 
                as="h2" 
                preset="fade-in-blur" 
                speedReveal={1.1} 
                speedSegment={0.3} 
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#030712] font-heading leading-tight tracking-tight"
              >
                {config.heading}
              </TextEffect>
              
              <TextEffect 
                as="p" 
                preset="fade-in-blur" 
                speedReveal={1.1} 
                speedSegment={0.3} 
                className="text-slate-700 text-base sm:text-lg font-body leading-relaxed italic"
              >
                "{config.paragraph1}"
              </TextEffect>

              <TextEffect 
                as="p" 
                preset="fade-in-blur" 
                speedReveal={1.1} 
                speedSegment={0.3} 
                className="text-slate-600 text-sm sm:text-base font-body leading-relaxed"
              >
                "{config.paragraph2}"
              </TextEffect>

              <div className="pt-4 flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold font-heading text-lg border shadow-xs shrink-0"
                  style={{
                    backgroundColor: "rgba(87, 39, 231, 0.1)",
                    color: "#5727e7",
                    borderColor: "rgba(87, 39, 231, 0.25)"
                  }}
                >
                  ✦
                </div>
                <div>
                  <TextEffect as="h4" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base font-extrabold text-[#030712] font-heading">
                    Principal & Management Desk
                  </TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-slate-500 font-body">
                    Founder & Managing Director
                  </TextEffect>
                </div>
              </div>
            </div>

            <div 
              className="lg:col-span-4 rounded-2xl p-6 sm:p-8 space-y-6 border"
              style={{
                backgroundColor: "rgba(248, 250, 252, 0.8)",
                borderColor: "#e5e7eb"
              }}
            >
              <span 
                className="text-xs font-extrabold uppercase tracking-widest block border-b pb-2"
                style={{ color: "#5727e7", borderColor: "#e5e7eb" }}
              >
                INSTITUTION HIGHLIGHTS
              </span>
              <div className="space-y-5">
                {config.stats.map((stat, idx) => (
                  <div key={idx} className="border-b border-slate-200/60 pb-3 last:border-0 last:pb-0">
                    <span 
                      className="text-3xl font-extrabold font-heading block"
                      style={{ color: "#5727e7" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 font-body">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
