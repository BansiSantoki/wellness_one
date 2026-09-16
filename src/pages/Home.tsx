import React from 'react';
import { Hero } from '../components/home/Hero';
import { IntroEditorial } from '../components/home/IntroEditorial';
import { ProgramsPreview } from '../components/home/ProgramsPreview';
import { PhilosophyJourney } from '../components/sections/PhilosophyJourney';
import { TrustStrip } from '../components/sections/TrustStrip';
import { PanchakarmaFeature } from '../components/sections/PanchakarmaFeature';
import { JourneyTimeline } from '../components/sections/JourneyTimeline';
import { TherapyGallery } from '../components/sections/TherapyGallery';
import { RejuvenationTiles } from '../components/sections/RejuvenationTiles';
import { ModernLifestyle } from '../components/sections/ModernLifestyle';
import { DietLifestyle } from '../components/sections/DietLifestyle';
import { RightForYou } from '../components/sections/RightForYou';
import { WhyOneWellness } from '../components/sections/WhyOneWellness';
import { InsightsPreview } from '../components/sections/InsightsPreview';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { ImmersiveCta } from '../components/sections/ImmersiveCta';
import { Testimonials } from '../components/sections/Testimonials';
import { JsonLd } from '../components/ui/JsonLd';
import { useSeo } from '../utils/seo';
import { site } from '../config/site';
import { img } from '../data/images';

export function Home() {
  useSeo({
    title: 'Panchakarma & Ayurvedic Wellness Clinic in Nashik | One Wellness',
    description:
    'Experience personalised Panchakarma, Ayurvedic therapies, rejuvenation and holistic wellness at One Wellness Clinic & Research Center in Nashik. Book an Ayurvedic consultation today.',
    path: '/',
    image: img.hero
  });

  return (
    <>
      <JsonLd
        id="ld-organisation"
        data={{
          '@context': 'https://schema.org',
          '@type': 'HealthAndBeautyBusiness',
          name: site.brand,
          description: site.shortDescription,
          address: {
            '@type': 'PostalAddress',
            addressLocality: site.city,
            addressRegion: 'Maharashtra',
            addressCountry: 'IN'
          },
          telephone: site.phone,
          email: site.email,
          image: img.hero,
          areaServed: 'Nashik',
          makesOffer: [
          { '@type': 'Offer', name: 'Ayurvedic Wellness Consultation' },
          { '@type': 'Offer', name: 'Panchakarma Wellness Program' },
          { '@type': 'Offer', name: 'Ayurvedic Rejuvenation Program' }]

        }} />
      
      <Hero />
      <IntroEditorial />
      <PhilosophyJourney />
      <TrustStrip />
      <PanchakarmaFeature />
      <JourneyTimeline />
      <TherapyGallery limit={6} showAllLink />
      <ProgramsPreview />
      <RejuvenationTiles />
      <ModernLifestyle />
      <DietLifestyle />
      <RightForYou />
      <WhyOneWellness />
      <Testimonials />
      <InsightsPreview />
      <ConsultationForm />
      <WhatsAppSection />
      <ImmersiveCta
        heading={'Begin With a Conversation,\nNot a Package.'}
        text="Your Ayurvedic consultation is where the journey starts — an unhurried assessment before anything is recommended."
        image={img.retreat}
        alt="A contemporary wellness retreat exterior at dusk with a still reflecting pool"
        secondary={{ label: 'Discover Panchakarma', to: '/panchakarma' }} />
      
    </>);

}