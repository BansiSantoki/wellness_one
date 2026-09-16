import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

type Tone = 'forest' | 'ivory' | 'outline' | 'outlineLight';

const toneClasses: Record<Tone, string> = {
  forest: 'bg-forest text-ivory hover:bg-pine border border-forest',
  ivory: 'bg-ivory text-ink hover:bg-white border border-ivory',
  outline: 'border border-ink/25 text-ink hover:border-ink/60 hover:bg-ink/[0.03]',
  outlineLight: 'border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/10'
};

interface ButtonContentProps {
  children: React.ReactNode;
}

function Inner({ children }: ButtonContentProps) {
  return (
    <>
      <span>{children}</span>
      <ArrowRightIcon
        className="h-4 w-4 shrink-0 transition-transform duration-300 ease-calm group-hover:translate-x-1"
        aria-hidden="true" />
      
    </>);

}

const base =
'group inline-flex items-center justify-center gap-3 px-7 py-4 text-[11px] font-medium uppercase tracking-wide2 transition-colors duration-300 ease-calm';

interface ArrowLinkProps {
  to: string;
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}

/** Primary CTA as an internal route link. */
export function ArrowLink({ to, children, tone = 'forest', className = '' }: ArrowLinkProps) {
  return (
    <Link to={to} className={`${base} ${toneClasses[tone]} ${className}`}>
      <Inner>{children}</Inner>
    </Link>);

}

interface ArrowAnchorProps {
  href: string;
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}

/** Same CTA for external destinations such as WhatsApp. */
export function ArrowAnchor({ href, children, tone = 'forest', className = '' }: ArrowAnchorProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`${base} ${toneClasses[tone]} ${className}`}>
      
      <Inner>{children}</Inner>
    </a>);

}

interface TextLinkProps {
  to: string;
  children: React.ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
}

/** Quieter underlined text CTA. */
export function TextLink({ to, children, tone = 'dark', className = '' }: TextLinkProps) {
  const color = tone === 'light' ? 'text-ivory' : 'text-ink';
  const rule = tone === 'light' ? 'bg-ivory/40' : 'bg-ink/30';
  return (
    <Link to={to} className={`group inline-flex flex-col gap-2 ${color} ${className}`}>
      <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide2">
        {children}
        <ArrowRightIcon
          className="h-3.5 w-3.5 transition-transform duration-300 ease-calm group-hover:translate-x-1"
          aria-hidden="true" />
        
      </span>
      <span className={`h-px w-full origin-left scale-x-100 ${rule} transition-transform duration-500 ease-calm group-hover:scale-x-[1.08]`} />
    </Link>);

}