import React from 'react';
import { philosophyStages } from '../../data/journey';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';

export function PhilosophyJourney() {
  return (
    <section aria-label="Our wellness philosophy" className="bg-[#FCFAF4] py-20 sm:py-28 border-t border-[#E8DFCC]">
      <div className="mx-auto max-w-edge px-5 sm:px-8 lg:px-14">
        {/* Section Header */}
        <div className="max-w-3xl">
          <SectionLabel index="ii">
            Our Philosophy
          </SectionLabel>
          <RevealText
            as="h2"
            text="Understand → Personalise → Experience → Rejuvenate → Maintain"
            className="mt-6 font-serif text-[2.2rem] font-light leading-[1.12] text-[#102A20] sm:text-[2.8rem] lg:text-[3.2rem]"
          />
          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-[#25231F]/70">
              A personalised journey towards balance and rejuvenation. At One Wellness, we guide you through five clear stages inspired by traditional Ayurvedic principles.
            </p>
          </Reveal>
        </div>

        {/* Clean 5-Stage Grid Layout */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {philosophyStages.map((stage, i) => (
            <Reveal
              key={stage.word}
              delay={i * 0.08}
              className="flex flex-col bg-[#F6F1E6] p-6 border border-[#E8DFCC] transition-all duration-300 hover:border-[#B08D4F]"
            >
              <span className="font-serif text-sm italic text-[#B08D4F]">
                Step {String(i + 1).padStart(2, '0')}
              </span>
              
              <h3 className="mt-3 font-serif text-2xl font-normal text-[#102A20]">
                {stage.word}
              </h3>
              
              <span className="my-4 block h-px w-10 bg-[#B08D4F]/40" aria-hidden="true" />
              
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