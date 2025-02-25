import { PokemonDetails } from '../../../component/PokemonDetails';
import LoadingSpinner from '../../../component/LoadingSpinner';

interface PokemonProps {
  params: { id: string };
}

export default async function PokemonDetailPage({ params }: PokemonProps) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const pokemon = await res.json();

  if (!pokemon) return <LoadingSpinner />;

  return (
    <div className="p-6 text-black">
      <div className="Card p-2">
        <h1 className="text-2xl font-semibold text-center uppercase rounded-lg">
          {pokemon.name}
        </h1>
        <div className="mt-4 flex justify-center items-center flex-col">
          <div className='bg-white shadow-md p-1 rounded-lg w-[200px]'>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="object-fill w-[200px]"
            />
          </div>
          <div className="w-full grid lg:grid-cols-2">
            <PokemonDetails
              title="Abilities"
              items={pokemon.abilities.map((a: any) => ({ name: a.ability.name }))}
            />
            <PokemonDetails
              title="Types"
              items={pokemon.types.map((t: any) => ({ name: t.type.name }))}
            />
            <PokemonDetails
              title="Moves"
              items={pokemon.moves.slice(0, 10).map((m: any) => ({ name: m.move.name }))}
            />
            <PokemonDetails
              title="Stats"
              items={pokemon.stats.map((s: any) => ({
                name: s.stat.name,
                value: s.base_stat,
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
