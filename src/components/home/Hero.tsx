import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownIcon, CalendarCheckIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ArrowLink } from '../ui/ArrowLink';
import { site, bookAppointmentWhatsappLink } from '../../config/site';
import { img } from '../../data/images';

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const hasVideo = site.heroVideoUrl.length > 0;

  const taglineLines = [
    t('home.hero.tagline1', 'Restore Balance.'),
    t('home.hero.tagline2', 'Reconnect With Wellness.')
  ];

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative isolate flex min-h-[66vh] sm:min-h-[72vh] lg:min-h-[76vh] flex-col justify-end overflow-hidden bg-pine pb-6 pt-20 sm:pb-8 sm:pt-24"
    >
      {hasVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={site.heroVideoUrl}
          poster={img.hero}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      ) : (
        <motion.img
          src={img.hero}
          alt="A traditional Ayurvedic therapy room in warm evening light, with a carved wooden treatment table and brass oil vessels"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduce ? 0.4 : 2, ease }}
        />
      )}

      <div className="absolute inset-0 bg-pine/60 sm:bg-pine/55" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-edge px-5 sm:px-8 lg:px-14">
        <motion.p
          className="text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#D3B67C] sm:text-[12px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
        >
          {t('home.hero.eyebrow', 'One Wellness Clinic & Research Center • Nashik, India')}
        </motion.p>

        <h1 className="mt-2.5 max-w-5xl font-serif text-[2.5rem] font-light leading-[1.05] text-[#FCFAF4] sm:text-[3.8rem] lg:text-[4.8rem] xl:text-[5.4rem]">
          {taglineLines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? { opacity: 0 } : { y: '110%' }}
                animate={reduce ? { opacity: 1 } : { y: '0%' }}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.1, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-2 font-serif text-lg sm:text-xl italic text-[#D3B67C]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease }}
        >
          {t('home.hero.subtitle', '“Infinite Care. Holistic Healing.”')}
        </motion.p>

        <div className="mt-6 sm:mt-7 grid grid-cols-1 gap-6 border-t border-ivory/20 pt-5 sm:pt-6 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={bookAppointmentWhatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-11 items-center justify-center gap-2 border border-[#D3B67C] bg-[#D3B67C] px-6 text-xs font-sans font-medium uppercase tracking-[0.14em] text-[#102A20] shadow-md transition-all duration-300 hover:bg-white hover:border-white"
              >
                <CalendarCheckIcon className="h-4 w-4" aria-hidden="true" />
                <span>{t('common.bookAppointment', { defaultValue: 'Book Appointment' })}</span>
              </a>

              <ArrowLink to="/therapies" tone="outlineLight">
                {t('home.hero.therapiesCta', 'Explore Our Therapies')}
              </ArrowLink>
            </div>
          </motion.div>

          <motion.p
            className="max-w-md text-[0.92rem] leading-relaxed text-ivory/70 lg:col-span-5 lg:col-start-8"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
          >
            {t(
              'home.hero.description',
              'A personalised approach to traditional Ayurvedic wellness, Panchakarma, rejuvenation and mindful living.'
            )}
          </motion.p>
        </div>

        <motion.div
          className="mt-6 sm:mt-7 flex items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <a
            href="#doctor"
            className="group inline-flex items-center gap-2.5 text-[10px] uppercase tracking-label text-ivory/55 transition-colors duration-300 hover:text-ivory"
          >
            <span>Meet Dr. Shubham Mahajan</span>
            <motion.span
              animate={reduce ? undefined : { y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="inline-flex"
            >
              <ArrowDownIcon className="h-3.5 w-3.5 text-[#D3B67C]" aria-hidden="true" />
            </motion.span>
          </a>
          <span className="hidden text-[10px] uppercase tracking-label text-ivory/40 sm:block">
            {t('home.hero.location', 'Nashik, Maharashtra')}
          </span>
        </motion.div>
      </div>
    </section>
  );
}