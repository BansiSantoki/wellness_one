import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { Accordion } from '../components/ui/Accordion';
import { faqs } from '../data/faqs';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';
import { site } from '../config/site';

const DEFAULT_EXPECT = [
  {
    label: 'Before',
    text: 'Note down your typical day — waking, meals, work, sleep — and bring any current prescriptions or reports you would like the practitioner to see.'
  },
  {
    label: 'During',
    text: 'An unhurried conversation about routine, digestion, sleep, activity and the concerns that brought you in, alongside traditional Ayurvedic assessment.'
  },
  {
    label: 'After',
    text: 'A clear view of what is being suggested and why: wellness recommendations, personalised therapy suggestions, and what a program would involve.'
  }
];

export function Consultation() {
  const { t } = useTranslation();

  useSeo({
    title: `${t('consultationPage.heroEyebrow', { defaultValue: 'Book an Ayurvedic Consultation' })} | ${site.doctor.name} | One Wellness`,
    description: t('consultationPage.heroLede', {
      defaultValue:
        'Book an Ayurvedic consultation in Nashik with Dr. Shubham Mahajan (BAMS, DYS, Reg. No. I-124470-A) at One Wellness Clinic & Research Center. Assessment, lifestyle discussion and personalised therapy suggestions.'
    }),
    path: '/consultation',
    image: img.consultation
  });

  const rawExpect = t('consultationPage.expectItems', { returnObjects: true });
  const expectItems = Array.isArray(rawExpect) && rawExpect.length > 0
    ? (rawExpect as { label: string; text: string }[])
    : DEFAULT_EXPECT;

  const rawFaqs = t('faqsData', { returnObjects: true });
  const faqItems = Array.isArray(rawFaqs) && rawFaqs.length > 0
    ? (rawFaqs as { question: string; answer: string }[]).slice(0, 5)
    : faqs.slice(0, 5);

  return (
    <>
      <PageHero
        eyebrow={t('consultationPage.heroEyebrow', { defaultValue: 'Ayurvedic Consultation' })}
        title={t('consultationPage.heroTitle', { defaultValue: 'Every Journey Starts With a Conversation' })}
        lede={t('consultationPage.heroLede', {
          defaultValue:
            'Nothing is recommended before we understand the individual. Consult Dr. Shubham Mahajan (BAMS, DYS) to evaluate your constitution, discuss health concerns, and structure a personalised therapy program.'
        })}
        image={img.consultation}
        alt="An Ayurvedic practitioner in conversation with a visitor during a consultation"
        meta={[
          {
            label: t('consultationPage.meta.consultantLabel', { defaultValue: 'Consultant' }),
            value: site.doctor.name
          },
          {
            label: t('consultationPage.meta.qualificationsLabel', { defaultValue: 'Qualifications' }),
            value: site.doctor.qualifications
          },
          {
            label: t('consultationPage.meta.feeLabel', { defaultValue: 'Consultation fee' }),
            value: t('consultationPage.meta.feeValue', { defaultValue: '₹1,000' })
          },
          {
            label: t('consultationPage.meta.requiredBeforeLabel', { defaultValue: 'Required before' }),
            value: t('consultationPage.meta.requiredBeforeValue', { defaultValue: 'All programs' })
          }
        ]}
      />

      <section aria-labelledby="expect-heading" className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <div className="max-w-2xl">
            <SectionLabel>{t('consultationPage.expectEyebrow', { defaultValue: 'What to expect' })}</SectionLabel>
            <RevealText
              as="h2"
              id="expect-heading"
              text={t('consultationPage.expectHeading', { defaultValue: 'Before, During and After' })}
              className="mt-3.5 font-display text-[1.9rem] font-light leading-[1.1] text-ink sm:text-[2.3rem]"
            />
          </div>
          <ol className="mt-8 grid grid-cols-1 border-t border-ink/12 sm:grid-cols-3">
            {expectItems.map((item, i) => (
              <Reveal
                as="li"
                key={item.label || i}
                delay={i * 0.07}
                className={`flex flex-col gap-2.5 border-b border-ink/12 py-5 sm:border-b-0 sm:py-6 ${
                  i > 0 ? 'sm:border-l sm:border-ink/12 sm:pl-8' : 'sm:pr-8'
                }`}
              >
                <span className="text-[10px] uppercase tracking-label text-moss">{item.label}</span>
                <p className="max-w-sm text-[0.95rem] leading-relaxed text-ink/70">{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ConsultationForm />
      <WhatsAppSection />

      <section aria-labelledby="consult-faq-heading" className="bg-cream">
        <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel>{t('consultationPage.faqEyebrow', { defaultValue: 'Before you book' })}</SectionLabel>
              <RevealText
                as="h2"
                id="consult-faq-heading"
                text={t('consultationPage.faqHeading', { defaultValue: 'Common Questions' })}
                className="mt-3.5 font-display text-[1.9rem] font-light leading-[1.1] text-ink sm:text-[2.3rem]"
              />
            </div>
            <div className="lg:col-span-8">
              <Accordion items={faqItems} defaultOpen={null} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}