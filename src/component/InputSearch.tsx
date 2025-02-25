
'use client';
import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch = ({ value, onChange }: SearchInputProps) => (
  <div className="container flex items-center mb-4">

    <div className='InputContainer flex justify-center items-center bg-blue-50'>
      <div className="Icon mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          className="">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      <input
        className="w-full p-4 bg-blue-50 border-none focus:outline-none  focus:border-none text-gray-700 rounded-lg  "
        placeholder="Search Your Favorite Po..."
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);
