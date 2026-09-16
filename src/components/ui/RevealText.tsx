import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  /** Rendered element. Headings should pass the correct level for hierarchy. */
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  /** Split on line breaks rather than words for large editorial statements. */
  byLine?: boolean;
  id?: string;
}

/**
 * Progressive text reveal. Each word (or line) rises into place behind a mask.
 * Falls back to a simple fade when reduced motion is requested.
 */
export function RevealText({
  text,
  className,
  as = 'h2',
  delay = 0,
  byLine = false,
  id
}: RevealTextProps) {
  const reduce = useReducedMotion();
  const Tag = as;
  const units = byLine ? text.split('\n') : text.split(' ');

  if (reduce) {
    return (
      <Tag className={className} id={id}>
        {byLine ?
        units.map((line, i) =>
        <span key={i} className="block">
                {line}
              </span>
        ) :
        text}
      </Tag>);

  }

  return (
    <Tag className={className} id={id}>
      {units.map((unit, i) =>
      <span
        key={`${unit}-${i}`}
        className={byLine ? 'block overflow-hidden' : 'inline-block overflow-hidden align-bottom'}>
        
          <motion.span
          className="inline-block"
          initial={{ y: '110%' }}
          whileInView={{ y: '0%' }}
          viewport={{ once: true, margin: '-10% 0px -5% 0px' }}
          transition={{
            duration: 0.9,
            delay: delay + i * (byLine ? 0.09 : 0.035),
            ease: [0.23, 1, 0.32, 1]
          }}>
          
            {unit}
            {!byLine && i < units.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      )}
    </Tag>);

}