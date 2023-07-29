"use client";
import { useQuery } from "@tanstack/react-query";
import { getPokemonById } from "../store";
import PokemonCard from "./PokemonCard";
import PokemonCardInfo from "./PokemonCardInfo";

type Props = {
  id: number;
};

const PokemonDetails = ({ id }: Props) => {
  const { data } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemonById(id),
  });
  return (
    <div className="mx-auto mt-24 mb-24">
      {/* <PokemonCard
        name={data?.name}
        id={data?.id}
        pokemonImage={data?.pokemonImage}
      /> */}

      <PokemonCardInfo
        name={data?.name}
        pokemonImage={data?.pokemonImage}
        id={id}
      />
      <ul>
        {/* {data?.types.map((typed: any) => (
          <li key={typed.type}>{typed.type.name}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default PokemonDetails;
