import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { whatsappLink } from '../../config/site';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true" fill="currentColor">
      <path d="M12.04 2.1C6.55 2.1 2.07 6.59 2.07 12.09c0 1.75.46 3.45 1.33 4.94L2 22.1l5.19-1.4A9.97 9.97 0 0 0 12.04 22.1c5.49 0 9.97-4.48 9.97-9.99 0-2.71-1.09-5.28-2.99-7.18-1.9-1.9-4.47-2.83-7.18-2.83Zm0 17.82a7.86 7.86 0 0 1-4.01-1.12l-.28-.17-3.08.82.82-3.01-.18-.29A7.84 7.84 0 1 1 12.04 19.92Zm4.77-5.89c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.61.14-.18.28-.7.88-.86 1.05-.15.18-.31.2-.59.07-.28-.14-1.18-.44-2.26-1.42-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.5.14-.17.19-.29.28-.48.09-.19.05-.36-.02-.5-.08-.14-.61-1.47-.84-2.02-.22-.53-.45-.45-.61-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.96.95-.96 2.31 0 1.36 1 2.68 1.13 2.87.13.19 1.95 2.98 4.7 4.18.66.29 1.17.46 1.57.59.66.21 1.27.18 1.74.11.53-.08 1.63-.67 1.86-1.32.23-.66.23-1.22.16-1.33-.07-.11-.25-.18-.53-.32Z" />
    </svg>
  );
}

/** Persistent WhatsApp entry point. Expands on hover, stays clear of content. */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with One Wellness on WhatsApp"
      className="group fixed bottom-5 right-4 z-30 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] py-3.5 pl-3 pr-4 text-white shadow-[0_10px_28px_rgba(37,211,102,0.35)] transition-colors duration-300 ease-calm hover:bg-[#1ebe5a] sm:bottom-7 sm:right-7"
      initial={{ opacity: 0, y: 16 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      whileHover={reduce ? undefined : { scale: 1.04 }}>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-[1px]">
        <WhatsAppIcon />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] opacity-0 transition-[max-width,opacity,margin] duration-500 ease-calm group-hover:ml-3 group-hover:max-w-[12rem] group-hover:opacity-100 group-focus-visible:ml-3 group-focus-visible:max-w-[12rem] group-focus-visible:opacity-100">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}