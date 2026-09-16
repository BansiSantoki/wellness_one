import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { programs } from '../../data/programs';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { TextLink } from '../ui/ArrowLink';

/**
 * Programs on the homepage read as an index: hovering or focusing a row
 * changes one large photograph. Full detail lives on the Programs page.
 */
export function ProgramsPreview() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = programs[active];

  return (
    <section aria-labelledby="programs-preview-heading" className="bg-cream">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionLabel index="vi">Programs</SectionLabel>
            <RevealText
              as="h2"
              id="programs-preview-heading"
              byLine
              text={'Choose the Length\nof Your Journey'}
              className="mt-6 font-display text-[2.1rem] font-light leading-[1.08] text-ink sm:text-[2.9rem]" />
            
            <Reveal delay={0.08}>
              <p className="mt-7 max-w-sm text-[0.95rem] leading-relaxed text-ink/65">
                A single consultation, a restorative weekend, or a full twenty-one day Panchakarma
                journey. What is appropriate is decided with you after assessment.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="relative mt-10 hidden overflow-hidden bg-sand lg:block">
              <div className="aspect-[4/3] w-full">
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
                    transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }} />
                  
                </AnimatePresence>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <ul className="border-t border-ink/12">
              {programs.map((program, i) =>
              <li key={program.slug} className="border-b border-ink/12">
                  <Link
                  to="/programs"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex items-baseline justify-between gap-6 py-6 sm:py-8">
                  
                    <span className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-display text-xs italic text-moss">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>
                        <span className="block font-display text-[1.5rem] font-light leading-snug text-ink transition-opacity duration-300 group-hover:opacity-70 sm:text-[2rem]">
                          {program.name}
                        </span>
                        <span className="mt-1.5 block text-[10px] uppercase tracking-label text-ink/40">
                          {program.duration}
                        </span>
                      </span>
                    </span>
                    <span className="shrink-0 text-right">
                      {program.priceLabel ?
                    <span className="block text-[9px] uppercase tracking-label text-ink/40">
                          {program.priceLabel}
                        </span> :
                    null}
                      <span className="font-display text-[1.2rem] text-ink sm:text-[1.5rem]">
                        {program.price}
                      </span>
                    </span>
                  </Link>
                </li>
              )}
            </ul>

            <Reveal delay={0.1} className="mt-10">
              <TextLink to="/programs">Explore Programs</TextLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}