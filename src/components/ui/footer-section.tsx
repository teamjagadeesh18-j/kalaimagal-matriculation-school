'use client';
import { TextEffect } from '@/components/core/text-effect';

import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, GraduationCap } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Academics',
    links: [
      { title: 'Primary Stage', href: '/academics' },
      { title: 'Middle School', href: '/academics' },
      { title: 'High School Board', href: '/academics' },
      { title: 'Hr. Sec. Streams', href: '/academics' },
    ],
  },
  {
    label: 'Campus Life',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Campus Facilities', href: '/facilities' },
      { title: 'Photo Gallery', href: '/gallery' },
      { title: 'Parent Reviews', href: '/#testimonials' },
    ],
  },
  {
    label: 'Admissions',
    links: [
      { title: 'Admission Inquiry', href: '/contact' },
      { title: 'Curriculum Guide', href: '/academics' },
      { title: 'Campus Location', href: '/contact' },
      { title: 'Contact Office', href: '/contact' },
    ],
  },
  {
    label: 'Social Links',
    links: [
      { title: 'Facebook', href: '#', icon: FacebookIcon },
      { title: 'Instagram', href: '#', icon: InstagramIcon },
      { title: 'Youtube', href: '#', icon: YoutubeIcon },
      { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-3xl border-t border-[#e5e7eb] bg-[#f9fafb] px-6 py-12 lg:py-16 font-body text-[#4b5563]">
      <div className="bg-[#5727e7]/30 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#5727e7] text-white shadow-sm">
              <GraduationCap className="size-6" />
            </div>
            <div>
              <span className="font-bold text-base md:text-lg text-[#030712] font-heading tracking-tight block">
                Kalaimagal Matriculation School
              </span>
              <span className="text-xs text-[#4b5563] font-medium">Matriculation Campus</span>
            </div>
          </div>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs md:text-sm text-[#4b5563] leading-relaxed max-w-sm">
            Building Character. Shaping Futures. Delivering structured, values-based Matriculation education with dedicated teachers and safe campus facilities.
          </TextEffect>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-[#4b5563] mt-4">
            © {new Date().getFullYear()} Kalaimagal Matriculation School. All rights reserved.
          </TextEffect>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-8 md:mb-0">
                <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs font-bold uppercase tracking-wider text-[#030712] font-heading">
                  {section.label}
                </TextEffect>
                <ul className="mt-4 space-y-2.5 text-xs md:text-sm text-[#4b5563]">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-[#5727e7] inline-flex items-center transition-all duration-200"
                      >
                        {link.icon && <link.icon className="me-1.5 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
