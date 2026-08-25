"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Star, X } from "lucide-react";
import { FocusReveal } from "@/components/ui/focus-reveal";
import StarfieldButton from "@/components/ui/starfield-button";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="w-full bg-[#5727e7] text-white py-3 px-4 text-center relative z-50 text-sm font-medium flex items-center justify-center font-body">
      <span>✨ Admissions Open for New Academic Session for LKG through Class 12 • Kalaimagal Matriculation School</span>
      <button 
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#5727e7] flex items-center justify-center transition-colors text-xs"
        aria-label="Close"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

export function SpatialHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e5e7eb] font-body">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between text-sm text-[#030712]">
        <a href="/" className="hover:opacity-90 transition-opacity"><div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#5727e7] text-white flex items-center justify-center font-bold font-heading shadow-sm">
            K
          </div>
          <div>
            <span className="font-bold text-base text-[#030712] font-heading tracking-tight block">
              Kalaimagal Matriculation School
            </span>
            <span className="text-[11px] text-[#4b5563] block -mt-1 font-medium">Matriculation Campus</span>
          </div>
        </div></a>

        <nav className="hidden md:flex items-center gap-6 font-medium text-xs lg:text-sm">
          <a href="/about" className="whitespace-nowrap hover:text-[#5727e7] transition-colors">About Us</a>
          <a href="/academics" className="whitespace-nowrap hover:text-[#5727e7] transition-colors">Curriculum</a>
          <a href="/facilities" className="whitespace-nowrap hover:text-[#5727e7] transition-colors">Infrastructure</a>
          <a href="/gallery" className="whitespace-nowrap hover:text-[#5727e7] transition-colors">Highlights</a>
          <a href="/#testimonials" className="whitespace-nowrap hover:text-[#5727e7] transition-colors">Feedback</a>
          <a href="/contact" className="whitespace-nowrap hover:text-[#5727e7] transition-colors">Connect</a>
        </nav>

        <div className="flex items-center gap-3">
          <StarfieldButton
            label="Apply Now"
            link="/apply"
            padding="8px 20px 8px 20px"
            font={{ fontSize: 14, fontWeight: 700 }}
            colors={{ fill: "#5727e7", textColor: "#ffffff" }}
            stroke={{ color: "#8169ff", count: 1, size: 70, speed: 50 }}
            pixel={{ color: "#8169ff", size: 3, density: 50, brightness: 100 }}
          />
        </div>
      </div>
    </header>
  );
}

