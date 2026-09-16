import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ArrowLink } from '../ui/ArrowLink';
import { enquiryReasons } from '../../data/rejuvenation';

/** Calm, consultation-focused section. Deliberately quiet and text-led. */
export function RightForYou() {
  return (
    <section aria-labelledby="suitability-heading" className="border-y border-ink/10 bg-ivory">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionLabel>Suitability</SectionLabel>
            <RevealText
              as="h2"
              id="suitability-heading"
              text="Is Panchakarma Right for You?"
              className="mt-6 font-display text-[2.1rem] font-light leading-[1.08] text-ink sm:text-[2.8rem]" />
            
            <Reveal delay={0.08}>
              <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-ink/65">
                Panchakarma may be considered by adults seeking a structured traditional Ayurvedic
                wellness experience, subject to appropriate assessment.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="mt-9">
              <ArrowLink to="/consultation">Book Ayurvedic Consultation</ArrowLink>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <Reveal>
              <p className="text-[10px] uppercase tracking-label text-ink/45">
                People commonly enquire about Panchakarma for
              </p>
            </Reveal>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2">
              {enquiryReasons.map((reason, i) =>
              <Reveal
                as="li"
                key={reason}
                delay={i * 0.035}
                className={`border-b border-ink/10 py-4 ${
                i % 2 === 1 ? 'sm:border-l sm:border-ink/10 sm:pl-8' : 'sm:pr-8'}`
                }>
                
                  <span className="font-display text-[1.25rem] font-light text-ink">{reason}</span>
                </Reveal>
              )}
            </ul>

            <Reveal delay={0.15} className="mt-12 bg-cream p-7 sm:p-9">
              <p className="font-display text-[1.6rem] font-light leading-snug text-ink sm:text-[2rem]">
                Consultation is important.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/65">
                Panchakarma is not suitable for everyone or at every stage of life. A qualified
                practitioner should determine whether a particular procedure or program is
                appropriate.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}