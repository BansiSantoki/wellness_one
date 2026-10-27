import { useEffect, useState, type MouseEvent } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { primaryNav } from '../../data/navigation';
import { site, whatsappLink, bookAppointmentWhatsappLink } from '../../config/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import logoImg from '../../assets/logo.png';

interface NavbarProps {
  /** Pages that open on a dark image need the transparent treatment at rest. */
  overDark: boolean;
}

const navKeyMap: Record<string, string> = {
  '/about': 'nav.about',
  '/panchakarma': 'nav.panchakarma',
  '/therapies': 'nav.therapies',
  '/programs': 'nav.programs',
  '/rejuvenation': 'nav.rejuvenation',
  '/wellness': 'nav.wellness',
  '/faq': 'nav.faqs',
  '/contact': 'nav.contact'
};

export function Navbar({ overDark }: NavbarProps) {
  const { t } = useTranslation();
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

  const shellClasses = scrolled
    ? 'bg-[#FCFAF4] border-b border-[#173D30]/10 shadow-[0_2px_15px_rgba(23,61,48,0.06)]'
    : overDark
    ? 'bg-transparent border-b border-transparent'
    : 'bg-[#FCFAF4] border-b border-[#173D30]/10';

  const textColor = light ? 'text-white' : 'text-[#173D30]';

  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      const elem = document.getElementById('home');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 h-[80px] transition-all duration-300 ease-calm ${shellClasses}`}
      >
        {/* Dark overlay over hero at top for maximum text legibility */}
        {light && (
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-transparent pointer-events-none -z-10"
            aria-hidden="true"
          />
        )}

        <nav
          aria-label="Primary"
          className="mx-auto flex h-full max-w-edge items-center justify-between px-4 sm:px-8 lg:px-12"
        >
          {/* Logo Aligned Left */}
          <Link
            to="/#home"
            onClick={handleLogoClick}
            className="group flex shrink-0 items-center justify-center py-1"
            aria-label="One Wellness Clinic Home"
          >
            <img
              src={logoImg}
              alt="One Wellness Clinic & Research Center"
              className="h-[52px] w-[52px] sm:h-[62px] sm:w-[62px] lg:h-[70px] lg:w-[70px] object-contain transition-all duration-300 drop-shadow-xs"
            />
          </Link>

          {/* Centered Desktop Navigation Links */}
          <ul className="hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-6">
            {primaryNav.map((item) => {
              const label = navKeyMap[item.to] ? t(navKeyMap[item.to], item.label) : item.label;
              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `group relative block text-[12.5px] font-sans font-medium tracking-normal transition-colors duration-300 ${
                        light
                          ? isActive
                            ? 'text-[#D3B67C]'
                            : 'text-white hover:text-[#D3B67C]'
                          : isActive
                          ? 'text-[#173D30]'
                          : 'text-[#173D30]/80 hover:text-[#D3B67C]'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="py-1 inline-block whitespace-nowrap">{label}</span>
                        <span
                          className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-[#D3B67C] transition-transform duration-300 ease-calm ${
                            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Right Action Area: Language Switcher, Book Consultation Button & Mobile Toggle */}
          <div className="flex shrink-0 items-center gap-2.5 sm:gap-4">
            <LanguageSwitcher overDark={light} />

            <a
              href={bookAppointmentWhatsappLink()}
              target="_blank"
              rel="noreferrer noopener"
              className={`hidden h-[42px] px-5 sm:px-6 text-[11px] font-sans font-medium uppercase tracking-[0.12em] items-center justify-center transition-all duration-300 ease-calm lg:inline-flex ${
                light
                  ? 'border border-[#D3B67C] bg-[#173D30]/30 backdrop-blur-xs text-white hover:bg-[#D3B67C] hover:text-[#173D30] hover:border-[#D3B67C]'
                  : 'bg-[#173D30] text-[#FCFAF4] border border-[#173D30] hover:bg-[#0D241C] hover:border-[#0D241C]'
              }`}
            >
              {t('common.bookAppointment', { defaultValue: 'BOOK APPOINTMENT' })}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t('nav.menu', 'Open menu')}
              aria-expanded={menuOpen}
              className={`flex items-center gap-2 p-2 transition-colors lg:hidden ${textColor}`}
            >
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-[#FCFAF4] text-[#173D30]"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            {/* Header inside drawer */}
            <div className="flex h-[80px] items-center justify-between px-5 sm:px-8 border-b border-[#173D30]/10">
              <Link
                to="/#home"
                onClick={(e) => {
                  setMenuOpen(false);
                  handleLogoClick(e);
                }}
                aria-label="One Wellness Clinic Home"
              >
                <img
                  src={logoImg}
                  alt="One Wellness Clinic & Research Center"
                  className="h-[54px] w-[54px] object-contain drop-shadow-xs"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label={t('nav.close', 'Close menu')}
                className="flex items-center gap-2 p-2 text-[12px] font-sans font-medium uppercase tracking-[0.08em] text-[#173D30] hover:text-[#D3B67C] transition-colors"
              >
                <span>{t('nav.close', 'Close')}</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Links inside drawer */}
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-1 flex-col justify-between overflow-y-auto px-6 py-8 sm:px-10"
            >
              <ul className="space-y-4">
                {primaryNav.map((item, i) => {
                  const label = navKeyMap[item.to] ? t(navKeyMap[item.to], item.label) : item.label;
                  return (
                    <motion.li
                      key={item.to}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.08 + i * 0.04,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      className="border-b border-[#173D30]/10 pb-3"
                    >
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `flex items-center justify-between text-[1.2rem] font-sans font-medium transition-colors ${
                            isActive
                              ? 'text-[#B08D4F]'
                              : 'text-[#173D30] hover:text-[#D3B67C]'
                          }`
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>{label}</span>
                      </NavLink>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Language Switcher & Action buttons inside drawer */}
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="mt-8 flex flex-col gap-4"
              >
                <LanguageSwitcher variant="drawer" />

                <a
                  href={bookAppointmentWhatsappLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-[44px] w-full items-center justify-center bg-[#173D30] text-[#FCFAF4] text-[11px] font-sans font-medium uppercase tracking-[0.12em] transition-colors hover:bg-[#0D241C]"
                >
                  {t('common.bookAppointment', { defaultValue: 'BOOK APPOINTMENT' })}
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-[44px] w-full items-center justify-center border border-[#173D30]/30 text-[#173D30] text-[11px] font-sans font-medium uppercase tracking-[0.12em] transition-colors hover:bg-[#173D30]/5"
                >
                  {t('nav.chatWhatsapp', 'Chat on WhatsApp')}
                </a>
                <p className="mt-2 text-center text-[11px] leading-relaxed text-[#173D30]/60">
                  {t('site.division', site.division)} • {t('site.city', site.city)}, Maharashtra
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}