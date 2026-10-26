import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ImageReveal } from '../ui/ImageReveal';
import { img } from '../../data/images';

import { site } from '../../config/site';

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
              caption="Clinical sanctuary, Nashik"
            />
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <SectionLabel>Our clinical vision</SectionLabel>
            <RevealText
              as="h2"
              id="founder-heading"
              text={site.doctor.name}
              className="mt-6 font-display text-[2.2rem] font-light leading-[1.08] text-ink sm:text-[2.9rem]"
            />

            <Reveal delay={0.06}>
              <p className="mt-3 text-[10px] uppercase tracking-label text-moss">
                {site.doctor.profession} • {site.doctor.qualifications}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-[0.95rem] leading-relaxed text-ink/65">
                {site.doctor.name} leads the therapeutic philosophy of One Wellness Clinic &amp;
                Research Center, with an emphasis on authentic Ayurvedic healing, individualised
                dosha assessment, and specialized Agnikarma and Panchakarma therapies.
              </p>
            </Reveal>
            <Reveal delay={0.14} className="mt-10 border-t border-ink/12 pt-6">
              <p className="max-w-xl text-xs leading-relaxed text-ink/55">
                Consultations and therapies at One Wellness are delivered under the direct care of{' '}
                {site.doctor.name} (Registration No: {site.doctor.registrationNumber}). Practitioner
                profile and verification are detailed below.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}