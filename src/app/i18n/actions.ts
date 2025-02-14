'use server';
import { cookies } from 'next/headers';

// const languages = ['pt-BR', 'en'] as const;

export type Language = 'pt-BR' | 'en';

export const getCurrentLanguage = async (): Promise<Language> => {
  const cookieStore = await cookies();

  const langCookie = cookieStore.get('lang')?.value;

  return langCookie as Language;
};

export const toggleLanguage = async () => {
  const cookieStore = await cookies();

  const currentLanguage = cookieStore.get('lang')?.value;
  const nextLanguage = currentLanguage === 'pt-BR' ? 'en' : 'pt-BR';

  cookieStore.set('lang', nextLanguage);
};

export const setLanguage = async (language: 'pt' | 'en') => {
  const cookieStore = await cookies();
  cookieStore.set('lang', language);
};
