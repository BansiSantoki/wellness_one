import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lede?: string;
  image: string;
  alt: string;
  /** 'panel' places a tall image beside the title; 'band' uses a full-width cinematic band. */
  variant?: 'panel' | 'band';
  meta?: {label: string;value: string;}[];
}

/**
 * Inner-page opener. Two distinct compositions so pages do not all share the
 * same masthead: an asymmetric split panel, or a dark cinematic band.
 */
export function PageHero({ eyebrow, title, lede, image, alt, variant = 'panel', meta }: PageHeroProps) {
  const reduce = useReducedMotion();

  if (variant === 'band') {
    return (
      <header className="relative isolate flex min-h-[72vh] items-end overflow-hidden bg-pine pb-14 pt-32 sm:min-h-[78vh] sm:pb-20 sm:pt-40">
        <motion.img
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.23, 1, 0.32, 1] }} />
        
        <div className="absolute inset-0 bg-pine/65" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-edge px-5 sm:px-8 lg:px-14">
          <SectionLabel tone="light">{eyebrow}</SectionLabel>
          <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] font-normal leading-[1.05] text-ivory sm:text-[3.6rem] lg:text-[4.6rem]">
            {title}
          </h1>
          {lede ?
          <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-ivory/70">{lede}</p> :
          null}
          {meta ?
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ivory/15 pt-8 sm:grid-cols-4">
              {meta.map((m) =>
            <div key={m.label}>
                  <dt className="text-[10px] uppercase tracking-label text-ivory/50">{m.label}</dt>
                  <dd className="mt-2 font-display text-lg text-ivory">{m.value}</dd>
                </div>
            )}
            </dl> :
          null}
        </div>
      </header>);

  }

  return (
    <header className="bg-ivory pt-28 sm:pt-36">
      <div className="mx-auto grid max-w-edge grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-14">
        <div className="lg:col-span-7 lg:pt-10">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="mt-6 font-display text-[2.5rem] font-normal leading-[1.06] text-ink sm:text-[3.4rem] lg:text-[4.2rem]">
            {title}
          </h1>
          {lede ?
          <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-ink/65">{lede}</p> :
          null}
          {meta ?
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink/12 pt-8 sm:grid-cols-2">
              {meta.map((m) =>
            <div key={m.label}>
                  <dt className="text-[10px] uppercase tracking-label text-ink/45">{m.label}</dt>
                  <dd className="mt-2 font-display text-lg text-ink">{m.value}</dd>
                </div>
            )}
            </dl> :
          null}
        </div>
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden bg-sand">
            <motion.img
              src={image}
              alt={alt}
              className="aspect-[4/5] w-full object-cover lg:aspect-[3/4]"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }} />
            
          </div>
        </div>
      </div>
    </header>);

}