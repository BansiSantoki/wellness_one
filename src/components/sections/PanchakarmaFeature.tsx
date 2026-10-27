import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ImageReveal } from '../ui/ImageReveal';
import { Parallax } from '../ui/Parallax';
import { img } from '../../data/images';

export function PanchakarmaFeature() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="panchakarma-heading" className="relative bg-ivory">
      <div className="mx-auto max-w-edge px-5 pt-8 pb-5 sm:px-8 sm:pt-10 sm:pb-6 lg:px-14 lg:pt-12 lg:pb-7">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5 lg:pt-1">
            <SectionLabel index="iii">
              {t('home.panchakarmaFeature.eyebrow', { defaultValue: 'Panchakarma' })}
            </SectionLabel>
            <RevealText
              as="h2"
              id="panchakarma-heading"
              byLine
              text={t('home.panchakarmaFeature.heading', { defaultValue: 'Panchakarma:\nA Traditional Ayurvedic\nApproach to Cleansing\n& Rejuvenation' })}
              className="mt-3 font-display text-[1.7rem] font-light leading-[1.12] text-ink sm:text-[2.1rem] lg:text-[2.4rem]"
            />

            <div className="mt-4 max-w-md space-y-2.5 text-[0.92rem] leading-relaxed text-ink/65">
              <Reveal delay={0.04}>
                <p>
                  {t('home.panchakarmaFeature.p1', { defaultValue: 'Panchakarma is a specialised Ayurvedic approach traditionally used as part of certain therapeutic and wellness programs.' })}
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p>
                  {t('home.panchakarmaFeature.p2', { defaultValue: 'The word Panchakarma refers to five traditional therapeutic procedures described in Ayurveda. The selection of procedures is not the same for every person.' })}
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p>
                  {t('home.panchakarmaFeature.p3', { defaultValue: 'At One Wellness, Panchakarma is approached as a personalised process, beginning with consultation and assessment before therapies are recommended.' })}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.16} className="mt-5">
              <div className="flex items-center gap-4 border-t border-ink/15 pt-4">
                <span className="font-display text-[2.4rem] font-light leading-none text-clay">
                  {t('home.panchakarmaFeature.count', { defaultValue: '05' })}
                </span>
                <p className="max-w-xs text-xs leading-relaxed text-ink/60">
                  {t('home.panchakarmaFeature.countCaption', { defaultValue: 'Five traditional procedures are described in the classical texts. Very few people receive all of them — which is the entire point.' })}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7">
            <Parallax distance={14}>
              <ImageReveal
                src={img.oilPreparation}
                alt="Warm Ayurvedic herbal oil poured in a thin stream from an antique brass vessel"
                ratio="aspect-[16/10]"
                caption={t('home.panchakarmaFeature.oilCaption', { defaultValue: 'Preparation — medicated oil, warmed before therapy' })}
              />
            </Parallax>

            <div className="relative z-10 mt-4 grid grid-cols-12 items-end gap-3">
              <div className="col-span-7 sm:col-span-5 lg:-mt-10">
                <Parallax distance={-10}>
                  <ImageReveal
                    src={img.herbsDetail}
                    alt="Traditional Ayurvedic herbs, powders and a stone mortar arranged on sandstone"
                    ratio="aspect-[16/10]"
                  />
                </Parallax>
              </div>
              <div className="col-span-5 sm:col-span-7">
                <p
                  className="ml-auto hidden text-[10px] uppercase tracking-label text-ink/40 sm:block lg:[writing-mode:vertical-rl]">
                  {t('home.panchakarmaFeature.assessmentBadge', { defaultValue: 'Assessment before therapy' })}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Reveal className="mt-5 border-t border-ink/15 pt-4 sm:mt-6 sm:pt-5">
          <blockquote className="max-w-3xl">
            <p className="font-display text-[1.35rem] font-light italic leading-[1.2] text-ink sm:text-[1.75rem] lg:text-[2.05rem]">
              {t('home.panchakarmaFeature.quote', { defaultValue: '“Panchakarma is not a one-size-fits-all package.”' })}
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}