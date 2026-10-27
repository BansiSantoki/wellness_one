import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ArrowLink } from '../ui/ArrowLink';
import { enquiryReasons } from '../../data/rejuvenation';

export function RightForYou() {
  const { t } = useTranslation();

  const rawReasons = t('home.rightForYou.reasons', { returnObjects: true });
  const reasons = Array.isArray(rawReasons) && rawReasons.length > 0 ? (rawReasons as string[]) : enquiryReasons;

  return (
    <section aria-labelledby="suitability-heading" className="border-y border-ink/10 bg-ivory">
      <div className="mx-auto max-w-edge px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionLabel>{t('home.rightForYou.eyebrow', { defaultValue: 'Suitability' })}</SectionLabel>
            <RevealText
              as="h2"
              id="suitability-heading"
              text={t('home.rightForYou.heading', { defaultValue: 'Is Panchakarma Right for You?' })}
              className="mt-3 font-display text-[1.8rem] font-light leading-[1.08] text-ink sm:text-[2.3rem]"
            />

            <Reveal delay={0.06}>
              <p className="mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-ink/65">
                {t('home.rightForYou.p1', { defaultValue: 'Panchakarma may be considered by adults seeking a structured traditional Ayurvedic wellness experience, subject to appropriate assessment.' })}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-5">
              <ArrowLink to="/consultation">
                {t('home.rightForYou.cta', { defaultValue: 'Book Ayurvedic Consultation' })}
              </ArrowLink>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <Reveal>
              <p className="text-[10px] uppercase tracking-label text-ink/45">
                {t('home.rightForYou.reasonsLabel', { defaultValue: 'People commonly enquire about Panchakarma for' })}
              </p>
            </Reveal>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2">
              {reasons.map((reason, i) => (
                <Reveal
                  as="li"
                  key={reason || i}
                  delay={i * 0.03}
                  className={`border-b border-ink/10 py-3 ${
                    i % 2 === 1 ? 'sm:border-l sm:border-ink/10 sm:pl-6' : 'sm:pr-6'
                  }`}
                >
                  <span className="font-display text-[1.15rem] font-light text-ink">{reason}</span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.12} className="mt-6 bg-cream p-5 sm:p-6 border border-ink/10">
              <p className="font-display text-[1.35rem] font-light leading-snug text-ink sm:text-[1.6rem]">
                {t('home.rightForYou.consultationNoteHeading', { defaultValue: 'Consultation is important.' })}
              </p>
              <p className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-ink/65">
                {t('home.rightForYou.consultationNote', { defaultValue: 'Panchakarma is not suitable for everyone or at every stage of life. A qualified practitioner should determine whether a particular procedure or program is appropriate.' })}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}