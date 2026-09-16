import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { RejuvenationTiles } from '../components/sections/RejuvenationTiles';
import { DietLifestyle } from '../components/sections/DietLifestyle';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { ImmersiveCta } from '../components/sections/ImmersiveCta';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { ImageReveal } from '../components/ui/ImageReveal';
import { Parallax } from '../components/ui/Parallax';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';

export function Rejuvenation() {
  useSeo({
    title: 'Ayurvedic Rejuvenation in Nashik | Wellness Programs | One Wellness',
    description:
    'Ayurvedic rejuvenation programs in Nashik — weekend, seven-day, seasonal, stress and post-Panchakarma options combining therapy, nutrition, rest and routine.',
    path: '/rejuvenation',
    image: img.meditation
  });

  return (
    <>
      <PageHero
        eyebrow="Rejuvenation"
        title="Restoration, Not Repair"
        lede="Ayurvedic rejuvenation is traditionally associated with practices that support nourishment, restoration and maintenance of wellbeing — closer to upkeep than to intervention."
        image={img.meditation}
        alt="A person seated in quiet meditation in a calm sunlit room"
        variant="band"
        meta={[
        { label: 'Shortest', value: 'Weekend' },
        { label: 'Longest', value: '7 days +' },
        { label: 'Indicative from', value: '₹7,500' },
        { label: 'Planned after', value: 'Consultation' }]
        } />
      

      <section aria-labelledby="rejuvenation-intro" className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <SectionLabel>What it involves</SectionLabel>
              <RevealText
                as="h2"
                id="rejuvenation-intro"
                byLine
                text={'The Therapies Are Visible.\nThe Routine Does the Work.'}
                className="mt-6 font-display text-[2rem] font-light leading-[1.08] text-ink sm:text-[2.7rem]" />
              
              <div className="mt-8 max-w-lg space-y-5 text-[0.95rem] leading-relaxed text-ink/65">
                <Reveal delay={0.06}>
                  <p>
                    A rejuvenation program combines Ayurvedic therapies with supportive nutrition,
                    relaxation, lifestyle guidance and restorative routines. Each element is chosen
                    to support the others rather than to fill a schedule.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>
                    Programs are deliberately unhurried. Rest is treated as part of the process, not
                    as the gap between appointments — which is why a lighter daily schedule usually
                    produces a better experience than a fuller one.
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Parallax distance={28}>
                <ImageReveal
                  src={img.oilPreparation}
                  alt="Warm herbal oil poured from a brass vessel in preparation for therapy"
                  ratio="aspect-[4/5]"
                  caption="Nourishment, in the traditional sense" />
                
              </Parallax>
            </div>
          </div>
        </div>
      </section>

      <RejuvenationTiles />
      <DietLifestyle />
      <ConsultationForm
        eyebrow="Enquire"
        heading={'Plan a Restorative\nFew Days.'}
        intro="Tell us roughly when you are free and what you would like the time to do for you. We will suggest which rejuvenation program may suit." />
      
      <ImmersiveCta
        eyebrow="Or go deeper"
        heading={'Rejuvenation Often\nFollows Panchakarma.'}
        text="If you are considering a longer, phased Ayurvedic process, the Panchakarma page explains how a program is planned."
        image={img.retreat}
        alt="A wellness retreat exterior at dusk beside a still reflecting pool"
        primary={{ label: 'Discover Panchakarma', to: '/panchakarma' }}
        secondary={{ label: 'View Therapies', to: '/therapies' }} />
      
    </>);

}