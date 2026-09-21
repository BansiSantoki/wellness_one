import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, YoutubeIcon, MailIcon, PhoneIcon, MapPinIcon, MessageSquareIcon } from 'lucide-react';
import { localNav } from '../../data/navigation';
import { site, whatsappLink, telLink, DISCLAIMER } from '../../config/site';
import logoImg from '../../assets/logo.png';
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
              <div className="rounded-[12px] border border-[#F5F0E5]/80 bg-[#0A1D16]/10 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_0_18px_rgba(255,255,255,0.10)]">
                <img
                  src={logoImg}
                  alt="One Wellness Clinic & Research Center"
                  className="relative z-10 h-24 w-auto max-w-[320px] object-contain sm:h-28 lg:h-32 drop-shadow-[0_0_12px_rgba(255,255,255,0.28)]"
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

            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.instagram}
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-[#FCFAF4]/20 text-[#FCFAF4]/70 transition-colors duration-300 hover:border-[#D3B67C] hover:text-[#D3B67C]"
              >
                <InstagramIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.facebook}
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-[#FCFAF4]/20 text-[#FCFAF4]/70 transition-colors duration-300 hover:border-[#D3B67C] hover:text-[#D3B67C]"
              >
                <FacebookIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.youtube}
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center border border-[#FCFAF4]/20 text-[#FCFAF4]/70 transition-colors duration-300 hover:border-[#D3B67C] hover:text-[#D3B67C]"
              >
                <YoutubeIcon className="h-4 w-4" aria-hidden="true" />
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
                <span>
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
            </address>

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