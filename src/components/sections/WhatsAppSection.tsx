import React from 'react';
import { CheckIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ArrowAnchor } from '../ui/ArrowLink';
import { bookAppointmentWhatsappLink } from '../../config/site';

const DEFAULT_POINTS = [
  'Available programs',
  'Therapy duration',
  'Pricing',
  'Consultation process',
  'What to expect',
  'Appointment availability'
];

export function WhatsAppSection() {
  const { t } = useTranslation();

  const rawPoints = t('whatsappSection.points', { returnObjects: true });
  const points = Array.isArray(rawPoints) && rawPoints.length > 0 ? (rawPoints as string[]) : DEFAULT_POINTS;

  return (
    <section aria-labelledby="whatsapp-heading" className="border-t border-ink/10 bg-ivory">
      <div className="mx-auto grid max-w-edge grid-cols-1 items-center gap-6 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-12 lg:gap-10 lg:py-9 lg:px-14">
        <div className="lg:col-span-5">
          <SectionLabel>{t('whatsappSection.sectionLabel', { defaultValue: 'Talk to us' })}</SectionLabel>
          <RevealText
            as="h2"
            text={t('whatsappSection.heading', { defaultValue: 'Have Questions About Panchakarma?' })}
            className="mt-2.5 font-display text-[1.7rem] font-light leading-[1.12] text-ink sm:text-[2.1rem]"
          />
        </div>

        <div className="lg:col-span-4">
          <Reveal>
            <p className="text-[10px] uppercase tracking-label text-ink/45">
              {t('whatsappSection.subheading', { defaultValue: 'Our team can help you understand' })}
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-1">
              {points.map((p, idx) => (
                <li key={p || idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-ink/75">
                  <CheckIcon className="h-3.5 w-3.5 shrink-0 text-moss" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-3">
          <Reveal delay={0.08}>
            <ArrowAnchor href={bookAppointmentWhatsappLink()} tone="outline" className="w-full sm:w-auto">
              {t('whatsappSection.chatCta', { defaultValue: 'Chat on WhatsApp' })}
            </ArrowAnchor>
            <p className="mt-2 text-[11px] text-ink/45">
              {t('whatsappSection.workingHoursNotice', { defaultValue: 'Response during clinic working hours.' })}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}