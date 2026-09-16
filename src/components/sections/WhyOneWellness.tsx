import React from 'react';
import { whyOneWellness } from '../../data/journey';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { Parallax } from '../ui/Parallax';
import { img } from '../../data/images';

/** Six points held together by a ruled grid and one tall photograph. */
export function WhyOneWellness() {
  return (
    <section aria-labelledby="why-heading" className="bg-ivory">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionLabel index="ix">Why One Wellness</SectionLabel>
            <RevealText
              as="h2"
              id="why-heading"
              byLine
              text={'Why Choose One Wellness\nfor Your Ayurvedic Journey?'}
              className="mt-6 font-display text-[2rem] font-light leading-[1.1] text-ink sm:text-[2.5rem]" />
            
            <Parallax distance={26} className="mt-12 hidden lg:block">
              <img
                src={img.interiorDetail}
                alt="Afternoon light falling across a lime-plaster wall and carved teak screen"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover" />
              
            </Parallax>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 border-t border-ink/10 sm:grid-cols-2">
              {whyOneWellness.map((point, i) =>
              <Reveal
                as="li"
                key={point.title}
                delay={i % 2 * 0.06}
                className={`border-b border-ink/10 py-8 sm:py-10 ${
                i % 2 === 1 ? 'sm:border-l sm:border-ink/10 sm:pl-10' : 'sm:pr-10'}`
                }>
                
                  <span className="font-display text-sm italic text-moss">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-[1.6rem] font-light leading-snug text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60">
                    {point.description}
                  </p>
                </Reveal>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}