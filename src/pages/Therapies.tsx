import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { TherapyGallery } from '../components/sections/TherapyGallery';
import { RightForYou } from '../components/sections/RightForYou';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { ImmersiveCta } from '../components/sections/ImmersiveCta';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';
import { therapies } from '../data/therapies';

export function Therapies() {
  const { t } = useTranslation();

  useSeo({
    title: `${t('therapiesPage.heroEyebrow', { defaultValue: 'Therapies' })} | One Wellness Clinic & Research Center | Nashik`,
    description: t('therapiesPage.heroLede', {
      defaultValue:
        'Explore traditional Ayurvedic therapies at One Wellness in Nashik — Abhyanga, Shirodhara, Swedana, Pizhichil, Kati Basti and more, selected after consultation.'
    }),
    path: '/therapies',
    image: img.abhyanga
  });

  return (
    <>
      <PageHero
        eyebrow={t('therapiesPage.heroEyebrow', { defaultValue: 'Therapies' })}
        title={t('therapiesPage.heroTitle', { defaultValue: 'Traditional Ayurvedic Therapies' })}
        lede={t('therapiesPage.heroLede', {
          defaultValue:
            "Nine traditional therapies, each offered according to the individual's consultation and wellness plan. Durations and starting prices are indicative."
        })}
        image={img.abhyanga}
        alt="Warm herbal oil applied during a traditional Abhyanga Ayurvedic massage"
        meta={[
          {
            label: t('therapiesPage.meta.offeredLabel', { defaultValue: 'Therapies offered' }),
            value: String(therapies.length)
          },
          {
            label: t('therapiesPage.meta.startingFromLabel', { defaultValue: 'Starting from' }),
            value: '₹500'
          }
        ]}
      />

      <div className="pt-6" />
      <TherapyGallery
        heading={t('therapiesPage.galleryHeading', {
          defaultValue: 'Selected Individually, Never From a Menu'
        })}
        intro={t('therapiesPage.galleryIntro', {
          defaultValue:
            "At One Wellness, Ayurvedic therapies are selected according to the individual's consultation and wellness plan. Several are traditionally offered in sequence rather than alone."
        })}
      />

      <RightForYou />
      <WhatsAppSection />
      <ImmersiveCta
        eyebrow={t('therapiesPage.ctaEyebrow', { defaultValue: 'Next step' })}
        heading={t('therapiesPage.ctaHeading', {
          defaultValue: 'Unsure Which Therapy\nApplies to You?'
        })}
        text={t('therapiesPage.ctaText', {
          defaultValue:
            'That is the usual position, and the reason consultation comes first. Tell us what you are looking for and we will explain what may be appropriate.'
        })}
        image={img.shirodhara}
        alt="Warm oil streaming from a copper vessel during Shirodhara therapy"
        secondary={{
          label: t('therapiesPage.ctaSecondary', { defaultValue: 'Explore Programs' }),
          to: '/programs'
        }}
      />
    </>
  );
}