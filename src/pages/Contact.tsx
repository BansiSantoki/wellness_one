import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, MessageCircleIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';
import { site, whatsappLink, telLink } from '../config/site';

export function Contact() {
  useSeo({
    title: 'Contact One Wellness | Ayurvedic Wellness Centre in Nashik',
    description:
    'Contact One Wellness Clinic & Research Center in Nashik for Panchakarma, Ayurvedic therapies and consultation. Address, phone, WhatsApp, email and working hours.',
    path: '/contact',
    image: img.interiorDetail
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Plan Your Visit"
        lede="Appointments are preferred so that the room, therapists and preparations can be readied for you. Our team can also answer questions over WhatsApp."
        image={img.interiorDetail}
        alt="Warm light across a lime-plaster wall and terracotta floor inside the centre" />
      

      <section aria-labelledby="contact-details-heading" className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <SectionLabel>Get in touch</SectionLabel>
              <RevealText
                as="h2"
                id="contact-details-heading"
                byLine
                text={'Panchakarma &\nAyurvedic Wellness Division'}
                className="mt-6 font-display text-[1.9rem] font-light leading-[1.1] text-ink sm:text-[2.4rem]" />
              
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/60">
                  {site.shortDescription}
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-8 text-xs leading-relaxed text-ink/45">
                  Contact details below are maintained in one place and updated as the centre
                  publishes them.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <dl className="grid grid-cols-1 border-t border-ink/12 sm:grid-cols-2">
                <Reveal className="border-b border-ink/12 py-7 sm:pr-8">
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <MapPinIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    Address
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-ink/75">
                    {site.addressLines.map((line) =>
                    <span key={line} className="block">
                        {line}
                      </span>
                    )}
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-3 inline-block text-[10px] uppercase tracking-label text-moss underline underline-offset-4">
                      
                      Open in Google Maps
                    </a>
                  </dd>
                </Reveal>

                <Reveal
                  delay={0.05}
                  className="border-b border-ink/12 py-7 sm:border-l sm:border-ink/12 sm:pl-8">
                  
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <ClockIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    Working hours
                  </dt>
                  <dd className="mt-3 space-y-2 text-sm text-ink/75">
                    {site.workingHours.map((h) =>
                    <span key={h.days} className="flex justify-between gap-4">
                        <span>{h.days}</span>
                        <span className="text-ink/50">{h.hours}</span>
                      </span>
                    )}
                  </dd>
                </Reveal>

                <Reveal delay={0.1} className="border-b border-ink/12 py-7 sm:pr-8">
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <PhoneIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    Telephone
                  </dt>
                  <dd className="mt-3 text-sm text-ink/75">
                    <a href={telLink()} className="transition-colors hover:text-moss">
                      {site.phone}
                    </a>
                  </dd>
                </Reveal>

                <Reveal
                  delay={0.15}
                  className="border-b border-ink/12 py-7 sm:border-l sm:border-ink/12 sm:pl-8">
                  
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <MailIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    Email
                  </dt>
                  <dd className="mt-3 text-sm text-ink/75">
                    <a href={`mailto:${site.email}`} className="transition-colors hover:text-moss">
                      {site.email}
                    </a>
                  </dd>
                </Reveal>

                <Reveal delay={0.2} className="border-b border-ink/12 py-7 sm:col-span-2">
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <MessageCircleIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    WhatsApp
                  </dt>
                  <dd className="mt-3 text-sm text-ink/75">
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="transition-colors hover:text-moss">
                      
                      Message our team
                    </a>
                    <span className="mt-1 block text-xs text-ink/45">
                      Response during clinic working hours.
                    </span>
                  </dd>
                </Reveal>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <ConsultationForm
        eyebrow="Enquire"
        heading={'Send Us an Enquiry\nor Request an Appointment.'}
        intro="Share your details and what you are looking for. We will get back to you to confirm a time and discuss which Ayurvedic program may be appropriate." />
      
      <WhatsAppSection />
    </>);

}