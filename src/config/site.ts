/**
 * Centralised business configuration.
 * Update these values in ONE place — every page, link and CTA reads from here.
 * Values marked PLACEHOLDER have not been supplied yet and should be replaced
 * with the real business details before launch.
 */

export interface SiteConfig {
  brand: string;
  division: string;
  positioning: string[];
  tagline: string;
  shortDescription: string;
  city: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  website: string;
  websiteUrl: string;
  doctor: {
    name: string;
    qualifications: string;
    profession: string;
    registrationNumber: string;
  };
  address: {
    shop: string;
    building: string;
    locality: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    formatted: string;
  };
  addressLines: string[];
  mapsUrl: string;
  instagram: string;
  justdial: string;
  workingHours: { days: string; hours: string }[];
  /** Optional hero background video URL (mp4). Leave empty to use the still image. */
  heroVideoUrl: string;
}

export const site: SiteConfig = {
  brand: 'One Wellness Clinic & Research Center',
  division: 'Panchakarma & Ayurvedic Wellness Division',
  positioning: ['AYURVEDA', 'PANCHAKARMA', 'REJUVENATION', 'WELLNESS'],
  tagline: 'Restore Balance. Reconnect With Wellness.',
  shortDescription:
    'A personalised Ayurvedic wellness experience inspired by traditional principles and designed for modern lifestyles.',
  city: 'Nashik',

  doctor: {
    name: 'Dr. Shubham Mahajan',
    qualifications: 'BAMS, DYS',
    profession: 'Ayurveda Consultant and Agnikarma Specialist',
    registrationNumber: 'I-124470-A'
  },

  phone: '+91 9175893553',
  whatsapp: '919175893553',
  whatsappMessage:
    'Hello, I would like to know more about your Panchakarma and Ayurvedic wellness programs.',
  email: '1wellnessclinic@gmail.com',
  website: 'www.1wellnessclinic.in',
  websiteUrl: 'https://www.1wellnessclinic.in',
  address: {
    shop: 'Shop No. 7071, 7th Floor',
    building: 'Roongtha Shopping Hub',
    locality: 'Indira Nagar',
    landmark: 'Agra-Mumbai Highway',
    city: 'Nashik',
    state: 'Maharashtra',
    pincode: '422009',
    country: 'India',
    formatted:
      'Shop No. 7071, 7th Floor, Roongtha Shopping Hub, Indira Nagar, Agra-Mumbai Highway, Nashik, Maharashtra 422009, India'
  },
  addressLines: [
    'Shop No. 7071, 7th Floor, Roongtha Shopping Hub',
    'Indira Nagar, Agra-Mumbai Highway',
    'Nashik, Maharashtra 422009, India'
  ],
  mapsUrl: 'https://maps.app.goo.gl/4WWpYQcaRed2tqJEA?g_st=awb',
  instagram: 'https://www.instagram.com/onewellness.in/',
  justdial:
    'https://www.justdial.com/Nashik/One-Wellness-Clinic---Research-Centre-Indira-Nagar-Nashik/0253PX253-X253-260720175456-R3W1_BZDET/writereview?&utm_campaign=BIZQR&utm_medium=referral&utm_source=QR_Code&via=scode',

  workingHours: [
    { days: 'Monday – Saturday', hours: '09:00 AM – 07:00 PM' },
    { days: 'Sunday', hours: 'By appointment' }
  ],

  heroVideoUrl: ''
};

export const OFFICIAL_APPOINTMENT_MESSAGE =
  'Hello, I would like to book an appointment with Dr. Shubham Mahajan at One Wellness Clinic.';

export const bookAppointmentWhatsappLink = (
  message: string = OFFICIAL_APPOINTMENT_MESSAGE
): string => `https://wa.me/919175893553?text=${encodeURIComponent(message)}`;

export const whatsappLink = (message: string = site.whatsappMessage): string =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = (): string => `tel:${site.phone.replace(/[^0-9+]/g, '')}`;

export const mailLink = (): string => `mailto:${site.email}`;

export const websiteLink = (): string => site.websiteUrl;

export const DISCLAIMER =
  'Disclaimer: The information provided on this website is intended for general educational and wellness purposes and should not be considered a substitute for professional medical advice, diagnosis or treatment. Panchakarma and Ayurvedic therapies are traditional practices and may not be appropriate for everyone. Individual therapy selection, duration and suitability are determined following consultation with a qualified practitioner. Results and experiences may vary.';