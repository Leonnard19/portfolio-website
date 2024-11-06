import React from 'react';

interface Props {
  active: boolean;
  selectTab: () => void;
  children: string;
}

export const TabButton = ({ active, selectTab, children }: Props) => {
  const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]';

  return (
    <button onClick={selectTab}>
      <p className={`font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
    </button>
  );
};
