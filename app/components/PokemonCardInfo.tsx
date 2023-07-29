import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemonById } from "../store";
import Image from "next/image";

type Props = {
  id: number;
  name: string;
  pokemonImage: string;
};

const PokemonCardInfo = ({ id, name, pokemonImage }: Props) => {
  const { data } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => getPokemonById(id),
  });

  const types = data?.types?.map((type: any) => type.type.name).join(", ");
  const abilities = data?.abilities
    ?.map((ability: any) => ability.ability.name)
    .join(", ");
  const availableMoves = data?.moves
    ?.map((move: any) => move.move.name)
    .join(", ");

  return (
    <div className="bg-blue-900 rounded-sm py-5 px-5 box-shadow-offset-black">
      <h1 className="font-bold text-white">Information</h1>
      {pokemonImage && (
        <Image
          src={pokemonImage}
          alt="pokemon-image"
          width={200}
          height={200}
        />
      )}
      <p className="text-white">
        <span className="font-bold text-white">Name : </span>
        {name}
      </p>
      {types && (
        <p className="text-white">
          <span className="font-bold text-white">Types :</span> {types}
        </p>
      )}
      {abilities && (
        <p className="text-white">
          <span className="font-bold text-white">Abilities :</span> {abilities}
        </p>
      )}
      <p className="font-bold text-white">Available Moves </p>
      <p className="text-white">
        {availableMoves && <span className="text-white">{availableMoves}</span>}
      </p>
    </div>
  );
};

export default PokemonCardInfo;
