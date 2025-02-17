'use client';
import { useOnClickOutside } from '@/app/useOnClickOutside';
import { LanguageType } from '@/types';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import { ChangeEvent, useMemo, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations('Language');

  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const languageOptions: LanguageType[] = useMemo(() => {
    return [
      { name: t('portuguese'), value: 'pt-BR', icon_path: '/icons/brazil_icon.svg' },
      { name: t('english'), value: 'en', icon_path: '/icons/us_icon.svg' },
    ];
  }, [t]);

  const selectedLanguage = languageOptions.find(option => option.value === locale);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div ref={ref} className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center items-center w-full py-2 px-3 border text-sm border-[#ADB7DE] rounded bg-transparent hover:text-white hover:border-white text-[#ADB7DE] focus:outline-none"
        >
          {selectedLanguage?.icon_path && (
            <Image
              src={selectedLanguage.icon_path}
              alt="icon"
              width={0}
              height={0}
              className="w-4 h-auto mr-2"
            />
          )}
          {selectedLanguage?.name}
          <ChevronDownIcon
            className={`h-5 w-5 transform duration-300 ${
              isOpen ? '-rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-1 w-full min-w-28 rounded-md shadow-lg bg-[#121212] ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
        >
          {languageOptions?.map((option, index) => (
            <div
              className="flex hover:bg-gray-800 rounded-md cursor-pointer px-2"
              key={index}
            >
              {option.icon_path && (
                <Image
                  src={option.icon_path}
                  alt="icon"
                  width={0}
                  height={0}
                  className="w-4 h-auto"
                />
              )}
              <div
                className="block p-2 text-sm text-[#ADB7DE] "
                role="menuitem"
                onClick={() => {
                  // update language and close dropdown
                  handleLanguageChange({
                    target: { value: option.value },
                  } as ChangeEvent<HTMLSelectElement>);
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
