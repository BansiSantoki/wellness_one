import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { FounderSection } from '../components/about/FounderSection';
import { ClinicalTeam } from '../components/about/ClinicalTeam';
import { WhyOneWellness } from '../components/sections/WhyOneWellness';
import { ImmersiveCta } from '../components/sections/ImmersiveCta';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { ImageReveal } from '../components/ui/ImageReveal';
import { Parallax } from '../components/ui/Parallax';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';

const PHILOSOPHY = [
'Understand the individual.',
'Respect traditional wisdom.',
'Personalise the journey.',
'Support sustainable wellness.'];


export function About() {
  useSeo({
    title: 'About One Wellness Clinic & Research Center | Nashik',
    description:
    'One Wellness Clinic & Research Center in Nashik — a contemporary space inspired by traditional wellness wisdom, and home to our Panchakarma & Ayurvedic Wellness Division.',
    path: '/about',
    image: img.retreat
  });

  return (
    <>
      <PageHero
        eyebrow="About"
        title="One Wellness Clinic & Research Center"
        lede="A Contemporary Space Inspired by Traditional Wellness Wisdom."
        image={img.retreat}
        alt="The wellness centre exterior at dusk, with warm interior light and a reflecting pool" />
      

      <section aria-labelledby="about-intro" className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionLabel>Who we are</SectionLabel>
              <RevealText
                as="h2"
                id="about-intro"
                byLine
                text={'A Broader Vision\nof Holistic Wellbeing.'}
                className="mt-6 font-display text-[2.2rem] font-light leading-[1.05] text-ink sm:text-[3.2rem]" />
              
            </div>
            <div className="lg:col-span-5 lg:pt-20">
              <div className="max-w-md space-y-5 text-[0.95rem] leading-relaxed text-ink/65">
                <Reveal delay={0.06}>
                  <p>
                    One Wellness Clinic &amp; Research Center brings together a broader vision of
                    holistic wellbeing.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>
                    Our Panchakarma &amp; Ayurvedic Wellness Division is dedicated to creating a
                    personalised environment where traditional Ayurvedic therapies can be experienced
                    with appropriate consultation, structured planning and attentive care.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-12 sm:gap-8 lg:mt-20">
            <div className="sm:col-span-5">
              <Parallax distance={-24}>
                <ImageReveal
                  src={img.treatmentRoom}
                  alt="A treatment room with lime-plaster walls, teak joinery and a linen-draped therapy bed"
                  ratio="aspect-[3/4]"
                  caption="Treatment room" />
                
              </Parallax>
            </div>
            <div className="sm:col-span-7 sm:pt-20">
              <Parallax distance={26}>
                <ImageReveal
                  src={img.herbsDetail}
                  alt="Ayurvedic herbs, powders, a stone mortar and brass bowls arranged on sandstone"
                  ratio="aspect-[4/3]"
                  caption="Preparations, measured by hand" />
                
              </Parallax>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="philosophy-heading" className="bg-forest">
        <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
          <SectionLabel tone="light">Philosophy</SectionLabel>
          <h2 id="philosophy-heading" className="sr-only">
            Our philosophy
          </h2>
          <ol className="mt-10">
            {PHILOSOPHY.map((line, i) =>
            <Reveal
              as="li"
              key={line}
              delay={i * 0.07}
              className="flex items-baseline gap-5 border-b border-ivory/15 py-6 sm:gap-8 sm:py-8">
              
                <span className="font-display text-sm italic text-sage">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-[1.7rem] font-light leading-tight text-ivory sm:text-[2.6rem] lg:text-[3.2rem]">
                  {line}
                </span>
              </Reveal>
            )}
          </ol>
        </div>
      </section>

      <FounderSection />
      <ClinicalTeam />
      <WhyOneWellness />
      <ImmersiveCta
        eyebrow="Visit us"
        heading={'Come and See\nthe Space.'}
        text="Consultations are by appointment so that the room, therapists and preparations can be readied for you."
        image={img.interiorDetail}
        alt="Warm light across a plastered wall and terracotta floor inside the centre"
        secondary={{ label: 'Contact One Wellness', to: '/contact' }} />
      
    </>);

}