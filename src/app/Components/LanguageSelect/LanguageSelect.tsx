'use client';
import { useOnClickOutside } from '@/app/useOnClickOutside';
import { LanguageType } from '@/types';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

import {
  updateLanguage,
  useLanguage,
  // useLanguageCookies,
} from '@/app/context/useLanguage';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { setLanguage } from '@/app/i18n/actions';
import { LanguageHook } from './LanguageHook';

export const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const selectedLanguage = useLanguage(state => state.lang);
  // const { lang, updateLanguage } = useLanguageCookies();
  const { language, changeLanguage } = LanguageHook();
  
  const selectedLanguage = useLanguage(state => state.lang);
  const ref = useRef<HTMLDivElement>(null);

  // const router = useRouter();

  // console.log('locale:', router);


   console.log('Language:', language);

  const languageOptions: LanguageType[] = useMemo(() => {
    return [
      { name: 'Portuguese', value: 'pt', icon_path: '/icons/brazil_icon.svg' },
      { name: 'English', value: 'en', icon_path: '/icons/us_icon.svg' },
    ];
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  // const selectedLanguage = useMemo(() => {
  //   const stateFromCookies = getStateFromCookies();

  //   return stateFromCookies
  // }, [lang]);

  // const selectedLanguage = getStateFromCookies();

  // console.log('TEST:', selectedLanguage);

  // if (!selectedLanguage) return null;

  return (
    <div ref={ref} className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          {selectedLanguage?.icon_path && (
            <Image
              src={selectedLanguage.icon_path}
              alt="icon"
              width={15}
              height={15}
              className="mr-2"
            />
          )}
          {selectedLanguage?.name}
          {isOpen ? (
            <ChevronUpIcon className="w-5 h-5" />
          ) : (
            <ChevronDownIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-1 w-full min-w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
        >
          {languageOptions?.map((option, index) => (
            <div
              className="flex hover:bg-gray-100 rounded-md cursor-pointer px-2"
              key={index}
            >
              {option.icon_path && (
                <Image src={option.icon_path} alt="icon" width={15} height={15} />
              )}
              <div
                className="block p-2 text-sm text-gray-700"
                role="menuitem"
                onClick={() => {
                  // update language
                  updateLanguage(option);
                  // using cookies
                  // saveStateToCookies()
                  changeLanguage(option.value);
                  toggleDropdown();
                }}
              >
                {option.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
