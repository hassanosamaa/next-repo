import { useLocale as useNextIntlLocale } from 'next-intl';
import type { Locale } from '@/i18n';

export function useAppLocale(): Locale {
  return useNextIntlLocale() as Locale;
}

