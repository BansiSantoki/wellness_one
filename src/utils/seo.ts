import { useEffect } from 'react';

export interface SeoMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
}

const ORIGIN = 'https://onewellness.example';

const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/** Sets document title, meta description, Open Graph tags and canonical URL. */
export function useSeo({ title, description, path, image }: SeoMeta): void {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMeta('meta[property="og:url"]', 'property', 'og:url', `${ORIGIN}${path}`);
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    if (image) {
      setMeta('meta[property="og:image"]', 'property', 'og:image', image);
    }
    setLink('canonical', `${ORIGIN}${path}`);
  }, [title, description, path, image]);
}