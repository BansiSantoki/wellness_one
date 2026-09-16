import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blog';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { TextLink } from '../ui/ArrowLink';

/** Magazine-style three-up from the journal. */
export function InsightsPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section aria-labelledby="insights-heading" className="bg-ivory">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel index="x">Insights</SectionLabel>
            <RevealText
              as="h2"
              id="insights-heading"
              text="Reading Before You Book"
              className="mt-6 font-display text-[2rem] font-light leading-[1.1] text-ink sm:text-[2.6rem]" />
            
          </div>
          <Reveal delay={0.1}>
            <TextLink to="/blog">View All Insights</TextLink>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
          {posts.map((post, i) =>
          <Reveal as="li" key={post.slug} delay={i * 0.07}>
              <Link to={`/blog/${post.slug}`} className="group flex h-full flex-col" data-cursor="view">
                <div className="overflow-hidden bg-sand">
                  <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-calm group-hover:scale-[1.04]" />
                
                </div>
                <div className="mt-5 flex flex-1 flex-col">
                  <p className="text-[10px] uppercase tracking-label text-moss">
                    {post.category} · {post.readTime}
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
          )}
        </ul>
      </div>
    </section>);

}