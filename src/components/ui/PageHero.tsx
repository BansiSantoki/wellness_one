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
  meta?: { label: string; value: string }[];
}

/**
 * Compact, modern inner-page opener with balanced spacing.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  alt,
  variant = 'panel',
  meta
}: PageHeroProps) {
  const reduce = useReducedMotion();

  if (variant === 'band') {
    return (
      <header className="relative isolate flex min-h-[35vh] sm:min-h-[40vh] items-end overflow-hidden bg-pine pb-6 pt-20 sm:pb-8 sm:pt-24">
        <motion.img
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
        />

        <div className="absolute inset-0 bg-pine/65" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-edge px-5 sm:px-8 lg:px-14">
          <SectionLabel tone="light">{eyebrow}</SectionLabel>
          <h1 className="mt-3 max-w-4xl font-display text-[2.2rem] font-normal leading-[1.08] text-ivory sm:text-[3.2rem] lg:text-[3.8rem]">
            {title}
          </h1>
          {lede ? (
            <p className="mt-3 max-w-xl text-[0.92rem] leading-relaxed text-ivory/70">{lede}</p>
          ) : null}
          {meta ? (
            <dl className="mt-5 sm:mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ivory/15 pt-4 sm:grid-cols-4 sm:pt-5">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="text-[10px] uppercase tracking-label text-ivory/50">{m.label}</dt>
                  <dd className="mt-1 font-display text-base sm:text-lg text-ivory">{m.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </header>
    );
  }

  return (
    <header className="bg-ivory pt-16 sm:pt-20 pb-3 sm:pb-4">
      <div className="mx-auto grid max-w-edge grid-cols-1 items-center gap-6 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-14">
        <div className="lg:col-span-7 lg:pt-2">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="mt-3 font-display text-[2.2rem] font-normal leading-[1.08] text-ink sm:text-[3rem] lg:text-[3.6rem]">
            {title}
          </h1>
          {lede ? (
            <p className="mt-3 max-w-xl text-[0.92rem] leading-relaxed text-ink/65">{lede}</p>
          ) : null}
          {meta ? (
            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink/12 pt-4 sm:grid-cols-2">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="text-[10px] uppercase tracking-label text-ink/45">{m.label}</dt>
                  <dd className="mt-1 font-display text-base sm:text-lg text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden bg-sand shadow-xs">
            <motion.img
              src={image}
              alt={alt}
              className="aspect-[16/10] sm:aspect-[4/3] lg:aspect-[3/2] w-full object-cover"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, ease: [0.23, 1, 0.32, 1] }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}