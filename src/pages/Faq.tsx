import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { Accordion } from '../components/ui/Accordion';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { ImmersiveCta } from '../components/sections/ImmersiveCta';
import { JsonLd } from '../components/ui/JsonLd';
import { Reveal } from '../components/ui/Reveal';
import { faqs } from '../data/faqs';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';

export function Faq() {
  const { t } = useTranslation();
  const rawFaqs = t('faqsData', { returnObjects: true }) as any;
  const localizedFaqs = Array.isArray(rawFaqs) && rawFaqs.length > 0 ? rawFaqs : faqs;

  useSeo({
    title: `${t('faqsPage.heroTitle')} | One Wellness, Nashik`,
    description:
      'Answers to common questions about Panchakarma, Ayurvedic therapies, duration, suitability and cost at One Wellness Clinic & Research Center in Nashik.',
    path: '/faq',
    image: img.herbsDetail
  });

  return (
    <>
      <JsonLd
        id="ld-faq"
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: localizedFaqs.map((f: any) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer }
          }))
        }}
      />

      <PageHero
        eyebrow={t('faqsPage.heroEyebrow')}
        title={t('faqsPage.heroTitle')}
        lede={t('faqsPage.heroLede')}
        image={img.herbsDetail}
        alt="Traditional Ayurvedic herbs, powders and a stone mortar arranged on sandstone"
      />

      <section aria-label="Frequently asked questions" className="bg-ivory">
        <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
          <Accordion items={localizedFaqs} />
          <Reveal className="mt-8 border-t border-ink/12 pt-5">
            <h2 className="text-[10px] uppercase tracking-label text-ink/45">
              {t('faqsPage.disclaimerTitle')}
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-ink/50">
              {t('common.disclaimerText')}
            </p>
          </Reveal>
        </div>
      </section>

      <WhatsAppSection />
      <ImmersiveCta
        eyebrow={t('faqsPage.stillDecidingEyebrow')}
        heading={t('faqsPage.stillDecidingHeading')}
        text={t('faqsPage.stillDecidingText')}
        image={img.treatmentRoom}
        alt="A calm contemporary Ayurvedic treatment room with natural light"
        secondary={{ label: t('faqsPage.stillDecidingSecondary'), to: '/blog' }}
      />
    </>
  );
}