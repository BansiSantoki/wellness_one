import React from 'react';
import { useTranslation } from 'react-i18next';
import { philosophyStages } from '../../data/journey';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';

export function PhilosophyJourney() {
  const { t } = useTranslation();
  const rawStages = t('home.philosophy.stages', { returnObjects: true });
  const stages = Array.isArray(rawStages) && rawStages.length > 0 ? (rawStages as { word: string; caption: string }[]) : philosophyStages;

  return (
    <section aria-label="Our wellness philosophy" className="bg-[#FCFAF4] py-8 sm:py-10 lg:py-12 border-t border-[#E8DFCC]">
      <div className="mx-auto max-w-edge px-5 sm:px-8 lg:px-14">
        {/* Section Header */}
        <div className="max-w-3xl">
          <SectionLabel index="ii">
            {t('home.philosophy.eyebrow', { defaultValue: 'Our Philosophy' })}
          </SectionLabel>
          <RevealText
            as="h2"
            text={t('home.philosophy.heading', { defaultValue: 'Understand → Personalise → Experience → Rejuvenate → Maintain' })}
            className="mt-2.5 font-serif text-[1.7rem] font-light leading-[1.12] text-[#102A20] sm:text-[2.2rem] lg:text-[2.5rem]"
          />
          <Reveal delay={0.08}>
            <p className="mt-2.5 text-sm leading-relaxed text-[#25231F]/70">
              {t('home.philosophy.description', { defaultValue: 'A personalised journey towards balance and rejuvenation. At One Wellness, we guide you through five clear stages inspired by traditional Ayurvedic principles.' })}
            </p>
          </Reveal>
        </div>

        {/* Clean 5-Stage Grid Layout */}
        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5 sm:gap-4">
          {stages.map((stage, i) => (
            <Reveal
              key={stage.word || i}
              delay={i * 0.04}
              className="flex flex-col bg-[#F6F1E6] p-3.5 sm:p-4 border border-[#E8DFCC] transition-all duration-300 hover:border-[#B08D4F]"
            >
              <span className="font-serif text-xs italic text-[#B08D4F]">
                {t('common.step', { defaultValue: 'Step' })} {String(i + 1).padStart(2, '0')}
              </span>
              
              <h3 className="mt-2 font-serif text-xl font-normal text-[#102A20]">
                {stage.word}
              </h3>
              
              <span className="my-2.5 block h-px w-8 bg-[#B08D4F]/40" aria-hidden="true" />
              
              <p className="text-xs leading-relaxed text-[#25231F]/75">
                {stage.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}