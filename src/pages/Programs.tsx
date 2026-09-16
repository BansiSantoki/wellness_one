import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ProgramsShowcase } from '../components/sections/ProgramsShowcase';
import { JourneyTimeline } from '../components/sections/JourneyTimeline';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';

export function Programs() {
  useSeo({
    title: 'Panchakarma & Ayurvedic Wellness Programs in Nashik | One Wellness',
    description:
    'Ayurvedic wellness programs in Nashik from a single consultation to a 21-day Panchakarma journey. Indicative inclusions and pricing, personalised after assessment.',
    path: '/programs',
    image: img.retreat
  });

  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Choose Your Journey"
        lede="Five programs, from a single consultation to a twenty-one day Panchakarma journey. Each is planned individually — the inclusions listed are indicative rather than fixed."
        image={img.retreat}
        alt="A contemporary Ayurvedic wellness retreat exterior at dusk"
        variant="band"
        meta={[
        { label: 'Consultation', value: '₹1,000' },
        { label: 'Short programs', value: 'From ₹7,500' },
        { label: '14-day program', value: 'From ₹40,000' },
        { label: '21-day journey', value: 'From ₹65,000' }]
        } />
      
      <ProgramsShowcase />
      <JourneyTimeline />
      <ConsultationForm
        eyebrow="Enquire"
        heading={'Which Program\nFits Your Circumstances?'}
        intro="Tell us a little about what you are looking for and when you are free. We will suggest which programs may be appropriate and what the consultation would cover." />
      
      <WhatsAppSection />
    </>);

}