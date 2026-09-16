import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { Parallax } from '../ui/Parallax';
import { ImageReveal } from '../ui/ImageReveal';
import { TextLink } from '../ui/ArrowLink';
import { img } from '../../data/images';

/** The editorial transition immediately after the hero. */
export function IntroEditorial() {
  return (
    <section id="introduction" aria-labelledby="intro-heading" className="bg-ivory">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionLabel index="i">Our perspective</SectionLabel>
            <RevealText
              as="h2"
              id="intro-heading"
              byLine
              text={'Ayurveda Is Not\nJust a Treatment.\nIt Is a Way of Living.'}
              className="mt-7 font-display text-[2.4rem] font-light leading-[1.02] text-ink sm:text-[3.6rem] lg:text-[4.4rem]" />
            
          </div>

          <div className="lg:col-span-5 lg:pl-6 lg:pt-24">
            <div className="max-w-md space-y-5 text-[0.95rem] leading-relaxed text-ink/65">
              <Reveal delay={0.08}>
                <p>
                  Ayurveda is a traditional system of Indian wellness that views health through the
                  balance of the individual, lifestyle, nutrition, daily routines and the
                  environment.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p>
                  At One Wellness Clinic &amp; Research Center, we bring this traditional perspective
                  into a calm, structured and personalised wellness experience.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p>
                  Our Panchakarma programs are planned after an individual consultation and may
                  include selected Ayurvedic therapies, supportive routines, dietary guidance and
                  rejuvenation practices according to the person's requirements.
                </p>
              </Reveal>
              <Reveal delay={0.2} className="pt-3">
                <TextLink to="/about">Learn About Ayurveda</TextLink>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-12 sm:gap-8 lg:mt-24">
          <div className="sm:col-span-8">
            <Parallax distance={30}>
              <ImageReveal
                src={img.treatmentRoom}
                alt="A calm contemporary Ayurvedic treatment room with lime-plaster walls and teak joinery"
                ratio="aspect-[4/3] sm:aspect-[16/10]"
                caption="The centre — designed for quiet, not for clinical efficiency" />
              
            </Parallax>
          </div>
          <div className="sm:col-span-4 sm:pt-16">
            <Parallax distance={-26}>
              <ImageReveal
                src={img.nasya}
                alt="Brass dropper vessel, medicated oil and dried leaves prepared on a stone tray"
                ratio="aspect-[3/4]" />
              
            </Parallax>
          </div>
        </div>
      </div>
    </section>);

}