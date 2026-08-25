"use client";
import { TextEffect } from '@/components/core/text-effect';

import { BreadcrumbSchema } from '@/components/ui/breadcrumb-schema';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import React, { useState } from 'react';
import { SpatialHeader } from "@/components/ui/spatial-chat-hero";
import { Footer } from "@/components/ui/footer-section";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const waText = `💬 *NEW WEBSITE DIRECT MESSAGE*\n*School:* Kalaimagal Matriculation School\n\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Email:* ${formData.email || 'N/A'}\n• *Subject:* ${formData.subject}\n• *Message:* ${formData.message}`;
    window.open("https://wa.me/917010624186?text=" + encodeURIComponent(waText), '_blank');
  };

  return (
    <main className="min-h-screen bg-[#f7f8f9] text-[#475569] antialiased font-body">
      <SpatialHeader />
      <BreadcrumbSchema pageName="Contact" pageUrl="https://kalaimagalmatric.edu.in/contact" />
      
    <div className="bg-[#ffffff] border-b border-[#e2e8f0] py-3 px-6 text-xs text-[#64748b]">
      <div className="max-w-[1200px] mx-auto flex items-center gap-2">
        <a href="/" className="hover:text-[#5727e7] transition-colors">Home</a>
        <span>/</span>
        <span className="font-semibold text-[#0f172a]">Contact Us</span>
      </div>
    </div>
  

      {/* Hero Header */}
      <section className="bg-[#0f172a] text-white py-16 px-6 text-center">
        <div className="max-w-[1200px] mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#5727e7] text-white text-xs font-semibold uppercase tracking-wider">
            GET IN TOUCH
          </span>
          <TextEffect as="h1" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-3xl md:text-5xl font-bold font-heading text-white">
            Contact Kalaimagal Matriculation School
          </TextEffect>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base md:text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            We are here to answer your questions regarding admissions, fees, transport, and campus visits.
          </TextEffect>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 px-6 max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Details Card */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-[#e2e8f0] shadow-sm space-y-6">
            <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#0f172a] font-heading">Campus Contact Details</TextEffect>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#eeeffc] text-[#5727e7] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-sm text-[#0f172a]">Physical Address</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b] mt-1 leading-relaxed">Balammal St, Rajiv Gandhi Nagar, Pattabiram, Chennai 600072</TextEffect>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#eeeffc] text-[#5727e7] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-sm text-[#0f172a]">Phone Numbers</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b] mt-1">+91 70106 24186 (Primary Desk)</TextEffect>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#eeeffc] text-[#5727e7] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-sm text-[#0f172a]">Email Address</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b] mt-1">info@kalaimagalmatriculationschool.edu.in</TextEffect>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#eeeffc] text-[#5727e7] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-sm text-[#0f172a]">Office Hours</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b] mt-1">Monday to Saturday: 8:30 AM – 4:30 PM (Sunday Closed)</TextEffect>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e2e8f0]">
              <a 
                href="https://wa.me/91917010624186" 
                target="_blank" 
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25d366] text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-sm"
              >
                <MessageSquare className="w-4 h-4" /> Instant WhatsApp Direct
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-white p-8 rounded-3xl border border-[#e2e8f0] shadow-sm space-y-6">
          <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#0f172a] font-heading">Send Us a Direct Message</TextEffect>

          {formSubmitted ? (
            <div className="p-6 bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl text-center space-y-3">
              <CheckCircle className="w-10 h-10 text-[#16a34a] mx-auto" />
              <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-lg text-[#15803d]">Message Sent Successfully!</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#166534]">Thank you for contacting Kalaimagal Matriculation School. Our administrative office will get back to you shortly.</TextEffect>
              <button onClick={() => setFormSubmitted(false)} className="text-xs font-bold text-[#5727e7] underline mt-2">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0f172a] mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. R. Ramesh" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7]"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98765 43210" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="yourname@gmail.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0f172a] mb-1">Inquiry Subject</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7]"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Admission Process">Admission Inquiry & Seats</option>
                  <option value="Fee Structure">Fee Structure Inquiry</option>
                  <option value="Transport Facility">Transport & Bus Routes</option>
                  <option value="Campus Tour">Campus Tour Request</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0f172a] mb-1">Your Message</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7]"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 rounded-xl bg-[#5727e7] text-white font-bold text-sm shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Map Location Banner */}
      <section className="py-12 px-6 bg-[#0f172a] text-white">
        <div className="max-w-[1200px] mx-auto text-center space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-[#5727e7] text-white text-xs font-semibold uppercase">
            REAL CAMPUS LOCATION
          </span>
          <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl md:text-4xl font-bold font-heading text-white">Visit Our Campus</TextEffect>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm text-[#94a3b8] max-w-xl mx-auto">Balammal St, Rajiv Gandhi Nagar, Pattabiram, Chennai 600072</TextEffect>
          <div className="pt-2">
            <a 
              href="https://maps.google.com/?q=13.12384,80.08109" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5727e7] text-white font-bold text-sm shadow-md hover:opacity-90"
            >
              Open in Google Maps <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}