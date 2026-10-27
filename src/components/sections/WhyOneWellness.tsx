import React from 'react';
import { useTranslation } from 'react-i18next';
import { whyOneWellness } from '../../data/journey';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { Parallax } from '../ui/Parallax';
import { img } from '../../data/images';

export function WhyOneWellness() {
  const { t } = useTranslation();

  const rawPoints = t('home.whyOneWellness.points', { returnObjects: true });
  const points = Array.isArray(rawPoints) && rawPoints.length > 0
    ? (rawPoints as { title: string; description: string }[])
    : whyOneWellness;

  return (
    <section aria-labelledby="why-heading" className="bg-ivory">
      <div className="mx-auto max-w-edge px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionLabel index="ix">
              {t('home.whyOneWellness.eyebrow', { defaultValue: 'Why One Wellness' })}
            </SectionLabel>
            <RevealText
              as="h2"
              id="why-heading"
              byLine
              text={t('home.whyOneWellness.heading', { defaultValue: 'Why Choose One Wellness\nfor Your Ayurvedic Journey?' })}
              className="mt-3 font-display text-[1.8rem] font-light leading-[1.1] text-ink sm:text-[2.2rem]"
            />

            <Parallax distance={18} className="mt-6 hidden lg:block">
              <img
                src={img.interiorDetail}
                alt="Afternoon light falling across a lime-plaster wall and carved teak screen"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover shadow-xs"
              />
            </Parallax>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 border-t border-ink/10 sm:grid-cols-2">
              {points.map((point, i) => (
                <Reveal
                  as="li"
                  key={point.title || i}
                  delay={(i % 2) * 0.05}
                  className={`border-b border-ink/10 py-5 sm:py-6 ${
                    i % 2 === 1 ? 'sm:border-l sm:border-ink/10 sm:pl-6' : 'sm:pr-6'
                  }`}
                >
                  <span className="font-display text-xs italic text-moss">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-display text-[1.3rem] font-light leading-snug text-ink sm:text-[1.45rem]">
                    {point.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-xs sm:text-sm leading-relaxed text-ink/60">
                    {point.description}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}