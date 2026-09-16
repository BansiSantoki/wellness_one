import React from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { useSeo } from '../utils/seo';
import { site, DISCLAIMER } from '../config/site';

type LegalKind = 'privacy' | 'terms' | 'disclaimer';

interface LegalProps {
  kind: LegalKind;
}

const CONTENT: Record<LegalKind, {title: string;path: string;intro: string;sections: {heading: string;body: string[];}[];}> = {
  privacy: {
    title: 'Privacy Policy',
    path: '/privacy',
    intro:
    'This page explains what information we collect through this website and how it is used. It will be updated when the centre publishes its final policy.',
    sections: [
    {
      heading: 'Information we collect',
      body: [
      'When you submit an enquiry form we collect the details you provide: your name, mobile number, WhatsApp number, preferred date, wellness goal and any notes you add.',
      'We do not collect health information through this website. Any health details are discussed during consultation at the centre.']

    },
    {
      heading: 'How the information is used',
      body: [
      'Enquiry details are used only to contact you about your enquiry, arrange an appointment and discuss which Ayurvedic program may be appropriate.',
      'We do not sell enquiry information, and we do not share it with third parties except where necessary to operate the centre or where required by law.']

    },
    {
      heading: 'Contact',
      body: [
      `For any question about your information, write to ${site.email} or call ${site.phone}.`]

    }]

  },
  terms: {
    title: 'Terms of Use',
    path: '/terms',
    intro:
    'These terms govern the use of this website. Program and therapy terms are confirmed separately at the time of booking.',
    sections: [
    {
      heading: 'Website content',
      body: [
      'Content on this website is provided for general educational and wellness information. Therapy names, durations and prices shown are indicative and may change.',
      'Submitting an enquiry does not confirm an appointment, therapy or program. All programs are confirmed following consultation.']

    },
    {
      heading: 'Pricing',
      body: [
      'Prices shown are starting figures. The final cost of a program depends on its duration, the procedures selected following assessment, and the preparations used. Accommodation, medicines and additional procedures, if applicable, may be charged separately.']

    },
    {
      heading: 'Suitability',
      body: [
      'Panchakarma and Ayurvedic therapies are not suitable for everyone or at every stage of life. Suitability, selection and duration are determined by a qualified practitioner following consultation.']

    }]

  },
  disclaimer: {
    title: 'Medical & Wellness Disclaimer',
    path: '/disclaimer',
    intro: 'Please read this disclaimer alongside any information on this website.',
    sections: [
    {
      heading: 'Disclaimer',
      body: [DISCLAIMER]
    },
    {
      heading: 'No treatment claims',
      body: [
      'We do not claim that Panchakarma or any Ayurvedic therapy cures or treats disease. Descriptions on this website refer to traditional Ayurvedic practices and their traditional associations.',
      'If you have a medical condition, are pregnant, or are undergoing treatment, please seek advice from your treating doctor and mention it at consultation.']

    },
    {
      heading: 'Practitioner details',
      body: [
      'We publish practitioner qualifications and registration details only once verified. Where these are not yet listed, the profile area on our About page is marked as awaiting confirmation.']

    }]

  }
};

export function Legal({ kind }: LegalProps) {
  const content = CONTENT[kind];

  useSeo({
    title: `${content.title} | One Wellness Clinic & Research Center`,
    description: content.intro,
    path: content.path
  });

  return (
    <div className="bg-ivory pt-28 sm:pt-36">
      <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-8 sm:pb-28">
        <SectionLabel>Legal</SectionLabel>
        <RevealText
          as="h1"
          text={content.title}
          className="mt-6 font-display text-[2.3rem] font-light leading-[1.06] text-ink sm:text-[3rem]" />
        
        <Reveal delay={0.08}>
          <p className="mt-6 text-[0.98rem] leading-relaxed text-ink/65">{content.intro}</p>
        </Reveal>

        {content.sections.map((section, i) =>
        <Reveal key={section.heading} delay={0.04 * i} className="mt-12">
            <h2 className="font-display text-[1.6rem] font-light leading-snug text-ink sm:text-[1.9rem]">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {section.body.map((para, j) =>
            <p key={j} className="text-[0.95rem] leading-relaxed text-ink/70">
                  {para}
                </p>
            )}
            </div>
          </Reveal>
        )}
      </div>
    </div>);

}