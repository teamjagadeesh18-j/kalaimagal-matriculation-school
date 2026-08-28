"use client";

import React, { useState } from "react";
import { TextEffect } from "@/components/core/text-effect";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ConnectSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="connect" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-[#f9fafb] border-t border-[#e5e7eb] relative overflow-hidden">
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-20"
        style={{ backgroundColor: "rgba(87, 39, 231, 0.15)" }}
      />

      <div className="max-w-[1280px] mx-auto space-y-14 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="max-w-2xl space-y-3">
            <span 
              className="inline-block px-3.5 py-1 rounded-xl text-xs font-extrabold uppercase tracking-widest font-body border shadow-xs"
              style={{
                backgroundColor: "rgba(87, 39, 231, 0.08)",
                color: "#5727e7",
                borderColor: "rgba(87, 39, 231, 0.2)"
              }}
            >
              CONTACT & ADMISSIONS
            </span>
            <TextEffect 
              as="h2" 
              preset="fade-in-blur" 
              speedReveal={1.1} 
              speedSegment={0.3} 
              className="text-3xl md:text-5xl font-extrabold text-[#030712] font-heading tracking-tight leading-tight"
            >
              Get in Touch with Our Admissions Desk
            </TextEffect>
          </div>
          <div className="max-w-md">
            <TextEffect 
              as="p" 
              preset="fade-in-blur" 
              speedReveal={1.1} 
              speedSegment={0.3} 
              className="text-base text-slate-600 font-body leading-relaxed"
            >
              Have questions regarding admissions, fee structure, academic curriculum, or campus visits? Reach out directly.
            </TextEffect>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          <div className="space-y-4 lg:col-span-4 font-body">
            
            <div 
              className="p-6 rounded-xl bg-white border border-[#e5e7eb] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
              style={{ borderLeftWidth: "4px", borderLeftColor: "#5727e7" }}
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#5727e7" }} />
                <div className="min-w-0 flex-1">
                  <TextEffect as="h4" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-extrabold text-[#030712] text-sm font-heading">Campus Address</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-slate-600 mt-1.5 leading-relaxed break-words">Main Campus Grounds, School Road, City Center</TextEffect>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#e5e7eb] shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group">
              <div 
                className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center border shadow-xs group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundColor: "rgba(87, 39, 231, 0.1)",
                  borderColor: "rgba(87, 39, 231, 0.25)",
                  color: "#5727e7"
                }}
              >
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <TextEffect as="h4" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-extrabold text-[#030712] text-sm font-heading">Phone Enquiries</TextEffect>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-slate-600 mt-1 break-words font-medium">+91 98401 55667 / Admissions Desk</TextEffect>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#e5e7eb] shadow-sm hover:shadow-md transition-all duration-300 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: "#5727e7" }} />
                <TextEffect as="h4" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-extrabold text-[#030712] text-sm font-heading">Email Communication</TextEffect>
              </div>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-slate-600 break-all font-medium pt-1">admissions@school-edu.in</TextEffect>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#e5e7eb] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex items-start gap-4">
              <Clock className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#5727e7" }} />
              <div className="min-w-0 flex-1 relative z-10">
                <TextEffect as="h4" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-extrabold text-[#030712] text-sm font-heading">Office Hours</TextEffect>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-slate-600 mt-1 break-words font-medium">Monday – Saturday: 8:30 AM – 4:00 PM</TextEffect>
              </div>
              <Clock 
                className="w-16 h-16 absolute -right-3 -bottom-3 pointer-events-none opacity-5"
                style={{ color: "#5727e7" }}
              />
            </div>

          </div>

          <div className="lg:col-span-8">
            <div 
              className="p-8 md:p-10 rounded-xl bg-white border border-[#e5e7eb] font-body relative overflow-hidden"
              style={{
                boxShadow: `0 12px 40px -10px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)`
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: "#5727e7" }} />

              <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-extrabold text-[#030712] font-heading mb-6">Send Quick Inquiry</TextEffect>
              
              {submitted ? (
                <div 
                  className="p-8 rounded-xl text-center space-y-3 border"
                  style={{
                    backgroundColor: "rgba(87, 39, 231, 0.08)",
                    borderColor: "rgba(87, 39, 231, 0.2)",
                    color: "#030712"
                  }}
                >
                  <CheckCircle2 className="w-10 h-10 mx-auto" style={{ color: "#5727e7" }} />
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-lg font-heading">Inquiry Submitted Successfully!</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm text-slate-600 max-w-md mx-auto">Thank you for connecting with us. Our admissions desk will contact you within 24 hours.</TextEffect>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Parent's Full Name *</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="e.g. Ramesh Kumar" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Mobile Contact *</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-slate-400 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Grade Seeking Admission *</label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-slate-400 transition-all"
                      >
                        <option value="">Select Grade</option>
                        <option value="kindergarten">Kindergarten (LKG/UKG)</option>
                        <option value="primary">Primary School (Class 1-5)</option>
                        <option value="middle">Middle School (Class 6-8)</option>
                        <option value="high">High School (Class 9-10)</option>
                        <option value="higher-secondary">Higher Secondary (Class 11-12)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="parent@example.com" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-slate-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Specific Questions or Message</label>
                    <textarea 
                      rows={3} 
                      placeholder="Ask about admissions schedule, campus tour, or fee details..." 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-slate-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
                    style={{
                      backgroundColor: "#5727e7",
                      boxShadow: `0 10px 25px -5px rgba(87, 39, 231, 0.4), inset 0 1px 0 rgba(255,255,255,0.3)`
                    }}
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
