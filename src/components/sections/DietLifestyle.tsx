import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ImageReveal } from '../ui/ImageReveal';
import { dietGuidanceAreas } from '../../data/rejuvenation';
import { img } from '../../data/images';

/** Warm editorial section on food and routine, with the image overlapping the text column. */
export function DietLifestyle() {
  return (
    <section aria-labelledby="diet-heading" className="bg-cream">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <ImageReveal
              src={img.food}
              alt="A simple sattvic Ayurvedic meal served on a brass thali with a copper glass of water"
              ratio="aspect-[4/3] sm:aspect-[3/2]"
              caption="Simple, warm, timely" />
            
          </div>

          <div className="lg:col-span-6 lg:pl-10 lg:pt-16">
            <SectionLabel>Diet &amp; routine</SectionLabel>
            <RevealText
              as="h2"
              id="diet-heading"
              text="Food Is Part of the Ayurvedic Journey."
              className="mt-6 font-display text-[2rem] font-light leading-[1.1] text-ink sm:text-[2.6rem]" />
            
            <Reveal delay={0.08}>
              <p className="mt-7 max-w-lg text-[0.95rem] leading-relaxed text-ink/65">
                Ayurveda gives importance to food, digestion, daily routines and individual
                constitution. Our wellness consultation may include general guidance related to:
              </p>
            </Reveal>

            <ul className="mt-9 grid grid-cols-2 gap-x-8 border-t border-ink/12 sm:grid-cols-2">
              {dietGuidanceAreas.map((area, i) =>
              <Reveal
                as="li"
                key={area}
                delay={i * 0.04}
                className="flex items-baseline gap-3 border-b border-ink/10 py-3.5">
                
                  <span className="font-display text-xs italic text-moss">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-ink/75">{area}</span>
                </Reveal>
              )}
            </ul>

            <Reveal delay={0.12} className="mt-10">
              <p className="border-l border-clay pl-5 text-sm leading-relaxed text-ink/55">
                Individual dietary recommendations should be discussed with the qualified
                practitioner.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}