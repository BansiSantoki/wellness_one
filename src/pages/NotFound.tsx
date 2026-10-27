import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLink } from '../components/ui/ArrowLink';
import { SectionLabel } from '../components/ui/SectionLabel';
import { useSeo } from '../utils/seo';

export function NotFound() {
  const { t } = useTranslation();

  useSeo({
    title: `${t('notFound.title')} | One Wellness`,
    description: t('notFound.description'),
    path: '/404'
  });

  return (
    <div className="bg-ivory pt-20 sm:pt-24">
      <div className="mx-auto max-w-edge px-5 pb-16 sm:px-8 sm:pb-20 lg:px-14">
        <SectionLabel>{t('notFound.eyebrow')}</SectionLabel>
        <h1 className="mt-3.5 max-w-2xl font-display text-[2.2rem] font-light leading-[1.05] text-ink sm:text-[3rem]">
          {t('notFound.title')}
        </h1>
        <p className="mt-3.5 max-w-md text-[0.95rem] leading-relaxed text-ink/65">
          {t('notFound.description')}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ArrowLink to="/">{t('notFound.backHome')}</ArrowLink>
          <ArrowLink to="/consultation" tone="outline">
            {t('notFound.bookConsultation')}
          </ArrowLink>
        </div>
      </div>
    </div>
  );
}