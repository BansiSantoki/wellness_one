import React from 'react';
import { UserRoundIcon } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';

/**
 * Structured profile area for the Ayurvedic practitioner. Fields are left as
 * clearly marked placeholders — no credentials, registrations or qualifications
 * are invented. Replace the `value` strings once confirmed.
 */
const PROFILE_FIELDS: {label: string;value: string;}[] = [
{ label: 'Name', value: 'To be updated' },
{ label: 'Qualification', value: 'To be updated (BAMS / MD Ayurveda)' },
{ label: 'Registration details', value: 'To be updated' },
{ label: 'Professional profile', value: 'To be updated' }];


export function ClinicalTeam() {
  return (
    <section aria-labelledby="team-heading" className="bg-ivory">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionLabel>Clinical team</SectionLabel>
            <RevealText
              as="h2"
              id="team-heading"
              text="Ayurvedic Clinical Team"
              className="mt-6 font-display text-[2rem] font-light leading-[1.1] text-ink sm:text-[2.6rem]" />
            
            <Reveal delay={0.08}>
              <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-ink/65">
                Consultation, assessment and therapy planning at One Wellness are carried out by a
                qualified Ayurvedic practitioner. The profile below is published once the
                practitioner's details and registration are confirmed.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal className="border border-ink/12 bg-cream p-6 sm:p-9">
              <div className="flex items-start gap-5">
                <span
                  className="flex h-16 w-16 shrink-0 items-center justify-center border border-ink/15 bg-sand/60 text-ink/35"
                  aria-hidden="true">
                  
                  <UserRoundIcon className="h-6 w-6" strokeWidth={1.2} />
                </span>
                <div>
                  <p className="font-display text-[1.5rem] font-light leading-snug text-ink/70">
                    Practitioner profile
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-label text-clay">
                    Awaiting confirmed details
                  </p>
                </div>
              </div>

              <dl className="mt-8 border-t border-ink/12">
                {PROFILE_FIELDS.map((field) =>
                <div
                  key={field.label}
                  className="flex flex-col gap-1 border-b border-ink/10 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  
                    <dt className="text-[10px] uppercase tracking-label text-ink/45">
                      {field.label}
                    </dt>
                    <dd className="text-sm text-ink/55">{field.value}</dd>
                  </div>
                )}
              </dl>

              <p className="mt-6 text-xs leading-relaxed text-ink/45">
                We do not publish qualifications, registrations or professional histories until they
                have been verified.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}