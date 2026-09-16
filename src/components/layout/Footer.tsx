import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, YoutubeIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { footerNav, localNav } from '../../data/navigation';
import { site, whatsappLink, telLink, DISCLAIMER } from '../../config/site';
import logoImg from '../../assets/logo.png';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-pine text-ivory">
      <div className="mx-auto max-w-edge px-5 pb-10 pt-16 sm:px-8 sm:pt-20 lg:px-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={logoImg}
                alt="PARC logo"
                className="h-24 w-auto object-contain sm:h-28 lg:h-32 drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)] filter"
              />
            </Link>
            <p className="mt-4 text-[10px] uppercase tracking-label text-ivory/60">{site.division}</p>
            <p className="mt-3 text-[10px] uppercase tracking-label text-sage">
              {site.positioning.join(' • ')}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/65">
              {site.shortDescription}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={site.instagram}
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-ivory/25 text-ivory/70 transition-colors duration-300 hover:border-ivory hover:text-ivory">
                
                <InstagramIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.facebook}
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-ivory/25 text-ivory/70 transition-colors duration-300 hover:border-ivory hover:text-ivory">
                
                <FacebookIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.youtube}
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center border border-ivory/25 text-ivory/70 transition-colors duration-300 hover:border-ivory hover:text-ivory">
                
                <YoutubeIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="text-[10px] uppercase tracking-label text-ivory/45">Explore</h2>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-ivory/75 transition-colors duration-300 hover:text-ivory">
                  
                  WhatsApp
                </a>
              </li>
              {footerNav.map((item) =>
              <li key={item.to}>
                  <Link
                  to={item.to}
                  className="text-sm text-ivory/75 transition-colors duration-300 hover:text-ivory">
                  
                    {item.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="text-[10px] uppercase tracking-label text-ivory/45">Visit &amp; Contact</h2>
            <address className="mt-6 space-y-4 not-italic text-sm text-ivory/75">
              <p className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                <span>
                  {site.addressLines.map((line) =>
                  <span key={line} className="block">
                      {line}
                    </span>
                  )}
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 inline-block text-[10px] uppercase tracking-label text-ivory/50 underline underline-offset-4 transition-colors hover:text-ivory">
                    
                    View on map
                  </a>
                </span>
              </p>
              <p className="flex items-center gap-3">
                <PhoneIcon className="h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                <a href={telLink()} className="transition-colors hover:text-ivory">
                  {site.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <MailIcon className="h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-ivory">
                  {site.email}
                </a>
              </p>
            </address>

            <dl className="mt-7 space-y-2 text-sm text-ivory/65">
              {site.workingHours.map((h) =>
              <div key={h.days} className="flex justify-between gap-4 border-b border-ivory/10 pb-2">
                  <dt>{h.days}</dt>
                  <dd className="text-ivory/50">{h.hours}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/12 pt-8">
          <h2 className="text-[10px] uppercase tracking-label text-ivory/45">Ayurveda in Nashik</h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {localNav.map((item) =>
            <li key={item.to}>
                <Link
                to={item.to}
                className="text-xs text-ivory/55 transition-colors duration-300 hover:text-ivory">
                
                  {item.label}
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="mt-10 border-t border-ivory/12 pt-8">
          <h2 className="text-[10px] uppercase tracking-label text-ivory/45">Disclaimer</h2>
          <p className="mt-3 max-w-4xl text-xs leading-relaxed text-ivory/45">{DISCLAIMER}</p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ivory/12 pt-6 text-[11px] text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} PARC Clinic &amp; Research Center. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/privacy" className="transition-colors hover:text-ivory">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition-colors hover:text-ivory">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="transition-colors hover:text-ivory">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>);

}