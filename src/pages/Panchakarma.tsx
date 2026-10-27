import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { PanchakarmaFeature } from '../components/sections/PanchakarmaFeature';
import { JourneyTimeline } from '../components/sections/JourneyTimeline';
import { PhilosophyJourney } from '../components/sections/PhilosophyJourney';
import { RightForYou } from '../components/sections/RightForYou';
import { TherapyGallery } from '../components/sections/TherapyGallery';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { ImmersiveCta } from '../components/sections/ImmersiveCta';
import { JsonLd } from '../components/ui/JsonLd';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';

export function Panchakarma() {
  const { t } = useTranslation();

  useSeo({
    title: `${t('panchakarmaPage.heroEyebrow', { defaultValue: 'Panchakarma' })} | One Wellness Clinic & Research Center | Nashik`,
    description: t('panchakarmaPage.heroLede', {
      defaultValue:
        'Personalised Panchakarma at One Wellness Clinic & Research Center, Nashik. Understand the process, the phases and why every program begins with consultation.'
    }),
    path: '/panchakarma',
    image: img.hero
  });

  return (
    <>
      <JsonLd
        id="ld-panchakarma"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Panchakarma Wellness Program',
          serviceType: 'Traditional Ayurvedic wellness program',
          provider: { '@type': 'HealthAndBeautyBusiness', name: 'One Wellness Clinic & Research Center' },
          areaServed: 'Nashik, Maharashtra, India'
        }}
      />

      <PageHero
        eyebrow={t('panchakarmaPage.heroEyebrow', { defaultValue: 'Panchakarma' })}
        title={t('panchakarmaPage.heroTitle', { defaultValue: 'A Journey Back to Balance' })}
        lede={t('panchakarmaPage.heroLede', {
          defaultValue:
            'Panchakarma is a phased Ayurvedic process — prepared for, delivered gradually, and followed by rest. At One Wellness it is planned around one person at a time.'
        })}
        image={img.hero}
        alt="A traditional Ayurvedic therapy room with a carved wooden treatment table in warm light"
        variant="band"
        meta={[
          {
            label: t('panchakarmaPage.meta.beginsWithLabel', { defaultValue: 'Begins with' }),
            value: t('panchakarmaPage.meta.beginsWithValue', { defaultValue: 'Consultation' })
          },
          {
            label: t('panchakarmaPage.meta.phasesLabel', { defaultValue: 'Phases' }),
            value: t('panchakarmaPage.meta.phasesValue', { defaultValue: 'Five' })
          },
          {
            label: t('panchakarmaPage.meta.durationsLabel', { defaultValue: 'Durations' }),
            value: t('panchakarmaPage.meta.durationsValue', { defaultValue: '3 – 21 days' })
          },
          {
            label: t('panchakarmaPage.meta.selectionLabel', { defaultValue: 'Selection' }),
            value: t('panchakarmaPage.meta.selectionValue', { defaultValue: 'Individual' })
          }
        ]}
      />

      <PanchakarmaFeature />
      <PhilosophyJourney />
      <JourneyTimeline />
      <TherapyGallery
        limit={6}
        heading={t('panchakarmaPage.therapyGalleryHeading', {
          defaultValue: 'Therapies That May Form Part of a Program'
        })}
        intro={t('panchakarmaPage.therapyGalleryIntro', {
          defaultValue:
            'Which of these appear in your schedule — and in what order — is determined by your assessment, not by the program you booked.'
        })}
        showAllLink
      />

      <RightForYou />
      <ConsultationForm
        eyebrow={t('panchakarmaPage.formEyebrow', { defaultValue: 'Begin' })}
        heading={t('panchakarmaPage.formHeading', {
          defaultValue: 'Start With an\nAyurvedic Consultation.'
        })}
        intro={t('panchakarmaPage.formIntro', {
          defaultValue:
            'Panchakarma cannot responsibly be recommended before an assessment. Share your details and we will arrange a consultation to discuss what may be suitable.'
        })}
      />

      <ImmersiveCta
        eyebrow={t('panchakarmaPage.ctaEyebrow', { defaultValue: 'Also worth reading' })}
        heading={t('panchakarmaPage.ctaHeading', {
          defaultValue: 'What to Expect\nBefore You Arrive.'
        })}
        text={t('panchakarmaPage.ctaText', {
          defaultValue:
            'Our journal covers preparation, aftercare, cost and the questions worth asking any Panchakarma centre.'
        })}
        image={img.nature}
        alt="Green herbal leaves floating on still dark water at dawn"
        primary={{
          label: t('panchakarmaPage.ctaPrimary', { defaultValue: 'Read the Insights' }),
          to: '/blog'
        }}
        secondary={{
          label: t('panchakarmaPage.ctaSecondary', { defaultValue: 'View Programs' }),
          to: '/programs'
        }}
      />
    </>
  );
}