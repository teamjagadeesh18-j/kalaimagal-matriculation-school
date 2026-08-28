'use client';
import React from 'react';
import { TextEffect } from '@/components/core/text-effect';
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const schoolName = "Kalaimagal Matriculation School".replace("dav-matriculation-higher-secondary-school---avadi (2)", "DAV Matriculation Higher Secondary School");

  return (
    <footer className="w-full bg-[#0a0f1d] text-slate-300 font-body relative overflow-hidden pt-16 pb-12 border-t border-slate-800">
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: "#5727e7" }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div 
                className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white shadow-md shrink-0"
                style={{ backgroundColor: "#5727e7" }}
              >
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white font-heading tracking-tight block">
                  {schoolName}
                </span>
                <span className="text-xs text-slate-400 font-medium">Matriculation Academic Campus</span>
              </div>
            </div>

            <TextEffect 
              as="p" 
              preset="fade-in-blur" 
              speedReveal={1.1} 
              speedSegment={0.3} 
              className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-md font-body"
            >
              Nurturing academic mastery, character discipline, and confidence in every student through structured Matriculation education.
            </TextEffect>

            <div className="flex items-center gap-3 text-xs text-slate-400 font-medium pt-2">
              <MapPin className="w-4 h-4 shrink-0" style={{ color: "#5727e7" }} />
              <span>State Board Recognized Institution, Tamil Nadu</span>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-400">
              <li><Link href="#academics" className="hover:text-white transition-colors">Academic Structure</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition-colors">Campus Gallery</Link></li>
              <li><Link href="#testimonials" className="hover:text-white transition-colors">Parent Reviews</Link></li>
              <li><Link href="#faqs" className="hover:text-white transition-colors">Admissions FAQ</Link></li>
              <li><Link href="#connect" className="hover:text-white transition-colors">Admissions Inquiry Desk</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white font-heading">
              Admissions Desk
            </h4>
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Phone className="w-4 h-4 shrink-0" style={{ color: "#5727e7" }} />
                <span>+91 98401 55667 Desk Enquiries</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Mail className="w-4 h-4 shrink-0" style={{ color: "#5727e7" }} />
                <span>admissions@school-edu.in</span>
              </div>
              <div className="pt-2">
                <a
                  href="#connect"
                  className="inline-flex items-center justify-center w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-200 shadow-sm"
                  style={{
                    backgroundColor: "#5727e7",
                    color: "#ffffff"
                  }}
                >
                  Apply for Admission
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {schoolName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Matriculation Board</span>
            <span>State Syllabus</span>
            <span>Quality Education</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
