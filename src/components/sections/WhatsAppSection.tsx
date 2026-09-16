import React from 'react';
import { CheckIcon } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ArrowAnchor } from '../ui/ArrowLink';
import { whatsappLink } from '../../config/site';

const POINTS = [
'Available programs',
'Therapy duration',
'Pricing',
'Consultation process',
'What to expect',
'Appointment availability'];


export function WhatsAppSection() {
  return (
    <section aria-labelledby="whatsapp-heading" className="border-t border-ink/10 bg-ivory">
      <div className="mx-auto grid max-w-edge grid-cols-1 gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-14">
        <div className="lg:col-span-5">
          <SectionLabel>Talk to us</SectionLabel>
          <RevealText
            as="h2"
            text="Have Questions About Panchakarma?"
            className="mt-6 font-display text-[2rem] font-light leading-[1.12] text-ink sm:text-[2.5rem]" />
          
        </div>

        <div className="lg:col-span-4">
          <Reveal>
            <p className="text-xs uppercase tracking-label text-ink/45">Our team can help you understand</p>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {POINTS.map((p) =>
              <li key={p} className="flex items-center gap-3 text-sm text-ink/75">
                  <CheckIcon className="h-3.5 w-3.5 shrink-0 text-moss" aria-hidden="true" />
                  {p}
                </li>
              )}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-3">
          <Reveal delay={0.1}>
            <ArrowAnchor href={whatsappLink()} tone="outline" className="w-full sm:w-auto">
              Chat on WhatsApp
            </ArrowAnchor>
            <p className="mt-4 text-xs text-ink/45">Response during clinic working hours.</p>
          </Reveal>
        </div>
      </div>
    </section>);

}