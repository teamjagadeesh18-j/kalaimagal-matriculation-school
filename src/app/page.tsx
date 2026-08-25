"use client";
import { TextEffect } from '@/components/core/text-effect';

import SchoolMessageSection from "@/components/ui/school-message-section";

import { ScrollVelocityDemo } from "@/components/ui/scroll-velocity-demo";

import { InfiniteRibbon } from "@/components/ui/infinite-ribbon";
import { Footer } from "@/components/ui/footer-section";
import React from "react";
import { AnnouncementBar, SpatialHeader, SpatialHero, LogoStripCard, SpatialFeatureSection } from "@/components/ui/spatial-chat-hero";
import AcademicStructure from "@/components/ui/academic-structure";
import { ImagesScrollingAnimation } from "@/components/ui/images-scrolling-animation";
import TestimonialsSection from "@/components/ui/community-testimonial";
import ConnectSection from "@/components/ui/connect-section";
import FAQs from "@/components/ui/text-reveal-faqs";
import HowItWorksOrbit from "@/components/ui/how-it-works-orbit";

export default function Home() {
  const galleryItems = [
    { title: "Classroom Learning at Kalaimagal Matriculation School", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80" },
    { title: "Annual Day Celebrations at Kalaimagal Matriculation School", src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80" },
    { title: "Sports Activity at Kalaimagal Matriculation School", src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80" },
    { title: "Library Time at Kalaimagal Matriculation School", src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80" },
    { title: "Student Life at Kalaimagal Matriculation School", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" },
    { title: "Campus Grounds at Kalaimagal Matriculation School", src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" },
  ];

  const communityTestimonialsData = {
  "title": "Parent & Community Reviews",
  "subtitle": "Real experiences shared by parents and alumni of Kalaimagal Matriculation School, Pattabiram",
  "rows": [
    {
      "id": "row1",
      "speed": "45s",
      "direction": "left",
      "testimonials": [
        {
          "id": "t1",
          "quote": "The structured discipline at Kalaimagal helped my son form strong daily study habits. His Class 10 board scores exceeded our expectations!",
          "authorName": "G. Mohan",
          "authorTitle": "Parent of Class 10 Student"
        },
        {
          "id": "t2",
          "quote": "Teachers in Pattabiram know each child personally. The balance of State Board academics and outdoor sports ground is fantastic.",
          "authorName": "Priya S.",
          "authorTitle": "Primary School Parent"
        },
        {
          "id": "t3",
          "quote": "A trustworthy neighborhood institution in Rajiv Gandhi Nagar. Clean campus, safe environment, and clear communication.",
          "authorName": "Syed Ibrahim",
          "authorTitle": "Parent of Class 8 Student"
        }
      ]
    },
    {
      "id": "row2",
      "speed": "35s",
      "direction": "right",
      "testimonials": [
        {
          "id": "t4",
          "quote": "The values and exam focus I received at Kalaimagal gave me a massive head start when I entered engineering college.",
          "authorName": "R. Sundararajan",
          "authorTitle": "Alumnus (Batch 2018)"
        },
        {
          "id": "t5",
          "quote": "Affordable fee structure with high academic standards. The principal and coordinators are always accessible to parents.",
          "authorName": "Jennifer A.",
          "authorTitle": "Parent Association Member"
        },
        {
          "id": "t6",
          "quote": "My daughter loves participating in annual day programs and sports competitions. It's a great place for overall development.",
          "authorName": "K. Vetrivel",
          "authorTitle": "High School Parent"
        }
      ]
    },
    {
      "id": "row3",
      "speed": "50s",
      "direction": "left",
      "testimonials": [
        {
          "id": "t7",
          "quote": "Regular parent-teacher meetings ensure we are always updated on academic progress. Highly recommended school in Pattabiram.",
          "authorName": "Ayesha Begum",
          "authorTitle": "Local Parent"
        },
        {
          "id": "t8",
          "quote": "Patience shown by primary teachers makes foundation years very comfortable for kids transitioning into formal schooling.",
          "authorName": "T. Loganathan",
          "authorTitle": "Alumnus & Business Owner"
        },
        {
          "id": "t9",
          "quote": "Strong emphasis on moral values, physical wellbeing, and academic consistency. Proud to have both my children here.",
          "authorName": "P. Chandran",
          "authorTitle": "Sports Parent"
        }
      ]
    }
  ]
};

  return (
    <main className="min-h-screen bg-[#f9fafb] text-[#4b5563] antialiased selection:bg-[#5727e7] selection:text-white font-body">
      {/* SpatialChat Navigation Bar */}
      <SpatialHeader />

      {/* Upper-Middle Hero Velocity Ribbon */}
      
      {/* SpatialChat Animated Interactive Hero (Particle Flow Canvas + Framer Motion Fade Up) */}
      <SpatialHero />
      {/* Logo Strip Card */}
                              
      <LogoStripCard />
      <InfiniteRibbon duration={35} className="bg-white text-[#030712] border-y border-[#e5e7eb] py-4 text-sm sm:text-base font-semibold tracking-wide font-body shadow-sm">
        <span className="text-[#5727e7]">✦</span> Academic Excellence
        <span className="text-[#5727e7]">✦</span> State Board Rigor
        <span className="text-[#5727e7]">✦</span> Dedicated Faculty
        <span className="text-[#5727e7]">✦</span> Holistic Student Development
        <span className="text-[#5727e7]">✦</span> Safe & Caring Campus
        <span className="text-[#5727e7]">✦</span> Admissions Open
      </InfiniteRibbon>
      

      {/* Alternating Feature Block */}
      <SpatialFeatureSection />

      {/* Clean Frameless Middle Image Velocity Strip */}
      <ScrollVelocityDemo />

      {/* Academic Structure Section (SpatialChat 16px cards + #5727e7 highlights) */}
      <AcademicStructure
        title="Academic Journey"
        subtitle="From Early Learning to Higher Secondary"
        description="A well-structured learning journey designed to support students at every stage of their academic and personal development."
        cards={[
          {
            tag: "LKG & UKG",
            title: "Early Years",
            description: "Activity-based learning, phonics, storytelling, creative play, and social development in a joyful environment.",
            buttonText: "Learn More"
          },
          {
            tag: "Classes 1 to 5",
            title: "Primary Education",
            description: "Building strong foundations in languages, mathematics, science, environmental awareness, and digital learning.",
            buttonText: "Learn More"
          },
          {
            tag: "Classes 6 to 8",
            title: "Middle School",
            description: "Developing analytical thinking through science, mathematics, technology, languages, and practical activities.",
            buttonText: "Learn More"
          },
          {
            tag: "Classes 9 & 10",
            title: "Secondary Education",
            description: "Focused academic preparation, concept-based learning, regular assessments, board exam support, and career awareness.",
            buttonText: "Learn More"
          },
          {
            tag: "Classes 11 & 12",
            title: "Higher Secondary",
            description: "Specialized academic streams with expert guidance to prepare students for higher education and future careers.",
            buttonText: "Explore Academic Streams",
            isHighlighted: true
          }
        ]}
      />

      {/* Interactive Orbit How-It-Works Section */}
      <HowItWorksOrbit
        title="How Admissions & Learning Connect"
        subtitle="Every step at Kalaimagal Matriculation School connects back to our core educational mission."
        steps={[
          { title: "Campus Enquiry", description: "Connect with admissions & visit our Pattabiram campus.", color: "#5727e7" },
          { title: "Submit Application", description: "Fill out registration form with student records.", color: "#3b82f6" },
          { title: "Student Interaction", description: "Friendly assessment to evaluate readiness & placement.", color: "#a855f7" },
          { title: "Fee & Enrollment", description: "Complete admission formalities and receive confirmation.", color: "#f97316" },
          { title: "Academic Journey", description: "Join Kalaimagal and begin a path to excellence!", color: "#10b981" },
        ]}
      />

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-[#f9fafb] border-t border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-block px-3.5 py-1 rounded-[8px] bg-[#f2f2ff] text-[#5727e7] border border-[#5727e7]/20 text-xs font-medium tracking-wide uppercase font-body mb-3">
              CAMPUS GALLERY
            </span>
            <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#030712] leading-[1.3] font-heading mb-4">
              Explore Life at Kalaimagal
            </TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#4b5563] text-base sm:text-lg leading-[1.56] font-body">
              A glance at campus life, activities, and sports events at Kalaimagal Matriculation School.
            </TextEffect>
          </div>

          <ImagesScrollingAnimation projects={galleryItems} />
        </div>
      </section>

      {/* Testimonials Section (Restored & SpatialChat styled) */}
      <section id="testimonials" className="py-20 bg-white border-t border-[#e5e7eb]">
        <TestimonialsSection data={communityTestimonialsData} />
      </section>

      {/* Frequently Asked Questions Section */}
      <FAQs />

      {/* Connect & Contact Section */}
      <ConnectSection />

      {/* SpatialChat Clean Footer */}
      {/* Leadership Message to Parents & Students */}
      <SchoolMessageSection />

      <Footer />
      </main>
  );
}