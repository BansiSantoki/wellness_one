import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { PlusIcon, MinusIcon } from 'lucide-react';

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Index open on first render, or null for all closed. */
  defaultOpen?: number | null;
  tone?: 'dark' | 'light';
}

export function Accordion({ items, defaultOpen = 0, tone = 'dark' }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const reduce = useReducedMotion();

  const text = tone === 'light' ? 'text-ivory' : 'text-ink';
  const muted = tone === 'light' ? 'text-ivory/65' : 'text-ink/65';
  const border = tone === 'light' ? 'border-ivory/20' : 'border-ink/12';

  return (
    <div className={`border-t ${border}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.question} className={`border-b ${border}`}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left sm:py-7">
                
                <span className="flex items-baseline gap-4 sm:gap-6">
                  <span className={`shrink-0 font-sans text-[10px] tracking-label ${muted}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`font-display text-xl leading-snug transition-opacity duration-300 sm:text-2xl md:text-[1.7rem] ${text} ${
                    isOpen ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`
                    }>
                    
                    {item.question}
                  </span>
                </span>
                <span
                  className={`mt-1 shrink-0 ${muted} transition-transform duration-300 ease-calm group-hover:rotate-90`}
                  aria-hidden="true">
                  
                  {isOpen ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ?
              <motion.div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden">
                
                  <p className={`max-w-2xl pb-8 pl-0 text-[0.95rem] leading-relaxed sm:pl-10 ${muted}`}>
                    {item.answer}
                  </p>
                </motion.div> :
              null}
            </AnimatePresence>
          </div>);

      })}
    </div>);

}