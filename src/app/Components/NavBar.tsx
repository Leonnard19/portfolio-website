'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { NavLink } from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { MenuOverlay } from './MenuOverlay';
import Image from 'next/image';

const NavLinks = [
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
  { title: 'Contact', path: '#contact' },
];

export const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

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
        <div className="menu hidden md:block md:w-auto" id="navbar">
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
