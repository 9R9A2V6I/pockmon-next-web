
import React from 'react';

interface DetailSectionProps {
  title: string;
  items: Array<{ name: string; value?: string | number }>;
}

export const PokemonDetails = ({ title, items }: DetailSectionProps) => (
  <div className="lg:ml-6 mb-4">
    <h2 className="text-lg font-semibold mt-2">{title}</h2>
    <ul>
      {items.map((item) => (
        <li
          key={item.name}
          className="text-gray-700 list-none lg:p-2 p-4 mt-2 bg-white rounded-lg shadow-lg"
        >
          {item.value ? `${item.name}: ${item.value}` : item.name}
        </li>
      ))}
    </ul>
  </div>
);
