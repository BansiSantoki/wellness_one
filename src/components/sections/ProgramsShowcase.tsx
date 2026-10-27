import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { programs } from '../../data/programs';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ArrowLink } from '../ui/ArrowLink';

/**
 * Programs as alternating editorial spreads rather than a pricing table:
 * photography leads, the figure sits quietly, inclusions read as a list.
 */
export function ProgramsShowcase() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="programs-heading" className="bg-ivory">
      <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="vi">
              {t('programsPage.heroEyebrow', { defaultValue: 'Choose your journey' })}
            </SectionLabel>
            <RevealText
              as="h2"
              id="programs-heading"
              byLine
              text={t('programsPage.showcaseHeading', { defaultValue: 'Five Ways Into\nthe Same Question' })}
              className="mt-4 font-display text-[2rem] font-light leading-[1.1] text-ink sm:text-[2.6rem] lg:text-[3rem]"
            />
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="max-w-md text-[0.95rem] leading-relaxed text-ink/65">
                {t('programsPage.showcaseIntro', {
                  defaultValue:
                    'From a single consultation to a twenty-one day journey. Which is appropriate is decided with you, after assessment — not chosen from a menu beforehand.'
                })}
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-8 lg:mt-12">
          {programs.map((program, i) => {
            const flip = i % 2 === 1;

            const tr = (t(`programsData.${program.slug}`, { returnObjects: true }) as {
              name?: string;
              duration?: string;
              price?: string;
              priceLabel?: string;
              intro?: string;
              inclusionsLabel?: string;
              inclusions?: string[];
              journey?: string[];
              note?: string;
              cta?: string;
            }) || {};

            const name = tr.name || program.name;
            const duration = tr.duration || program.duration;
            const price = tr.price || program.price;
            const priceLabel = tr.priceLabel || program.priceLabel;
            const intro = tr.intro || program.intro;
            const inclusionsLabel = tr.inclusionsLabel || program.inclusionsLabel;
            const inclusions = tr.inclusions || program.inclusions;
            const journey = tr.journey || program.journey;
            const note = tr.note || program.note;
            const cta = tr.cta || program.cta;

            return (
              <Reveal
                as="li"
                key={program.slug}
                className="group border-t border-ink/10 py-8 first:border-t-0 first:pt-0 sm:py-10"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                  <div
                    className={`lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8' : ''}`}
                    data-cursor="view"
                  >
                    <div className="relative overflow-hidden bg-sand">
                      <motion.img
                        src={program.image}
                        alt={program.alt}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full object-cover lg:aspect-[5/6]"
                        whileHover={reduce ? undefined : { scale: 1.04 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      />

                      <span className="absolute bottom-0 left-0 bg-ivory px-4 py-2 text-[10px] uppercase tracking-label text-ink/60">
                        {duration}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col lg:col-span-6 ${
                      flip ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'
                    }`}
                  >
                    <span className="font-display text-sm italic text-moss">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 font-display text-[1.9rem] font-light leading-[1.1] text-ink sm:text-[2.6rem]">
                      {name}
                    </h3>
                    <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-ink/65">
                      {intro}
                    </p>

                    <div className="mt-7 flex items-baseline gap-3">
                      {priceLabel ? (
                        <span className="text-[10px] uppercase tracking-label text-ink/45">
                          {priceLabel}
                        </span>
                      ) : null}
                      <span className="font-display text-[1.9rem] font-light text-ink">
                        {price}
                      </span>
                    </div>

                    <div className="mt-8">
                      <p className="text-[10px] uppercase tracking-label text-ink/45">
                        {inclusionsLabel}
                      </p>
                      {journey ? (
                        <ol className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                          {journey.map((stage, j) => (
                            <li key={stage} className="flex items-center gap-3">
                              <span className="font-display text-base text-ink/80">{stage}</span>
                              {j < journey.length - 1 ? (
                                <span className="h-px w-5 bg-ink/25" aria-hidden="true" />
                              ) : null}
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                          {inclusions.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm text-ink/70">
                              <CheckIcon
                                className="mt-1 h-3 w-3 shrink-0 text-moss"
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {note ? (
                      <p className="mt-6 border-l border-clay pl-4 text-xs leading-relaxed text-ink/50">
                        {note}
                      </p>
                    ) : null}

                    <div className="mt-9">
                      <ArrowLink
                        to="/consultation"
                        tone={i === 0 ? 'forest' : 'outline'}
                        className="w-full sm:w-auto"
                      >
                        {cta}
                      </ArrowLink>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}