import React from 'react';
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

const EXPECT = [
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
}];


export function Consultation() {
  useSeo({
    title: 'Book an Ayurvedic Consultation in Nashik | One Wellness',
    description:
    'Book an Ayurvedic consultation in Nashik at One Wellness Clinic & Research Center. ₹1,000 — assessment, lifestyle discussion and personalised therapy suggestions.',
    path: '/consultation',
    image: img.consultation
  });

  return (
    <>
      <PageHero
        eyebrow="Ayurvedic Consultation"
        title="Every Journey Starts With a Conversation"
        lede="Nothing is recommended before we understand the individual. The consultation is where your routine, concerns and goals are discussed — and where any program is decided."
        image={img.consultation}
        alt="An Ayurvedic practitioner in conversation with a visitor during a consultation"
        meta={[
        { label: 'Consultation fee', value: '₹1,000' },
        { label: 'Required before', value: 'All programs' }]
        } />
      

      <section aria-labelledby="expect-heading" className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
          <div className="max-w-2xl">
            <SectionLabel>What to expect</SectionLabel>
            <RevealText
              as="h2"
              id="expect-heading"
              text="Before, During and After"
              className="mt-6 font-display text-[2rem] font-light leading-[1.1] text-ink sm:text-[2.5rem]" />
            
          </div>
          <ol className="mt-12 grid grid-cols-1 border-t border-ink/12 sm:grid-cols-3">
            {EXPECT.map((item, i) =>
            <Reveal
              as="li"
              key={item.label}
              delay={i * 0.07}
              className={`flex flex-col gap-3 border-b border-ink/12 py-8 sm:border-b-0 sm:py-10 ${
              i > 0 ? 'sm:border-l sm:border-ink/12 sm:pl-8' : 'sm:pr-8'}`
              }>
              
                <span className="text-[10px] uppercase tracking-label text-moss">{item.label}</span>
                <p className="max-w-sm text-[0.95rem] leading-relaxed text-ink/70">{item.text}</p>
              </Reveal>
            )}
          </ol>
        </div>
      </section>

      <ConsultationForm />
      <WhatsAppSection />

      <section aria-labelledby="consult-faq-heading" className="bg-cream">
        <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel>Before you book</SectionLabel>
              <RevealText
                as="h2"
                id="consult-faq-heading"
                text="Common Questions"
                className="mt-6 font-display text-[2rem] font-light leading-[1.1] text-ink sm:text-[2.4rem]" />
              
            </div>
            <div className="lg:col-span-8">
              <Accordion items={faqs.slice(0, 5)} defaultOpen={null} />
            </div>
          </div>
        </div>
      </section>
    </>);

}