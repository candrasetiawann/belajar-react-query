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
      {types && <p>Types : {types}</p>}
    </div>
  );
};

export default PokemonCardInfo;
