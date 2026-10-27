import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { ModernLifestyle } from '../components/sections/ModernLifestyle';
import { DietLifestyle } from '../components/sections/DietLifestyle';
import { WhyOneWellness } from '../components/sections/WhyOneWellness';
import { PhilosophyJourney } from '../components/sections/PhilosophyJourney';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { ImmersiveCta } from '../components/sections/ImmersiveCta';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';

const DEFAULT_HABITS = [
  {
    title: 'Wake at the same hour',
    text: 'Including on the days you would rather not. A predictable morning steadies the rest of the day more than any single practice.'
  },
  {
    title: 'Make the midday meal the main one',
    text: 'Traditional routine places the largest meal when digestion is considered strongest, and keeps the evening meal lighter and earlier.'
  },
  {
    title: 'Give the day an ending',
    text: 'A short, screen-free wind-down signals the end of work. Most sleep difficulties people describe to us are difficulties in stopping.'
  },
  {
    title: 'Move, without making it a project',
    text: 'Consistent moderate activity is traditionally favoured over occasional intensity — particularly during a wellness program.'
  }
];

export function Wellness() {
  const { t } = useTranslation();

  useSeo({
    title: `${t('wellnessPage.heroEyebrow', { defaultValue: 'Modern Wellness' })} | One Wellness Clinic & Research Center | Nashik`,
    description: t('wellnessPage.heroLede', {
      defaultValue:
        'Traditional Ayurveda for modern life — daily routine, food habits, sleep, activity and seasonal wellness guidance at One Wellness Clinic & Research Center, Nashik.'
    }),
    path: '/wellness',
    image: img.lifestyle
  });

  const rawHabits = t('wellnessPage.habits', { returnObjects: true });
  const habits = Array.isArray(rawHabits) && rawHabits.length > 0
    ? (rawHabits as { title: string; text: string }[])
    : DEFAULT_HABITS;

  return (
    <>
      <PageHero
        eyebrow={t('wellnessPage.heroEyebrow', { defaultValue: 'Modern Wellness' })}
        title={t('wellnessPage.heroTitle', { defaultValue: 'Traditional Ayurveda for Modern Life' })}
        lede={t('wellnessPage.heroLede', {
          defaultValue:
            'Most of what affects how we feel day to day is ordinary: when we eat, how we sleep, how long we sit, how rarely we stop. Ayurveda has a great deal to say about exactly that.'
        })}
        image={img.lifestyle}
        alt="A woman with a cup of herbal tea by a sunlit window in a calm home"
      />

      <section aria-labelledby="habits-heading" className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel>{t('wellnessPage.habitsEyebrow', { defaultValue: 'Where people start' })}</SectionLabel>
              <RevealText
                as="h2"
                id="habits-heading"
                byLine
                text={t('wellnessPage.habitsHeading', { defaultValue: 'Four Changes\nWorth Keeping' })}
                className="mt-4 font-display text-[2rem] font-light leading-[1.08] text-ink sm:text-[2.5rem]"
              />

              <Reveal delay={0.08}>
                <p className="mt-3.5 max-w-sm text-sm leading-relaxed text-ink/60">
                  {t('wellnessPage.habitsIntro', {
                    defaultValue:
                      'Discussed during consultation and adjusted to your circumstances. None of them require rearranging your life.'
                  })}
                </p>
              </Reveal>
            </div>
            <ol className="lg:col-span-7 lg:col-start-6">
              {habits.map((habit, i) => (
                <Reveal
                  as="li"
                  key={habit.title || i}
                  delay={i * 0.06}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/10 py-4 sm:py-5 first:border-t first:border-ink/10"
                >
                  <span className="font-display text-[1.6rem] font-light leading-none text-clay">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.5rem] font-light leading-snug text-ink">
                      {habit.title}
                    </h3>
                    <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-ink/60">
                      {habit.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ModernLifestyle />
      <PhilosophyJourney />
      <DietLifestyle />
      <WhyOneWellness />
      <WhatsAppSection />
      <ImmersiveCta
        eyebrow={t('wellnessPage.ctaEyebrow', { defaultValue: 'Begin' })}
        heading={t('wellnessPage.ctaHeading', { defaultValue: 'A Routine You Can\nActually Maintain.' })}
        text={t('wellnessPage.ctaText', {
          defaultValue: 'Start with a consultation. We will look at your week as it really is, and adjust from there.'
        })}
        image={img.meditation}
        alt="A person seated in quiet meditation in a spacious, sunlit room"
        secondary={{
          label: t('wellnessPage.ctaSecondary', { defaultValue: 'Explore Programs' }),
          to: '/programs'
        }}
      />
    </>
  );
}