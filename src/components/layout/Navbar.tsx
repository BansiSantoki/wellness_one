import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { primaryNav } from '../../data/navigation';
import { site, whatsappLink } from '../../config/site';

interface NavbarProps {
  /** Pages that open on a dark image need the transparent treatment at rest. */
  overDark: boolean;
}

export function Navbar({ overDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const light = overDark && !scrolled;
  const shellClasses = scrolled ?
  'bg-ivory/88 backdrop-blur-md border-b border-ink/10' :
  overDark ?
  'bg-transparent border-b border-transparent' :
  'bg-ivory border-b border-ink/10';

  const textColor = light ? 'text-ivory' : 'text-ink';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ease-calm ${shellClasses}`}>
        
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-edge items-center justify-between gap-6 px-5 py-5 sm:px-8 lg:px-14">
          
          <Link to="/" className={`group flex items-center leading-none ${textColor}`}>
            <img
              src="/logo.png"
              alt="PARC logo"
              className={`h-16 w-auto object-contain sm:h-20 lg:h-24 transition-all duration-300 ${
                light ? 'drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)] filter' : ''
              }`}
            />
          </Link>

          <ul className="hidden items-center gap-7 xl:flex">
            {primaryNav.map((item) =>
            <li key={item.to}>
                <NavLink
                to={item.to}
                className={({ isActive }) =>
                `group relative block text-[11px] font-medium uppercase tracking-wide2 transition-opacity duration-300 ${textColor} ${
                isActive ? 'opacity-100' : 'opacity-65 hover:opacity-100'}`

                }>
                
                  {({ isActive }) =>
                <>
                      {item.label}
                      <span
                    className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-current transition-transform duration-500 ease-calm ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`
                    }
                    aria-hidden="true" />
                  
                    </>
                }
                </NavLink>
              </li>
            )}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/consultation"
              className={`hidden px-6 py-3 text-[10px] font-medium uppercase tracking-wide2 transition-colors duration-300 ease-calm lg:inline-block ${
              light ?
              'border border-ivory/50 text-ivory hover:bg-ivory hover:text-ink' :
              'bg-forest text-ivory hover:bg-pine'}`
              }>
              
              Book Consultation
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className={`flex items-center gap-2 py-2 text-[10px] uppercase tracking-label xl:hidden ${textColor}`}>
              
              <span className="hidden sm:inline">Menu</span>
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen ?
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-pine text-ivory"
          initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
          animate={reduce ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
          exit={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu">
          
            <div className="flex items-center justify-between px-5 py-5 sm:px-8">
              <img
                src="/logo.png"
                alt="PARC logo"
                className="h-16 w-auto object-contain sm:h-20 drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)] filter"
              />
              <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex items-center gap-2 py-2 text-[10px] uppercase tracking-label text-ivory/70 transition-colors hover:text-ivory">
              
                Close
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col justify-center overflow-y-auto px-5 pb-10 sm:px-8">
            
              <ul>
                {primaryNav.map((item, i) =>
              <motion.li
                key={item.to}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 + i * 0.045, ease: [0.23, 1, 0.32, 1] }}
                className="border-b border-ivory/12">
                
                    <NavLink
                  to={item.to}
                  className="flex items-baseline justify-between gap-4 py-4"
                  onClick={() => setMenuOpen(false)}>
                  
                      <span className="font-display text-[1.9rem] font-light leading-none sm:text-[2.4rem]">
                        {item.label}
                      </span>
                      <span className="text-[10px] tracking-label text-ivory/40">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </NavLink>
                  </motion.li>
              )}
              </ul>

              <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.23, 1, 0.32, 1] }}
              className="mt-10 flex flex-col gap-3">
              
                <Link
                to="/consultation"
                onClick={() => setMenuOpen(false)}
                className="bg-ivory px-6 py-4 text-center text-[11px] font-medium uppercase tracking-wide2 text-ink">
                
                  Book Ayurvedic Consultation
                </Link>
                <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
                className="border border-ivory/40 px-6 py-4 text-center text-[11px] font-medium uppercase tracking-wide2 text-ivory">
                
                  Chat on WhatsApp
                </a>
                <p className="mt-6 text-[11px] leading-relaxed text-ivory/45">
                  {site.division}
                  <br />
                  {site.city}, Maharashtra
                </p>
              </motion.div>
            </nav>
          </motion.div> :
        null}
      </AnimatePresence>
    </>);

}