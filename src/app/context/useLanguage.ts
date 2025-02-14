import { LanguageType } from '@/types';
import { createStore } from '../state';
import Cookies from 'js-cookie';
import { persist, subscribeWithSelector } from 'zustand/middleware';
import { create } from 'zustand';

export interface LanguageState {
  lang?: LanguageType;
  // updateLanguage: (language: LanguageType) => void; // Inclua o método no estado tipado
}

const default_language: LanguageType = {
  name: 'English',
  value: 'en',
  icon_path: '/icons/us_icon.svg',
};

const initialState: LanguageState = {
  lang: undefined
};

export const useLanguage = createStore<Omit<LanguageState, 'updateLanguage'>>(
  initialState,
  'language',
  {
    version: 1,
  }
);

// Store Zustand with logic to persist in cookies
export const useLanguageCookies = create<LanguageState>()(
  subscribeWithSelector(
    persist(
      set => ({
        lang: default_language,
        updateLanguage: (language: LanguageType) => {
          set({ lang: language });
          Cookies.set('languageState', JSON.stringify({ lang: language }), {
            expires: 7,
            path: '/',
          });
          useLanguage.setState({ lang: language }); // test
        },
      }),
      {
        name: 'languageState', // Nome para persistência no localStorage
        onRehydrateStorage: () => state => {
          if (state) {
            Cookies.set('languageState', JSON.stringify(state), { expires: 7, path: '/' });
          }
        },
      }
    )
  )
);

// Save the state to cookies
function saveStateToCookies(state: LanguageState) {
  Cookies.set('languageState', JSON.stringify(state), { expires: 7, path: '/' });
}

// Read the state from cookies
export function getStateFromCookies(): LanguageType | undefined {
  const cookie = Cookies.get('languageState');

  if (cookie) {
    const parsedCookie = JSON.parse(cookie);
    console.log('getting cookie:', parsedCookie.lang);
    return parsedCookie.lang;
  }
  return undefined;
}

export function updateLanguage(language: LanguageType) {
  useLanguage.setState({ lang: language });
}
