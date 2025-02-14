import React from 'react';
import { NavLink } from '../NavLink/NavLink';
import { LanguageSelect } from '../LanguageSelect';
import { getCurrentLanguage } from '@/app/i18n/actions';

export async function LanguageSection() {
  const currentLanguage = (await getCurrentLanguage()) || 'en';

  return <LanguageSelect />;
}
