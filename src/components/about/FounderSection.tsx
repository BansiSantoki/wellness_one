import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ImageReveal } from '../ui/ImageReveal';
import { img } from '../../data/images';

export function FounderSection() {
  return (
    <section aria-labelledby="founder-heading" className="bg-cream">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <ImageReveal
              src={img.interiorDetail}
              alt="Afternoon light falling across a lime-plaster wall and a carved teak screen at the centre"
              ratio="aspect-[4/5]"
              caption="Photograph to be updated" />
            
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <SectionLabel>Our founding vision</SectionLabel>
            <RevealText
              as="h2"
              id="founder-heading"
              text="Dr. Sohan S. Chouhan"
              className="mt-6 font-display text-[2.2rem] font-light leading-[1.08] text-ink sm:text-[2.9rem]" />
            
            <Reveal delay={0.06}>
              <p className="mt-3 text-[10px] uppercase tracking-label text-moss">
                Founder / Director
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-[0.95rem] leading-relaxed text-ink/65">
                Dr. Sohan S. Chouhan is part of the founding vision of One Wellness Clinic &amp;
                Research Center, with an emphasis on creating an integrated platform for wellbeing,
                personalised care and research-oriented wellness initiatives.
              </p>
            </Reveal>
            <Reveal delay={0.14} className="mt-10 border-t border-ink/12 pt-6">
              <p className="max-w-xl text-xs leading-relaxed text-ink/45">
                Ayurvedic therapy at One Wellness is delivered under the guidance of a qualified
                Ayurvedic practitioner. Practitioner details are listed separately below and are
                published once confirmed.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}