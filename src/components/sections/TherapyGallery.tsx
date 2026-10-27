import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { therapies, Therapy } from '../../data/therapies';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { useBooking } from '../../context/BookingContext';

interface TherapyGalleryProps {
  /** Number of therapies to show. Omit for all. */
  limit?: number;
  heading?: string;
  intro?: string;
  showAllLink?: boolean;
}

export function TherapyGallery({
  limit,
  heading,
  intro,
  showAllLink = false
}: TherapyGalleryProps) {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const { openBooking } = useBooking();
  const list = limit ? therapies.slice(0, limit) : therapies;

  const sectionHeading = heading || t('therapiesPage.galleryHeading', { defaultValue: 'Traditional Ayurvedic Therapies' });
  const sectionIntro = intro || t('therapiesPage.galleryIntro', { defaultValue: "At One Wellness, Ayurvedic therapies are selected according to the individual's consultation and wellness plan." });

  return (
    <section aria-labelledby="therapies-heading" className="bg-[#FCFAF4]">
      <div className="mx-auto max-w-edge px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
        <div className="grid grid-cols-1 items-end gap-5 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionLabel index="v">{t('nav.therapies', { defaultValue: 'The therapies' })}</SectionLabel>
            <RevealText
              as="h2"
              id="therapies-heading"
              text={sectionHeading}
              className="mt-2.5 font-serif text-[1.7rem] font-light leading-[1.1] text-[#102A20] sm:text-[2.2rem] lg:text-[2.5rem]"
            />
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#25231F]/75">{sectionIntro}</p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((therapy, i) => {
            const tr = (t(`therapiesData.${therapy.slug}`, { returnObjects: true }) as {
              name?: string;
              subtitle?: string;
              description?: string;
              duration?: string;
              priceFrom?: string;
            }) || {};

            const name = tr.name || therapy.name;
            const subtitle = tr.subtitle || therapy.subtitle;
            const description = tr.description || therapy.description;
            const duration = tr.duration || therapy.duration;
            const priceFrom = tr.priceFrom || therapy.priceFrom;

            const translatedTherapy: Therapy = {
              ...therapy,
              name,
              subtitle,
              description,
              duration,
              priceFrom
            };

            return (
              <Reveal
                as="li"
                key={therapy.slug}
                delay={(i % 3) * 0.05}
                className="group flex flex-col bg-white border border-[#E8DFCC] shadow-xs transition-all duration-300 hover:shadow-md"
              >
                {/* Card Media - compact ratio */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-[#E8DFCC]"
                  data-cursor="view"
                >
                  <motion.img
                    src={therapy.image}
                    alt={therapy.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                    whileHover={reduce ? undefined : { scale: 1.04 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  />

                  <span className="absolute left-3 top-3 bg-[#FCFAF4]/95 border border-[#B08D4F]/30 px-2.5 py-1 text-[9.5px] font-sans font-medium uppercase tracking-wider text-[#102A20]">
                    {t('common.duration', { defaultValue: 'Duration' })}: {duration}
                  </span>
                </div>

                {/* Card Body - compact padding */}
                <div className="p-4 sm:p-5 flex flex-1 flex-col">
                  <span className="text-[10px] font-sans uppercase tracking-[0.1em] text-[#B08D4F]">
                    {subtitle}
                  </span>
                  <h3 className="mt-1 font-serif text-[1.4rem] font-normal leading-snug text-[#102A20] sm:text-[1.55rem]">
                    {name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#25231F]/70 flex-1 line-clamp-3">
                    {description}
                  </p>

                  {/* Price Section */}
                  <div className="mt-4 bg-[#F6F1E6] p-3 border-t border-b border-[#E8DFCC] flex items-center justify-between">
                    <div>
                      <span className="block text-[9.5px] font-sans uppercase tracking-wider text-[#B08D4F] font-semibold">
                        {t('common.startingFrom', { defaultValue: 'STARTING FROM' })}
                      </span>
                      <span className="font-sans text-xl font-bold text-[#102A20] tracking-tight">
                        {priceFrom}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[9.5px] font-sans text-[#25231F]/60">
                        {t('common.duration', { defaultValue: 'Duration' })}
                      </span>
                      <span className="text-xs font-medium text-[#102A20]">{duration}</span>
                    </div>
                  </div>

                  {/* Date & Time Buttons */}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => openBooking(translatedTherapy)}
                      className="flex items-center justify-center gap-1.5 h-8 bg-white border border-[#E8DFCC] text-[10.5px] font-sans font-medium text-[#25231F] hover:border-[#B08D4F] transition-colors"
                    >
                      <CalendarIcon className="h-3 w-3 text-[#B08D4F]" />
                      <span>{t('common.selectDate', { defaultValue: 'Select Date' })}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => openBooking(translatedTherapy)}
                      className="flex items-center justify-center gap-1.5 h-8 bg-white border border-[#E8DFCC] text-[10.5px] font-sans font-medium text-[#25231F] hover:border-[#B08D4F] transition-colors"
                    >
                      <ClockIcon className="h-3 w-3 text-[#B08D4F]" />
                      <span>{t('common.selectTime', { defaultValue: 'Select Time' })}</span>
                    </button>
                  </div>

                  {/* Main Action CTA */}
                  <button
                    type="button"
                    onClick={() => openBooking(translatedTherapy)}
                    className="mt-2.5 h-10 w-full flex items-center justify-center gap-2 bg-[#102A20] text-[#FCFAF4] text-[11px] font-sans font-medium uppercase tracking-[0.12em] transition-all duration-300 hover:bg-[#B08D4F] hover:text-[#102A20]"
                  >
                    <span>{t('common.bookTherapy', { defaultValue: 'BOOK THERAPY' })}</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </ul>

        {showAllLink && (
          <Reveal className="mt-8 border-t border-[#102A20]/10 pt-6">
            <Link
              to="/therapies"
              className="group inline-flex items-center gap-2.5 font-serif text-[1.4rem] font-light text-[#102A20] sm:text-[1.7rem] hover:text-[#B08D4F] transition-colors"
            >
              <span>{t('common.viewAll', { defaultValue: 'View all' })} {therapies.length} {t('nav.therapies', { defaultValue: 'therapies' })}</span>
              <ArrowUpRightIcon
                className="h-4 w-4 text-[#B08D4F] transition-transform duration-300 ease-calm group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}