import React from 'react';
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
  useSeo({
    title: 'Panchakarma Clinic in Nashik | Personalised Panchakarma | One Wellness',
    description:
    'Personalised Panchakarma at One Wellness Clinic & Research Center, Nashik. Understand the process, the phases and why every program begins with consultation.',
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
        }} />
      
      <PageHero
        eyebrow="Panchakarma"
        title="A Journey Back to Balance"
        lede="Panchakarma is a phased Ayurvedic process — prepared for, delivered gradually, and followed by rest. At One Wellness it is planned around one person at a time."
        image={img.hero}
        alt="A traditional Ayurvedic therapy room with a carved wooden treatment table in warm light"
        variant="band"
        meta={[
        { label: 'Begins with', value: 'Consultation' },
        { label: 'Phases', value: 'Five' },
        { label: 'Durations', value: '3 – 21 days' },
        { label: 'Selection', value: 'Individual' }]
        } />
      
      <PanchakarmaFeature />
      <PhilosophyJourney />
      <JourneyTimeline />
      <TherapyGallery
        limit={6}
        heading="Therapies That May Form Part of a Program"
        intro="Which of these appear in your schedule — and in what order — is determined by your assessment, not by the program you booked."
        showAllLink />
      
      <RightForYou />
      <ConsultationForm
        eyebrow="Begin"
        heading={'Start With an\nAyurvedic Consultation.'}
        intro="Panchakarma cannot responsibly be recommended before an assessment. Share your details and we will arrange a consultation to discuss what may be suitable." />
      
      <ImmersiveCta
        eyebrow="Also worth reading"
        heading={'What to Expect\nBefore You Arrive.'}
        text="Our journal covers preparation, aftercare, cost and the questions worth asking any Panchakarma centre."
        image={img.nature}
        alt="Green herbal leaves floating on still dark water at dawn"
        primary={{ label: 'Read the Insights', to: '/blog' }}
        secondary={{ label: 'View Programs', to: '/programs' }} />
      
    </>);

}