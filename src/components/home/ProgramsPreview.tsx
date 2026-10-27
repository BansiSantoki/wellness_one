import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { programs } from '../../data/programs';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { TextLink } from '../ui/ArrowLink';

/**
 * Compact, modern programs preview with balanced spacing.
 */
export function ProgramsPreview() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = programs[active];

  return (
    <section aria-labelledby="programs-preview-heading" className="bg-cream">
      <div className="mx-auto max-w-edge px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionLabel index="vi">
              {t('home.programsPreview.eyebrow', { defaultValue: 'Programs' })}
            </SectionLabel>
            <RevealText
              as="h2"
              id="programs-preview-heading"
              byLine
              text={t('home.programsPreview.heading', { defaultValue: 'Choose the Length\nof Your Journey' })}
              className="mt-3 font-display text-[1.8rem] font-light leading-[1.1] text-ink sm:text-[2.4rem]"
            />

            <Reveal delay={0.06}>
              <p className="mt-3 max-w-sm text-xs sm:text-sm leading-relaxed text-ink/65">
                {t('home.programsPreview.description', { defaultValue: 'A single consultation, a restorative weekend, or a full twenty-one day Panchakarma journey. What is appropriate is decided with you after assessment.' })}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="relative mt-6 hidden overflow-hidden bg-sand lg:block shadow-xs">
              <div className="aspect-[16/10] w-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.slug}
                    src={current.image}
                    alt={current.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  />
                </AnimatePresence>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-4">
            <ul className="border-t border-ink/12">
              {programs.map((program, i) => {
                const tr = (t(`programsData.${program.slug}`, { returnObjects: true }) as {
                  name?: string;
                  duration?: string;
                  price?: string;
                  priceLabel?: string;
                }) || {};

                const name = tr.name || program.name;
                const duration = tr.duration || program.duration;
                const price = tr.price || program.price;
                const priceLabel = tr.priceLabel || program.priceLabel;

                return (
                  <li key={program.slug} className="border-b border-ink/12">
                    <Link
                      to="/programs"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="group flex items-baseline justify-between gap-4 py-3.5 sm:py-4.5"
                    >
                      <span className="flex items-baseline gap-3 sm:gap-5">
                        <span className="font-display text-xs italic text-moss">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>
                          <span className="block font-display text-[1.25rem] font-light leading-snug text-ink transition-opacity duration-300 group-hover:opacity-70 sm:text-[1.55rem]">
                            {name}
                          </span>
                          <span className="mt-0.5 block text-[9.5px] uppercase tracking-label text-ink/40">
                            {duration}
                          </span>
                        </span>
                      </span>
                      <span className="shrink-0 text-right">
                        {priceLabel ? (
                          <span className="block text-[8.5px] uppercase tracking-label text-ink/40">
                            {priceLabel}
                          </span>
                        ) : null}
                        <span className="font-display text-[1.1rem] text-ink sm:text-[1.3rem]">
                          {price}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Reveal delay={0.08} className="mt-6">
              <TextLink to="/programs">
                {t('home.programsPreview.exploreCta', { defaultValue: 'Explore Programs' })}
              </TextLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}