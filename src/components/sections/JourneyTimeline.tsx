import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { panchakarmaJourney } from '../../data/journey';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';

/** Vertical timeline with a scroll-driven progress line. */
export function JourneyTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 70%']
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section aria-labelledby="journey-heading" className="bg-cream">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="max-w-3xl">
          <SectionLabel index="iv">The process</SectionLabel>
          <RevealText
            as="h2"
            byLine
            id="journey-heading"
            text={'Your Panchakarma Journey,\nPersonalised'}
            className="mt-6 font-display text-[2.2rem] font-light leading-[1.08] text-ink sm:text-[3rem] lg:text-[3.4rem]" />
          
        </div>

        <ol ref={ref} className="relative mt-16 sm:mt-20">
          <div
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-ink/12 sm:left-[calc(4.5rem+7px)]"
            aria-hidden="true">
            
            <motion.div
              className="h-full w-px origin-top bg-moss"
              style={reduce ? { scaleY: 1 } : { scaleY }} />
            
          </div>

          {panchakarmaJourney.map((step, i) =>
          <Reveal
            as="li"
            key={step.number}
            delay={0.04 * i}
            className="relative grid grid-cols-[auto_1fr] gap-x-6 pb-12 last:pb-0 sm:grid-cols-[4.5rem_auto_1fr] sm:gap-x-8">
            
              <span className="hidden pt-0.5 text-right font-display text-lg italic text-moss sm:block">
                {step.number}
              </span>
              <span
              className="relative mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border border-moss bg-cream"
              aria-hidden="true">
              
                <span className="absolute inset-[4px] rounded-full bg-moss" />
              </span>
              <div className="max-w-2xl">
                <span className="font-display text-base italic text-moss sm:hidden">{step.number}</span>
                <h3 className="mt-1 font-display text-[1.6rem] font-light leading-snug text-ink sm:mt-0 sm:text-[2rem]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">{step.description}</p>
              </div>
            </Reveal>
          )}
        </ol>
      </div>
    </section>);

}