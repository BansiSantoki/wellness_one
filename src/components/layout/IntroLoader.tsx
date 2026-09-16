import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/** Short brand curtain shown once on first load. */
export function IntroLoader() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), reduce ? 200 : 1500);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done ?
      <motion.div
        className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-pine"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        aria-hidden="true">
        
          <motion.span
          className="font-display text-[1.8rem] font-light tracking-[0.06em] text-ivory sm:text-[2.4rem]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}>
          
            One Wellness
          </motion.span>
          <motion.span
          className="mt-4 h-px bg-ivory/40"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.23, 1, 0.32, 1] }} />
        
          <motion.span
          className="mt-4 text-[10px] uppercase tracking-label text-ivory/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}>
          
            Panchakarma &amp; Ayurvedic Wellness
          </motion.span>
        </motion.div> :
      null}
    </AnimatePresence>);

}