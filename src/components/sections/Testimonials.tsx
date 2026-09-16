import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { Reveal } from '../ui/Reveal';

export interface Testimonial {
  quote: string;
  name: string;
  context?: string;
}

/**
 * Reusable testimonial section. Intentionally EMPTY until real, consented
 * testimonials are supplied — no reviews are fabricated. Pass a populated
 * `items` array to enable it.
 */
export const testimonials: Testimonial[] = [];

interface TestimonialsProps {
  items?: Testimonial[];
  heading?: string;
}

export function Testimonials({ items = testimonials, heading = 'In Their Own Words' }: TestimonialsProps) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="testimonials-heading" className="bg-cream">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
        <SectionLabel>Experiences</SectionLabel>
        <h2
          id="testimonials-heading"
          className="mt-6 max-w-2xl font-display text-[2rem] font-light leading-[1.1] text-ink sm:text-[2.6rem]">
          
          {heading}
        </h2>
        <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-3">
          {items.map((t, i) =>
          <Reveal as="li" key={t.name + i} delay={i * 0.06} className="flex flex-col">
              <blockquote className="flex flex-1 flex-col">
                <p className="font-display text-[1.35rem] font-light italic leading-snug text-ink">
                  “{t.quote}”
                </p>
                <footer className="mt-auto pt-6 text-[10px] uppercase tracking-label text-ink/45">
                  {t.name}
                  {t.context ? ` — ${t.context}` : ''}
                </footer>
              </blockquote>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}