import React from 'react';
import { LeafIcon, UserRoundIcon, DropletIcon, SunIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { trustPoints } from '../../data/journey';

const icons = [LeafIcon, UserRoundIcon, DropletIcon, SunIcon];

/** Four quiet trust points, separated by hairlines rather than cards. */
export function TrustStrip() {
  return (
    <section aria-label="Our approach" className="border-y border-ink/10 bg-ivory">
      <div className="mx-auto max-w-edge px-5 sm:px-8 lg:px-14">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, i) => {
            const Icon = icons[i];
            return (
              <Reveal
                as="li"
                key={point.title}
                delay={i * 0.08}
                className="flex flex-col gap-4 border-t border-ink/10 py-10 first:border-t-0 sm:py-12 lg:border-l lg:border-t-0 lg:py-14 lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
                
                <Icon className="h-5 w-5 text-moss" strokeWidth={1.3} aria-hidden="true" />
                <h3 className="font-display text-[1.45rem] font-light leading-snug text-ink">
                  {point.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-ink/60">{point.description}</p>
              </Reveal>);

          })}
        </ul>
      </div>
    </section>);

}