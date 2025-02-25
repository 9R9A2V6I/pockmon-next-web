
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PokemonCardProps {
  pokemon: { name: string; url: string };
  index: number;
}
export const PokemonCard = ({ pokemon, index }: PokemonCardProps) => (
  <Link href={`/pockman/${pokemon.name}`} key={pokemon.name}>
    <motion.div
      className={`p-4 bg-white rounded-lg shadow-lg cursor-pointer ${
        index % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'
      }`}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        y: 100,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
    >
      <h2 className="text-gray-700 font-semibold  uppercase">{pokemon.name}</h2>
    </motion.div>
  </Link>
);
