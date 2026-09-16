import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Accordion } from '../components/ui/Accordion';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { ImmersiveCta } from '../components/sections/ImmersiveCta';
import { JsonLd } from '../components/ui/JsonLd';
import { Reveal } from '../components/ui/Reveal';
import { faqs } from '../data/faqs';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';
import { DISCLAIMER } from '../config/site';

export function Faq() {
  useSeo({
    title: 'Panchakarma & Ayurveda FAQs | One Wellness, Nashik',
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
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer }
          }))
        }} />
      
      <PageHero
        eyebrow="Frequently asked"
        title="Questions, Answered Plainly"
        lede="The questions we are asked most often about Panchakarma and Ayurvedic therapy — answered without overstating what a traditional practice can offer."
        image={img.herbsDetail}
        alt="Traditional Ayurvedic herbs, powders and a stone mortar arranged on sandstone" />
      

      <section aria-label="Frequently asked questions" className="bg-ivory">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
          <Accordion items={faqs} />
          <Reveal className="mt-14 border-t border-ink/12 pt-8">
            <h2 className="text-[10px] uppercase tracking-label text-ink/45">Disclaimer</h2>
            <p className="mt-4 text-xs leading-relaxed text-ink/50">{DISCLAIMER}</p>
          </Reveal>
        </div>
      </section>

      <WhatsAppSection />
      <ImmersiveCta
        eyebrow="Still deciding?"
        heading={'Ask Us Anything\nAbout Panchakarma.'}
        text="A consultation is the clearest way to find out whether a program is appropriate for you — and what it would involve."
        image={img.treatmentRoom}
        alt="A calm contemporary Ayurvedic treatment room with natural light"
        secondary={{ label: 'Read the Insights', to: '/blog' }} />
      
    </>);

}