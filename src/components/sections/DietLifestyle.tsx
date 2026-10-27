import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ImageReveal } from '../ui/ImageReveal';
import { dietGuidanceAreas } from '../../data/rejuvenation';
import { img } from '../../data/images';

export function DietLifestyle() {
  const { t } = useTranslation();

  const rawAreas = t('home.dietLifestyle.areas', { returnObjects: true });
  const areas = Array.isArray(rawAreas) && rawAreas.length > 0 ? (rawAreas as string[]) : dietGuidanceAreas;

  return (
    <section aria-labelledby="diet-heading" className="bg-cream">
      <div className="mx-auto max-w-edge px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <ImageReveal
              src={img.food}
              alt="A simple sattvic Ayurvedic meal served on a brass thali with a copper glass of water"
              ratio="aspect-[4/3] sm:aspect-[16/10]"
              caption={t('home.dietLifestyle.caption', { defaultValue: 'Simple, warm, timely' })}
            />
          </div>

          <div className="lg:col-span-6 lg:pl-6">
            <SectionLabel>{t('home.dietLifestyle.eyebrow', { defaultValue: 'Diet & routine' })}</SectionLabel>
            <RevealText
              as="h2"
              id="diet-heading"
              text={t('home.dietLifestyle.heading', { defaultValue: 'Food Is Part of the Ayurvedic Journey.' })}
              className="mt-3 font-display text-[1.8rem] font-light leading-[1.1] text-ink sm:text-[2.3rem]"
            />

            <Reveal delay={0.06}>
              <p className="mt-3 max-w-lg text-xs sm:text-sm leading-relaxed text-ink/65">
                {t('home.dietLifestyle.p1', { defaultValue: 'Ayurveda gives importance to food, digestion, daily routines and individual constitution. Our wellness consultation may include general guidance related to:' })}
              </p>
            </Reveal>

            <ul className="mt-5 grid grid-cols-2 gap-x-6 border-t border-ink/12 sm:grid-cols-2">
              {areas.map((area, i) => (
                <Reveal
                  as="li"
                  key={area || i}
                  delay={i * 0.03}
                  className="flex items-baseline gap-2.5 border-b border-ink/10 py-2.5">
                  <span className="font-display text-xs italic text-moss">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs sm:text-sm text-ink/75">{area}</span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1} className="mt-5">
              <p className="border-l border-clay pl-4 text-xs leading-relaxed text-ink/55">
                {t('home.dietLifestyle.disclaimer', { defaultValue: 'Individual dietary recommendations should be discussed with the qualified practitioner.' })}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}