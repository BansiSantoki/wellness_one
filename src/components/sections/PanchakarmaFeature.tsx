import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ImageReveal } from '../ui/ImageReveal';
import { Parallax } from '../ui/Parallax';
import { img } from '../../data/images';

/**
 * Overlapping photography, vertical marginalia and a prominent statement —
 * the most compositionally layered section on the site.
 */
export function PanchakarmaFeature() {
  return (
    <section aria-labelledby="panchakarma-heading" className="relative bg-ivory">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 lg:pt-6">
            <SectionLabel index="iii">Panchakarma</SectionLabel>
            <RevealText
              as="h2"
              id="panchakarma-heading"
              byLine
              text={'Panchakarma:\nA Traditional Ayurvedic\nApproach to Cleansing\n& Rejuvenation'}
              className="mt-7 font-display text-[1.9rem] font-light leading-[1.12] text-ink sm:text-[2.5rem] lg:text-[2.7rem]" />
            

            <div className="mt-9 max-w-md space-y-5 text-[0.95rem] leading-relaxed text-ink/65">
              <Reveal delay={0.08}>
                <p>
                  Panchakarma is a specialised Ayurvedic approach traditionally used as part of
                  certain therapeutic and wellness programs.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p>
                  The word Panchakarma refers to five traditional therapeutic procedures described in
                  Ayurveda. The selection of procedures is not the same for every person.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p>
                  At One Wellness, Panchakarma is approached as a personalised process, beginning
                  with consultation and assessment before therapies are recommended.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="mt-12">
              <div className="flex items-start gap-6 border-t border-ink/15 pt-8">
                <span className="mt-2 font-display text-[3.4rem] font-light leading-none text-clay">
                  05
                </span>
                <p className="max-w-xs text-sm leading-relaxed text-ink/55">
                  Five traditional procedures are described in the classical texts. Very few people
                  receive all of them — which is the entire point.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7">
            <Parallax distance={34}>
              <ImageReveal
                src={img.oilPreparation}
                alt="Warm Ayurvedic herbal oil poured in a thin stream from an antique brass vessel"
                ratio="aspect-[4/5] sm:aspect-[4/3]"
                caption="Preparation — medicated oil, warmed before therapy" />
              
            </Parallax>

            <div className="relative z-10 mt-8 grid grid-cols-12 items-end gap-5">
              <div className="col-span-8 sm:col-span-6 lg:-mt-28">
                <Parallax distance={-24}>
                  <ImageReveal
                    src={img.herbsDetail}
                    alt="Traditional Ayurvedic herbs, powders and a stone mortar arranged on sandstone"
                    ratio="aspect-square" />
                  
                </Parallax>
              </div>
              <div className="col-span-4 sm:col-span-6">
                <p
                  className="ml-auto hidden text-[10px] uppercase tracking-label text-ink/40 sm:block lg:[writing-mode:vertical-rl]">
                  
                  Assessment before therapy
                </p>
              </div>
            </div>
          </div>
        </div>

        <Reveal className="mt-16 border-t border-ink/15 pt-10 sm:mt-20">
          <blockquote className="max-w-4xl">
            <p className="font-display text-[1.8rem] font-light italic leading-[1.15] text-ink sm:text-[2.8rem] lg:text-[3.4rem]">
              “Panchakarma is not a one-size-fits-all package.”
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>);

}