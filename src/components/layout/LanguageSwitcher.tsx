import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobeIcon, ChevronDownIcon, CheckIcon } from 'lucide-react';
import { LANGUAGES, LanguageCode } from '../../i18n';

interface LanguageSwitcherProps {
  /** Page header is over a dark hero when at scroll top */
  overDark?: boolean;
  /** Header compact dropdown vs inside mobile drawer variant */
  variant?: 'header' | 'drawer';
}

export function LanguageSwitcher({ overDark = false, variant = 'header' }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLangCode = (i18n.language?.slice(0, 2) || 'en') as LanguageCode;
  const currentLang = LANGUAGES.find((l) => l.code === currentLangCode) || LANGUAGES[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKey);
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  const changeLanguage = (code: LanguageCode) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  // Drawer variant (pill buttons row inside mobile drawer)
  if (variant === 'drawer') {
    return (
      <div className="w-full">
        <label className="block text-[10px] font-sans font-medium uppercase tracking-[0.14em] text-[#173D30]/60 mb-2">
          {t('nav.selectLanguage', 'Select Language')}
        </label>
        <div className="grid grid-cols-3 gap-2 bg-[#F6F1E6] p-1.5 border border-[#173D30]/15">
          {LANGUAGES.map((lang) => {
            const isSelected = currentLangCode === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-sans font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#102A20] text-white shadow-xs font-semibold'
                    : 'text-[#173D30] hover:bg-white/60'
                }`}
                aria-pressed={isSelected}
              >
                <span className="text-sm" aria-hidden="true">
                  {lang.flag}
                </span>
                <span>{lang.nativeLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Header dropdown variant
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`${t('nav.selectLanguage', 'Select Language')}: ${currentLang.nativeLabel}`}
        className={`group flex h-[38px] sm:h-[42px] items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 text-xs font-sans font-medium transition-all duration-300 ease-calm ${
          overDark
            ? 'border border-[#D3B67C]/50 bg-[#173D30]/40 backdrop-blur-md text-white hover:border-[#D3B67C] hover:bg-[#173D30]/70'
            : 'border border-[#173D30]/15 bg-[#FCFAF4] text-[#173D30] hover:border-[#B08D4F] hover:bg-[#F6F1E6] shadow-xs'
        }`}
      >
        <GlobeIcon
          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-colors ${
            overDark ? 'text-[#D3B67C]' : 'text-[#B08D4F]'
          }`}
          aria-hidden="true"
        />
        <span className="text-sm" aria-hidden="true">
          {currentLang.flag}
        </span>
        <span className="hidden sm:inline font-sans text-[11.5px] font-medium tracking-normal">
          {currentLang.nativeLabel}
        </span>
        <span className="sm:hidden font-sans text-[11px] font-semibold uppercase">
          {currentLang.code}
        </span>
        <ChevronDownIcon
          className={`h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          } ${overDark ? 'text-white/70' : 'text-[#173D30]/60'}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            role="listbox"
            aria-label="Languages"
            className="absolute right-0 top-full mt-2 w-48 sm:w-52 origin-top-right overflow-hidden rounded-none border border-[#B08D4F]/35 bg-[#FCFAF4] shadow-2xl z-50 py-1.5"
          >
            <div className="px-3 py-1.5 border-b border-[#173D30]/10 text-[10px] font-sans font-medium uppercase tracking-[0.14em] text-[#173D30]/50">
              {t('nav.selectLanguage', 'Select Language')}
            </div>

            {LANGUAGES.map((lang) => {
              const isSelected = currentLangCode === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-sans text-left transition-colors duration-150 ${
                    isSelected
                      ? 'bg-[#F6F1E6] text-[#102A20] font-semibold'
                      : 'text-[#25231F] hover:bg-[#F6F1E6]/70 hover:text-[#102A20]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base" aria-hidden="true">
                      {lang.flag}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[12.5px] leading-snug">{lang.nativeLabel}</span>
                      <span className="text-[10px] text-[#25231F]/50 font-sans">{lang.label}</span>
                    </div>
                  </div>
                  {isSelected && (
                    <CheckIcon className="h-4 w-4 text-[#B08D4F]" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
