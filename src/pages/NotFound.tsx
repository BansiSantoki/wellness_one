import React from 'react';
import { ArrowLink } from '../components/ui/ArrowLink';
import { SectionLabel } from '../components/ui/SectionLabel';
import { useSeo } from '../utils/seo';

export function NotFound() {
  useSeo({
    title: 'Page Not Found | One Wellness',
    description: 'The page you are looking for is not available.',
    path: '/404'
  });

  return (
    <div className="bg-ivory pt-32 sm:pt-40">
      <div className="mx-auto max-w-edge px-5 pb-28 sm:px-8 lg:px-14">
        <SectionLabel>404</SectionLabel>
        <h1 className="mt-6 max-w-2xl font-display text-[2.4rem] font-light leading-[1.05] text-ink sm:text-[3.4rem]">
          This page has wandered off the path.
        </h1>
        <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-ink/65">
          The page you are looking for is not available. You may want to start with our Panchakarma
          approach, the therapies we offer, or a consultation.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ArrowLink to="/">Back to Home</ArrowLink>
          <ArrowLink to="/consultation" tone="outline">
            Book Ayurvedic Consultation
          </ArrowLink>
        </div>
      </div>
    </div>);

}