import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { InstagramIcon, MailIcon, PhoneIcon, MapPinIcon, MessageSquareIcon } from 'lucide-react';
import { localNav } from '../../data/navigation';
import { site, whatsappLink, telLink, bookAppointmentWhatsappLink, DISCLAIMER } from '../../config/site';
import logoImg from '../../assets/logo.png';
import doctorImg from '../../assets/dr_shubham_mahajan.jpg';
import { useBooking } from '../../context/BookingContext';

const exploreLinks = [
  { key: 'nav.about', label: 'About', to: '/about' },
  { key: 'nav.panchakarma', label: 'Panchakarma', to: '/panchakarma' },
  { key: 'nav.therapies', label: 'Therapies', to: '/therapies' },
  { key: 'nav.programs', label: 'Programs', to: '/programs' },
  { key: 'nav.rejuvenation', label: 'Rejuvenation', to: '/rejuvenation' },
  { key: 'nav.wellness', label: 'Wellness', to: '/wellness' },
  { key: 'nav.faqs', label: 'FAQs', to: '/faq' },
  { key: 'nav.contact', label: 'Contact', to: '/contact' }
];

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const { openBooking } = useBooking();

  return (
    <footer className="bg-[#0A1D16] text-[#FCFAF4] border-t border-[#B08D4F]/20">
      <div className="mx-auto max-w-edge px-5 pb-8 pt-10 sm:px-8 sm:pt-12 lg:px-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5">
            <Link to="/#home" className="relative inline-block transition-transform duration-300 hover:scale-[1.02]">
              <div className="rounded-full border border-[#D3B67C]/40 bg-white/95 p-1.5 shadow-[0_0_20px_rgba(211,182,124,0.25)]">
                <img
                  src={logoImg}
                  alt="One Wellness Clinic & Research Center"
                  className="relative z-10 h-16 w-16 object-contain sm:h-20 sm:w-20 drop-shadow-sm"
                />
              </div>
            </Link>

            <p className="mt-3.5 text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-[#D3B67C]">
              {site.brand}
            </p>
            <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-[#FCFAF4]/60">
              {t('site.division', 'Panchakarma & Ayurvedic Wellness Division')} • {t('site.city', 'Nashik')}, India
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#93A893]">
              {t('common.step', 'Ayurveda')} • {t('nav.panchakarma', 'Panchakarma')} • {t('nav.rejuvenation', 'Rejuvenation')} • {t('nav.wellness', 'Wellness')}
            </p>

            <p className="mt-3.5 max-w-md text-sm leading-relaxed text-[#FCFAF4]/70">
              {t('site.shortDescription', site.shortDescription)}
            </p>

            <p className="mt-3 font-serif text-base italic text-[#D3B67C]">
              {t('home.hero.subtitle', '“Infinite Care. Holistic Healing.”')}
            </p>

            {/* Social & Review Links */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow Us on Instagram"
                className="inline-flex items-center gap-2.5 rounded-none border border-[#D3B67C]/50 bg-[#D3B67C]/15 px-4 py-2 text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#D3B67C] transition-all duration-300 hover:bg-[#D3B67C] hover:text-[#0A1D16]"
              >
                <InstagramIcon className="h-4 w-4" aria-hidden="true" />
                <span>{t('contactPage.leadPractitioner', 'Instagram') === 'Instagram' ? 'Follow Us on Instagram' : 'Instagram'}</span>
              </a>

              <a
                href={site.justdial}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Review One Wellness on Justdial"
                className="inline-flex items-center gap-2.5 rounded-none border border-[#FF6B00]/40 bg-[#FF6B00]/10 px-4 py-2 text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#FF9E4A] transition-all duration-300 hover:bg-[#FF6B00] hover:text-white"
              >
                <span className="flex h-4 px-1 items-center justify-center rounded-xs bg-[#FF6B00] text-[9px] font-bold text-white">
                  JD
                </span>
                <span>Justdial</span>
              </a>
            </div>
          </div>

          {/* MIDDLE COLUMN: EXPLORE */}
          <nav aria-label="Footer Navigation" className="lg:col-span-3">
            <h2 className="text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#D3B67C]">
              {t('about.introEyebrow', 'Explore') === 'Explore' ? 'Explore' : t('about.introEyebrow', 'Explore')}
            </h2>
            <ul className="mt-4 space-y-2">
              {exploreLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm font-sans text-[#FCFAF4]/80 transition-colors duration-300 hover:text-[#D3B67C]"
                  >
                    {t(item.key, item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT COLUMN: GET IN TOUCH & ACTION BUTTONS */}
          <div className="lg:col-span-4">
            <h2 className="text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#D3B67C]">
              {t('contactPage.getInTouch', 'Get in Touch')}
            </h2>
            
            <address className="mt-4 space-y-2.5 not-italic text-sm text-[#FCFAF4]/80 font-sans">
              <p className="flex gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#93A893]" aria-hidden="true" />
                <span className="leading-relaxed">
                  {site.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-1 inline-block text-[10px] uppercase tracking-wider text-[#D3B67C] underline underline-offset-4 hover:text-white"
                  >
                    {t('contactPage.viewLocationMap', 'View location on Google Maps')}
                  </a>
                </span>
              </p>

              <p className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 shrink-0 text-[#93A893]" aria-hidden="true" />
                <a href={telLink()} className="transition-colors hover:text-[#D3B67C]">
                  {site.phone}
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 shrink-0 text-[#93A893]" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-[#D3B67C]">
                  {site.email}
                </a>
              </p>
            </address>

            {/* Doctor & Professional Details */}
            <div className="mt-4 border-t border-[#FCFAF4]/10 pt-3 text-xs">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#D3B67C] font-semibold">
                {t('about.clinicalTeamHeading', 'Ayurvedic Clinical Leadership')}
              </p>
              <div className="mt-2.5 flex items-center gap-3">
                <img
                  src={doctorImg}
                  alt={site.doctor.name}
                  className="h-14 w-14 shrink-0 rounded-full object-cover border-2 border-[#D3B67C] shadow-[0_0_12px_rgba(211,182,124,0.35)]"
                />
                <div>
                  <p className="font-serif text-[0.95rem] text-white font-medium">
                    {site.doctor.name}{' '}
                    <span className="text-xs font-sans text-[#D3B67C]">
                      ({site.doctor.qualifications})
                    </span>
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#FCFAF4]/70">
                    {t('about.founderProfession', site.doctor.profession)}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wider text-[#93A893]">
                    {t('about.fields.registrationNumber', 'Registration Number')}: {site.doctor.registrationNumber}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={bookAppointmentWhatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
                className="h-10 px-6 bg-[#B08D4F] text-[#102A20] text-[11px] font-sans font-bold uppercase tracking-[0.12em] flex items-center justify-center transition-all duration-300 hover:bg-[#D3B67C]"
              >
                {t('home.hero.bookAppointment', 'Book Appointment')}
              </a>
              
              <button
                type="button"
                onClick={() => openBooking()}
                className="h-10 px-6 border border-[#FCFAF4]/30 text-[#FCFAF4] text-[11px] font-sans font-medium uppercase tracking-[0.12em] flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#FCFAF4]/10 hover:border-[#D3B67C]"
              >
                <MessageSquareIcon className="h-4 w-4 text-[#D3B67C]" />
                <span>{t('nav.bookConsultation', 'Quick Enquiry')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Nashik Local Links */}
        <div className="mt-8 border-t border-[#FCFAF4]/10 pt-5">
          <h2 className="text-[10px] uppercase tracking-widest text-[#D3B67C]">
            {t('home.hero.location', 'Nashik, Maharashtra')} • One Wellness Clinic &amp; Research Center
          </h2>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
            {localNav.map((item) => {
              const slug = item.to.replace('/nashik/', '');
              const translatedH1 = t(`localPagesData.${slug}.h1`, item.label);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-xs text-[#FCFAF4]/60 transition-colors duration-300 hover:text-[#D3B67C]"
                  >
                    {translatedH1}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="mt-5 border-t border-[#FCFAF4]/10 pt-4">
          <h2 className="text-[10px] uppercase tracking-wider text-[#FCFAF4]/50">{t('common.disclaimerTitle', 'Disclaimer')}</h2>
          <p className="mt-1.5 max-w-4xl text-xs leading-relaxed text-[#FCFAF4]/45">{t('common.disclaimerText', DISCLAIMER)}</p>
        </div>

        {/* Footer Bottom bar */}
        <div className="mt-5 flex flex-col gap-3 border-t border-[#FCFAF4]/10 pt-4 text-[11px] text-[#FCFAF4]/50 sm:flex-row sm:items-center sm:justify-between font-sans">
          <p>
            {t('common.copyright', { year, defaultValue: `© ${year} One Wellness Clinic & Research Center. All rights reserved.` })}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/privacy" className="transition-colors hover:text-[#D3B67C]">
                {t('common.privacyPolicy', 'Privacy Policy')}
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition-colors hover:text-[#D3B67C]">
                {t('common.terms', 'Terms')}
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="transition-colors hover:text-[#D3B67C]">
                {t('common.disclaimer', 'Disclaimer')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}