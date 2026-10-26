import { Link } from 'react-router-dom';
import { InstagramIcon, MailIcon, PhoneIcon, MapPinIcon, MessageSquareIcon, GlobeIcon } from 'lucide-react';
import { localNav } from '../../data/navigation';
import { site, whatsappLink, telLink, DISCLAIMER } from '../../config/site';
import logoImg from '../../assets/logo.png';
import doctorImg from '../../assets/dr_shubham_mahajan.jpg';
import { useBooking } from '../../context/BookingContext';

const exploreLinks = [
  { label: 'About', to: '/about' },
  { label: 'Panchakarma', to: '/panchakarma' },
  { label: 'Therapies', to: '/therapies' },
  { label: 'Programs', to: '/programs' },
  { label: 'Rejuvenation', to: '/rejuvenation' },
  { label: 'Wellness', to: '/wellness' },
  { label: 'FAQs', to: '/faq' },
  { label: 'Contact', to: '/contact' }
];

export function Footer() {
  const year = new Date().getFullYear();
  const { openBooking } = useBooking();

  return (
    <footer className="bg-[#0A1D16] text-[#FCFAF4] border-t border-[#B08D4F]/20">
      <div className="mx-auto max-w-edge px-5 pb-10 pt-16 sm:px-8 sm:pt-20 lg:px-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5">
            <Link to="/#home" className="relative inline-block transition-transform duration-300 hover:scale-[1.02]">
              <div className="rounded-full border border-[#D3B67C]/40 bg-white/95 p-2 shadow-[0_0_20px_rgba(211,182,124,0.25)]">
                <img
                  src={logoImg}
                  alt="One Wellness Clinic & Research Center"
                  className="relative z-10 h-24 w-24 object-contain sm:h-28 sm:w-28 drop-shadow-sm"
                />
              </div>
            </Link>

            <p className="mt-5 text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-[#D3B67C]">
              {site.brand}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#FCFAF4]/60">
              Panchakarma &amp; Ayurvedic Wellness Division • Nashik, India
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#93A893]">
              Ayurveda • Panchakarma • Rejuvenation • Traditional Wellness
            </p>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#FCFAF4]/70">
              {site.shortDescription}
            </p>

            <p className="mt-5 font-serif text-lg italic text-[#D3B67C]">
              “Infinite Care. Holistic Healing.”
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
                <span>Follow Us on Instagram</span>
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
                <span>Review on Justdial</span>
              </a>
            </div>
          </div>

          {/* MIDDLE COLUMN: EXPLORE */}
          <nav aria-label="Footer Navigation" className="lg:col-span-3">
            <h2 className="text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#D3B67C]">
              Explore
            </h2>
            <ul className="mt-6 space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm font-sans text-[#FCFAF4]/80 transition-colors duration-300 hover:text-[#D3B67C]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT COLUMN: GET IN TOUCH & ACTION BUTTONS */}
          <div className="lg:col-span-4">
            <h2 className="text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#D3B67C]">
              Get in Touch
            </h2>
            
            <address className="mt-6 space-y-3.5 not-italic text-sm text-[#FCFAF4]/80 font-sans">
              <p className="flex gap-3">
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
                    className="mt-1.5 inline-block text-[10px] uppercase tracking-wider text-[#D3B67C] underline underline-offset-4 hover:text-white"
                  >
                    View location on map
                  </a>
                </span>
              </p>

              <p className="flex items-center gap-3">
                <PhoneIcon className="h-4 w-4 shrink-0 text-[#93A893]" aria-hidden="true" />
                <a href={telLink()} className="transition-colors hover:text-[#D3B67C]">
                  {site.phone}
                </a>
              </p>

              <p className="flex items-center gap-3">
                <MailIcon className="h-4 w-4 shrink-0 text-[#93A893]" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-[#D3B67C]">
                  {site.email}
                </a>
              </p>

              <p className="flex items-center gap-3">
                <GlobeIcon className="h-4 w-4 shrink-0 text-[#93A893]" aria-hidden="true" />
                <a
                  href={site.websiteUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-[#D3B67C]"
                >
                  {site.website}
                </a>
              </p>
            </address>

            {/* Doctor & Professional Details */}
            <div className="mt-6 border-t border-[#FCFAF4]/10 pt-4 text-xs">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#D3B67C] font-semibold">
                Ayurvedic Consultation &amp; Care
              </p>
              <div className="mt-3 flex items-center gap-3.5">
                <img
                  src={doctorImg}
                  alt={site.doctor.name}
                  className="h-16 w-16 shrink-0 rounded-full object-cover border-2 border-[#D3B67C] shadow-[0_0_12px_rgba(211,182,124,0.35)]"
                />
                <div>
                  <p className="font-serif text-base text-white font-medium">
                    {site.doctor.name}{' '}
                    <span className="text-xs font-sans text-[#D3B67C]">
                      ({site.doctor.qualifications})
                    </span>
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#FCFAF4]/70">
                    {site.doctor.profession}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-[#93A893]">
                    Reg. No: {site.doctor.registrationNumber}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => openBooking()}
                className="h-11 px-6 bg-[#B08D4F] text-[#102A20] text-[11px] font-sans font-bold uppercase tracking-[0.12em] flex items-center justify-center transition-all duration-300 hover:bg-[#D3B67C]"
              >
                BOOK CONSULTATION
              </button>
              
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
                className="h-11 px-6 border border-[#FCFAF4]/30 text-[#FCFAF4] text-[11px] font-sans font-medium uppercase tracking-[0.12em] flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#FCFAF4]/10 hover:border-[#D3B67C]"
              >
                <MessageSquareIcon className="h-4 w-4 text-[#D3B67C]" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>

        {/* Nashik Local Links */}
        <div className="mt-14 border-t border-[#FCFAF4]/10 pt-8">
          <h2 className="text-[10px] uppercase tracking-widest text-[#D3B67C]">
            Panchakarma Clinic in Nashik • Ayurvedic Wellness Centre in Nashik
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {localNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-xs text-[#FCFAF4]/60 transition-colors duration-300 hover:text-[#D3B67C]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 border-t border-[#FCFAF4]/10 pt-6">
          <h2 className="text-[10px] uppercase tracking-wider text-[#FCFAF4]/50">Disclaimer</h2>
          <p className="mt-2 max-w-4xl text-xs leading-relaxed text-[#FCFAF4]/45">{DISCLAIMER}</p>
        </div>

        {/* Footer Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#FCFAF4]/10 pt-6 text-[11px] text-[#FCFAF4]/50 sm:flex-row sm:items-center sm:justify-between font-sans">
          <p>
            © {year} One Wellness Clinic &amp; Research Center. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/privacy" className="transition-colors hover:text-[#D3B67C]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition-colors hover:text-[#D3B67C]">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="transition-colors hover:text-[#D3B67C]">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}