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
  addressLines: string[];
  mapsUrl: string;
  instagram: string;
  facebook: string;
  youtube: string;
  workingHours: {days: string;hours: string;}[];
  /** Optional hero background video URL (mp4). Leave empty to use the still image. */
  heroVideoUrl: string;
}

export const site: SiteConfig = {
  brand: 'One Wellness Clinic & Research Center',
  division: 'Panchakarma & Ayurvedic Wellness Division',
  positioning: ['Ayurveda', 'Panchakarma', 'Rejuvenation', 'Traditional Wellness'],
  tagline: 'Restore Balance. Reconnect With Wellness.',
  shortDescription:
  'A personalised Ayurvedic wellness experience inspired by traditional principles and designed for modern lifestyles.',
  city: 'Nashik',

  // PLACEHOLDER — replace with the clinic's published contact details
  phone: '+91 00000 00000',
  whatsapp: '910000000000',
  whatsappMessage:
    'Hello, I would like to know more about your Panchakarma and Ayurvedic wellness programs.',
  email: 'hello@parc.example',
  addressLines: ['PARC Clinic & Research Center', 'Address line to be updated', 'Nashik, Maharashtra, India'],
  mapsUrl: 'https://maps.google.com/?q=Nashik',
  instagram: '#',
  facebook: '#',
  youtube: '#',

  workingHours: [
  { days: 'Monday – Saturday', hours: 'Timings to be updated' },
  { days: 'Sunday', hours: 'By appointment' }],


  heroVideoUrl: ''
};

export const whatsappLink = (message: string = site.whatsappMessage): string =>
`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = (): string => `tel:${site.phone.replace(/\s/g, '')}`;

export const DISCLAIMER =
'The information provided on this website is intended for general educational and wellness purposes and should not be considered a substitute for professional medical advice, diagnosis or treatment. Panchakarma and Ayurvedic therapies are traditional practices and may not be appropriate for everyone. Individual therapy selection, duration and suitability are determined following consultation with a qualified practitioner. Results and experiences may vary.';