import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Desktop-only cursor: a small dot that expands into a "View" disc over
 * elements marked with data-cursor="view". Disabled for touch and reduced motion.
 */
export function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 45, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 700, damping: 45, mass: 0.35 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add('hide-cursor');

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setActive(Boolean(target?.closest('[data-cursor="view"]')));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.body.classList.remove('hide-cursor');
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden lg:block"
      style={{ x: sx, y: sy }}
      aria-hidden="true">
      
      <motion.div
        className="flex items-center justify-center rounded-full bg-ivory text-[9px] uppercase tracking-label text-ink mix-blend-difference"
        animate={{
          width: active ? 68 : 10,
          height: active ? 68 : 10,
          marginLeft: active ? -34 : -5,
          marginTop: active ? -34 : -5,
          opacity: pressed ? 0.6 : 1
        }}
        transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}>
        
        <motion.span
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="select-none">
          
          View
        </motion.span>
      </motion.div>
    </motion.div>);

}