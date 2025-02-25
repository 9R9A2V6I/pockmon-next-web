
import React, { Suspense } from 'react';
import ClientWrapper from './ClientWrapper';
import LoadingSpinner from '@/component/LoadingSpinner';

async function getPokemonData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
  const data = await res.json();
  return data.results;
}

async function PokemonList() {
  const pokedata = await getPokemonData();
  return <ClientWrapper initialData={pokedata} />;
}

export default function Home() {
  return (

    <>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="flex justify-center items-center bg-gray-100 p-4">
          <div className="Card p-6">
            <div className="CardInner">
              <h1 className="text-gray-800 font-semibold mb-4 text-xl">Pokémon</h1>
              <PokemonList />
            </div>
          </div>
        </div>
      </Suspense>
    </>

  );
}
