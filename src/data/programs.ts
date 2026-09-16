import { img } from './images';

export interface Program {
  slug: string;
  name: string;
  duration: string;
  price: string;
  priceLabel: string;
  intro: string;
  inclusionsLabel: string;
  inclusions: string[];
  note?: string;
  journey?: string[];
  image: string;
  alt: string;
  cta: string;
}

export const programs: Program[] = [
{
  slug: 'consultation',
  name: 'Ayurvedic Wellness Consultation',
  duration: 'Single session',
  price: '₹1,000',
  priceLabel: '',
  intro:
  'The starting point of every journey at One Wellness. An unhurried conversation about your routine, your concerns and what balance would look like for you.',
  inclusionsLabel: 'Includes',
  inclusions: [
  'Initial consultation',
  'Ayurvedic assessment',
  'Lifestyle discussion',
  'Wellness recommendations',
  'Personalised therapy suggestions'],

  image: img.consultation,
  alt: 'An Ayurvedic practitioner in conversation with a visitor during a wellness consultation',
  cta: 'Book Consultation'
},
{
  slug: '3-day-rejuvenation',
  name: '3-Day Ayurvedic Rejuvenation Experience',
  duration: '3 days',
  price: '₹7,500',
  priceLabel: 'Starting From',
  intro:
  'A short, restorative pause. Suited to those who want to experience traditional Ayurvedic therapy within a compact schedule.',
  inclusionsLabel: 'May include',
  inclusions: [
  'Ayurvedic consultation',
  'Abhyanga',
  'Swedana',
  'Shirodhara',
  'Relaxation therapies',
  'Lifestyle guidance'],

  note: 'Final therapy selection depends on consultation.',
  image: img.oilPreparation,
  alt: 'Warm herbal oil being poured from a brass vessel during Ayurvedic preparation',
  cta: 'Enquire About This Program'
},
{
  slug: '7-day-retreat',
  name: '7-Day Ayurvedic Wellness Retreat',
  duration: '7 days',
  price: '₹18,000',
  priceLabel: 'Starting From',
  intro:
  'A week structured around routine as much as therapy — enough time for daily rhythm, nutrition and rest to become part of the experience.',
  inclusionsLabel: 'May include',
  inclusions: [
  'Ayurvedic consultation',
  'Personalised therapy schedule',
  'Abhyanga',
  'Swedana',
  'Shirodhara',
  'Selected Ayurvedic procedures',
  'Dietary guidance',
  'Daily wellness routine',
  'Progress review'],

  image: img.treatmentRoom,
  alt: 'A calm contemporary Ayurvedic treatment room with natural light and teak joinery',
  cta: 'Enquire About This Program'
},
{
  slug: '14-day-panchakarma',
  name: '14-Day Panchakarma Wellness Program',
  duration: '14 days',
  price: '₹40,000',
  priceLabel: 'Starting From',
  intro:
  'A longer, phased program in which preparation, therapy and rest each receive the time traditionally given to them.',
  inclusionsLabel: 'The journey',
  inclusions: [],
  journey: [
  'Consultation',
  'Preparation',
  'Selected Panchakarma Procedures',
  'Rest',
  'Rejuvenation',
  'Follow-Up'],

  note: 'The exact therapies and duration are determined individually.',
  image: img.pizhichil,
  alt: 'Warm medicated oil poured during a traditional Ayurvedic therapy',
  cta: 'Enquire About This Program'
},
{
  slug: '21-day-panchakarma',
  name: '21-Day Complete Panchakarma Journey',
  duration: '21 days',
  price: '₹65,000',
  priceLabel: 'Starting From',
  intro:
  'The most complete expression of our approach — planned in detail, paced slowly and reviewed throughout.',
  inclusionsLabel: 'May include',
  inclusions: [
  'Detailed Ayurvedic consultation',
  'Individual therapy planning',
  'Preparatory therapies',
  'Selected Panchakarma procedures',
  'Daily Ayurvedic therapies',
  'Diet and lifestyle guidance',
  'Rest and recovery',
  'Rejuvenation therapies',
  'Follow-up consultation'],

  note:
  'Accommodation, medicines and additional procedures, if applicable, may be charged separately.',
  image: img.retreat,
  alt: 'A contemporary wellness retreat building at dusk with a still reflecting pool',
  cta: 'Enquire About This Program'
}];