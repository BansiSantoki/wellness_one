import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { TherapyGallery } from '../components/sections/TherapyGallery';
import { RightForYou } from '../components/sections/RightForYou';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { ImmersiveCta } from '../components/sections/ImmersiveCta';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';
import { therapies } from '../data/therapies';

export function Therapies() {
  useSeo({
    title: 'Traditional Ayurvedic Therapies in Nashik | One Wellness',
    description:
    'Explore traditional Ayurvedic therapies at One Wellness in Nashik — Abhyanga, Shirodhara, Swedana, Pizhichil, Kati Basti and more, selected after consultation.',
    path: '/therapies',
    image: img.abhyanga
  });

  return (
    <>
      <PageHero
        eyebrow="Therapies"
        title="Traditional Ayurvedic Therapies"
        lede="Nine traditional therapies, each offered according to the individual's consultation and wellness plan. Durations and starting prices are indicative."
        image={img.abhyanga}
        alt="Warm herbal oil applied during a traditional Abhyanga Ayurvedic massage"
        meta={[
        { label: 'Therapies offered', value: String(therapies.length) },
        { label: 'Starting from', value: '₹500' }]
        } />
      
      <div className="pt-6" />
      <TherapyGallery
        heading="Selected Individually, Never From a Menu"
        intro="At One Wellness, Ayurvedic therapies are selected according to the individual's consultation and wellness plan. Several are traditionally offered in sequence rather than alone." />
      
      <RightForYou />
      <WhatsAppSection />
      <ImmersiveCta
        eyebrow="Next step"
        heading={'Unsure Which Therapy\nApplies to You?'}
        text="That is the usual position, and the reason consultation comes first. Tell us what you are looking for and we will explain what may be appropriate."
        image={img.shirodhara}
        alt="Warm oil streaming from a copper vessel during Shirodhara therapy"
        secondary={{ label: 'Explore Programs', to: '/programs' }} />
      
    </>);

}