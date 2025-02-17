import { LanguageType } from '@/types';
import { createStore } from '../state';

export interface LanguageState {
  lang?: LanguageType;
}

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

export function updateLanguage(language: LanguageType) {
  useLanguage.setState({ lang: language });
}
