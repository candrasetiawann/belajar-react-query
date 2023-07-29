import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../store";
import Link from "next/link";
import PokemonCard from "../components/PokemonCard";
import Image from "next/image";

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
      <div className="flex justify-center">
        <Image
          className="pt-5 pb-5 "
          src="/img/pokemon-logo.svg"
          alt="pokemon"
          width={300}
          height={300}
        />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10 md:px-48">
        {data &&
          Array.isArray(data) &&
          data.map(({ name, id, pokemonImage }) => (
            <ul key={id} className="bg-black rounded-sm ">
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
