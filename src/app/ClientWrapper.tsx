'use client';
import { useState } from 'react';
import { PokemonCard } from '../component/PokemonCard';
import { InputSearch } from '../component/InputSearch';

export default function ClientWrapper({ initialData }: { initialData: any[] }) {
  const [searchPockmon, setSearchPockmon] = useState('');
  const [filteredPockmon, setFilteredPockmon] = useState(initialData);


  // Search and Filter Pockmon Hnadler✔️✔️

  const handleSearchPockman = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchPockmon(value);
    setFilteredPockmon(
      initialData.filter(pokemon =>
        pokemon.name.toLowerCase().includes(value)
      )
    );
  };

  return (
    <>
      <InputSearch value={searchPockmon} onChange={handleSearchPockman} />
      <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {filteredPockmon.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} index={index} />
        ))}
      </div>
      {filteredPockmon.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No Pokémon found</p>
      )}
    </>
  );
}
