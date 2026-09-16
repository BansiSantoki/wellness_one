import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, CheckIcon } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { blogContent } from '../data/blogContent';
import { Reveal } from '../components/ui/Reveal';
import { ArrowLink } from '../components/ui/ArrowLink';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { JsonLd } from '../components/ui/JsonLd';
import { useSeo } from '../utils/seo';
import { DISCLAIMER } from '../config/site';

export function BlogPost() {
  const { slug = '' } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const sections = blogContent[slug] ?? [];

  useSeo({
    title: post ? `${post.title} | One Wellness, Nashik` : 'Article Not Found | One Wellness',
    description: post?.excerpt ?? 'Article not found.',
    path: `/blog/${slug}`,
    image: post?.image
  });

  if (!post) {
    return (
      <div className="mx-auto max-w-edge px-5 py-40 text-center sm:px-8">
        <h1 className="font-display text-[2.4rem] font-light text-ink">Article not found</h1>
        <p className="mt-4 text-sm text-ink/60">The article you are looking for is not available.</p>
        <div className="mt-10 flex justify-center">
          <ArrowLink to="/blog">Back to Insights</ArrowLink>
        </div>
      </div>);

  }

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallbackRelated = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const recommendations = related.length > 0 ? related : fallbackRelated;

  return (
    <>
      <JsonLd
        id="ld-article"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          articleSection: post.category,
          publisher: {
            '@type': 'Organization',
            name: 'One Wellness Clinic & Research Center'
          }
        }} />
      

      <article>
        <header className="bg-ivory pt-28 sm:pt-36">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-label text-ink/45 transition-colors hover:text-ink">
              
              <ArrowLeftIcon
                className="h-3.5 w-3.5 transition-transform duration-300 ease-calm group-hover:-translate-x-1"
                aria-hidden="true" />
              
              All insights
            </Link>
            <p className="mt-10 text-[10px] uppercase tracking-label text-moss">
              {post.category} · {post.readTime} · {post.date}
            </p>
            <h1 className="mt-5 font-display text-[2.3rem] font-light leading-[1.06] text-ink sm:text-[3.2rem]">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl font-display text-[1.25rem] font-light italic leading-relaxed text-ink/60 sm:text-[1.5rem]">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="mx-auto mt-12 max-w-edge px-5 sm:mt-16 sm:px-8 lg:px-14">
          <Reveal>
            <img
              src={post.image}
              alt={post.alt}
              className="aspect-[16/9] w-full object-cover" />
            
          </Reveal>
        </div>

        <div className="bg-ivory">
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
            {sections.map((section, i) =>
            <Reveal key={i} className={i > 0 ? 'mt-12' : ''}>
                {section.heading ?
              <h2 className="font-display text-[1.7rem] font-light leading-snug text-ink sm:text-[2.1rem]">
                    {section.heading}
                  </h2> :
              null}
                <div className={section.heading ? 'mt-5 space-y-5' : 'space-y-5'}>
                  {section.paragraphs.map((para, j) =>
                <p
                  key={j}
                  className={`leading-relaxed text-ink/75 ${
                  i === 0 && j === 0 && !section.heading ? 'text-[1.05rem]' : 'text-[0.98rem]'}`
                  }>
                  
                      {para}
                    </p>
                )}
                </div>
                {section.list ?
              <ul className="mt-6 space-y-2.5">
                    {section.list.map((item) =>
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink/70">
                        <CheckIcon className="mt-1.5 h-3 w-3 shrink-0 text-moss" aria-hidden="true" />
                        {item}
                      </li>
                )}
                  </ul> :
              null}
                {section.pullquote ?
              <blockquote className="mt-9 border-l-2 border-clay pl-6">
                    <p className="font-display text-[1.5rem] font-light italic leading-snug text-ink sm:text-[1.9rem]">
                      {section.pullquote}
                    </p>
                  </blockquote> :
              null}
              </Reveal>
            )}

            <div className="mt-16 border-t border-ink/12 pt-8">
              <h2 className="text-[10px] uppercase tracking-label text-ink/45">Disclaimer</h2>
              <p className="mt-3 text-xs leading-relaxed text-ink/50">{DISCLAIMER}</p>
            </div>

            <div className="mt-12 bg-cream p-7 sm:p-10">
              <h2 className="font-display text-[1.7rem] font-light leading-snug text-ink sm:text-[2.1rem]">
                Have a question about your own situation?
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/65">
                An Ayurvedic consultation is the appropriate place to discuss what may or may not be
                suitable for you.
              </p>
              <div className="mt-8">
                <ArrowLink to="/consultation">Book Ayurvedic Consultation</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section aria-labelledby="related-heading" className="border-t border-ink/10 bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
          <h2 id="related-heading" className="text-[10px] uppercase tracking-label text-ink/45">
            Continue reading
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
            {recommendations.map((item, i) =>
            <Reveal as="li" key={item.slug} delay={i * 0.06}>
                <Link to={`/blog/${item.slug}`} className="group block" data-cursor="view">
                  <div className="overflow-hidden bg-sand">
                    <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-calm group-hover:scale-[1.04]" />
                  
                  </div>
                  <h3 className="mt-4 font-display text-[1.3rem] font-light leading-snug text-ink transition-opacity duration-300 group-hover:opacity-70">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[10px] uppercase tracking-label text-ink/40">
                    {item.readTime}
                  </p>
                </Link>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      <WhatsAppSection />
    </>);

}