"use client";
import { TextEffect } from '@/components/core/text-effect';

import { BreadcrumbSchema } from '@/components/ui/breadcrumb-schema';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import React, { useState } from 'react';
import { SpatialHeader } from "@/components/ui/spatial-chat-hero";
import { Footer } from "@/components/ui/footer-section";
import { CheckCircle2, Phone, Clock, FileCheck } from 'lucide-react';

export default function DedicatedApplyNowPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: 'Male',
    grade: 'LKG',
    parentName: '',
    relationship: 'Father',
    mobile: '',
    email: '',
    address: '',
    previousSchool: '',
    visitDate: '',
    notes: ''
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waMessage = `🎓 *STUDENT ADMISSION APPLICATION*
*School Name:* Kalaimagal Matriculation School
*Location:* Rajiv Gandhi Nagar, Pattabiram

*1. STUDENT INFORMATION*
• *Student Full Name:* ${formData.studentName}
• *Date of Birth:* ${formData.dob}
• *Gender:* ${formData.gender}
• *Grade Applying For:* ${formData.grade}

*2. PARENT / GUARDIAN DETAILS*
• *Parent / Guardian Name:* ${formData.parentName} (${formData.relationship})
• *Mobile / WhatsApp Number:* ${formData.mobile}
• *Email Address:* ${formData.email || 'N/A'}
• *Residential Address:* ${formData.address}
• *Previous School (if applicable):* ${formData.previousSchool || 'N/A'}
• *Preferred Date for Campus Visit:* ${formData.visitDate || 'N/A'}
• *Enquiry Notes / Special Requirements:* ${formData.notes || 'N/A'}`;

    const waUrl = "https://wa.me/917010624186?text=" + encodeURIComponent(waMessage);
    window.open(waUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#f7f8f9] text-[#475569] antialiased font-body">
      <SpatialHeader />
      <BreadcrumbSchema pageName="Admissions" pageUrl="https://kalaimagalmatric.edu.in/admissions" />
      
    <div className="bg-[#ffffff] border-b border-[#e2e8f0] py-3 px-6 text-xs text-[#64748b]">
      <div className="max-w-[1200px] mx-auto flex items-center gap-2">
        <a href="/" className="hover:text-[#5727e7] transition-colors">Home</a>
        <span>/</span>
        <span className="font-semibold text-[#0f172a]">Admissions</span>
      </div>
    </div>
  

      {/* Hero Header */}
      <section className="bg-[#0f172a] text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto space-y-4 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#5727e7] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            ADMISSIONS OPEN • LKG TO CLASS 12
          </span>
          <TextEffect as="h1" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-3xl md:text-5xl font-bold font-heading text-white">
            Online Admission Application
          </TextEffect>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base md:text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Join Kalaimagal Matriculation School, Rajiv Gandhi Nagar, Pattabiram. Apply online for State Board K-12 School (LKG to Class 12).
          </TextEffect>
        </div>
      </section>

      <section className="py-12 px-6 max-w-[1000px] mx-auto space-y-10">
        {/* 3-Step Easy Admission Process Card */}
        <div className="bg-[#0f172a] text-white p-8 md:p-10 rounded-3xl border border-[#334155] shadow-xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5727e7]">ADMISSION GUIDELINES</span>
          <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-white font-heading">3-Step Easy Admission Process</TextEffect>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#5727e7] text-white flex items-center justify-center font-bold text-sm shrink-0">
                1
              </div>
              <div>
                <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-sm text-white">Submit Online Form</TextEffect>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#94a3b8] mt-1 leading-relaxed">Fill in student and parent details on this portal.</TextEffect>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#5727e7] text-white flex items-center justify-center font-bold text-sm shrink-0">
                2
              </div>
              <div>
                <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-sm text-white">Campus Visit & Interaction</TextEffect>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#94a3b8] mt-1 leading-relaxed">Visit our admissions office for brief interaction and document review.</TextEffect>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#5727e7] text-white flex items-center justify-center font-bold text-sm shrink-0">
                3
              </div>
              <div>
                <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-sm text-white">Fee Payment & Confirmation</TextEffect>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#94a3b8] mt-1 leading-relaxed">Complete deposit and receive official admission confirmation pack.</TextEffect>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#334155] flex flex-wrap items-center justify-between gap-4 text-xs text-[#94a3b8]">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#5727e7]" />
              <span>Admission Helpdesk: <strong>+91 70106 24186</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span>Landline: <strong>044-2685 4186</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#5727e7]" />
              <span>Mon–Sat 8:30 AM to 4:30 PM</span>
            </div>
          </div>
        </div>

        {/* Required Documents Card */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#e2e8f0] shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-[#5727e7]" />
            <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-base text-[#0f172a] font-heading">Required Documents</TextEffect>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-xs text-[#475569]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
              <span>Original Birth Certificate (for LKG & Primary)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
              <span>Transfer Certificate (TC) from previous school</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
              <span>Marks Sheets & Board Certificates (for Classes 6 to 12)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
              <span>Copy of Aadhaar Card & 4 Passport Photos</span>
            </div>
          </div>
        </div>

        {/* Full Student Admission Form */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#e2e8f0] shadow-md space-y-8">
          <div>
            <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#0f172a] font-heading">Student Admission Form</TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#64748b] mt-1">Please provide accurate information for quick verification.</TextEffect>
          </div>

          {submitted ? (
            <div className="p-8 bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#16a34a] mx-auto" />
              <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#15803d]">Application Redirected to WhatsApp!</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#166534] max-w-md mx-auto">
                All details for <strong>${formData.studentName}</strong> have been formatted and opened directly in WhatsApp with <strong>+91 70106 24186</strong>. If WhatsApp did not open automatically, click the button below.
              </TextEffect>
              <div className="pt-2">
                <button 
                  onClick={() => {
                    const waMessage = `🎓 *STUDENT ADMISSION APPLICATION*\n*School Name:* Kalaimagal Matriculation School\n*Location:* Rajiv Gandhi Nagar, Pattabiram\n\n*1. STUDENT INFORMATION*\n• *Student Full Name:* ${formData.studentName}\n• *Date of Birth:* ${formData.dob}\n• *Gender:* ${formData.gender}\n• *Grade Applying For:* ${formData.grade}\n\n*2. PARENT / GUARDIAN DETAILS*\n• *Parent / Guardian Name:* ${formData.parentName} (${formData.relationship})\n• *Mobile / WhatsApp Number:* ${formData.mobile}\n• *Email Address:* ${formData.email || 'N/A'}\n• *Residential Address:* ${formData.address}\n• *Previous School:* ${formData.previousSchool || 'N/A'}\n• *Preferred Campus Visit Date:* ${formData.visitDate || 'N/A'}\n• *Enquiry Notes:* ${formData.notes || 'N/A'}`;
                    window.open("https://wa.me/917010624186?text=" + encodeURIComponent(waMessage), '_blank');
                  }}
                  className="px-6 py-3 bg-[#25D366] text-white font-bold text-xs rounded-xl shadow-sm hover:opacity-90 inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-0.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Open WhatsApp Chat Now
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleApply} className="space-y-8">
              {/* SECTION 1 */}
              <div className="space-y-4">
                <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs font-bold text-[#5727e7] uppercase tracking-wider border-b border-[#e2e8f0] pb-2">
                  1. STUDENT INFORMATION
                </TextEffect>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Student Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. K. Deepa" 
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Date of Birth *</label>
                    <input 
                      type="date" 
                      required
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Gender *</label>
                    <select 
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7] bg-white"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Grade Applying For *</label>
                    <select 
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7] bg-white"
                    >
                      <option value="Pre-KG">Pre-KG</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="Class 1">Class 1</option>
                      <option value="Class 2">Class 2</option>
                      <option value="Class 3">Class 3</option>
                      <option value="Class 4">Class 4</option>
                      <option value="Class 5">Class 5</option>
                      <option value="Class 6">Class 6</option>
                      <option value="Class 7">Class 7</option>
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10 (SSLC)">Class 10 (SSLC)</option>
                      <option value="Class 11 (HSC)">Class 11 (HSC)</option>
                      <option value="Class 12 (HSC)">Class 12 (HSC)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* SECTION 2 */}
              <div className="space-y-4">
                <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs font-bold text-[#5727e7] uppercase tracking-wider border-b border-[#e2e8f0] pb-2">
                  2. PARENT / GUARDIAN DETAILS
                </TextEffect>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Parent / Guardian Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. R. Kalaiselvan" 
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Relationship *</label>
                    <select 
                      value={formData.relationship}
                      onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7] bg-white"
                    >
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Guardian">Guardian</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Mobile / WhatsApp Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="10 digit mobile number" 
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="kalaimagal.pattabiram@gmail.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-1">Residential Address *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Balammal St, Rajiv Gandhi Nagar, Pattabiram 600072" 
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Previous School (if applicable)</label>
                    <input 
                      type="text" 
                      placeholder="Name of previous school" 
                      value={formData.previousSchool}
                      onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Preferred Date for Campus Visit</label>
                    <input 
                      type="date" 
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-1">Enquiry Notes / Special Requirements</label>
                  <textarea 
                    rows={3}
                    placeholder="Any additional details or questions regarding van transport, hostel, etc."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#cbd5e1] text-xs focus:outline-none focus:border-[#5727e7]"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-0.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Submit Application & Apply For Admission</span>
              </button>

              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[11px] text-center text-[#64748b]">
                Form submissions are automatically forwarded to Kalaimagal Matriculation School WhatsApp helpline (+91 70106 24186).
              </TextEffect>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}