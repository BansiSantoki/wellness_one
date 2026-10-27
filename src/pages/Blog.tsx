import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { blogPosts, blogCategories } from '../data/blog';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';

export function Blog() {
  const { t, i18n } = useTranslation();
  const [category, setCategory] = useState('All');

  useSeo({
    title: 'Ayurveda & Panchakarma Insights | One Wellness, Nashik',
    description:
      'Guides and explanations on Panchakarma, Ayurvedic therapies, rejuvenation, diet and daily routine from One Wellness Clinic & Research Center in Nashik.',
    path: '/blog',
    image: img.herbsDetail
  });

  const [lead, ...rest] = blogPosts;
  const filtered = useMemo(
    () => (category === 'All' ? rest : rest.filter((p) => p.category === category)),
    [category, rest]
  );

  const getCatLabel = (cat: string) => {
    return t(`blogPage.categories.${cat}`, { defaultValue: cat });
  };

  const noArticlesText =
    i18n.language === 'mr'
      ? 'या श्रेणीत अद्याप कोणतेही लेख नाहीत.'
      : i18n.language === 'hi'
      ? 'इस श्रेणी में अभी कोई लेख नहीं है।'
      : 'No articles in this category yet.';

  return (
    <>
      <header className="bg-ivory pt-20 sm:pt-24">
        <div className="mx-auto max-w-edge px-5 sm:px-8 lg:px-14">
          <SectionLabel>{t('blogPage.headerEyebrow')}</SectionLabel>
          <RevealText
            as="h1"
            byLine
            text={t('blogPage.headerTitle')}
            className="mt-4 max-w-4xl font-display text-[2.2rem] font-light leading-[1.04] text-ink sm:text-[3rem] lg:text-[3.6rem]"
          />

          <Reveal delay={0.1}>
            <p className="mt-3.5 max-w-xl text-[0.95rem] leading-relaxed text-ink/65">
              {t('blogPage.headerSubtitle')}
            </p>
          </Reveal>
        </div>
      </header>

      <section aria-label="Featured article" className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 pt-8 sm:px-8 sm:pt-10 lg:px-14">
          <Reveal>
            <Link
              to={`/blog/${lead.slug}`}
              className="group grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
              data-cursor="view"
            >
              <div className="overflow-hidden bg-sand lg:col-span-7">
                <img
                  src={lead.image}
                  alt={lead.alt}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-calm group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center lg:col-span-5">
                <p className="text-[10px] uppercase tracking-label text-moss">
                  {t('blogPage.featuredTag')} · {getCatLabel(lead.category)} · {lead.readTime}
                </p>
                <h2 className="mt-4 font-display text-[2rem] font-light leading-[1.08] text-ink sm:text-[2.7rem]">
                  {lead.title}
                </h2>
                <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-ink/65">
                  {lead.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide2 text-ink">
                  {t('blogPage.readGuide')}
                  <ArrowUpRightIcon
                    className="h-4 w-4 text-moss transition-transform duration-300 ease-calm group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-label="All articles" className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto border-y border-ink/10 px-5 py-3.5 sm:mx-0 sm:px-0">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={`shrink-0 px-4 py-2 text-[10px] uppercase tracking-label transition-colors duration-300 ease-calm ${
                  category === cat
                    ? 'bg-forest text-ivory'
                    : 'text-ink/55 hover:bg-cream hover:text-ink'
                }`}
              >
                {getCatLabel(cat)}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-14 text-center font-display text-[1.5rem] font-light text-ink/50">
              {noArticlesText}
            </p>
          ) : (
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, i) => (
                <Reveal as="li" key={post.slug} delay={(i % 3) * 0.06}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex h-full flex-col"
                    data-cursor="view"
                  >
                    <div className="overflow-hidden bg-sand">
                      <img
                        src={post.image}
                        alt={post.alt}
                        loading="lazy"
                        decoding="async"
                        className={`w-full object-cover transition-transform duration-500 ease-calm group-hover:scale-[1.04] ${
                          i % 5 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'
                        }`}
                      />
                    </div>
                    <div className="mt-5 flex flex-1 flex-col">
                      <p className="text-[10px] uppercase tracking-label text-moss">
                        {getCatLabel(post.category)} · {post.readTime}
                      </p>
                      <h3 className="mt-3 font-display text-[1.4rem] font-light leading-snug text-ink transition-opacity duration-300 group-hover:opacity-70">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
                      <span className="mt-auto pt-5 text-[10px] uppercase tracking-label text-ink/35">
                        {post.date}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>

      <WhatsAppSection />
    </>
  );
}