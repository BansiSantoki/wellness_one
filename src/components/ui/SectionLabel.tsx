import React from 'react';
import { Reveal } from './Reveal';

interface SectionLabelProps {
  children: React.ReactNode;
  tone?: 'dark' | 'light';
  index?: string;
  className?: string;
}

/** Small uppercase editorial label, optionally preceded by a section index. */
export function SectionLabel({ children, tone = 'dark', index, className = '' }: SectionLabelProps) {
  const color = tone === 'light' ? 'text-ivory/60' : 'text-ink/50';
  const line = tone === 'light' ? 'bg-ivory/30' : 'bg-ink/25';

  return (
    <Reveal className={`flex items-center gap-4 ${className}`} y={12}>
      {index ?
      <span className={`font-display text-sm italic ${tone === 'light' ? 'text-ivory/70' : 'text-moss'}`}>
          {index}
        </span> :
      null}
      <span className={`h-px w-8 shrink-0 ${line}`} aria-hidden="true" />
      <span className={`text-[10px] font-medium uppercase tracking-label sm:text-[11px] ${color}`}>
        {children}
      </span>
    </Reveal>);

}