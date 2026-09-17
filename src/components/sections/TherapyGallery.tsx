import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { therapies, Therapy } from '../../data/therapies';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { useBooking } from '../../context/BookingContext';

const ratioFor = (scale: Therapy['scale']) =>
  scale === 'tall' ? 'aspect-[3/4]' : scale === 'wide' ? 'aspect-[4/3]' : 'aspect-square';

const offsets = ['lg:mt-0', 'lg:mt-16', 'lg:mt-6'];

interface TherapyGalleryProps {
  /** Number of therapies to show. Omit for all. */
  limit?: number;
  heading?: string;
  intro?: string;
  showAllLink?: boolean;
}

export function TherapyGallery({
  limit,
  heading = 'Traditional Ayurvedic Therapies',
  intro = "At One Wellness, Ayurvedic therapies are selected according to the individual's consultation and wellness plan.",
  showAllLink = false
}: TherapyGalleryProps) {
  const reduce = useReducedMotion();
  const { openBooking } = useBooking();
  const list = limit ? therapies.slice(0, limit) : therapies;

  return (
    <section aria-labelledby="therapies-heading" className="bg-[#FCFAF4]">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="v">The therapies</SectionLabel>
            <RevealText
              as="h2"
              id="therapies-heading"
              text={heading}
              className="mt-6 font-serif text-[2.2rem] font-light leading-[1.08] text-[#102A20] sm:text-[3rem] lg:text-[3.4rem]"
            />
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="max-w-md text-[0.95rem] leading-relaxed text-[#25231F]/75">{intro}</p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {list.map((therapy, i) => (
            <Reveal
              as="li"
              key={therapy.slug}
              delay={(i % 3) * 0.07}
              className={`group flex flex-col bg-white border border-[#E8DFCC] shadow-xs transition-all duration-300 hover:shadow-md ${offsets[i % 3]}`}
            >
              {/* Card Media */}
              <div
                className={`relative overflow-hidden bg-[#E8DFCC] ${ratioFor(therapy.scale)}`}
                data-cursor="view"
              >
                <motion.img
                  src={therapy.image}
                  alt={therapy.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  whileHover={reduce ? undefined : { scale: 1.045 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                />

                <span className="absolute left-4 top-4 bg-[#FCFAF4]/95 border border-[#B08D4F]/30 px-3 py-1.5 text-[10px] font-sans font-medium uppercase tracking-wider text-[#102A20]">
                  Duration: {therapy.duration}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-1 flex-col">
                <span className="text-[10px] font-sans uppercase tracking-[0.1em] text-[#B08D4F]">
                  {therapy.subtitle}
                </span>
                <h3 className="mt-1 font-serif text-[1.75rem] font-normal leading-snug text-[#102A20]">
                  {therapy.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#25231F]/70 flex-1">
                  {therapy.description}
                </p>

                {/* Price Section - Prominent & Visual */}
                <div className="mt-6 bg-[#F6F1E6] p-4 border-t border-b border-[#E8DFCC] flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-sans uppercase tracking-wider text-[#B08D4F] font-semibold">
                      STARTING FROM
                    </span>
                    <span className="font-sans text-2xl font-bold text-[#102A20] tracking-tight">
                      {therapy.priceFrom}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-sans text-[#25231F]/60">Duration</span>
                    <span className="text-xs font-medium text-[#102A20]">{therapy.duration}</span>
                  </div>
                </div>

                {/* Date & Time Pick Buttons */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => openBooking(therapy)}
                    className="flex items-center justify-center gap-1.5 h-9 bg-white border border-[#E8DFCC] text-[11px] font-sans font-medium text-[#25231F] hover:border-[#B08D4F] transition-colors"
                  >
                    <CalendarIcon className="h-3.5 w-3.5 text-[#B08D4F]" />
                    <span>Select Date</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => openBooking(therapy)}
                    className="flex items-center justify-center gap-1.5 h-9 bg-white border border-[#E8DFCC] text-[11px] font-sans font-medium text-[#25231F] hover:border-[#B08D4F] transition-colors"
                  >
                    <ClockIcon className="h-3.5 w-3.5 text-[#B08D4F]" />
                    <span>Select Time</span>
                  </button>
                </div>

                {/* Main Action CTA */}
                <button
                  type="button"
                  onClick={() => openBooking(therapy)}
                  className="mt-3 h-11 w-full flex items-center justify-center gap-2 bg-[#102A20] text-[#FCFAF4] text-[11px] font-sans font-medium uppercase tracking-[0.12em] transition-all duration-300 hover:bg-[#B08D4F] hover:text-[#102A20]"
                >
                  <span>BOOK THERAPY</span>
                  <ArrowUpRightIcon className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          ))}
        </ul>

        {showAllLink && (
          <Reveal className="mt-16 border-t border-[#102A20]/10 pt-8">
            <Link
              to="/therapies"
              className="group inline-flex items-center gap-3 font-serif text-[1.6rem] font-light text-[#102A20] sm:text-[2rem] hover:text-[#B08D4F] transition-colors"
            >
              <span>View all {therapies.length} therapies</span>
              <ArrowUpRightIcon
                className="h-5 w-5 text-[#B08D4F] transition-transform duration-300 ease-calm group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}