import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { therapies, Therapy } from '../../data/therapies';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';

const ratioFor = (scale: Therapy['scale']) =>
scale === 'tall' ? 'aspect-[3/4]' : scale === 'wide' ? 'aspect-[4/3]' : 'aspect-square';

/** Column offsets give the grid an editorial, non-uniform rhythm. */
const offsets = ['lg:mt-0', 'lg:mt-20', 'lg:mt-8'];

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
  const list = limit ? therapies.slice(0, limit) : therapies;

  return (
    <section aria-labelledby="therapies-heading" className="bg-ivory">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="v">The therapies</SectionLabel>
            <RevealText
              as="h2"
              id="therapies-heading"
              text={heading}
              className="mt-6 font-display text-[2.2rem] font-light leading-[1.08] text-ink sm:text-[3rem] lg:text-[3.4rem]" />
            
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="max-w-md text-[0.95rem] leading-relaxed text-ink/65">{intro}</p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {list.map((therapy, i) =>
          <Reveal
            as="li"
            key={therapy.slug}
            delay={i % 3 * 0.07}
            className={`group flex flex-col ${offsets[i % 3]}`}>
            
              <div
              className={`relative overflow-hidden bg-sand ${ratioFor(therapy.scale)}`}
              data-cursor="view">
              
                <motion.img
                src={therapy.image}
                alt={therapy.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                whileHover={reduce ? undefined : { scale: 1.045 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }} />
              
                <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1.5 text-[10px] uppercase tracking-label text-ink/70">
                  {therapy.duration}
                </span>
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="font-display text-[1.7rem] font-light leading-snug text-ink">
                  {therapy.name}
                </h3>
                <p className="mt-1.5 text-[10px] uppercase tracking-label text-moss">
                  {therapy.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/60">{therapy.description}</p>
                <div className="mt-auto flex items-end justify-between gap-4 border-t border-ink/10 pt-5">
                  <span className="text-sm text-ink/70">
                    <span className="block text-[10px] uppercase tracking-label text-ink/40">
                      Starting from
                    </span>
                    {therapy.priceFrom}
                  </span>
                  <Link
                  to="/consultation"
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide2 text-ink transition-colors duration-300 hover:text-moss">
                  
                    Enquire
                    <ArrowUpRightIcon
                    className="h-3.5 w-3.5 transition-transform duration-300 ease-calm group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true" />
                  
                  </Link>
                </div>
              </div>
            </Reveal>
          )}
        </ul>

        {showAllLink ?
        <Reveal className="mt-16 border-t border-ink/10 pt-8">
            <Link
            to="/therapies"
            className="group inline-flex items-center gap-3 font-display text-[1.6rem] font-light text-ink sm:text-[2rem]">
            
              View all {therapies.length} therapies
              <ArrowUpRightIcon
              className="h-5 w-5 text-moss transition-transform duration-300 ease-calm group-hover:-translate-y-1 group-hover:translate-x-1"
              aria-hidden="true" />
            
            </Link>
          </Reveal> :
        null}
      </div>
    </section>);

}