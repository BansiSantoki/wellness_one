import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  MessageCircleIcon,
  GlobeIcon,
  InstagramIcon,
  ExternalLinkIcon
} from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';
import { site, whatsappLink, telLink, mailLink, websiteLink } from '../config/site';
import doctorImg from '../assets/dr_shubham_mahajan.jpg';

export function Contact() {
  useSeo({
    title: 'Contact One Wellness | Ayurvedic Clinic & Consultation in Nashik',
    description:
      'Contact One Wellness Clinic & Research Center in Nashik. Consult Dr. Shubham Mahajan (BAMS, DYS) for Panchakarma, Agnikarma and Ayurvedic therapies. Address: Roongtha Shopping Hub, Indira Nagar, Nashik.',
    path: '/contact',
    image: img.interiorDetail
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Plan Your Visit"
        lede="Consultations and therapies are by appointment so that the treatment room, preparations and team are readied for you. Meet Dr. Shubham Mahajan at our Nashik clinic."
        image={img.interiorDetail}
        alt="Warm light across a lime-plaster wall and terracotta floor inside the centre"
      />

      <section aria-labelledby="contact-details-heading" className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Heading, Overview & Doctor Details */}
            <div className="lg:col-span-5">
              <SectionLabel>Get in touch</SectionLabel>
              <RevealText
                as="h2"
                id="contact-details-heading"
                byLine
                text={'Panchakarma &\nAyurvedic Wellness Division'}
                className="mt-6 font-display text-[1.9rem] font-light leading-[1.1] text-ink sm:text-[2.4rem]"
              />

              <Reveal delay={0.08}>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/65">
                  {site.shortDescription}
                </p>
              </Reveal>

              {/* Doctor & Professional Details Card */}
              <Reveal delay={0.12} className="mt-8">
                <div className="border border-ink/15 bg-cream/80 p-6 sm:p-7 shadow-xs">
                  <div className="flex items-start gap-4">
                    <img
                      src={doctorImg}
                      alt={site.doctor.name}
                      className="h-16 w-16 shrink-0 rounded-full object-cover border-2 border-moss/40 shadow-sm"
                    />
                    <div>
                      <span className="text-[10px] font-sans font-medium uppercase tracking-label text-moss">
                        Lead Ayurvedic Practitioner
                      </span>
                      <h3 className="mt-1 font-display text-[1.35rem] font-light leading-snug text-ink">
                        {site.doctor.name}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-moss">
                        {site.doctor.qualifications}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-ink/70">
                        {site.doctor.profession}
                      </p>
                      <div className="mt-3 border-t border-ink/10 pt-2.5">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-ink/60">
                          Registration No:{' '}
                          <strong className="text-ink font-semibold">
                            {site.doctor.registrationNumber}
                          </strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Social Media & Justdial Review Links */}
              <Reveal delay={0.16} className="mt-6">
                <div className="border border-ink/15 bg-[#FCFAF4] p-5">
                  <p className="text-[10px] uppercase tracking-label text-ink/50">
                    Connect &amp; Reviews
                  </p>

                  <div className="mt-3 space-y-2.5">
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-between gap-3 border border-moss/30 bg-moss/5 px-4 py-3 text-xs font-medium text-moss transition-all duration-300 hover:bg-moss hover:text-ivory"
                    >
                      <span className="flex items-center gap-2.5">
                        <InstagramIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span className="font-semibold uppercase tracking-wider">
                          Follow Us on Instagram
                        </span>
                      </span>
                      <ExternalLinkIcon className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                    </a>

                    <a
                      href={site.justdial}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-between gap-3 border border-[#FF6B00]/30 bg-[#FF6B00]/5 px-4 py-3 text-xs font-medium text-[#C85200] transition-all duration-300 hover:bg-[#FF6B00] hover:text-white"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="flex h-4 w-5 items-center justify-center rounded-xs bg-[#FF6B00] text-[9px] font-bold text-white">
                          JD
                        </span>
                        <span className="font-semibold uppercase tracking-wider">
                          Review Us on Justdial
                        </span>
                      </span>
                      <ExternalLinkIcon className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                    </a>
                  </div>

                  <p className="mt-3 text-[11px] text-ink/50">
                    Follow us on Instagram for health updates or write a verified review of your experience on Justdial.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Contact Details Grid */}
            <div className="lg:col-span-7">
              <dl className="grid grid-cols-1 border-t border-ink/12 sm:grid-cols-2">
                {/* Complete Address */}
                <Reveal className="border-b border-ink/12 py-7 sm:pr-8">
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <MapPinIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    Clinic Address
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-ink/80">
                    {site.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-label text-moss underline underline-offset-4 hover:text-forest"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLinkIcon className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </dd>
                </Reveal>

                {/* Working Hours */}
                <Reveal
                  delay={0.05}
                  className="border-b border-ink/12 py-7 sm:border-l sm:border-ink/12 sm:pl-8"
                >
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <ClockIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    Working hours
                  </dt>
                  <dd className="mt-3 space-y-2 text-sm text-ink/75">
                    {site.workingHours.map((h) => (
                      <span key={h.days} className="flex justify-between gap-4">
                        <span>{h.days}</span>
                        <span className="text-ink/50">{h.hours}</span>
                      </span>
                    ))}
                  </dd>
                </Reveal>

                {/* Telephone */}
                <Reveal delay={0.1} className="border-b border-ink/12 py-7 sm:pr-8">
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <PhoneIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    Telephone
                  </dt>
                  <dd className="mt-3 text-sm text-ink/80">
                    <a
                      href={telLink()}
                      className="inline-block font-mono text-[1.05rem] font-medium text-ink transition-colors hover:text-moss"
                    >
                      {site.phone}
                    </a>
                    <span className="mt-1 block text-xs text-ink/50">
                      Click to call our front desk directly.
                    </span>
                  </dd>
                </Reveal>

                {/* Email Address */}
                <Reveal
                  delay={0.15}
                  className="border-b border-ink/12 py-7 sm:border-l sm:border-ink/12 sm:pl-8"
                >
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <MailIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    Email
                  </dt>
                  <dd className="mt-3 text-sm text-ink/80">
                    <a
                      href={mailLink()}
                      className="inline-block break-all font-medium text-ink transition-colors hover:text-moss"
                    >
                      {site.email}
                    </a>
                    <span className="mt-1 block text-xs text-ink/50">
                      For consultations, reports, and enquiries.
                    </span>
                  </dd>
                </Reveal>

                {/* Website */}
                <Reveal delay={0.2} className="border-b border-ink/12 py-7 sm:pr-8">
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <GlobeIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    Official Website
                  </dt>
                  <dd className="mt-3 text-sm text-ink/80">
                    <a
                      href={websiteLink()}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 font-medium text-moss underline underline-offset-4 hover:text-forest"
                    >
                      <span>{site.website}</span>
                      <ExternalLinkIcon className="h-3 w-3" aria-hidden="true" />
                    </a>
                    <span className="mt-1 block text-xs text-ink/50">
                      Information, therapies, and booking portal.
                    </span>
                  </dd>
                </Reveal>

                {/* WhatsApp */}
                <Reveal
                  delay={0.25}
                  className="border-b border-ink/12 py-7 sm:border-l sm:border-ink/12 sm:pl-8"
                >
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <MessageCircleIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    WhatsApp
                  </dt>
                  <dd className="mt-3 text-sm text-ink/80">
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 font-medium text-moss underline underline-offset-4 hover:text-forest"
                    >
                      <span>Message our team</span>
                      <ExternalLinkIcon className="h-3 w-3" aria-hidden="true" />
                    </a>
                    <span className="mt-1 block text-xs text-ink/50">
                      Response during clinic working hours.
                    </span>
                  </dd>
                </Reveal>
              </dl>
            </div>
          </div>

          {/* Location & Interactive Map Section */}
          <div className="mt-16 border-t border-ink/12 pt-14">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionLabel>Location</SectionLabel>
                <h3 className="mt-2 font-display text-[1.8rem] font-light leading-snug text-ink sm:text-[2.2rem]">
                  Visit Our Clinic in Nashik
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/65">
                  Conveniently situated at Roongtha Shopping Hub, Indira Nagar on Agra-Mumbai Highway
                  with easy parking and accessible facilities.
                </p>
              </div>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 border border-moss bg-moss px-6 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-ivory transition-all duration-300 hover:bg-forest hover:border-forest"
              >
                <span>Get Directions in Google Maps</span>
                <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 overflow-hidden border border-ink/15 shadow-sm">
              <iframe
                title="One Wellness Clinic Location - Roongtha Shopping Hub, Indira Nagar, Nashik"
                src="https://maps.google.com/maps?q=Roongtha+Shopping+Hub,+Indira+Nagar,+Nashik,+Maharashtra+422009&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale contrast-125 transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </section>

      <ConsultationForm
        eyebrow="Enquire"
        heading={'Send Us an Enquiry\nor Request an Appointment.'}
        intro="Share your details and what you are looking for. We will get back to you to confirm a time and discuss which Ayurvedic program may be appropriate."
      />

      <WhatsAppSection />
    </>
  );
}