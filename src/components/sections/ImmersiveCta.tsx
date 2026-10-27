import React from 'react';
import { useTranslation } from 'react-i18next';
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
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}

/** Full-width immersive photographic CTA band with compact padding. */
export function ImmersiveCta({
  eyebrow,
  heading,
  text,
  image,
  alt,
  primary,
  secondary
}: ImmersiveCtaProps) {
  const { t } = useTranslation();

  const displayEyebrow = eyebrow || t('panchakarmaPage.ctaEyebrow', { defaultValue: 'Begin your wellness journey' });
  const displayPrimary = primary || {
    label: t('common.bookConsultation', { defaultValue: 'Book Ayurvedic Consultation' }),
    to: '/consultation'
  };

  return (
    <section className="relative isolate overflow-hidden bg-pine">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-pine/55" aria-hidden="true" />
      <div className="relative mx-auto max-w-edge px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-14">
        <div className="max-w-2xl">
          <SectionLabel tone="light">{displayEyebrow}</SectionLabel>
          <RevealText
            as="h2"
            byLine
            text={heading}
            className="mt-3 font-display text-[1.8rem] font-light leading-[1.08] text-ivory sm:text-[2.4rem] lg:text-[2.8rem]"
          />
          {text ? (
            <Reveal delay={0.08}>
              <p className="mt-3 max-w-lg text-xs sm:text-sm leading-relaxed text-ivory/70">{text}</p>
            </Reveal>
          ) : null}
          <Reveal delay={0.12} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ArrowLink to={displayPrimary.to} tone="ivory">
              {displayPrimary.label}
            </ArrowLink>
            {secondary ? (
              <ArrowLink to={secondary.to} tone="outlineLight">
                {secondary.label}
              </ArrowLink>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}