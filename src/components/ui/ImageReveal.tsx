import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Aspect ratio utility, e.g. "aspect-[3/4]". */
  ratio?: string;
  caption?: string;
  priority?: boolean;
  zoomOnHover?: boolean;
}

/**
 * Photography with a clip-path style reveal: the frame opens while the image
 * settles back from a slight scale. Optional editorial caption below.
 */
export function ImageReveal({
  src,
  alt,
  className = '',
  imgClassName = '',
  ratio = 'aspect-[4/5]',
  caption,
  priority = false,
  zoomOnHover = false
}: ImageRevealProps) {
  const reduce = useReducedMotion();

  return (
    <figure className={className}>
      <div className={`relative overflow-hidden bg-sand ${ratio}`}>
        <motion.div
          className="absolute inset-0"
          initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
          whileInView={reduce ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: reduce ? 0.2 : 1.05, ease: [0.23, 1, 0.32, 1] }}>
          
          <motion.img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className={`h-full w-full object-cover ${
            zoomOnHover ? 'transition-transform duration-500 ease-calm group-hover:scale-[1.04]' : ''} ${
            imgClassName}`}
            initial={reduce ? undefined : { scale: 1.08 }}
            whileInView={reduce ? undefined : { scale: 1 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] }} />
          
        </motion.div>
      </div>
      {caption ?
      <figcaption className="mt-3 flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
          <span className="h-px w-6 bg-ink/20" aria-hidden="true" />
          {caption}
        </figcaption> :
      null}
    </figure>);

}