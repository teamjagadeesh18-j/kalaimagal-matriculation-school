"use client";

import React from "react";

export interface TestimonialItem {
  id?: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  avatarUrl?: string;
}

export interface TestimonialRow {
  id?: string;
  speed?: string;
  direction?: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  rows: TestimonialRow[];
}

function getInitials(name: string) {
  if (!name) return "ST";
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

export const TestimonialCard: React.FC<TestimonialItem> = ({ quote, authorName, authorTitle }) => {
  const initials = getInitials(authorName);

  return (
    <div 
      className="testimonial-card flex flex-col justify-between p-7 bg-white rounded-xl border border-[#e5e7eb] w-96 flex-shrink-0 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
      style={{
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.06)"
      }}
    >
      <div 
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: "#5727e7" }}
      />

      <p className="text-slate-700 text-sm md:text-base leading-relaxed font-body italic mb-6">
        "{quote}"
      </p>

      <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 mt-auto">
        <div 
          className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center font-extrabold text-sm shadow-xs border"
          style={{
            backgroundColor: "rgba(87, 39, 231, 0.1)",
            color: "#5727e7",
            borderColor: "rgba(87, 39, 231, 0.25)"
          }}
        >
          {initials}
        </div>
        
        <div>
          <h4 className="text-sm font-extrabold text-[#030712] font-heading">{authorName}</h4>
          <p className="text-xs text-slate-500 font-body">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

export const HorizontalScroller: React.FC<{ children: React.ReactNode; speed?: string; direction?: string }> = ({ children, speed = "40s", direction = "left" }) => {
  const animationClass =
    direction === "right" ? "animate-scroll-horizontal-reverse" : "animate-scroll-horizontal";

  return (
    <div className="w-full overflow-hidden group relative mask-fade">
      <div className={`flex ${animationClass}`} style={{ ["--scroll-duration" as any]: speed }}>
        <div className="flex items-stretch justify-center gap-6 px-3">{children}</div>
        <div className="flex items-stretch justify-center gap-6 px-3" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection({ data }: { data: any }) {
  return (
    <section className="testimonials-section relative flex flex-col items-center gap-12 py-20 md:py-28 px-4 sm:px-6 w-full max-w-7xl mx-auto font-body overflow-hidden">
      <div className="flex flex-col items-center text-center z-10 max-w-3xl space-y-3">
        <span 
          className="inline-block px-3.5 py-1 rounded-xl text-xs font-extrabold uppercase tracking-widest border shadow-xs"
          style={{
            backgroundColor: "rgba(87, 39, 231, 0.08)",
            color: "#5727e7",
            borderColor: "rgba(87, 39, 231, 0.2)"
          }}
        >
          COMMUNITY FEEDBACK
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#030712] font-heading tracking-tight leading-tight">
          {data.title}
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed max-w-2xl">
          {data.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-6 z-10 w-full max-w-6xl">
        {data.rows.map((row: any, rIdx: number) => (
          <HorizontalScroller key={row.id || `row-${rIdx}`} speed={row.speed} direction={row.direction}>
            {row.testimonials.map((t: any, tIdx: number) => (
              <TestimonialCard
                key={t.id || `t-${tIdx}`}
                quote={t.quote}
                authorName={t.authorName}
                authorTitle={t.authorTitle}
              />
            ))}
          </HorizontalScroller>
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse 85% 67% at 50% 100%, rgba(87, 39, 231, 0.08) 0%, transparent 65%)`,
          zIndex: 0,
        }}
      />
    </section>
  );
}
