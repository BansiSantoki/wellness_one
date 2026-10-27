import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { RejuvenationTiles } from '../components/sections/RejuvenationTiles';
import { DietLifestyle } from '../components/sections/DietLifestyle';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { ImmersiveCta } from '../components/sections/ImmersiveCta';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { ImageReveal } from '../components/ui/ImageReveal';
import { Parallax } from '../components/ui/Parallax';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';

export function Rejuvenation() {
  const { t } = useTranslation();

  useSeo({
    title: `${t('rejuvenationPage.heroEyebrow', { defaultValue: 'Rejuvenation' })} | One Wellness Clinic & Research Center | Nashik`,
    description: t('rejuvenationPage.heroLede', {
      defaultValue:
        'Ayurvedic rejuvenation programs in Nashik — weekend, seven-day, seasonal, stress and post-Panchakarma options combining therapy, nutrition, rest and routine.'
    }),
    path: '/rejuvenation',
    image: img.meditation
  });

  return (
    <>
      <PageHero
        eyebrow={t('rejuvenationPage.heroEyebrow', { defaultValue: 'Rejuvenation' })}
        title={t('rejuvenationPage.heroTitle', { defaultValue: 'Restoration, Not Repair' })}
        lede={t('rejuvenationPage.heroLede', {
          defaultValue:
            'Ayurvedic rejuvenation is traditionally associated with practices that support nourishment, restoration and maintenance of wellbeing — closer to upkeep than to intervention.'
        })}
        image={img.meditation}
        alt="A person seated in quiet meditation in a calm sunlit room"
        variant="band"
        meta={[
          {
            label: t('rejuvenationPage.meta.shortestLabel', { defaultValue: 'Shortest' }),
            value: t('rejuvenationPage.meta.shortestValue', { defaultValue: 'Weekend' })
          },
          {
            label: t('rejuvenationPage.meta.longestLabel', { defaultValue: 'Longest' }),
            value: t('rejuvenationPage.meta.longestValue', { defaultValue: '7 days +' })
          },
          {
            label: t('rejuvenationPage.meta.indicativeFromLabel', { defaultValue: 'Indicative from' }),
            value: t('rejuvenationPage.meta.indicativeFromValue', { defaultValue: '₹7,500' })
          },
          {
            label: t('rejuvenationPage.meta.plannedAfterLabel', { defaultValue: 'Planned after' }),
            value: t('rejuvenationPage.meta.plannedAfterValue', { defaultValue: 'Consultation' })
          }
        ]}
      />

      <section aria-labelledby="rejuvenation-intro" className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <SectionLabel>{t('rejuvenationPage.introEyebrow', { defaultValue: 'What it involves' })}</SectionLabel>
              <RevealText
                as="h2"
                id="rejuvenation-intro"
                byLine
                text={t('rejuvenationPage.introHeading', {
                  defaultValue: 'The Therapies Are Visible.\nThe Routine Does the Work.'
                })}
                className="mt-4 font-display text-[2rem] font-light leading-[1.08] text-ink sm:text-[2.6rem]"
              />

              <div className="mt-5 max-w-lg space-y-4 text-[0.95rem] leading-relaxed text-ink/65">
                <Reveal delay={0.06}>
                  <p>
                    {t('rejuvenationPage.introP1', {
                      defaultValue:
                        'A rejuvenation program combines Ayurvedic therapies with supportive nutrition, relaxation, lifestyle guidance and restorative routines. Each element is chosen to support the others rather than to fill a schedule.'
                    })}
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>
                    {t('rejuvenationPage.introP2', {
                      defaultValue:
                        'Programs are deliberately unhurried. Rest is treated as part of the process, not as the gap between appointments — which is why a lighter daily schedule usually produces a better experience than a fuller one.'
                    })}
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Parallax distance={28}>
                <ImageReveal
                  src={img.oilPreparation}
                  alt="Warm herbal oil poured from a brass vessel in preparation for therapy"
                  ratio="aspect-[4/5]"
                  caption={t('rejuvenationPage.introCaption', { defaultValue: 'Nourishment, in the traditional sense' })}
                />
              </Parallax>
            </div>
          </div>
        </div>
      </section>

      <RejuvenationTiles />
      <DietLifestyle />
      <ConsultationForm
        eyebrow={t('rejuvenationPage.formEyebrow', { defaultValue: 'Enquire' })}
        heading={t('rejuvenationPage.formHeading', {
          defaultValue: 'Plan a Restorative\nFew Days.'
        })}
        intro={t('rejuvenationPage.formIntro', {
          defaultValue:
            'Tell us roughly when you are free and what you would like the time to do for you. We will suggest which rejuvenation program may suit.'
        })}
      />

      <ImmersiveCta
        eyebrow={t('rejuvenationPage.ctaEyebrow', { defaultValue: 'Or go deeper' })}
        heading={t('rejuvenationPage.ctaHeading', {
          defaultValue: 'Rejuvenation Often\nFollows Panchakarma.'
        })}
        text={t('rejuvenationPage.ctaText', {
          defaultValue:
            'If you are considering a longer, phased Ayurvedic process, the Panchakarma page explains how a program is planned.'
        })}
        image={img.retreat}
        alt="A wellness retreat exterior at dusk beside a still reflecting pool"
        primary={{
          label: t('rejuvenationPage.ctaPrimary', { defaultValue: 'Discover Panchakarma' }),
          to: '/panchakarma'
        }}
        secondary={{
          label: t('rejuvenationPage.ctaSecondary', { defaultValue: 'View Therapies' }),
          to: '/therapies'
        }}
      />
    </>
  );
}