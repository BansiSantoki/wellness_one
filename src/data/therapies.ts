import { img } from './images';

export interface Therapy {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  duration: string;
  priceFrom: string;
  image: string;
  alt: string;
  /** Layout weight used by the editorial gallery. */
  scale: 'tall' | 'wide' | 'square';
}

export const therapies: Therapy[] = [
{
  slug: 'abhyanga',
  name: 'Abhyanga',
  subtitle: 'Traditional Ayurvedic Oil Massage',
  description:
  'A full-body application of warm herbal oil, performed with rhythmic strokes. Traditionally associated with relaxation, nourishment of the skin and a sense of ease in the body.',
  duration: '45–60 minutes',
  priceFrom: '₹1,500',
  image: img.abhyanga,
  alt: 'Therapist applying warm herbal oil during a traditional Abhyanga Ayurvedic massage',
  scale: 'tall'
},
{
  slug: 'shirodhara',
  name: 'Shirodhara',
  subtitle: 'A Traditional Ayurvedic Relaxation Therapy',
  description:
  'A continuous, gentle stream of warm liquid poured over the forehead. Traditionally offered as a deeply calming therapy within Ayurvedic wellness programs.',
  duration: '45–60 minutes',
  priceFrom: '₹1,800',
  image: img.shirodhara,
  alt: 'Warm oil streaming from a copper vessel onto the forehead during Shirodhara therapy',
  scale: 'wide'
},
{
  slug: 'swedana',
  name: 'Swedana',
  subtitle: 'Ayurvedic Herbal Steam Therapy',
  description:
  'Herbal steam applied to the body, usually following oil application. Commonly included as a supportive procedure within a wider therapy plan.',
  duration: '15–20 minutes',
  priceFrom: '₹500',
  image: img.swedana,
  alt: 'Traditional wooden Ayurvedic steam chamber with herbal steam rising',
  scale: 'tall'
},
{
  slug: 'pindasweda',
  name: 'Pindasweda / Patra Pinda Sweda',
  subtitle: 'Herbal Poultice Therapy',
  description:
  'Warm poultices prepared with selected herbs or medicated preparations are applied over the body. Selection depends on the individual wellness plan.',
  duration: '45–60 minutes',
  priceFrom: '₹2,000',
  image: img.pindasweda,
  alt: 'Herbal poultice bundles tied in cotton cloth resting beside loose Ayurvedic herbs',
  scale: 'square'
},
{
  slug: 'pizhichil',
  name: 'Pizhichil',
  subtitle: 'Traditional Ayurvedic Oil Therapy',
  description:
  'A generous, continuous pouring of warm medicated oil combined with gentle massage. Traditionally regarded as one of the more elaborate Ayurvedic therapies.',
  duration: '60–75 minutes',
  priceFrom: '₹2,500',
  image: img.pizhichil,
  alt: 'Warm medicated oil being squeezed from cloth during Pizhichil therapy',
  scale: 'wide'
},
{
  slug: 'kati-basti',
  name: 'Kati Basti',
  subtitle: 'Localised Ayurvedic Oil Therapy',
  description:
  'Warm oil is retained over the lower back within a prepared herbal boundary for a defined period, as guided by the practitioner.',
  duration: '30–45 minutes',
  priceFrom: '₹1,200',
  image: img.katiBasti,
  alt: 'Warm herbal oil retained within a dough ring on the lower back during Kati Basti',
  scale: 'tall'
},
{
  slug: 'janu-basti',
  name: 'Janu Basti',
  subtitle: 'Traditional Knee-Focused Ayurvedic Therapy',
  description:
  'A localised oil therapy directed at the knee region, offered according to suitability determined at consultation.',
  duration: '30–45 minutes',
  priceFrom: '₹1,200',
  image: img.januBasti,
  alt: 'Warm herbal oil held over the knee during a traditional Janu Basti therapy',
  scale: 'square'
},
{
  slug: 'nasya',
  name: 'Nasya',
  subtitle: 'Traditional Nasal Ayurvedic Procedure',
  description:
  'A traditional procedure involving the nasal passage, performed only where considered appropriate following assessment.',
  duration: '20–30 minutes',
  priceFrom: '₹800',
  image: img.nasya,
  alt: 'Brass dropper vessel and medicated oil prepared for a traditional Nasya procedure',
  scale: 'tall'
},
{
  slug: 'udwarthana',
  name: 'Udwarthana',
  subtitle: 'Ayurvedic Herbal Powder Massage',
  description:
  'A dry or semi-dry massage using herbal powders, applied with upward strokes. Traditionally described as invigorating.',
  duration: '45–60 minutes',
  priceFrom: '₹1,800',
  image: img.udwarthana,
  alt: 'Coarse Ayurvedic herbal powder in a clay bowl prepared for Udwarthana massage',
  scale: 'wide'
}];