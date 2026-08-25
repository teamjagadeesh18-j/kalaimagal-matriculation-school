"use client";

import { BreadcrumbSchema } from '@/components/ui/breadcrumb-schema';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import React from 'react';
import { SpatialHeader } from "@/components/ui/spatial-chat-hero";
import { Footer } from "@/components/ui/footer-section";
import { BookOpen, FlaskConical, Monitor, Shield, Bus, HeartPulse, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FacilitiesPage() {
  const facilityList = [
    {
      title: "Academic Book Bank & Library",
      desc: "Comprehensive collection of prescribed state board textbooks, reference guides, question banks, and storybooks.",
      icon: BookOpen,
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Science & Research Laboratories",
      desc: "State-of-the-art Physics, Chemistry, and Biology apparatus equipped for safe, hands-on student experiments.",
      icon: FlaskConical,
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Computer Center & IT Lab",
      desc: "Modern computer lab with high-speed internet, individual workstations, and software training for digital literacy.",
      icon: Monitor,
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Recreation Playground & Sports Arena",
      desc: "Spacious outdoor grounds for cricket, football, volleyball, athletics, badminton, and physical education sessions.",
      icon: Shield,
      img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Medical Room & First Aid Support",
      desc: "Dedicated medical rest area with essential first aid supplies, trained staff supervision, and doctor-on-call connectivity.",
      icon: HeartPulse,
      img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Interactive Smart Classrooms",
      desc: "Audio-visual learning aids, digital projectors, and clear visual demonstrations to make lessons engaging.",
      icon: Sparkles,
      img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f7f8f9] text-[#475569] antialiased font-body">
      <SpatialHeader />
      <BreadcrumbSchema pageName="Facilities" pageUrl="https://kalaimagalmatric.edu.in/facilities" />
      
    <div className="bg-[#ffffff] border-b border-[#e2e8f0] py-3 px-6 text-xs text-[#64748b]">
      <div className="max-w-[1200px] mx-auto flex items-center gap-2">
        <a href="/" className="hover:text-[#5727e7] transition-colors">Home</a>
        <span>/</span>
        <span className="font-semibold text-[#0f172a]">Campus Facilities</span>
      </div>
    </div>
  

      {/* Hero Header */}
      <section className="bg-[#0f172a] text-white py-16 px-6 text-center">
        <div className="max-w-[1200px] mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#5727e7] text-white text-xs font-semibold uppercase tracking-wider">
            CAMPUS INFRASTRUCTURE
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-white">
            World-Class School Facilities
          </h1>
          <p className="text-base md:text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Designed to foster academic excellence, physical fitness, creative exploration, and student safety at Kalaimagal Matriculation School.
          </p>
        </div>
      </section>

      {/* Facility Grid */}
      <section className="py-16 px-6 max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilityList.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src={f.img} alt={f.title} className="w-full h-48 object-cover" />
              <div className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#eeeffc] text-[#5727e7] flex items-center justify-center">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] font-heading">{f.title}</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Transport Banner */}
      <section className="py-16 px-6 bg-[#0f172a] text-white">
        <div className="max-w-[1200px] mx-auto bg-[#1e293b] p-8 md:p-12 rounded-3xl border border-[#334155] grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5727e7]">SAFETY & CONVENIENCE</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading">
              CCTV Surveillance & Transport Services
            </h2>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              We prioritize student safety with 24/7 CCTV monitoring across corridors and gates. Our dedicated transport fleet covers major local routes with trained drivers and attendants.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0f172a] border border-[#334155]">
              <CheckCircle2 className="w-5 h-5 text-[#5727e7] shrink-0" />
              <span className="text-xs md:text-sm text-[#e2e8f0]">24/7 Security Guards & Gated Campus Access</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0f172a] border border-[#334155]">
              <Bus className="w-5 h-5 text-[#5727e7] shrink-0" />
              <span className="text-xs md:text-sm text-[#e2e8f0]">Safe School Vans & Buses with Speed Governors</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0f172a] border border-[#334155]">
              <Shield className="w-5 h-5 text-[#5727e7] shrink-0" />
              <span className="text-xs md:text-sm text-[#e2e8f0]">Teacher & Sister Supervision During Entry & Exit</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-white text-center border-t border-[#e2e8f0]">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-[#0f172a] font-heading">Schedule a Campus Visit</h2>
          <p className="text-sm text-[#64748b]">Walk through our campus facilities and talk to our admissions staff.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5727e7] text-white font-semibold text-sm shadow-md hover:opacity-90">
            Book Campus Tour <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}