export function SpatialHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 180 };

    class Particle {
      x: number; y: number; directionX: number; directionY: number; size: number; color: string;
      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY; this.size = size; this.color = color;
      }
      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }
      update() {
        if (this.x > canvas!.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas!.height || this.y < 0) this.directionY = -this.directionY;
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= forceDirectionX * force * 4;
            this.y -= forceDirectionY * force * 4;
          }
        }
        this.x += this.directionX; this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particles = [];
      let numberOfParticles = Math.floor((canvas!.height * canvas!.width) / 11000);
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1.2;
        let x = (Math.random() * (canvas!.width - size * 4) + size * 2);
        let y = (Math.random() * (canvas!.height - size * 4) + size * 2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = 'rgba(87, 39, 231, 0.45)'; // SpatialChat Brand Violet accent
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      init();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
              + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
          if (distance < 14000) {
            opacityValue = 1 - (distance / 14000);
            ctx!.strokeStyle = `rgba(87, 39, 231, ${opacityValue * 0.25})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(particles[b].x, particles[b].y);
            ctx!.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (let i = 0; i < particles.length; i++) particles[i].update();
      connect();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    const handleMouseOut = () => { mouse.x = null; mouse.y = null; };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseOut);
    }

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseOut);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 + 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }
    }),
  };

  return (
    <section className="relative py-20 lg:py-28 px-6 bg-[#f9fafb] text-center border-b border-[#e5e7eb] overflow-hidden min-h-[580px] flex items-center justify-center">
      {/* Interactive Flow Canvas Animation Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full">
        {/* Centered Hero Display Stack */}
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div custom={0} variants={fadeUpVariants as any} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[8px] bg-[#f2f2ff] text-[#5727e7] border border-[#5727e7]/20 text-xs font-medium tracking-wide uppercase font-body shadow-spatial-subtle">
              Rajiv Gandhi Nagar, Pattabiram • Rating 4.8★
            </span>
          </motion.div>

          <FocusReveal 
            text="Building Character. Shaping Futures." 
            className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-[#030712] tracking-tight leading-[1.3] font-heading" 
          />

          <motion.p custom={2} variants={fadeUpVariants as any} initial="hidden" animate="visible"
            className="text-base sm:text-lg lg:text-[18px] text-[#4b5563] leading-[1.56] max-w-2xl mx-auto font-body"
          >
            A neighborhood school built on structure and genuine care — helping every student build steady, lasting habits from KG1 through Class 12.
          </motion.p>

          {/* Primary + Ghost CTA Pair */}
          <motion.div custom={3} variants={fadeUpVariants as any} initial="hidden" animate="visible" className="flex flex-wrap items-center justify-center gap-4 pt-4 font-body">
            <StarfieldButton
              label="Book Campus Tour"
              link="/apply"
              colors={{ fill: "#5727e7", textColor: "#ffffff" }}
              stroke={{ color: "#8169ff", count: 1, size: 96, speed: 50 }}
              pixel={{ color: "#8169ff", size: 4, density: 50, brightness: 100 }}
            />
            <a 
              href="/about" 
              className="px-6 py-3.5 rounded-[12px] border border-[#030712] text-[#030712] bg-white text-base font-medium hover:bg-[#f9fafb] transition-all inline-flex items-center gap-2 shadow-spatial-subtle"
            >
              <span>Explore Curriculum</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Proof Row */}
          <motion.div custom={4} variants={fadeUpVariants as any} initial="hidden" animate="visible" className="pt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[#4b5563] font-body">
            <div className="bg-white border border-[#e5e7eb] px-4 py-2 rounded-[8px] shadow-spatial-subtle flex items-center gap-2">
              <span className="font-semibold text-[#030712]">G2 / Capterra</span>
              <span className="text-[#5727e7] font-bold">4.9★ Rated</span>
            </div>
            <div className="bg-white border border-[#e5e7eb] px-4 py-2 rounded-[8px] shadow-spatial-subtle flex items-center gap-2">
              <div className="flex text-[#5727e7]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-medium text-[#030712]">Loved by 600+ Students & Parents</span>
            </div>
            <div className="bg-white border border-[#e5e7eb] px-4 py-2 rounded-[8px] shadow-spatial-subtle flex items-center gap-2">
              <span className="text-[#5727e7] font-bold">#1 School</span>
              <span className="text-[#4b5563]">in Pattabiram</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function LogoStripCard() {
  const logos = [
    { name: "State Board Approved", badge: "Tamil Nadu Board" },
    { name: "STEM Learning Initiative", badge: "Practical Science" },
    { name: "Digital Learning Portal", badge: "Smart Classrooms" },
    { name: "Sports & Fitness Hub", badge: "Athletics First" },
    { name: "Student Project Hub", badge: "Hands-on Learning" },
    { name: "Excellence Awards", badge: "Rank Holders" },
  ];

  return (
    <section className="bg-white py-10 border-b border-[#e5e7eb]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="p-4 rounded-[12px] border border-[#e5e7eb] bg-[#f9fafb] text-center shadow-spatial-subtle">
              <p className="font-bold text-xs text-[#030712] font-heading">{logo.name}</p>
              <p className="text-[11px] text-[#5727e7] font-medium font-body mt-1">{logo.badge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpatialFeatureSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#f9fafb]">
      <div className="max-w-[1200px] mx-auto space-y-20">
        {/* Section Title Header (Satoshi 40px/700 centered) */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-[8px] bg-[#f2f2ff] text-[#5727e7] border border-[#5727e7]/20 text-xs font-medium tracking-wide uppercase font-body mb-4">
            DISCIPLINED LEARNING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#030712] tracking-tight leading-[1.3] font-heading mb-4">
            Why Parents Choose Kalaimagal Matriculation School
          </h2>
          <p className="text-base sm:text-lg text-[#4b5563] leading-[1.56] font-body">
            Delivering structured, values-based Matriculation education with dedicated teachers, safe campus facilities, and clear academic guidance for every student.
          </p>
        </div>

        {/* Feature Block 1 (Two-Column Alternating Layout: text-left, screenshot-right, 48px gutter) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-[8px] border border-[#e5e7eb] bg-white text-[#5727e7] text-sm font-medium font-body shadow-spatial-subtle">
              Core Foundations
            </span>
            <h3 className="text-2xl lg:text-[32px] font-semibold text-[#030712] leading-[1.3] font-heading">
              Structured Routines & Individual Attention
            </h3>
            
            {/* Feature List Items with 8px violet disc markers */}
            <div className="space-y-4 font-body pt-2">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#5727e7] shrink-0 mt-2"></span>
                <div>
                  <h4 className="text-base font-semibold text-[#030712]">Structured Daily Routines</h4>
                  <p className="text-sm text-[#4b5563] leading-relaxed">Building clear study habits, focus, and self-discipline for young minds.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#5727e7] shrink-0 mt-2"></span>
                <div>
                  <h4 className="text-base font-semibold text-[#030712]">Matriculation Board Rigor</h4>
                  <p className="text-sm text-[#4b5563] leading-relaxed">Comprehensive State Board curriculum fostering core subject clarity in Science and Math.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#5727e7] shrink-0 mt-2"></span>
                <div>
                  <h4 className="text-base font-semibold text-[#030712]">Holistic Co-Curricular Wellbeing</h4>
                  <p className="text-sm text-[#4b5563] leading-relaxed">Nurturing physical health, outdoor games, teamwork, and confidence.</p>
                </div>
              </div>
            </div>

            {/* 3-Column Stat Block */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#e5e7eb]">
              <div>
                <p className="text-2xl lg:text-[24px] font-bold text-[#030712] font-heading">100%</p>
                <p className="text-xs lg:text-[14px] text-[#4b5563] font-body">Pass Rate</p>
              </div>
              <div>
                <p className="text-2xl lg:text-[24px] font-bold text-[#030712] font-heading">25+ Yrs</p>
                <p className="text-xs lg:text-[14px] text-[#4b5563] font-body">Trust History</p>
              </div>
              <div>
                <p className="text-2xl lg:text-[24px] font-bold text-[#030712] font-heading">1:15</p>
                <p className="text-xs lg:text-[14px] text-[#4b5563] font-body">Teacher Ratio</p>
              </div>
            </div>

            <div className="pt-2 font-body">
              <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-[#5727e7] text-white font-medium shadow-spatial-subtle hover:bg-[#451cc4] transition-all text-sm">
                <span>Book Campus Visit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column Product Screenshot Card (16px radius, shadow-spatial-xl) */}
          <div className="rounded-[16px] bg-white border border-[#e5e7eb] overflow-hidden shadow-spatial-xl p-3">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80" 
              alt="Classroom Learning at Kalaimagal Matriculation School" 
              className="w-full h-[360px] object-cover rounded-[12px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
