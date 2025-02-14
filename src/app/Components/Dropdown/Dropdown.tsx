'use client';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import { useState } from 'react';

interface DropdownProps {
  value?: string;
  onChange: (event: any) => void;
  options?: { value: string; icon?: string; testid: string }[];
}

export const Dropdown = ({ value, onChange, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left ">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          {selectedValue}
          {isOpen ? (
            <ChevronUpIcon className="w-5 h-5" />
          ) : (
            <ChevronDownIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-full min-w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
        >
          {options?.map((option, index) => (
            <div
              className="flex hover:bg-gray-100 rounded-md cursor-pointer px-2"
              key={index}
            >
              {option.icon && <Image src={option.icon} alt="icon" width={15} height={15} />}
              <div
                className="block p-2 text-sm text-gray-700 mx-1"
                role="menuitem"
                onClick={() => {
                  setSelectedValue(option.value);
                  onChange(option.value);
                  toggleDropdown();
                }}
              >
                {option.value}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
