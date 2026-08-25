'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export type TextEffectPreset = 'fade-in-blur' | 'fade' | 'slide' | 'scale';
export type TextEffectPer = 'char' | 'word' | 'line';

export interface TextEffectProps extends HTMLMotionProps<'span'> {
  children: React.ReactNode;
  preset?: TextEffectPreset;
  per?: TextEffectPer;
  speedReveal?: number;
  speedSegment?: number;
  delay?: number;
  as?: React.ElementType;
  className?: string;
  segmentWrapperClassName?: string;
  variants?: any;
  onAnimationComplete?: () => void;
  trigger?: boolean;
}

const defaultPresets: Record<TextEffectPreset, { container: any; item: any }> = {
  'fade-in-blur': {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    },
    item: {
      hidden: { opacity: 0, filter: 'blur(10px)', y: 8 },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
          duration: 0.4,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      },
    },
  },
  fade: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
      },
    },
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } },
    },
  },
  slide: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    },
  },
  scale: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
      },
    },
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'backOut' } },
    },
  },
};

export function TextEffect({
  children,
  preset = 'fade-in-blur',
  per = 'word',
  speedReveal = 1.1,
  speedSegment = 0.3,
  delay = 0,
  as: Component = 'span',
  className = '',
  segmentWrapperClassName = '',
  variants,
  onAnimationComplete,
  trigger = true,
  ...props
}: TextEffectProps) {
  const textContent = typeof children === 'string' || typeof children === 'number' ? String(children) : null;

  const createFn = (motion as any).create;
  const MotionComponent = typeof Component === 'string'
    ? ((motion as any)[Component] || (createFn ? createFn(Component) : motion.span))
    : (createFn ? createFn(Component) : motion.span);

  if (!textContent) {
    return (
      <MotionComponent
        className={className}
        initial="hidden"
        whileInView={trigger ? "visible" : "hidden"}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay, duration: speedReveal }}
        {...(props as any)}
      >
        {children}
      </MotionComponent>
    );
  }

  let segments: string[] = [];
  if (per === 'char') {
    segments = Array.from(textContent);
  } else if (per === 'line') {
    segments = textContent.split('\n');
  } else {
    segments = textContent.split(/(\s+)/);
  }

  const basePreset = defaultPresets[preset] || defaultPresets['fade-in-blur'];

  const containerVariants: any = (variants && (variants.container || variants.hidden))
    ? (variants.container || variants)
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.04 * speedReveal,
            delayChildren: delay,
          },
        },
      };

  const itemVariants: any = (variants && variants.item)
    ? variants.item
    : {
        hidden: basePreset.item.hidden,
        visible: {
          ...basePreset.item.visible,
          transition: {
            ...(basePreset.item.visible as any)?.transition,
            duration: (basePreset.item.visible as any)?.transition?.duration
              ? (basePreset.item.visible as any).transition.duration * speedSegment
              : speedSegment,
          },
        },
      };

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView={trigger ? 'visible' : 'hidden'}
      viewport={{ once: true, margin: '-40px' }}
      variants={containerVariants}
      onAnimationComplete={onAnimationComplete}
      {...(props as any)}
    >
      {segments.map((segment, index) => {
        if (per === 'word' && /^\s+$/.test(segment)) {
          return <span key={index}>{segment}</span>;
        }
        return (
          <motion.span
            key={index}
            variants={itemVariants}
            className={'inline-block ' + segmentWrapperClassName}
            style={{ willChange: 'transform, opacity, filter' }}
          >
            {segment}
          </motion.span>
        );
      })}
    </MotionComponent>
  );
}
