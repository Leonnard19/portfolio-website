import React from 'react';
import { NavLink } from './NavLink';

interface Props {
  links: { title: string; path: string }[];
}

export const MenuOverlay = ({ links }: Props) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} key={index} />
        </li>
      ))}
    </ul>
  );
};
