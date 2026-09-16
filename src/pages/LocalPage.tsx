import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';
import { getLocalPage } from '../data/localPages';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { ArrowLink } from '../components/ui/ArrowLink';
import { SectionLabel } from '../components/ui/SectionLabel';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { ImmersiveCta } from '../components/sections/ImmersiveCta';
import { JsonLd } from '../components/ui/JsonLd';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';
import { DISCLAIMER } from '../config/site';

/** Renders one of the Nashik-specific service pages from data. */
export function LocalPage() {
  const { slug = '' } = useParams();
  const page = getLocalPage(slug);

  useSeo({
    title: page?.seoTitle ?? 'Page Not Found | One Wellness',
    description: page?.seoDescription ?? 'Page not found.',
    path: `/nashik/${slug}`,
    image: page?.heroImage
  });

  if (!page) {
    return (
      <div className="mx-auto max-w-edge px-5 py-40 text-center sm:px-8">
        <h1 className="font-display text-[2.4rem] font-light text-ink">Page not found</h1>
        <div className="mt-10 flex justify-center">
          <ArrowLink to="/">Back to Home</ArrowLink>
        </div>
      </div>);

  }

  return (
    <>
      <JsonLd
        id={`ld-local-${page.slug}`}
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: page.h1,
          description: page.seoDescription,
          areaServed: { '@type': 'City', name: 'Nashik' },
          provider: {
            '@type': 'HealthAndBeautyBusiness',
            name: 'One Wellness Clinic & Research Center'
          }
        }} />
      

      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        lede={page.lede}
        image={page.heroImage}
        alt={page.heroAlt}
        variant={page.slug === 'panchakarma-therapy' ? 'band' : 'panel'} />
      

      <section className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              {page.sections.map((section, i) =>
              <Reveal key={section.heading} delay={0.03 * i} className={i > 0 ? 'mt-14' : ''}>
                  <h2 className="font-display text-[1.7rem] font-light leading-snug text-ink sm:text-[2.1rem]">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((para, j) =>
                  <p key={j} className="text-[0.98rem] leading-relaxed text-ink/70">
                        {para}
                      </p>
                  )}
                  </div>
                  {section.list ?
                <ul className="mt-6 space-y-2.5">
                      {section.list.map((item) =>
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.95rem] text-ink/70">
                    
                          <CheckIcon
                      className="mt-1.5 h-3 w-3 shrink-0 text-moss"
                      aria-hidden="true" />
                    
                          {item}
                        </li>
                  )}
                    </ul> :
                null}
                </Reveal>
              )}

              <Reveal className="mt-16 border-t border-ink/12 pt-8">
                <h2 className="text-[10px] uppercase tracking-label text-ink/45">Disclaimer</h2>
                <p className="mt-3 text-xs leading-relaxed text-ink/50">{DISCLAIMER}</p>
              </Reveal>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <Reveal className="sticky top-28 bg-cream p-7 sm:p-8">
                <SectionLabel>{page.factsLabel}</SectionLabel>
                <dl className="mt-6 border-t border-ink/12">
                  {page.facts.map((fact) =>
                  <div key={fact.label} className="border-b border-ink/10 py-4">
                      <dt className="text-[10px] uppercase tracking-label text-ink/45">
                        {fact.label}
                      </dt>
                      <dd className="mt-1.5 font-display text-[1.15rem] font-light text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  )}
                </dl>
                <h2 className="mt-8 font-display text-[1.4rem] font-light leading-snug text-ink">
                  {page.cta.heading}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{page.cta.text}</p>
                <div className="mt-6">
                  <ArrowLink to={page.cta.to} className="w-full">
                    {page.cta.label}
                  </ArrowLink>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <WhatsAppSection />
      <ImmersiveCta
        eyebrow="Begin your journey"
        heading={'Start With an\nAyurvedic Consultation.'}
        text="An assessment comes before any recommendation. Share your details and we will arrange a time."
        image={img.oilPreparation}
        alt="Warm Ayurvedic herbal oil poured from a brass vessel"
        secondary={{ label: 'View Programs', to: '/programs' }} />
      
    </>);

}