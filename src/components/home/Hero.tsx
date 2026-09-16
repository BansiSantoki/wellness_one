import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
import { ArrowLink } from '../ui/ArrowLink';
import { site } from '../../config/site';
import { img } from '../../data/images';

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const hasVideo = site.heroVideoUrl.length > 0;

  return (
    <section
      aria-label="Introduction"
      className="relative isolate flex min-h-[92vh] flex-col justify-end overflow-hidden bg-pine pb-10 pt-32 sm:min-h-screen sm:pb-14">
      
      {hasVideo ?
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={site.heroVideoUrl}
        poster={img.hero}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true" /> :


      <motion.img
        src={img.hero}
        alt="A traditional Ayurvedic therapy room in warm evening light, with a carved wooden treatment table and brass oil vessels"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduce ? 0.4 : 2.2, ease }} />

      }

      <div className="absolute inset-0 bg-pine/60 sm:bg-pine/55" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-edge px-5 sm:px-8 lg:px-14">
        <motion.p
          className="text-[10px] uppercase tracking-label text-ivory/60 sm:text-[11px]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}>
          
          Panchakarma &amp; Ayurvedic Wellness
        </motion.p>

        <h1 className="mt-6 max-w-5xl font-display text-[2.7rem] font-normal leading-[1.02] text-ivory sm:text-[4.2rem] lg:text-[5.6rem] xl:text-[6.2rem]">
          {['Restore Balance.', 'Reconnect With Wellness.'].map((line, i) =>
          <span key={line} className="block overflow-hidden">
              <motion.span
              className="block"
              initial={reduce ? { opacity: 0 } : { y: '110%' }}
              animate={reduce ? { opacity: 1 } : { y: '0%' }}
              transition={{ duration: 1.1, delay: 0.5 + i * 0.12, ease }}>
              
                {line}
              </motion.span>
            </span>
          )}
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-ivory/20 pt-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease }}>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ArrowLink to="/consultation" tone="ivory">
                Book Ayurvedic Consultation
              </ArrowLink>
              <ArrowLink to="/therapies" tone="outlineLight">
                Explore Our Therapies
              </ArrowLink>
            </div>
          </motion.div>

          <motion.p
            className="max-w-md text-[0.95rem] leading-relaxed text-ivory/70 lg:col-span-5 lg:col-start-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease }}>
            
            A personalised approach to traditional Ayurvedic wellness, Panchakarma, rejuvenation and
            mindful living.
          </motion.p>
        </div>

        <motion.div
          className="mt-10 flex items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}>
          
          <a
            href="#introduction"
            className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-label text-ivory/55 transition-colors duration-300 hover:text-ivory">
            
            Scroll to explore
            <motion.span
              animate={reduce ? undefined : { y: [0, 5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
              className="inline-flex">
              
              <ArrowDownIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </motion.span>
          </a>
          <span className="hidden text-[10px] uppercase tracking-label text-ivory/40 sm:block">
            {site.city}, Maharashtra
          </span>
        </motion.div>
      </div>
    </section>);

}