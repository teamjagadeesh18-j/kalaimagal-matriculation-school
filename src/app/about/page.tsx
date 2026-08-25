"use client";
import { TextEffect } from '@/components/core/text-effect';

import { BreadcrumbSchema } from '@/components/ui/breadcrumb-schema';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import React from 'react';
import { SpatialHeader } from "@/components/ui/spatial-chat-hero";
import { Footer } from "@/components/ui/footer-section";
import { GraduationCap, Award, ShieldCheck, Heart, Sparkles, ArrowRight, Users, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f9] text-[#475569] antialiased font-body">
      <SpatialHeader />
      <BreadcrumbSchema pageName="About" pageUrl="https://kalaimagalmatric.edu.in/about" />
      
    <div className="bg-[#ffffff] border-b border-[#e2e8f0] py-3 px-6 text-xs text-[#64748b]">
      <div className="max-w-[1200px] mx-auto flex items-center gap-2">
        <a href="/" className="hover:text-[#5727e7] transition-colors">Home</a>
        <span>/</span>
        <span className="font-semibold text-[#0f172a]">About Us</span>
      </div>
    </div>
  

      {/* Hero Banner */}
      <section className="bg-[#0f172a] text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#5727e7] text-white text-xs font-semibold uppercase tracking-wider mb-4">
            ABOUT KALAIMAGAL MATRICULATION SCHOOL
          </span>
          <TextEffect as="h1" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
            Educational Excellence Since 1995
          </TextEffect>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base md:text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Established with the mission of providing holistic, values-driven education to empower every student to achieve their fullest potential.
          </TextEffect>
        </div>
      </section>

      {/* Story & Heritage */}
      <section className="py-16 px-6 bg-[#ffffff]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#f1f5f9] text-[#5727e7] text-xs font-bold uppercase tracking-wide">
              OUR FOUNDATIONAL JOURNEY
            </span>
            <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl md:text-4xl font-bold text-[#0f172a] font-heading leading-tight">
              A Beacon of Quality Education in Balammal St
            </TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base text-[#475569] leading-relaxed">
              Kalaimagal Matriculation School was established to deliver comprehensive Tamil Nadu State Board education combined with disciplined character building, modern teaching methodologies, and individual care.
            </TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base text-[#475569] leading-relaxed">
              Managed by an experienced team of educators, our institution nurtures curiosity, critical thinking, and social responsibility in a safe, supportive campus environment.
            </TextEffect>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#e2e8f0]">
              <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#0f172a] font-heading">1995</TextEffect>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Established</TextEffect>
              </div>
              <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#0f172a] font-heading">100%</TextEffect>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Pass Record</TextEffect>
              </div>
              <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#0f172a] font-heading">1:15</TextEffect>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Teacher Ratio</TextEffect>
              </div>
              <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#0f172a] font-heading">4.8★</TextEffect>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b]">Parent Rating</TextEffect>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-lg p-2 bg-white">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80" 
              alt="Kalaimagal Matriculation School Campus"
              className="w-full h-[380px] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* 3 Core Pillars */}
      <section className="py-16 px-6 bg-[#f7f8f9] border-t border-[#e2e8f0]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl md:text-3xl font-bold text-[#0f172a] font-heading mb-3">
              Our Core Educational Pillars
            </TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm md:text-base text-[#64748b]">
              Grounding academic success in deep moral values, physical wellbeing, and life confidence.
            </TextEffect>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#eeeffc] text-[#5727e7] flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xl font-bold text-[#0f172a] font-heading mb-3">Academic Mastery</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm text-[#475569] leading-relaxed">
                Structured Samacheer Kalvi syllabus, regular revision tests, concept clarity in Math and Science, and board exam coaching.
              </TextEffect>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#eeeffc] text-[#5727e7] flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xl font-bold text-[#0f172a] font-heading mb-3">Values & Character Care</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm text-[#475569] leading-relaxed">
                Instilling discipline, respect for elders, honesty, and empathy to shape responsible citizens.
              </TextEffect>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#eeeffc] text-[#5727e7] flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xl font-bold text-[#0f172a] font-heading mb-3">Holistic Development</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm text-[#475569] leading-relaxed">
                Balanced focus on outdoor sports, yoga, cultural celebrations, science exhibitions, and speech competitions.
              </TextEffect>
            </div>
          </div>
        </div>
      </section>

      {/* Desk of Principal */}
      <section className="py-16 px-6 bg-[#0f172a] text-white">
        <div className="max-w-[1000px] mx-auto bg-[#1e293b] p-8 md:p-12 rounded-3xl border border-[#334155] shadow-xl text-center space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#5727e7]/20 text-white border border-[#5727e7]/40 text-xs font-semibold uppercase tracking-wider">
            FROM THE DESK OF THE CORRESPONDENT / PRINCIPAL
          </span>
          <blockquote className="text-xl md:text-2xl font-serif italic text-[#f8fafc] leading-relaxed">
            "Education is the most powerful tool to transform character and society. At Kalaimagal Matriculation School, we nurture every child with individual care, moral values, and academic strength."
          </blockquote>
          <div>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-base text-white font-heading">Management & Principal Team</TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#94a3b8]">Kalaimagal Matriculation School, Balammal St</TextEffect>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-[#ffffff] border-t border-[#e2e8f0] text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#0f172a] font-heading">Ready to Experience Our Campus?</TextEffect>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm text-[#64748b]">Connect with our admissions team or schedule a personalized walk-through tour.</TextEffect>
          <div className="pt-2">
            <a 
              href="/admissions" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5727e7] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
            >
              Apply For Admission <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}