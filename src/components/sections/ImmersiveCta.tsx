import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ArrowLink } from '../ui/ArrowLink';

interface ImmersiveCtaProps {
  eyebrow?: string;
  heading: string;
  text?: string;
  image: string;
  alt: string;
  primary?: {label: string;to: string;};
  secondary?: {label: string;to: string;};
}

/** Full-width immersive photographic CTA band. */
export function ImmersiveCta({
  eyebrow = 'Begin your wellness journey',
  heading,
  text,
  image,
  alt,
  primary = { label: 'Book Ayurvedic Consultation', to: '/consultation' },
  secondary
}: ImmersiveCtaProps) {
  return (
    <section className="relative isolate overflow-hidden bg-pine">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-55" />
      
      <div className="absolute inset-0 bg-pine/55" aria-hidden="true" />
      <div className="relative mx-auto max-w-edge px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        <div className="max-w-2xl">
          <SectionLabel tone="light">{eyebrow}</SectionLabel>
          <RevealText
            as="h2"
            byLine
            text={heading}
            className="mt-7 font-display text-[2.3rem] font-light leading-[1.08] text-ivory sm:text-[3.1rem] lg:text-[3.8rem]" />
          
          {text ?
          <Reveal delay={0.1}>
              <p className="mt-7 max-w-lg text-[0.95rem] leading-relaxed text-ivory/70">{text}</p>
            </Reveal> :
          null}
          <Reveal delay={0.15} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ArrowLink to={primary.to} tone="ivory">
              {primary.label}
            </ArrowLink>
            {secondary ?
            <ArrowLink to={secondary.to} tone="outlineLight">
                {secondary.label}
              </ArrowLink> :
            null}
          </Reveal>
        </div>
      </div>
    </section>);

}