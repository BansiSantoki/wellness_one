import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
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

/** Renders one of the Nashik-specific service pages with full multilingual support. */
export function LocalPage() {
  const { slug = '' } = useParams();
  const { t } = useTranslation();
  const basePage = getLocalPage(slug);
  const localizedData = t(`localPagesData.${slug}`, { returnObjects: true }) as any;

  const page = basePage
    ? {
        ...basePage,
        eyebrow: localizedData?.eyebrow ?? basePage.eyebrow,
        h1: localizedData?.h1 ?? basePage.h1,
        lede: localizedData?.lede ?? basePage.lede,
        seoTitle: localizedData?.seoTitle ?? basePage.seoTitle,
        seoDescription: localizedData?.seoDescription ?? basePage.seoDescription,
        sections: Array.isArray(localizedData?.sections) ? localizedData.sections : basePage.sections,
        factsLabel: localizedData?.factsLabel ?? basePage.factsLabel,
        facts: Array.isArray(localizedData?.facts) ? localizedData.facts : basePage.facts,
        cta: {
          ...basePage.cta,
          heading: localizedData?.cta?.heading ?? basePage.cta.heading,
          text: localizedData?.cta?.text ?? basePage.cta.text,
          label: localizedData?.cta?.label ?? basePage.cta.label
        }
      }
    : null;

  useSeo({
    title: page?.seoTitle ?? `${t('notFound.title')} | One Wellness`,
    description: page?.seoDescription ?? t('notFound.description'),
    path: `/nashik/${slug}`,
    image: page?.heroImage
  });

  if (!page) {
    return (
      <div className="mx-auto max-w-edge px-5 py-40 text-center sm:px-8">
        <h1 className="font-display text-[2.4rem] font-light text-ink">{t('notFound.title')}</h1>
        <div className="mt-10 flex justify-center">
          <ArrowLink to="/">{t('notFound.backHome')}</ArrowLink>
        </div>
      </div>
    );
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
        }}
      />

      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        lede={page.lede}
        image={page.heroImage}
        alt={page.heroAlt}
        variant={page.slug === 'panchakarma-therapy' ? 'band' : 'panel'}
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              {page.sections.map((section: any, i: number) => (
                <Reveal key={section.heading || i} delay={0.03 * i} className={i > 0 ? 'mt-8' : ''}>
                  <h2 className="font-display text-[1.6rem] font-light leading-snug text-ink sm:text-[2rem]">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs?.map((para: string, j: number) => (
                      <p key={j} className="text-[0.98rem] leading-relaxed text-ink/70">
                        {para}
                      </p>
                    ))}
                  </div>
                  {section.list ? (
                    <ul className="mt-5 space-y-2">
                      {section.list.map((item: string) => (
                        <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink/70">
                          <CheckIcon
                            className="mt-1.5 h-3 w-3 shrink-0 text-moss"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Reveal>
              ))}

              <Reveal className="mt-10 border-t border-ink/12 pt-6">
                <h2 className="text-[10px] uppercase tracking-label text-ink/45">
                  {t('common.disclaimerTitle')}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-ink/50">
                  {t('common.disclaimerText')}
                </p>
              </Reveal>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <Reveal className="sticky top-28 bg-cream p-6 sm:p-7">
                <SectionLabel>{page.factsLabel}</SectionLabel>
                <dl className="mt-5 border-t border-ink/12">
                  {page.facts.map((fact: any) => (
                    <div key={fact.label} className="border-b border-ink/10 py-3">
                      <dt className="text-[10px] uppercase tracking-label text-ink/45">
                        {fact.label}
                      </dt>
                      <dd className="mt-1.5 font-display text-[1.15rem] font-light text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
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
        eyebrow={t('form.eyebrow')}
        heading={t('form.heading')}
        text={t('form.intro')}
        image={img.oilPreparation}
        alt="Warm Ayurvedic herbal oil poured from a brass vessel"
        secondary={{ label: t('nav.programs'), to: '/programs' }}
      />
    </>
  );
}