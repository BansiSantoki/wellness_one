import React from 'react';
import { useTranslation } from 'react-i18next';
import { LeafIcon, UserRoundIcon, DropletIcon, SunIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { trustPoints } from '../../data/journey';

const icons = [LeafIcon, UserRoundIcon, DropletIcon, SunIcon];

/** Four quiet trust points with compact, balanced padding. */
export function TrustStrip() {
  const { t } = useTranslation();
  const rawPoints = t('home.trust.items', { returnObjects: true });
  const points = Array.isArray(rawPoints) && rawPoints.length > 0 ? (rawPoints as { title: string; description: string }[]) : trustPoints;

  return (
    <section aria-label="Our approach" className="border-y border-ink/10 bg-ivory">
      <div className="mx-auto max-w-edge px-5 sm:px-8 lg:px-14">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal
                as="li"
                key={point.title || i}
                delay={i * 0.05}
                className="flex flex-col gap-2.5 border-t border-ink/10 py-6 first:border-t-0 sm:py-8 lg:border-l lg:border-t-0 lg:py-9 lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
              >
                <Icon className="h-5 w-5 text-moss" strokeWidth={1.3} aria-hidden="true" />
                <h3 className="font-display text-[1.25rem] font-light leading-snug text-ink sm:text-[1.35rem]">
                  {point.title}
                </h3>
                <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-ink/60">{point.description}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}