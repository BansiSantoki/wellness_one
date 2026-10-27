import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'figure' | 'article' | 'span';
}

/** Fade + slight vertical movement, triggered once as the element enters view. */
export function Reveal({ children, delay = 0, y = 14, className, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -20px 0px' }}
      transition={{
        duration: reduce ? 0.2 : 0.45,
        delay: reduce ? 0 : delay,
        ease: [0.23, 1, 0.32, 1]
      }}>
      {children}
    </MotionTag>
  );
}