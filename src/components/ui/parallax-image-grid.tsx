'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

interface ParallaxImageGridProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  images: ParallaxImageItem[];
  themeBg?: string;
  borderColor?: string;
  badgeBg?: string;
  badgeTextStyle?: string;
  primaryText?: string;
}

export function ParallaxImageGrid({
  title = "Campus Life & Infrastructure Showcase",
  subtitle = "Immerse yourself in our state-of-the-art academic labs, sports arenas, and vibrant student community.",
  badgeText = "GALLERY EXCELLENCE",
  images,
  themeBg = "bg-slate-900 text-white",
  borderColor = "border-slate-800",
  badgeBg = "bg-blue-500/20",
  badgeTextStyle = "text-blue-400 border-blue-500/30",
  primaryText = "text-white",
}: ParallaxImageGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Framer Motion useScroll offset: ["start end", "end start"]
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transformations per column
  const yCol1 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const yCol3 = useTransform(scrollYProgress, [0, 1], [50, -300]);

  // Divide images into 3 columns
  const col1Images = images.slice(0, Math.ceil(images.length / 3));
  const col2Images = images.slice(Math.ceil(images.length / 3), Math.ceil((images.length * 2) / 3));
  const col3Images = images.slice(Math.ceil((images.length * 2) / 3));

  return (
    <section 
      ref={containerRef}
      className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden ${themeBg} ${borderColor} border-t border-b`}
    >
      {/* Top Gradient Masking Layer */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-slate-950/80 to-transparent z-10 pointer-events-none" />
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-16 relative z-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${badgeBg} ${badgeTextStyle}`}
        >
          {badgeText}
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={`text-3xl sm:text-5xl font-extrabold font-serif ${primaryText} tracking-tight`}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-medium"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* 3D Perspective Container */}
      <div className="max-w-7xl mx-auto style-perspective" style={{ perspective: "1200px" }}>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start transform-gpu"
          style={{ transform: "rotateX(10deg) rotateY(-3deg)" }}
        >
          {/* Column 1 (Left) */}
          <motion.div style={{ y: yCol1 }} className="space-y-6 sm:space-y-8">
            {col1Images.map((img) => (
              <ParallaxCard key={img.id} item={img} />
            ))}
          </motion.div>

          {/* Column 2 (Center) */}
          <motion.div style={{ y: yCol2 }} className="space-y-6 sm:space-y-8">
            {col2Images.map((img) => (
              <ParallaxCard key={img.id} item={img} />
            ))}
          </motion.div>

          {/* Column 3 (Right) */}
          <motion.div style={{ y: yCol3 }} className="hidden lg:block space-y-6 sm:space-y-8">
            {col3Images.map((img) => (
              <ParallaxCard key={img.id} item={img} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Masking Layer */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-950/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
}

function ParallaxCard({ item }: { item: ParallaxImageItem }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-slate-800/60 backdrop-blur-sm cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
        
        <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
          <h4 className="font-bold text-sm sm:text-base font-serif group-hover:text-amber-400 transition-colors">
            {item.title}
          </h4>
          <p className="text-xs text-slate-300 line-clamp-1 font-medium">
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
