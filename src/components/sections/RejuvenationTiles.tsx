import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { rejuvenationExperiences, rejuvenationFormula } from '../../data/rejuvenation';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';

export function RejuvenationTiles() {
  return (
    <section aria-labelledby="rejuvenation-heading" className="bg-forest">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel tone="light" index="vii">
              Rejuvenation
            </SectionLabel>
            <RevealText
              as="h2"
              id="rejuvenation-heading"
              byLine
              text={'Rejuvenate Your Body.\nRefresh Your Routine.'}
              className="mt-6 font-display text-[2.2rem] font-light leading-[1.08] text-ivory sm:text-[3rem] lg:text-[3.5rem]" />
            
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-14">
            <Reveal delay={0.1}>
              <p className="text-[0.95rem] leading-relaxed text-ivory/70">
                Ayurvedic rejuvenation is traditionally associated with practices that support
                nourishment, restoration and maintenance of wellbeing.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15} className="mt-14">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-3 border-y border-ivory/15 py-6">
            {rejuvenationFormula.map((part, i) =>
            <li key={part} className="flex items-center gap-4">
                <span className="font-display text-[1.15rem] font-light text-ivory/90 sm:text-[1.5rem]">
                  {part}
                </span>
                {i < rejuvenationFormula.length - 1 ?
              <span className="font-display text-lg text-sage" aria-hidden="true">
                    +
                  </span> :
              null}
              </li>
            )}
          </ul>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {rejuvenationExperiences.map((exp, i) =>
          <Reveal as="li" key={exp.name} delay={i % 3 * 0.06}>
              <Link to="/consultation" className="group block" data-cursor="view">
                <div className="relative overflow-hidden bg-pine">
                  <img
                  src={exp.image}
                  alt={exp.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full object-cover transition-transform duration-500 ease-calm group-hover:scale-[1.05]" />
                
                  <span
                  className="absolute inset-0 bg-pine/20 opacity-0 transition-opacity duration-500 ease-calm group-hover:opacity-100"
                  aria-hidden="true" />
                
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[1.45rem] font-light leading-snug text-ivory">
                      {exp.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/55">{exp.description}</p>
                  </div>
                  <ArrowUpRightIcon
                  className="mt-1 h-4 w-4 shrink-0 text-sage transition-transform duration-300 ease-calm group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true" />
                
                </div>
              </Link>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}