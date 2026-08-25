"use client";

import { BreadcrumbSchema } from '@/components/ui/breadcrumb-schema';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import React, { useState } from 'react';
import { SpatialHeader } from "@/components/ui/spatial-chat-hero";
import { Footer } from "@/components/ui/footer-section";
import { Image as ImageIcon, X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80", category: "Academics", title: "Interactive Smart Classroom" },
    { url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80", category: "Sports", title: "Annual Sports Meet & Athletics" },
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80", category: "Events", title: "Science & Innovation Exhibition" },
    { url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80", category: "Campus", title: "Central Library Reading Session" },
    { url: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80", category: "Kindergarten", title: "Kindergarten Play & Activity Room" },
    { url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", category: "Academics", title: "Computer Lab Practical Class" },
    { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80", category: "Academics", title: "Chemistry Science Practical" },
    { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80", category: "Events", title: "Annual Cultural Day Performances" },
  ];

  const categories = ['All', 'Academics', 'Sports', 'Events', 'Campus', 'Kindergarten'];

  const filteredPhotos = activeCategory === 'All'
    ? photos
    : photos.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#f7f8f9] text-[#475569] antialiased font-body">
      <SpatialHeader />
      <BreadcrumbSchema pageName="Gallery" pageUrl="https://kalaimagalmatric.edu.in/gallery" />
      
    <div className="bg-[#ffffff] border-b border-[#e2e8f0] py-3 px-6 text-xs text-[#64748b]">
      <div className="max-w-[1200px] mx-auto flex items-center gap-2">
        <a href="/" className="hover:text-[#5727e7] transition-colors">Home</a>
        <span>/</span>
        <span className="font-semibold text-[#0f172a]">Photo Gallery</span>
      </div>
    </div>
  

      {/* Hero Header */}
      <section className="bg-[#0f172a] text-white py-16 px-6 text-center">
        <div className="max-w-[1200px] mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#5727e7] text-white text-xs font-semibold uppercase tracking-wider">
            PHOTO GALLERY
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-white">
            Campus Life & Event Moments
          </h1>
          <p className="text-base md:text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Explore photos of our academic spaces, sports meets, annual celebrations, and student activities at Kalaimagal Matriculation School.
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8 px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#5727e7] text-white shadow-sm'
                  : 'bg-white text-[#475569] border border-[#e2e8f0] hover:bg-[#f8fafc]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(photo.url)}
              className="group relative bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer"
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#5727e7] px-2 py-0.5 rounded w-max mb-1">{photo.category}</span>
                <p className="font-bold text-xs">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={selectedImage} alt="Expanded view" className="w-full max-h-[80vh] object-contain" />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}