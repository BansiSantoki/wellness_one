import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './translations/en';
import { hi } from './translations/hi';
import { mr } from './translations/mr';

export type LanguageCode = 'en' | 'hi' | 'mr';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिंदी', flag: '🇮🇳' },
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी', flag: '🇮🇳' }
];

const STORAGE_KEY = 'onewellness_language';

const getInitialLanguage = (): LanguageCode => {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (saved && (saved === 'en' || saved === 'hi' || saved === 'mr')) {
      return saved;
    }
  } catch (e) {
    console.warn('Could not read saved language from localStorage', e);
  }
  return 'en';
};

const initialLang = getInitialLanguage();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    mr: { translation: mr }
  },
  lng: initialLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  }
});

// Update <html lang="..."> attribute and persist on change
const applyLanguageToHtml = (lng: string) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng;
    document.documentElement.setAttribute('data-lang', lng);
  }
};

applyLanguageToHtml(initialLang);

i18n.on('languageChanged', (lng: string) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch (e) {
    console.warn('Could not write language to localStorage', e);
  }
  applyLanguageToHtml(lng);
});

export default i18n;
