import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { lifestyleAreas } from '../../data/rejuvenation';
import { img } from '../../data/images';

/** Editorial split screen with compact, balanced layout. */
export function ModernLifestyle() {
  const { t } = useTranslation();

  const rawAreas = t('home.modernLifestyle.areas', { returnObjects: true });
  const areas = Array.isArray(rawAreas) && rawAreas.length > 0 ? (rawAreas as string[]) : lifestyleAreas;

  return (
    <section aria-labelledby="modern-heading" className="bg-ivory border-t border-ink/10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[30vh] sm:min-h-[36vh] overflow-hidden bg-sand lg:min-h-full">
          <img
            src={img.lifestyle}
            alt="A woman sitting by a sunlit window with a cup of herbal tea in a calm home"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
          <div className="max-w-xl">
            <SectionLabel index="viii">
              {t('home.modernLifestyle.eyebrow', { defaultValue: 'Modern life' })}
            </SectionLabel>
            <RevealText
              as="h2"
              id="modern-heading"
              byLine
              text={t('home.modernLifestyle.heading', { defaultValue: 'Traditional Ayurveda\nfor Modern Life' })}
              className="mt-3 font-display text-[1.8rem] font-light leading-[1.08] text-ink sm:text-[2.3rem]"
            />

            <div className="mt-4 space-y-3 text-xs sm:text-sm leading-relaxed text-ink/65">
              <Reveal delay={0.06}>
                <p>{t('home.modernLifestyle.p1', { defaultValue: 'Modern lifestyles can make it difficult to maintain consistent routines.' })}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  {t('home.modernLifestyle.p2', { defaultValue: 'Long working hours, irregular meals, prolonged screen exposure, travel, inadequate rest and constant mental demands can affect how we feel and function every day.' })}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.14} className="mt-6">
              <p className="text-[10px] uppercase tracking-label text-ink/45">
                {t('home.modernLifestyle.approachLabel', { defaultValue: 'One Wellness encourages a more conscious approach to' })}
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-2.5 gap-y-2">
                {areas.map((area, idx) => (
                  <li
                    key={area || idx}
                    className="border border-ink/15 px-3 py-1.5 text-xs text-ink/70 transition-colors duration-300 ease-calm hover:border-moss hover:text-ink"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18} className="mt-6 border-t border-ink/15 pt-5">
              <p className="font-display text-[1.4rem] font-light italic leading-tight text-ink sm:text-[1.8rem]">
                {t('home.modernLifestyle.quote', { defaultValue: 'Not to change your entire life overnight.' })}
              </p>
              <p className="mt-2 max-w-md text-xs sm:text-sm leading-relaxed text-ink/60">
                {t('home.modernLifestyle.quoteSub', { defaultValue: 'To help you create healthier routines that you can realistically maintain.' })}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}