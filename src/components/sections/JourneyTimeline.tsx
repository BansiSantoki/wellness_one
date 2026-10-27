import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { panchakarmaJourney } from '../../data/journey';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';

/** Vertical timeline with compact, balanced spacing. */
export function JourneyTimeline() {
  const { t } = useTranslation();
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 70%']
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const rawSteps = t('home.timeline.steps', { returnObjects: true });
  const steps = Array.isArray(rawSteps) && rawSteps.length > 0
    ? (rawSteps as { number: string; title: string; description: string }[])
    : panchakarmaJourney;

  return (
    <section aria-labelledby="journey-heading" className="bg-cream">
      <div className="mx-auto max-w-edge px-5 pt-6 pb-8 sm:px-8 sm:pt-8 sm:pb-10 lg:px-14 lg:pt-8 lg:pb-12">
        <div className="max-w-3xl">
          <SectionLabel index="iv">
            {t('home.timeline.eyebrow', { defaultValue: 'The process' })}
          </SectionLabel>
          <RevealText
            as="h2"
            byLine
            id="journey-heading"
            text={t('home.timeline.heading', { defaultValue: 'Your Panchakarma Journey,\nPersonalised' })}
            className="mt-2.5 font-display text-[1.7rem] font-light leading-[1.1] text-ink sm:text-[2.2rem] lg:text-[2.5rem]"
          />
        </div>

        <ol ref={ref} className="relative mt-5 sm:mt-6">
          <div
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-ink/12 sm:left-[calc(4.5rem+7px)]"
            aria-hidden="true">
            <motion.div
              className="h-full w-px origin-top bg-moss"
              style={reduce ? { scaleY: 1 } : { scaleY }} />
          </div>

          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number || i}
              delay={0.02 * i}
              y={10}
              className="relative grid grid-cols-[auto_1fr] gap-x-4 pb-4.5 last:pb-0 sm:grid-cols-[4.5rem_auto_1fr] sm:gap-x-6 sm:pb-5">
              <span className="hidden pt-0.5 text-right font-display text-base italic text-moss sm:block">
                {step.number}
              </span>
              <span
                className="relative mt-1.5 h-[14px] w-[14px] shrink-0 rounded-full border border-moss bg-cream"
                aria-hidden="true">
                <span className="absolute inset-[3px] rounded-full bg-moss" />
              </span>
              <div className="max-w-2xl">
                <span className="font-display text-sm italic text-moss sm:hidden">{step.number}</span>
                <h3 className="mt-0.5 font-display text-[1.25rem] font-light leading-snug text-ink sm:mt-0 sm:text-[1.45rem]">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs sm:text-[0.92rem] leading-relaxed text-ink/65">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}