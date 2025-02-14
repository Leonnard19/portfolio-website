'use client';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { NavLink } from '../../Components/NavLink/NavLink';
import { Bars3Icon, XMarkIcon, LanguageIcon } from '@heroicons/react/24/solid';
import { MenuOverlay } from '../../Components/MenuOverlay/MenuOverlay';
import { LanguageSelect } from '@/app/Components';
import Image from 'next/image';
import { useLanguage } from '@/app/context/useLanguage';
import { i18n } from '@/app/i18n/i18n';
import { getCurrentLanguage } from '@/app/i18n/actions';
import { LanguageHook } from '@/app/Components/LanguageSelect/LanguageHook';

const NavLinks = [
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
  { title: 'Contact', path: '#contact' },
];

// const currentLanguage = await getCurrentLanguage() || 'en';

export const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const { language } = LanguageHook();

  // const currentLanguage = getCurrentLanguage() || 'en';

  const translations = i18n[language];

  return (
    <nav className="fixed mx-auto border border-x-transparent border-t-transparent border-b-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          <Image src={'/images/logo.PNG'} alt="logo" width={50} height={50} />
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:flex md:w-auto" id="navbar">
          <span className="text-white mr-4">{translations.TITLE}</span>
          <LanguageSelect />

          {/* <LanguageIcon  className="h-5 w-5"/> */}
          {/*BUTTON -> inline-flex items-center gap-2 rounded-md bg-zinc-900 py-1.5 px-3 text-sm/6
          font-semibold text-[#ADB7DE] hover:text-white border border-slate-700
          focus:outline-none data-[hover]:bg-zinc-700 data-[open]:bg-zinc-700
          data-[focus]:outline-1 data-[focus]:outline-white */}

          {/* ITEMS -> z-50 w-40 mt-1 origin-top-right rounded-xl border border-white/5 bg-zinc-800 p-1
          text-sm/6 text-white transition duration-100 ease-out
          [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95
          data-[closed]:opacity-0 */}

          {/*ITEM -> group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 */}
          {/* <Select
            onChange={() => {}}
            className="w-full bg-[#121212] text-[#ADB7DE]"
            disabled={false}
          >
          </Select> */}
          <ul className="flex p-4 mx-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen && <MenuOverlay links={NavLinks} />}
    </nav>
  );
};
