"use client";

import React from "react";
import { TextEffect } from "@/components/core/text-effect";

export interface AcademicCard {
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  isHighlighted?: boolean;
}

export interface AcademicStructureProps {
  title: string;
  subtitle: string;
  description: string;
  cards: AcademicCard[];
  secondaryColor?: string;
}

export default function AcademicStructure({
  title,
  subtitle,
  description,
  cards,
}: AcademicStructureProps) {
  return (
    <section id="academics" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-[#f9fafb] border-t border-[#e5e7eb] font-body relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, rgba(87, 39, 231, 0.05), transparent 70%)`
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
          <div className="max-w-2xl">
            <span 
              className="inline-block px-3.5 py-1 rounded-xl text-xs font-extrabold tracking-widest uppercase font-body mb-3 border shadow-xs"
              style={{
                backgroundColor: "rgba(87, 39, 231, 0.08)",
                color: "#5727e7",
                borderColor: "rgba(87, 39, 231, 0.2)"
              }}
            >
              ACADEMIC STRUCTURE
            </span>
            <TextEffect 
              as="h2" 
              preset="fade-in-blur" 
              speedReveal={1.1} 
              speedSegment={0.3} 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#030712] tracking-tight leading-tight font-heading"
            >
              {title}
            </TextEffect>
          </div>

          <div className="max-w-xl md:text-right">
            {subtitle && (
              <TextEffect 
                as="h3" 
                preset="fade-in-blur" 
                speedReveal={1.1} 
                speedSegment={0.3} 
                className="text-lg md:text-xl font-bold text-[#030712]/90 font-body mb-2"
              >
                {subtitle}
              </TextEffect>
            )}
            <TextEffect 
              as="p" 
              preset="fade-in-blur" 
              speedReveal={1.1} 
              speedSegment={0.3} 
              className="text-slate-600 text-sm sm:text-base leading-relaxed font-body"
            >
              {description}
            </TextEffect>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {cards.map((card, index) => {
            const isHighlightedCard = card.isHighlighted || index === 4;

            if (isHighlightedCard) {
              return (
                <div
                  key={index}
                  className="rounded-xl p-7 flex flex-col justify-between text-white transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group border"
                  style={{
                    backgroundColor: "#5727e7",
                    borderColor: "rgba(87, 39, 231, 0.4)",
                    boxShadow: `0 16px 36px -10px rgba(87, 39, 231, 0.4), inset 0 1px 0 rgba(255,255,255,0.3)`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/10 pointer-events-none" />

                  <div className="relative z-10">
                    <span 
                      className="inline-block px-3 py-1 rounded-xl text-[11px] font-extrabold tracking-wider uppercase mb-4 shadow-xs border"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        color: "#ffffff",
                        borderColor: "rgba(255, 255, 255, 0.3)"
                      }}
                    >
                      ✦ {card.tag}
                    </span>
                    <TextEffect 
                      as="h4" 
                      preset="fade-in-blur" 
                      speedReveal={1.1} 
                      speedSegment={0.3} 
                      className="text-xl font-extrabold text-white font-heading mb-3 leading-snug"
                    >
                      {card.title}
                    </TextEffect>
                    <TextEffect 
                      as="p" 
                      preset="fade-in-blur" 
                      speedReveal={1.1} 
                      speedSegment={0.3} 
                      className="text-white/90 text-xs md:text-sm leading-relaxed mb-6 font-body"
                    >
                      {card.description}
                    </TextEffect>
                  </div>

                  <a
                    href="#connect"
                    className="relative z-10 inline-flex items-center justify-center gap-2 text-xs font-bold transition-all duration-300 font-body mt-auto px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 shadow-md hover:shadow-lg active:scale-[0.98] group-hover:gap-3"
                  >
                    <span>{card.buttonText}</span>
                    <span className="text-sm font-bold transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              );
            }

            const isFirst = index === 0;

            return (
              <div
                key={index}
                className={`bg-white border border-[#e5e7eb] rounded-xl p-6 flex flex-col justify-between text-[#030712] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group ${isFirst ? 'ring-1 ring-slate-200/80 shadow-md' : 'shadow-xs hover:shadow-md'}`}
                style={{
                  boxShadow: isFirst ? `0 10px 25px -8px rgba(87, 39, 231, 0.12)` : `0 4px 20px -4px rgba(0,0,0,0.05)`
                }}
              >
                {isFirst && (
                  <div 
                    className="absolute top-0 left-0 right-0 h-1" 
                    style={{ backgroundColor: "#5727e7" }}
                  />
                )}

                <div>
                  <span 
                    className="inline-block text-[11px] font-bold tracking-wider uppercase mb-3.5 px-2.5 py-1 rounded-xl border shadow-xs"
                    style={{
                      backgroundColor: "rgba(87, 39, 231, 0.06)",
                      color: "#5727e7",
                      borderColor: "rgba(87, 39, 231, 0.15)"
                    }}
                  >
                    {card.tag}
                  </span>
                  <TextEffect 
                    as="h4" 
                    preset="fade-in-blur" 
                    speedReveal={1.1} 
                    speedSegment={0.3} 
                    className="text-lg font-bold text-[#030712] font-heading mb-2.5 leading-snug"
                  >
                    {card.title}
                  </TextEffect>
                  <TextEffect 
                    as="p" 
                    preset="fade-in-blur" 
                    speedReveal={1.1} 
                    speedSegment={0.3} 
                    className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 font-body"
                  >
                    {card.description}
                  </TextEffect>
                </div>

                <a
                  href="#connect"
                  className="inline-flex items-center justify-between text-xs font-bold transition-all duration-200 font-body mt-auto px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[#030712] hover:bg-slate-100 hover:border-slate-300 shadow-xs active:scale-[0.98] group/btn"
                >
                  <span className="group-hover/btn:text-slate-900 transition-colors">{card.buttonText}</span>
                  <span 
                    className="text-xs transition-transform duration-200 group-hover/btn:translate-x-1"
                    style={{ color: "#5727e7" }}
                  >
                    →
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
