"use client";
import { TextEffect } from '@/components/core/text-effect';

import { BreadcrumbSchema } from '@/components/ui/breadcrumb-schema';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import React, { useState } from 'react';
import { SpatialHeader } from "@/components/ui/spatial-chat-hero";
import { Footer } from "@/components/ui/footer-section";
import { BookOpen, CheckCircle, Award, Sparkles, ChevronRight, FileText } from 'lucide-react';

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState('primary');

  const levels = [
    {
        "id": "kindergarten",
        "label": "Kindergarten (KG)",
        "subtitle": "LKG & UKG"
    },
    {
        "id": "primary",
        "label": "Primary School",
        "subtitle": "Classes 1 to 5"
    },
    {
        "id": "middle",
        "label": "Middle School",
        "subtitle": "Classes 6 to 8"
    },
    {
        "id": "secondary",
        "label": "Secondary (SSLC)",
        "subtitle": "Classes 9 & 10"
    },
    {
        "id": "higher",
        "label": "Higher Sec (HSC)",
        "subtitle": "Classes 11 & 12"
    }
];

  return (
    <main className="min-h-screen bg-[#f7f8f9] text-[#475569] antialiased font-body">
      <SpatialHeader />
      <BreadcrumbSchema pageName="Academics" pageUrl="https://kalaimagalmatric.edu.in/academics" />
      
    <div className="bg-[#ffffff] border-b border-[#e2e8f0] py-3 px-6 text-xs text-[#64748b]">
      <div className="max-w-[1200px] mx-auto flex items-center gap-2">
        <a href="/" className="hover:text-[#5727e7] transition-colors">Home</a>
        <span>/</span>
        <span className="font-semibold text-[#0f172a]">Academics</span>
      </div>
    </div>
  

      {/* Hero Header */}
      <section className="bg-[#0f172a] text-white py-16 px-6 relative text-center">
        <div className="max-w-[1200px] mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#5727e7] text-white text-xs font-semibold uppercase tracking-wider">
            TAMIL NADU STATE BOARD CURRICULUM
          </span>
          <TextEffect as="h1" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-3xl md:text-5xl font-bold font-heading text-white">
            Academic Excellence from KG to Board Exams
          </TextEffect>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base md:text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Empowering students of Kalaimagal Matriculation School with strong conceptual foundations, Samacheer Kalvi standards, and special exam preparation.
          </TextEffect>
        </div>
      </section>

      {/* Level Switcher Tabs */}
      <section className="py-12 px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {levels.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setActiveTab(lvl.id)}
              className={`px-5 py-3 rounded-2xl border text-left transition-all duration-200 ${
                activeTab === lvl.id
                  ? 'bg-[#5727e7] text-white border-[#5727e7] shadow-md'
                  : 'bg-white text-[#0f172a] border-[#e2e8f0] hover:bg-[#f8fafc]'
              }`}
            >
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-sm">{lvl.label}</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className={`text-[11px] ${activeTab === lvl.id ? 'text-white/80' : 'text-[#64748b]'}`}>{lvl.subtitle}</TextEffect>
            </button>
          ))}
        </div>

        {/* Tab Content Box */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#e2e8f0] shadow-sm space-y-8">
          {activeTab === 'kindergarten' && (
            <div className="space-y-6">
              <span className="px-3 py-1 bg-[#eeeffc] text-[#5727e7] font-semibold text-xs rounded-full">FOUNDATIONAL EARLY YEARS</span>
              <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#0f172a] font-heading">Kindergarten (LKG & UKG) Curriculum</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base text-[#475569]">A gentle, play-integrated learning framework focusing on sensory development, mother tongue & English phonics, number recognition, and social confidence.</TextEffect>
              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">Phonics & Early Reading</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Letter sounds, picture association, Tamil and English rhymes.</TextEffect>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">Numbers & Shapes</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Basic counting, spatial awareness, color matching, and active play.</TextEffect>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">Social & Fine Motor Skills</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Coloring, clay modeling, group activities, and table etiquette.</TextEffect>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'primary' && (
            <div className="space-y-6">
              <span className="px-3 py-1 bg-[#eeeffc] text-[#5727e7] font-semibold text-xs rounded-full">PRIMARY YEARS (CLASSES 1 TO 5)</span>
              <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#0f172a] font-heading">Primary School Curriculum</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base text-[#475569]">Building strong arithmetic clarity, reading fluency, environmental awareness, and disciplined study routines across fundamental subjects.</TextEffect>
              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">Languages & Expression</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Reading fluency in Tamil & English, neat handwriting, and basic grammar.</TextEffect>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">Mathematics & EVS</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Addition, subtraction, multiplication tables, environmental science, and nature observation.</TextEffect>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">Co-curricular & Wellbeing</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Drawing, moral science, physical education games, and storytelling.</TextEffect>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'middle' && (
            <div className="space-y-6">
              <span className="px-3 py-1 bg-[#eeeffc] text-[#5727e7] font-semibold text-xs rounded-full">MIDDLE STAGE (CLASSES 6 TO 8)</span>
              <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#0f172a] font-heading">Middle School Curriculum</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base text-[#475569]">Strengthening analytical thinking, practical science lab experiments, computer literacy, and multi-subject conceptual mastery.</TextEffect>
              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">Science & Computer IT</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Physics, Chemistry, Biology fundamentals, computer basics, and practical demos.</TextEffect>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">Mathematics & Social Science</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Algebra, geometry, history, geography, civics, and map work.</TextEffect>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">Language Mastery</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Advanced Tamil, English comprehension, and optional language exposure.</TextEffect>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'secondary' && (
            <div className="space-y-6">
              <span className="px-3 py-1 bg-[#eeeffc] text-[#5727e7] font-semibold text-xs rounded-full">BOARD PREPARATION (CLASSES 9 & 10)</span>
              <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#0f172a] font-heading">Secondary SSLC Board Curriculum</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base text-[#475569]">Comprehensive State Board examination preparation supported by expert faculty, mock test series, and individualized doubt clearing.</TextEffect>
              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">100% Syllabus Coverage</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Systematic chapter-by-chapter coverage following Samacheer Kalvi textbooks.</TextEffect>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">Mock Exams & Revision</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Weekly tests, monthly mid-terms, and full-length state board model exams.</TextEffect>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">Individual Guidance</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Personalized attention for rank boosters as well as student improvement programs.</TextEffect>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'higher' && (
            <div className="space-y-6">
              <span className="px-3 py-1 bg-[#eeeffc] text-[#5727e7] font-semibold text-xs rounded-full">HIGHER SECONDARY (CLASSES 11 & 12)</span>
              <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#0f172a] font-heading">Higher Secondary HSC Streams</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base text-[#475569]">Specialized Science, Computer Science, and Commerce pathways preparing students for professional college admissions and competitive entrance exams.</TextEffect>
              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">Math & Bio-Science Stream</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Physics, Chemistry, Biology, Mathematics for medical/engineering pathways.</TextEffect>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">Computer Science Stream</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Physics, Chemistry, Computer Science, Mathematics for IT & engineering.</TextEffect>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-[#0f172a] mb-2">Commerce & Accountancy</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Accountancy, Commerce, Economics, Business Math for CA/degree courses.</TextEffect>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Special Academic Enrichment */}
      <section className="py-16 px-6 bg-[#0f172a] text-white">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-[#5727e7] text-white text-xs font-semibold uppercase">
              ENRICHMENT PROGRAMS
            </span>
            <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl md:text-4xl font-bold font-heading text-white mt-3">
              Special Skill & Value Enhancement
            </TextEffect>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#1e293b] border border-[#334155]">
              <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xl font-bold text-white mb-2">Spoken English & Communication</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm text-[#94a3b8]">Integrated daily spoken English practice from primary levels to build fluent presentation and conversational confidence.</TextEffect>
            </div>

            <div className="p-8 rounded-3xl bg-[#1e293b] border border-[#334155]">
              <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xl font-bold text-white mb-2">Mental Arithmetic & Abacus Training</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm text-[#94a3b8]">Structured mental math exercises to dramatically increase calculation speed, focus, and memory agility.</TextEffect>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-white text-center border-t border-[#e2e8f0]">
        <div className="max-w-xl mx-auto space-y-4">
          <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#0f172a] font-heading">Ready to Apply for Admissions?</TextEffect>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm text-[#64748b]">Online application form takes less than 3 minutes.</TextEffect>
          <a href="/admissions" className="inline-block px-6 py-3 rounded-xl bg-[#5727e7] text-white font-semibold text-sm shadow-md hover:opacity-90">
            Apply Online Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}