'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}) {
  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 28 };
      case 'down': return { opacity: 0, y: -28 };
      case 'left': return { opacity: 0, x: 28 };
      case 'right': return { opacity: 0, x: -28 };
      default: return { opacity: 0, y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: delay * 0.001 }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealStagger({
  children,
  className = '',
  staggerMs = 80,
}: {
  children: React.ReactNode[];
  className?: string;
  staggerMs?: number;
}) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, idx) => (
        <ScrollReveal delay={idx * staggerMs}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
