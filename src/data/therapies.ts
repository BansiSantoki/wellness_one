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
      'Abhyanga is a traditional Ayurvedic oil massage involving rhythmic application of warm herbal oils. It is traditionally used as a relaxing and nourishing therapy and is commonly incorporated into Ayurvedic wellness and Panchakarma preparation programs.',
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
      'Shirodhara involves the gentle, continuous flow of selected liquid over the forehead as part of a traditional Ayurvedic therapy. It is often chosen as a deeply relaxing wellness experience.',
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
      'Swedana is a traditional Ayurvedic sweating therapy often used as part of selected Ayurvedic treatment protocols.',
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
      'A traditional Ayurvedic therapy involving warmed herbal preparations applied to selected areas of the body.',
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
      'Pizhichil is a traditional Ayurvedic therapy in which warm medicated oil is gently poured over the body while being accompanied by therapeutic massage techniques.',
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
      'Kati Basti is a traditional Ayurvedic procedure involving retention of warm herbal oil over the lower back region using a specially prepared herbal dough ring.',
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
      'Janu Basti is a localised Ayurvedic procedure involving the retention of warm herbal oil around the knee region.',
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
      'Nasya is a classical Ayurvedic procedure involving administration of selected substances through the nasal route under appropriate supervision.',
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
      'Udwarthana is a traditional Ayurvedic massage using herbal powders. It is commonly incorporated into wellness and body-care programs.',
    duration: '45–60 minutes',
    priceFrom: '₹1,800',
    image: img.udwarthana,
    alt: 'Coarse Ayurvedic herbal powder in a clay bowl prepared for Udwarthana massage',
    scale: 'wide'
  }
];