'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { NavLink } from '../../Components/NavLink/NavLink';
import { Bars3Icon, XMarkIcon, LanguageIcon } from '@heroicons/react/24/solid';
import { MenuOverlay } from '../../Components/MenuOverlay/MenuOverlay';
import { LanguageSelect } from '@/app/Components';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const t = useTranslations('Navbar');

  const NavLinks = [
    { title: t('about'), path: '#about' },
    { title: t('projects'), path: '#projects' },
    { title: t('contact'), path: '#contact' },
  ];

  const NavBarButton = () => {
    return (
      <button
        onClick={() => setNavBarOpen(!navBarOpen)}
        className="flex items-center px-3 py-2 mx-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
      >
        {/* TODO: Add animation to mobile menu */}
        {navBarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
      </button>
    );
  };

  return (
    <nav className="fixed mx-auto border border-x-transparent border-t-transparent border-b-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          <Image src={'/images/logo.PNG'} alt="logo" width={50} height={50} />
        </Link>
        <div className="mobile-menu block md:hidden">
          <NavBarButton />
        </div>
        <div className="menu items-center hidden md:flex md:w-auto" id="navbar">
          <LanguageSelect />
          <ul className="flex p-4 mx-8 md:p-0 md:flex-row md:space-x-8 mt-0">
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
