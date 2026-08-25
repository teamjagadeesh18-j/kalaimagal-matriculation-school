"use client";

import React from "react";

export interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorTitle,
}) => {
  const initial = authorName ? authorName.trim().charAt(0).toUpperCase() : "P";

  return (
    <div className="testimonial-card flex flex-col justify-between p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all w-80 sm:w-96 flex-shrink-0">
      <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base italic leading-relaxed font-body">
        "{quote}"
      </p>
      <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="w-11 h-11 rounded-full bg-[#172554] text-[#F4B400] font-bold text-lg flex items-center justify-center shadow-inner font-heading flex-shrink-0">
          {initial}
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
            {authorName}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-body">
            {authorTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export const HorizontalScroller: React.FC<{
  children: React.ReactNode;
  speed?: string;
  direction?: "left" | "right" | string;
}> = ({ children, speed = "40s", direction = "left" }) => {
  const animationClass =
    direction === "right"
      ? "animate-scroll-horizontal-reverse"
      : "animate-scroll-horizontal";

  return (
    <div className="w-full overflow-hidden group relative mask-fade py-2">
      <div
        className={`flex ${animationClass}`}
        style={{ ["--scroll-duration" as any]: speed }}
      >
        <div className="flex items-stretch justify-center gap-6 px-3">
          {children}
        </div>
        <div
          className="flex items-stretch justify-center gap-6 px-3"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export interface TestimonialsSectionProps {
  data: {
    title: string;
    subtitle: string;
    rows: Array<{
      id: string;
      speed: string;
      direction: "left" | "right" | string;
      testimonials: Array<{
        id: string;
        quote: string;
        authorName: string;
        authorTitle: string;
      }>;
    }>;
  };
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  return (
    <section className="testimonials-section relative flex flex-col items-center gap-10 py-16 px-4 w-full max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center gap-4 text-center z-10 max-w-3xl">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-600 dark:text-amber-400 border border-amber-400/30 font-body">
          PARENT & COMMUNITY REVIEWS
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight font-heading">
          {data.title}
        </h2>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 font-body">
          {data.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-6 z-10 w-full">
        {data.rows.map((row) => (
          <HorizontalScroller
            key={row.id}
            speed={row.speed}
            direction={row.direction}
          >
            {row.testimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                authorName={t.authorName}
                authorTitle={t.authorTitle}
              />
            ))}
          </HorizontalScroller>
        ))}
      </div>
    </section>
  );
}
