import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="footer z-10 border border-t-[#33353F] border-x-transparent border-b-transparent text-white">
      <div className="container p-8 flex justify-between">
        <Image src={'/images/L_logo.PNG'} alt="logo" width={50} height={50} />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};
