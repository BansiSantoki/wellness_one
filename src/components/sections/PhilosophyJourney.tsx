import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
import { philosophyStages } from '../../data/journey';
import { SectionLabel } from '../ui/SectionLabel';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface StageProps {
  index: number;
  total: number;
  word: string;
  caption: string;
  progress: MotionValue<number>;
}

function DesktopStage({ index, total, word, caption, progress }: StageProps) {
  const start = index / total;
  const mid = (index + 0.5) / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start - 0.14, mid, end + 0.06], [0.18, 1, 0.18]);
  const y = useTransform(progress, [start - 0.14, mid, end + 0.06], [28, 0, -28]);

  return (
    <motion.li className="flex w-[62vw] shrink-0 flex-col justify-center" style={{ opacity, y }}>
      <span className="font-display text-sm italic text-sage">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-3 font-display text-[10vw] font-light leading-[0.95] tracking-[-0.01em] text-ivory">
        {word}
      </h3>
      <div className="mt-6 flex items-center gap-6">
        <span className="h-px w-24 bg-ivory/25" aria-hidden="true" />
        <p className="max-w-xs text-sm leading-relaxed text-ivory/60">{caption}</p>
      </div>
    </motion.li>);

}

/**
 * The wellness philosophy as a continuous horizontal passage rather than five
 * cards: on desktop the page pins and the words travel sideways; on touch it
 * becomes a snap rail that reads as one line of movement.
 */
export function PhilosophyJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['18vw', '-232vw']);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const header =
  <div className="mx-auto max-w-edge px-5 sm:px-8 lg:px-14">
      <SectionLabel tone="light" index="ii">
        The One Wellness approach
      </SectionLabel>
      <p className="mt-6 max-w-lg font-display text-[1.6rem] font-light leading-snug text-ivory/85 sm:text-[2rem]">
        A journey back to balance moves through five stages — not five products.
      </p>
    </div>;


  if (!isDesktop || reduce) {
    return (
      <section aria-label="Our wellness philosophy" className="bg-pine py-20 sm:py-24">
        {header}
        <ol className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-8 overflow-x-auto px-5 pb-4 sm:px-8">
          {philosophyStages.map((stage, i) =>
          <li key={stage.word} className="w-[78vw] shrink-0 snap-center sm:w-[56vw]">
              <span className="font-display text-sm italic text-sage">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-[3rem] font-light leading-[0.95] text-ivory sm:text-[4rem]">
                {stage.word}
              </h3>
              <span className="mt-5 block h-px w-16 bg-ivory/25" aria-hidden="true" />
              <p className="mt-5 text-sm leading-relaxed text-ivory/60">{stage.caption}</p>
            </li>
          )}
        </ol>
        <p className="mx-auto mt-6 max-w-edge px-5 text-[10px] uppercase tracking-label text-ivory/35 sm:px-8">
          Swipe to follow the journey →
        </p>
      </section>);

  }

  return (
    <section aria-label="Our wellness philosophy" className="bg-pine">
      <div ref={ref} className="relative h-[320vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-20">
          {header}
          <motion.ol className="mt-16 flex items-center gap-[8vw]" style={{ x }}>
            {philosophyStages.map((stage, i) =>
            <DesktopStage
              key={stage.word}
              index={i}
              total={philosophyStages.length}
              word={stage.word}
              caption={stage.caption}
              progress={scrollYProgress} />

            )}
          </motion.ol>
          <div className="mx-auto mt-16 w-full max-w-edge px-14">
            <div className="h-px w-full bg-ivory/12">
              <motion.div
                className="h-px origin-left bg-sage"
                style={{ scaleX: lineScale }}
                aria-hidden="true" />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

}