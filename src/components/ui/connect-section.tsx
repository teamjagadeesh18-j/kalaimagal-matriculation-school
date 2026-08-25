"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ConnectSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="connect" className="py-20 px-6 bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="max-w-[1200px] mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#dbeafe] text-[#1e3a8a] text-xs font-bold uppercase tracking-wider font-body">
            Contact & Admissions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] font-heading tracking-tight">
            Connect with Kalaimagal Matriculation School
          </h2>
          <p className="text-base text-slate-600 font-body">
            Have questions about admissions, fees, or campus visits? Reach out to our admissions team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Info Cards Column */}
          <div className="space-y-4 lg:col-span-1 font-body">
            
            {/* Campus Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#dbeafe] text-[#1e3a8a] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-[#0f172a] text-sm font-heading">Campus Address</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed break-words">Bazaar Street, Pattabiram, Chennai - 600072</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#dbeafe] text-[#1e3a8a] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-[#0f172a] text-sm font-heading">Phone Enquiries</h4>
                <p className="text-xs text-slate-600 mt-1 break-words">+91 98401 55667 (Admissions Desk)</p>
              </div>
            </div>

            {/* Email Card - break-all enforces zero text overflow */}
            <div className="p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#dbeafe] text-[#1e3a8a] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-[#0f172a] text-sm font-heading">Email Us</h4>
                <p className="text-xs text-slate-600 mt-1 break-all">admissions@kalaimagalmatriculationschool.edu.in</p>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#dbeafe] text-[#1e3a8a] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-[#0f172a] text-sm font-heading">Office Hours</h4>
                <p className="text-xs text-slate-600 mt-1 break-words">Monday – Saturday: 8:30 AM – 4:00 PM</p>
              </div>
            </div>

          </div>

          {/* Form & Map Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm font-body">
              <h3 className="text-xl font-bold text-[#0f172a] font-heading mb-6">Send Quick Admission Inquiry</h3>
              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#dbeafe] text-[#1e3a8a] text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 mx-auto text-[#1e3a8a]" />
                  <p className="font-bold text-base font-heading">Thank You!</p>
                  <p className="text-sm">Your inquiry has been received. Our admissions office will call you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0f172a] mb-1">Parent's Full Name *</label>
                      <input required type="text" placeholder="e.g. Ramesh Kumar" className="w-full px-4 py-2.5 rounded-full border border-[#e2e8f0] bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0f172a] mb-1">Mobile Number *</label>
                      <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-2.5 rounded-full border border-[#e2e8f0] bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0f172a] mb-1">Student's Name</label>
                      <input type="text" placeholder="e.g. Ananya" className="w-full px-4 py-2.5 rounded-full border border-[#e2e8f0] bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0f172a] mb-1">Class Applying For *</label>
                      <select required className="w-full px-4 py-2.5 rounded-full border border-[#e2e8f0] bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                        <option value="">Select Grade Level</option>
                        <option value="LKG-UKG">Kindergarten (LKG / UKG)</option>
                        <option value="Primary">Primary School (Class 1 - 5)</option>
                        <option value="Middle">Middle School (Class 6 - 8)</option>
                        <option value="High">High School (Class 9 - 10)</option>
                        <option value="HigherSec">Higher Secondary (Class 11 - 12)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0f172a] mb-1">Your Message / Query</label>
                    <textarea rows={3} placeholder="Ask any question about admissions, fee structure, or bus transport..." className="w-full px-4 py-2.5 rounded-2xl border border-[#e2e8f0] bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                  </div>
                  <button type="submit" className="w-full py-3.5 rounded-full bg-[#1e3a8a] text-white text-sm font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-sm font-body cursor-pointer">
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm h-[220px] relative">
              <iframe 
                title="Kalaimagal Matriculation School Location Map" 
                src="https://maps.google.com/maps?q=13.11581,80.06055&z=15&output=embed" 
                className="w-full h-full border-0" 
                loading="lazy" 
              />
              <a
                href="https://maps.google.com/?q=13.11581,80.06055"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-700 shadow border border-slate-200 flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
