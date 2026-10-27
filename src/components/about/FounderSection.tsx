import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ImageReveal } from '../ui/ImageReveal';
import { img } from '../../data/images';
import { site } from '../../config/site';

export function FounderSection() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="founder-heading" className="bg-cream">
      <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <ImageReveal
              src={img.interiorDetail}
              alt="Afternoon light falling across a lime-plaster wall and a carved teak screen at the centre"
              ratio="aspect-[4/5]"
              caption={t('about.sanctuaryCaption', { defaultValue: 'Clinical sanctuary, Nashik' })}
            />
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <SectionLabel>{t('about.founderEyebrow', { defaultValue: 'Our clinical vision' })}</SectionLabel>
            <RevealText
              as="h2"
              id="founder-heading"
              text={site.doctor.name}
              className="mt-4 font-display text-[2rem] font-light leading-[1.1] text-ink sm:text-[2.6rem]"
            />

            <Reveal delay={0.06}>
              <p className="mt-2.5 text-[10px] uppercase tracking-label text-moss">
                {t('site.doctorProfession', { defaultValue: site.doctor.profession })} • {site.doctor.qualifications}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink/65">
                {t('about.founderP1', {
                  defaultValue: `${site.doctor.name} leads the therapeutic philosophy of One Wellness Clinic & Research Center, with an emphasis on authentic Ayurvedic healing, individualised dosha assessment, and specialized Agnikarma and Panchakarma therapies.`
                })}
              </p>
            </Reveal>
            <Reveal delay={0.14} className="mt-6 border-t border-ink/12 pt-5">
              <p className="max-w-xl text-xs leading-relaxed text-ink/55">
                {t('about.founderP2', {
                  defaultValue: `Consultations and therapies at One Wellness are delivered under the direct care of ${site.doctor.name} (Registration No: ${site.doctor.registrationNumber}). Practitioner profile and verification are detailed below.`
                })}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}