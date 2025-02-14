'use client';

import { setLanguage } from '@/app/i18n/actions';
import { useState, useEffect } from 'react';

export type Language = 'pt' | 'en';

// Função auxiliar para ler o cookie no cliente
const getLanguageFromCookie = (): Language => {
  if (typeof document === 'undefined') return 'pt'; // Evita erro no SSR
  const match = document.cookie.match(/lang=(pt|en)/);
  return match ? (match[1] as Language) : 'pt';
};

export function LanguageHook() {
  const [language, setLang] = useState<Language>(getLanguageFromCookie);

  useEffect(() => {
    const lang = getLanguageFromCookie();
    setLang(lang);
  }, []);

  const changeLanguage = async (lang: Language) => {
    await setLanguage(lang); // Atualiza no servidor
    document.cookie = `lang=${lang}; path=/`; // Atualiza no cliente
    setLang(lang);
  };

  return { language, changeLanguage };
}
