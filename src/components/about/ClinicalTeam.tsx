import React from 'react';
import { ShieldCheckIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { site } from '../../config/site';
import doctorImg from '../../assets/dr_shubham_mahajan.jpg';

export function ClinicalTeam() {
  const { t } = useTranslation();

  const profileFields = [
    { label: t('about.fields.name', { defaultValue: 'Name' }), value: site.doctor.name },
    { label: t('about.fields.qualification', { defaultValue: 'Qualification' }), value: site.doctor.qualifications },
    { label: t('about.fields.profession', { defaultValue: 'Profession' }), value: t('site.doctorProfession', { defaultValue: site.doctor.profession }) },
    { label: t('about.fields.registrationNumber', { defaultValue: 'Registration Number' }), value: site.doctor.registrationNumber }
  ];

  return (
    <section aria-labelledby="team-heading" className="bg-ivory">
      <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionLabel>{t('about.clinicalTeamEyebrow', { defaultValue: 'Clinical team' })}</SectionLabel>
            <RevealText
              as="h2"
              id="team-heading"
              text={t('about.clinicalTeamHeading', { defaultValue: 'Ayurvedic Clinical Leadership' })}
              className="mt-4 font-display text-[2rem] font-light leading-[1.1] text-ink sm:text-[2.6rem]"
            />

            <Reveal delay={0.08}>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink/65">
                {t('about.clinicalTeamDesc', {
                  defaultValue:
                    'Consultation, diagnostic assessment and therapy planning at One Wellness are directed by our qualified Ayurveda Consultant and Agnikarma Specialist. Consultations ensure every treatment aligns with traditional Ayurvedic science and your personal health goals.'
                })}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-5">
              <div className="inline-flex items-center gap-2 border border-moss/30 bg-moss/5 px-3.5 py-2 text-xs font-medium text-moss">
                <ShieldCheckIcon className="h-4 w-4" />
                <span>{t('about.verifiedBadge', { defaultValue: 'Verified Ayurvedic Medical Registration' })}</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal className="border border-ink/12 bg-cream p-6 sm:p-7 shadow-xs">
              <div className="flex items-start gap-4">
                <img
                  src={doctorImg}
                  alt={site.doctor.name}
                  className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-full object-cover border-2 border-moss/40 shadow-sm"
                />
                <div>
                  <p className="font-display text-[1.5rem] font-light leading-snug text-ink">
                    {site.doctor.name}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-label text-moss">
                    {t('site.doctorProfession', { defaultValue: site.doctor.profession })}
                  </p>
                  <p className="mt-0.5 text-xs text-ink/60">
                    {site.doctor.qualifications}
                  </p>
                </div>
              </div>

              <dl className="mt-5 border-t border-ink/12">
                {profileFields.map((field) => (
                  <div
                    key={field.label}
                    className="flex flex-col gap-1 border-b border-ink/10 py-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <dt className="text-[10px] uppercase tracking-label text-ink/50">
                      {field.label}
                    </dt>
                    <dd className="text-sm font-medium text-ink/80">{field.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-4 text-xs leading-relaxed text-ink/55">
                {t('about.clinicNote', {
                  defaultValue:
                    'Consultations are held at Shop No. 7071, 7th Floor, Roongtha Shopping Hub, Indira Nagar, Nashik. Appointments can be scheduled through our booking portal or direct telephone enquiry.'
                })}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}