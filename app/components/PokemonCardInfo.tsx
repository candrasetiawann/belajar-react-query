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
  return (
    <div className="">
      {pokemonImage && (
        <Image
          src={pokemonImage}
          alt="pokemon-image"
          width={200}
          height={200}
        />
      )}
      <p>Name : {name}</p>
      <p>Type : </p>
      {data?.types?.map((type: any) => (
        <li key={type.type.name}> Type : {type.type.name}</li>
      ))}
    </div>
  );
};

export default PokemonCardInfo;
