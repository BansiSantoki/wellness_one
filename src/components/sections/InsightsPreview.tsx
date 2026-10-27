import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { blogPosts } from '../../data/blog';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { TextLink } from '../ui/ArrowLink';

export function InsightsPreview() {
  const { t } = useTranslation();
  const posts = blogPosts.slice(0, 3);

  return (
    <section aria-labelledby="insights-heading" className="bg-ivory border-t border-ink/10">
      <div className="mx-auto max-w-edge px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel index="x">
              {t('home.insightsPreview.eyebrow', { defaultValue: 'Insights' })}
            </SectionLabel>
            <RevealText
              as="h2"
              id="insights-heading"
              text={t('home.insightsPreview.heading', { defaultValue: 'Reading Before You Book' })}
              className="mt-3 font-display text-[1.8rem] font-light leading-[1.1] text-ink sm:text-[2.2rem]"
            />
          </div>
          <Reveal delay={0.08}>
            <TextLink to="/blog">
              {t('home.insightsPreview.viewAll', { defaultValue: 'View All Insights' })}
            </TextLink>
          </Reveal>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 0.05}>
              <Link to={`/blog/${post.slug}`} className="group flex h-full flex-col" data-cursor="view">
                <div className="overflow-hidden bg-sand shadow-xs">
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-calm group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-3.5 flex flex-1 flex-col">
                  <p className="text-[10px] uppercase tracking-label text-moss">
                    {t(`blogPage.categories.${post.category}`, { defaultValue: post.category })} · {post.readTime}
                  </p>
                  <h3 className="mt-1.5 font-display text-[1.25rem] font-light leading-snug text-ink transition-opacity duration-300 group-hover:opacity-70 sm:text-[1.35rem]">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink/60 line-clamp-2">{post.excerpt}</p>
                  <span className="mt-auto pt-3 text-[10px] uppercase tracking-label text-ink/35">
                    {post.date}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}