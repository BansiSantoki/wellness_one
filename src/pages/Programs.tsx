import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { ProgramsShowcase } from '../components/sections/ProgramsShowcase';
import { JourneyTimeline } from '../components/sections/JourneyTimeline';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';

export function Programs() {
  const { t } = useTranslation();

  useSeo({
    title: `${t('programsPage.heroEyebrow', { defaultValue: 'Programs' })} | One Wellness Clinic & Research Center | Nashik`,
    description: t('programsPage.heroLede', {
      defaultValue:
        'Ayurvedic wellness programs in Nashik from a single consultation to a 21-day Panchakarma journey. Indicative inclusions and pricing, personalised after assessment.'
    }),
    path: '/programs',
    image: img.retreat
  });

  return (
    <>
      <PageHero
        eyebrow={t('programsPage.heroEyebrow', { defaultValue: 'Programs' })}
        title={t('programsPage.heroTitle', { defaultValue: 'Choose Your Journey' })}
        lede={t('programsPage.heroLede', {
          defaultValue:
            'Five programs, from a single consultation to a twenty-one day Panchakarma journey. Each is planned individually — the inclusions listed are indicative rather than fixed.'
        })}
        image={img.retreat}
        alt="A contemporary Ayurvedic wellness retreat exterior at dusk"
        variant="band"
        meta={[
          {
            label: t('programsPage.meta.consultationLabel', { defaultValue: 'Consultation' }),
            value: t('programsPage.meta.consultationValue', { defaultValue: '₹1,000' })
          },
          {
            label: t('programsPage.meta.shortProgramsLabel', { defaultValue: 'Short programs' }),
            value: t('programsPage.meta.shortProgramsValue', { defaultValue: 'From ₹7,500' })
          },
          {
            label: t('programsPage.meta.day14Label', { defaultValue: '14-day program' }),
            value: t('programsPage.meta.day14Value', { defaultValue: 'From ₹40,000' })
          },
          {
            label: t('programsPage.meta.day21Label', { defaultValue: '21-day journey' }),
            value: t('programsPage.meta.day21Value', { defaultValue: 'From ₹65,000' })
          }
        ]}
      />

      <ProgramsShowcase />
      <JourneyTimeline />
      <ConsultationForm
        eyebrow={t('programsPage.formEyebrow', { defaultValue: 'Enquire' })}
        heading={t('programsPage.formHeading', {
          defaultValue: 'Which Program\nFits Your Circumstances?'
        })}
        intro={t('programsPage.formIntro', {
          defaultValue:
            'Tell us a little about what you are looking for and when you are free. We will suggest which programs may be appropriate and what the consultation would cover.'
        })}
      />

      <WhatsAppSection />
    </>
  );
}