import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { rejuvenationExperiences, rejuvenationFormula } from '../../data/rejuvenation';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';

export function RejuvenationTiles() {
  const { t } = useTranslation();

  const rawFormula = t('rejuvenationPage.formula', { returnObjects: true });
  const formula = Array.isArray(rawFormula) && rawFormula.length > 0 ? (rawFormula as string[]) : rejuvenationFormula;

  const rawExperiences = t('rejuvenationPage.experiences', { returnObjects: true });
  const experiences = Array.isArray(rawExperiences) && rawExperiences.length > 0
    ? (rawExperiences as { name: string; description: string }[])
    : rejuvenationExperiences;

  return (
    <section aria-labelledby="rejuvenation-heading" className="bg-forest">
      <div className="mx-auto max-w-edge px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel tone="light" index="vii">
              {t('rejuvenationPage.heroEyebrow', { defaultValue: 'Rejuvenation' })}
            </SectionLabel>
            <RevealText
              as="h2"
              id="rejuvenation-heading"
              byLine
              text={t('rejuvenationPage.heroTitle', { defaultValue: 'Rejuvenate Your Body.\nRefresh Your Routine.' })}
              className="mt-3 font-display text-[1.8rem] font-light leading-[1.08] text-ivory sm:text-[2.4rem] lg:text-[2.8rem]"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.08}>
              <p className="text-xs sm:text-sm leading-relaxed text-ivory/70">
                {t('rejuvenationPage.introP1', { defaultValue: 'Ayurvedic rejuvenation is traditionally associated with practices that support nourishment, restoration and maintenance of wellbeing.' })}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.12} className="mt-6 sm:mt-8">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-ivory/15 py-4">
            {formula.map((part, i) => (
              <li key={part || i} className="flex items-center gap-3">
                <span className="font-display text-sm sm:text-base font-light text-ivory/90">
                  {part}
                </span>
                {i < formula.length - 1 ? (
                  <span className="font-display text-sm text-sage" aria-hidden="true">
                    +
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="mt-8 grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => {
            const fallback = rejuvenationExperiences[i] || rejuvenationExperiences[0];
            const image = fallback.image;
            const alt = fallback.alt;

            return (
              <Reveal as="li" key={exp.name || i} delay={(i % 3) * 0.05}>
                <Link to="/consultation" className="group block" data-cursor="view">
                  <div className="relative aspect-[16/10] overflow-hidden bg-pine">
                    <img
                      src={image}
                      alt={alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 ease-calm group-hover:scale-[1.04]"
                    />
                    <span
                      className="absolute inset-0 bg-pine/20 opacity-0 transition-opacity duration-500 ease-calm group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-[1.25rem] font-light leading-snug text-ivory sm:text-[1.35rem]">
                        {exp.name}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-ivory/55">{exp.description}</p>
                    </div>
                    <ArrowUpRightIcon
                      className="mt-1 h-4 w-4 shrink-0 text-sage transition-transform duration-300 ease-calm group-hover:-translate-y-1 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}