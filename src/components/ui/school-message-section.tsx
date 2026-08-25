"use client";
import { TextEffect } from '@/components/core/text-effect';
import React from "react";

export default function SchoolMessageSection() {
  const config = {
    "themeBg": "bg-[#f8fafc]",
    "border": "border-slate-200",
    "badgeBg": "bg-blue-100",
    "badgeText": "text-blue-900",
    "badgeBorder": "border-blue-300",
    "primaryText": "text-[#1e3a8a]",
    "accentGold": "text-amber-600",
    "cardBg": "bg-white",
    "cardShadow": "shadow-[0_20px_50px_rgba(30,58,138,0.08)]",
    "leaderName": "School Management & Leadership",
    "leaderRole": "Founder & Managing Director",
    "motto": "Empowering young minds with unwavering discipline, academic mastery, and timeless cultural values.",
    "salutation": "DEAR PARENTS & DEAR STUDENTS",
    "heading": "A Sacred Partnership for Your Child's Future",
    "paragraph1": "Entrusting your child to Kalaimagal Matriculation Higher Secondary School is a decision of paramount significance. For decades, our institution has stood as a beacon of academic prestige, unwavering discipline, and holistic character building.",
    "paragraph2": "We do not merely educate; we shape future visionaries, engineers, doctors, and compassionate leaders. Every morning when your child walks through our gates, they enter an environment engineered for greatness. Together, as parents and educators, we forge a lifetime foundation of success.",
    "stats": [
        {
            "value": "100%",
            "label": "State Board Pass Rate"
        },
        {
            "value": "35+",
            "label": "Years of Educational Excellence"
        },
        {
            "value": "5000+",
            "label": "Proud Alumni Network"
        }
    ]
};

  return (
    <section className={`w-full ${config.themeBg} py-20 px-6 ${config.border} border-t border-b`}>
      <div className="max-w-6xl mx-auto">
        <div className={`${config.cardBg} ${config.cardShadow} rounded-3xl p-8 sm:p-12 border ${config.border} relative overflow-hidden`}>
          
          {/* Top Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${config.badgeBg} ${config.badgeText} border ${config.badgeBorder} font-body`}>
              {config.salutation}
            </span>
            <span className={`text-xs font-bold tracking-widest uppercase ${config.accentGold} font-body`}>
              LEADERSHIP DIRECTIVE
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-5">
              <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className={`text-3xl sm:text-4xl font-extrabold ${config.primaryText} font-heading leading-tight`}>
                {config.heading}
              </TextEffect>
              
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-slate-600 text-base sm:text-lg font-body leading-relaxed">
                "{config.paragraph1}"
              </TextEffect>

              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
                "{config.paragraph2}"
              </TextEffect>

              {/* Leadership Signature Badge */}
              <div className="pt-4 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${config.badgeBg} flex items-center justify-center font-bold font-heading text-lg ${config.badgeText}`}>
                  ✦
                </div>
                <div>
                  <TextEffect as="h4" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className={`text-base font-bold ${config.primaryText} font-heading`}>
                    Principal & Management Desk
                  </TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-slate-500 font-body">
                    {config.leaderRole}
                  </TextEffect>
                </div>
              </div>
            </div>

            {/* Right Stats Column */}
            <div className="lg:col-span-4 bg-slate-50/80 rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-100">
              <span className={`text-xs font-bold uppercase tracking-widest ${config.accentGold} font-body`}>
                INSTITUTION HIGHLIGHTS
              </span>
              <div className="space-y-5">
                {config.stats.map((stat, idx) => (
                  <div key={idx} className="border-b border-slate-200/60 pb-3 last:border-0 last:pb-0">
                    <span className={`text-2xl sm:text-3xl font-extrabold ${config.primaryText} font-heading block`}>
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-500 font-body">
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
