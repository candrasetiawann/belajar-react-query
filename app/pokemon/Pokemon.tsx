import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../store";
import Link from "next/link";
import PokemonCard from "../components/PokemonCard";

type Pokemon = {
  url: string;
  name: string;
  id: number;
  pokemonImage: string;
};

const PokemonComponent = () => {
  const { data } = useQuery<Pokemon[]>(["pokemon"], getPokemon);

  return (
    <div className="mx-auto px-10 md:px-20">
      <h1 className="text-white text-3xl font-bold mb-5 mt-5">Pokemon</h1>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-10 ">
        {data?.map(({ name, id, pokemonImage }) => (
          <ul key={id} className="bg-white rounded-sm">
            <Link href={`/pokemon/${id}`}>
              <PokemonCard name={name} id={id} pokemonImage={pokemonImage} />
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default PokemonComponent;
