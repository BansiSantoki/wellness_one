import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { lifestyleAreas } from '../../data/rejuvenation';
import { img } from '../../data/images';

/** Editorial split screen: photograph on one half, argument on the other. */
export function ModernLifestyle() {
  return (
    <section aria-labelledby="modern-heading" className="bg-ivory">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[60vw] overflow-hidden bg-sand lg:min-h-[86vh]">
          <img
            src={img.lifestyle}
            alt="A woman sitting by a sunlit window with a cup of herbal tea in a calm home"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover" />
          
        </div>

        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <div className="max-w-xl">
            <SectionLabel index="viii">Modern life</SectionLabel>
            <RevealText
              as="h2"
              id="modern-heading"
              byLine
              text={'Traditional Ayurveda\nfor Modern Life'}
              className="mt-6 font-display text-[2.1rem] font-light leading-[1.08] text-ink sm:text-[2.8rem]" />
            

            <div className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-ink/65">
              <Reveal delay={0.06}>
                <p>Modern lifestyles can make it difficult to maintain consistent routines.</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Long working hours, irregular meals, prolonged screen exposure, travel, inadequate
                  rest and constant mental demands can affect how we feel and function every day.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.14} className="mt-10">
              <p className="text-[10px] uppercase tracking-label text-ink/45">
                One Wellness encourages a more conscious approach to
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-3">
                {lifestyleAreas.map((area) =>
                <li
                  key={area}
                  className="border border-ink/15 px-4 py-2 text-xs text-ink/70 transition-colors duration-300 ease-calm hover:border-moss hover:text-ink">
                  
                    {area}
                  </li>
                )}
              </ul>
            </Reveal>

            <Reveal delay={0.18} className="mt-12 border-t border-ink/15 pt-8">
              <p className="font-display text-[1.7rem] font-light italic leading-tight text-ink sm:text-[2.2rem]">
                Not to change your entire life overnight.
              </p>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink/60">
                To help you create healthier routines that you can realistically maintain.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}