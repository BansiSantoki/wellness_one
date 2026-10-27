import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { Parallax } from '../components/ui/Parallax';
import { ImageReveal } from '../components/ui/ImageReveal';
import { FounderSection } from '../components/about/FounderSection';
import { ClinicalTeam } from '../components/about/ClinicalTeam';
import { WhyOneWellness } from '../components/sections/WhyOneWellness';
import { ImmersiveCta } from '../components/sections/ImmersiveCta';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';

const DEFAULT_PHILOSOPHY = [
  'Care planned around one person at a time',
  'Panchakarma delivered slowly and with preparation',
  'Therapies selected individually, not from a menu',
  'Rest treated as part of the healing process',
  'Ayurvedic wisdom tailored for modern lifestyles'
];

export function About() {
  const { t } = useTranslation();

  useSeo({
    title: t('about.seoTitle', { defaultValue: 'About One Wellness | Ayurvedic Clinic & Research Center, Nashik' }),
    description: t('about.seoDescription', {
      defaultValue:
        'One Wellness Clinic & Research Center in Nashik — clinical guidance by Dr. Shubham Mahajan (BAMS, DYS). Located at Roongtha Shopping Hub, Indira Nagar, Agra-Mumbai Highway, Nashik.'
    }),
    path: '/about',
    image: img.retreat
  });

  const rawPhil = t('about.philosophyItems', { returnObjects: true });
  const philosophy = Array.isArray(rawPhil) && rawPhil.length > 0 ? (rawPhil as string[]) : DEFAULT_PHILOSOPHY;

  return (
    <>
      <PageHero
        eyebrow={t('about.heroEyebrow', { defaultValue: 'About' })}
        title={t('about.heroTitle', { defaultValue: 'One Wellness Clinic & Research Center' })}
        lede={t('about.heroLede', { defaultValue: 'A Contemporary Space Inspired by Traditional Wellness Wisdom.' })}
        image={img.retreat}
        alt="The wellness centre exterior at dusk, with warm interior light and a reflecting pool"
      />

      <section aria-labelledby="about-intro" className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionLabel>{t('about.introEyebrow', { defaultValue: 'Who we are' })}</SectionLabel>
              <RevealText
                as="h2"
                id="about-intro"
                byLine
                text={t('about.introHeading', { defaultValue: 'A Broader Vision\nof Holistic Wellbeing.' })}
                className="mt-3 font-display text-[1.8rem] font-light leading-[1.08] text-ink sm:text-[2.5rem]"
              />
            </div>
            <div className="lg:col-span-5">
              <div className="max-w-md space-y-3.5 text-xs sm:text-sm leading-relaxed text-ink/65">
                <Reveal delay={0.06}>
                  <p>
                    {t('about.introP1', {
                      defaultValue:
                        'One Wellness Clinic & Research Center brings together a broader vision of holistic wellbeing.'
                    })}
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>
                    {t('about.introP2', {
                      defaultValue:
                        'The centre was conceived as a calm clinical sanctuary — a place where traditional Ayurvedic therapies and Panchakarma programs are delivered with careful individual attention.'
                    })}
                  </p>
                </Reveal>
                <Reveal delay={0.14}>
                  <p>
                    {t('about.introP3', {
                      defaultValue:
                        'Rather than viewing therapies as isolated treatments, we integrate Ayurvedic consultations, restorative procedures, supportive nutrition and sustainable routine guidance.'
                    })}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 items-center gap-6 sm:grid-cols-12 sm:gap-8 lg:mt-12">
            <div className="sm:col-span-5">
              <Parallax distance={14}>
                <ImageReveal
                  src={img.interiorDetail}
                  alt="Afternoon light across lime-plaster wall and terracotta tile floor"
                  ratio="aspect-[4/3]"
                  caption={t('about.sanctuaryCaption', { defaultValue: 'Clinical sanctuary, Nashik' })}
                />
              </Parallax>
            </div>
            <div className="sm:col-span-7">
              <Parallax distance={-14}>
                <ImageReveal
                  src={img.herbsDetail}
                  alt="Ayurvedic herbs, powders, a stone mortar and brass bowls arranged on sandstone"
                  ratio="aspect-[16/10]"
                  caption={t('about.preparationsCaption', { defaultValue: 'Preparations, measured by hand' })}
                />
              </Parallax>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="philosophy-heading" className="bg-forest">
        <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <SectionLabel tone="light">{t('about.philosophyEyebrow', { defaultValue: 'Philosophy' })}</SectionLabel>
          <h2 id="philosophy-heading" className="sr-only">
            {t('about.philosophyHeading', { defaultValue: 'Our philosophy' })}
          </h2>
          <ol className="mt-6">
            {philosophy.map((line, i) => (
              <Reveal
                as="li"
                key={line || i}
                delay={i * 0.04}
                className="flex items-baseline gap-4 border-b border-ivory/15 py-3.5 sm:gap-6 sm:py-4.5"
              >
                <span className="font-display text-xs italic text-sage">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-[1.25rem] font-light leading-tight text-ivory sm:text-[1.8rem] lg:text-[2rem]">
                  {line}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FounderSection />
      <ClinicalTeam />
      <WhyOneWellness />
      <ImmersiveCta
        eyebrow={t('about.ctaEyebrow', { defaultValue: 'Visit us' })}
        heading={t('about.ctaHeading', { defaultValue: 'Come and See\nthe Space.' })}
        text={t('about.ctaText', { defaultValue: 'Consultations are by appointment so that the room, therapists and preparations can be readied for you.' })}
        image={img.interiorDetail}
        alt="Warm light across a plastered wall and terracotta floor inside the centre"
        secondary={{
          label: t('about.contactBtn', { defaultValue: 'Contact One Wellness' }),
          to: '/contact'
        }}
      />
    </>
  );
}